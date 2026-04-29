package com.example.lernzettelapp.utils

import android.content.Context
import android.graphics.Canvas
import android.graphics.Paint
import android.graphics.pdf.PdfDocument
import android.os.Bundle
import android.os.CancellationSignal
import android.os.ParcelFileDescriptor
import android.print.PageRange
import android.print.PrintAttributes
import android.print.PrintDocumentAdapter
import android.print.PrintDocumentInfo
import android.print.PrintManager
import com.example.lernzettelapp.model.StudyNote
import java.io.FileOutputStream

class PdfGenerator(private val context: Context, private val note: StudyNote) {

    fun print() {
        val printManager = context.getSystemService(Context.PRINT_SERVICE) as PrintManager
        val jobName = "Lernzettel_${note.title}"
        printManager.print(jobName, object : PrintDocumentAdapter() {
            override fun onLayout(
                oldAttributes: PrintAttributes?,
                newAttributes: PrintAttributes,
                cancellationSignal: CancellationSignal?,
                callback: LayoutResultCallback,
                extras: Bundle?
            ) {
                if (cancellationSignal?.isCanceled == true) {
                    callback.onLayoutCancelled()
                    return
                }

                val pdi = PrintDocumentInfo.Builder(jobName)
                    .setContentType(PrintDocumentInfo.CONTENT_TYPE_DOCUMENT)
                    .setPageCount(1)
                    .build()
                callback.onLayoutFinished(pdi, true)
            }

            override fun onWrite(
                pages: Array<out PageRange>?,
                destination: ParcelFileDescriptor,
                cancellationSignal: CancellationSignal?,
                callback: WriteResultCallback
            ) {
                val pdfDocument = PdfDocument()
                val pageInfo = PdfDocument.PageInfo.Builder(595, 842, 1).create() // A4 size
                val page = pdfDocument.startPage(pageInfo)
                val canvas: Canvas = page.canvas
                val paint = Paint()

                // Header
                paint.textSize = 24f
                paint.isFakeBoldText = true
                canvas.drawText(note.title, 50f, 50f, paint)

                // Subject Tag
                paint.textSize = 14f
                paint.isFakeBoldText = false
                paint.color = android.graphics.Color.GRAY
                canvas.drawText("Fach: ${note.tag.label}", 50f, 80f, paint)

                // Separator
                paint.color = android.graphics.Color.BLACK
                canvas.drawLine(50f, 95f, 545f, 95f, paint)

                // Content
                paint.textSize = 12f
                val margin = 50f
                var y = 130f
                val maxWidth = 495f
                
                // Simple line wrapping
                val words = note.content.split(" ")
                var line = StringBuilder()
                for (word in words) {
                    val testLine = if (line.isEmpty()) word else line.toString() + " " + word
                    if (paint.measureText(testLine) < maxWidth) {
                        line.append(if (line.isEmpty()) word else " $word")
                    } else {
                        canvas.drawText(line.toString(), margin, y, paint)
                        y += 20f
                        line = StringBuilder(word)
                    }
                }
                canvas.drawText(line.toString(), margin, y, paint)

                pdfDocument.finishPage(page)

                try {
                    pdfDocument.writeTo(FileOutputStream(destination.fileDescriptor))
                } catch (e: Exception) {
                    callback.onWriteFailed(e.toString())
                    return
                } finally {
                    pdfDocument.close()
                }
                callback.onWriteFinished(arrayOf(PageRange.ALL_PAGES))
            }
        }, null)
    }
}
