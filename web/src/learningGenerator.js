const STOP_WORDS = new Set([
  'der', 'die', 'das', 'und', 'oder', 'von', 'mit', 'auf', 'ist', 'im', 'in', 'zu',
  'ein', 'eine', 'als', 'für', 'dem', 'den', 'bei', 'auch', 'sich', 'werden',
  'sind', 'nicht', 'das', 'es', 'ich', 'du', 'er', 'sie', 'wir', 'ihr', 'was',
  'wenn', 'dass', 'an', 'aus', 'wie', 'hat', 'haben', 'nur', 'noch', 'mehr',
  'kein', 'keine', 'man', 'sein', 'seine', 'seiner', 'uns', 'vom', 'zum', 'zur',
])

export function generateLearningSystem(post) {
  const content = post.content || ''
  const title = post.title || 'Lernzettel'

  const clean = cleanText(content)
  const stats = analyzeText(clean)
  const keyPhrases = extractKeyPhrases(clean)
  const sentences = extractImportantSentences(clean, keyPhrases)
  const summary = buildSummary(title, keyPhrases, sentences, stats)
  const test = buildTest(title, keyPhrases, sentences)
  const solutions = buildSolutions(title, summary, keyPhrases, sentences)
  const printLayout = generatePrintLayout(title, summary, test, solutions)

  return {
    summary,
    test,
    solutions,
    printLayout,
  }
}

function cleanText(content) {
  return content
    .replace(/```[\s\S]*?```/g, '')
    .replace(/#{1,6}\s?/g, '')
    .replace(/\*\*(.*?)\*\*/g, '$1')
    .replace(/\*(.*?)\*/g, '$1')
    .replace(/\[(.*?)\]\(.*?\)/g, '$1')
    .replace(/`(.*?)`/g, '$1')
    .replace(/[-*•>]+\s?/g, '')
    .replace(/\s+/g, ' ')
    .trim()
}

function analyzeText(text) {
  const words = text
    .toLowerCase()
    .replace(/[^a-zäöüß\s]/gi, ' ')
    .split(/\s+/)
    .filter((w) => w.length > 0)

  const sentences = text
    .split(/(?<=[.!?])\s+/)
    .map((s) => s.trim())
    .filter((s) => s.length > 0)

  return {
    wordCount: words.length,
    sentenceCount: sentences.length,
    averageSentenceLength: sentences.length ? Math.round(words.length / sentences.length) : 0,
  }
}

function extractKeyPhrases(text) {
  const words = text
    .toLowerCase()
    .replace(/[^a-zäöüß\s]/gi, ' ')
    .split(/\s+/)
    .filter((w) => w.length > 2 && !STOP_WORDS.has(w))

  const frequency = {}
  words.forEach((word) => {
    frequency[word] = (frequency[word] || 0) + 1
  })

  return Object.entries(frequency)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .map(([word]) => word)
}

function extractImportantSentences(text, keyPhrases) {
  const sentences = text
    .split(/(?<=[.!?])\s+/)
    .map((s) => s.trim())
    .filter((s) => s.length > 10)

  return sentences
    .map((sentence) => ({
      sentence,
      score: keyPhrases.reduce(
        (sum, phrase) => sum + (sentence.toLowerCase().includes(phrase.toLowerCase()) ? 5 : 0),
        sentence.length / 50
      ),
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 5)
    .map((item) => item.sentence)
}

function buildSummary(title, keyPhrases, sentences, stats) {
  const summary = []
  if (sentences.length > 0) {
    summary.push(sentences[0])
  }
  if (keyPhrases.length > 0) {
    summary.push(`Kernelemente: ${keyPhrases.slice(0, 3).join(', ')}`)
  }
  if (sentences.length > 1) {
    summary.push(sentences[1])
  }
  if (stats.wordCount > 0) {
    summary.push(`Der Text hat ${stats.wordCount} Wörter in ${stats.sentenceCount} Sätzen.`)
  }
  if (sentences.length > 2) {
    summary.push(sentences[2])
  }
  return summary.slice(0, 5)
}

function buildTest(title, keyPhrases, sentences) {
  const questions = []
  const mainTopic = title || 'der Lernzettel'
  const topPhrase = keyPhrases[0] || 'einen wichtigen Punkt'
  const secondPhrase = keyPhrases[1] || 'ein weiteres Thema'

  questions.push({
    type: 'open',
    number: 1,
    question: `Worum geht es in "${mainTopic}"?`,
  })

  questions.push({
    type: 'short',
    number: 2,
    question: `Nenne zwei zentrale Begriffe oder Konzepte aus dem Text.`,
  })

  questions.push({
    type: 'multiple',
    number: 3,
    question: `Welcher Begriff ist im Text am wichtigsten?`,
    options: createOptions(topPhrase, keyPhrases),
    correctAnswer: 0,
  })

  questions.push({
    type: 'gap',
    number: 4,
    question: `Ergänze: "Der Text beschäftigt sich vor allem mit ____________."`,
  })

  questions.push({
    type: 'multiple',
    number: 5,
    question: `Welche Aussage beschreibt den Text am besten?`,
    options: [
      `Der Text erklärt ${topPhrase} und zeigt wichtige Zusammenhänge.`,
      `Der Text listet nur Fakten ohne Erklärung auf.`,
      `Der Text ist eine Sammlung von Fragen.`,
      `Der Text beschreibt nur allgemeine Wörter ohne Sinn.`,
    ],
    correctAnswer: 0,
  })

  return questions
}

function createOptions(correct, keyPhrases) {
  const choices = [correct]
  const distractors = keyPhrases.slice(1, 4)
    .map((phrase) => `Der Text behandelt ${phrase}.`)

  choices.push(...distractors)

  while (choices.length < 4) {
    choices.push('Der Text erklärt einen weiteren wichtigen Punkt.')
  }

  return choices.slice(0, 4)
}

function buildSolutions(title, summary, keyPhrases, sentences) {
  const solutions = []
  const mainPhrase = keyPhrases[0] || 'den wichtigsten Inhalt'

  solutions.push({
    number: 1,
    answer: `Das Hauptthema ist ${title} oder die zentrale Idee des Lernzettels.`,
  })

  solutions.push({
    number: 2,
    answer: `Wichtige Begriffe sind: ${keyPhrases.slice(0, 2).join(', ')}.`,
  })

  solutions.push({
    number: 3,
    answer: `A - ${mainPhrase} ist besonders wichtig.`,
  })

  solutions.push({
    number: 4,
    answer: `Der Text behandelt besonders ${mainPhrase}.`,
  })

  solutions.push({
    number: 5,
    answer: `A - Er erklärt ${mainPhrase} und wichtige Zusammenhänge.`,
  })

  return solutions
}

function generatePrintLayout(title, summary, test, solutions) {
  const htmlParts = []

  htmlParts.push(`
    <div class="print-container">
      <h1>${title}</h1>
      <p class="print-meta">Lernzettel & Testsystem</p>
    </div>
  `)

  htmlParts.push(`
    <div class="print-section">
      <h2>📚 ZUSAMMENFASSUNG</h2>
      <ul>
        ${summary.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}
      </ul>
    </div>
  `)

  htmlParts.push(`
    <div class="print-section">
      <h2>🧠 TEST</h2>
      ${test
        .map((q) => {
          let html = `<div class="question"><strong>Frage ${q.number}:</strong> ${escapeHtml(q.question)}`
          if (q.type === 'multiple') {
            html += `<ul>${q.options.map((opt) => `<li>☐ ${escapeHtml(opt)}</li>`).join('')}</ul>`
          } else if (q.type === 'gap') {
            html += `<p style="border-bottom: 1px solid #ccc; height: 40px;"></p>`
          } else {
            html += `<p style="border-bottom: 1px solid #ccc; height: 60px;"></p>`
          }
          html += `</div>`
          return html
        })
        .join('')}
    </div>
  `)

  htmlParts.push(`
    <div class="page-break"></div>
  `)

  htmlParts.push(`
    <div class="print-section">
      <h2>🧾 LÖSUNGEN</h2>
      ${solutions
        .map(
          (sol) =>
            `<div class="solution">
          <strong>Frage ${sol.number}:</strong>
          <p>${escapeHtml(sol.answer).replace(/\n/g, '<br>')}</p>
        </div>`
        )
        .join('')}
    </div>
  `)

  return htmlParts.join('')
}

function escapeHtml(text) {
  const div = document.createElement('div')
  div.textContent = text
  return div.innerHTML
}
