<template>
  <div :class="['learning-modal', { hidden: !isOpen }]">
    <div class="learning-content glass">
      <button class="close-btn" @click="close">✕</button>

      <h2>{{ post.title }}</h2>

      <!-- TABS -->
      <div class="tabs">
        <button
          v-for="tab in tabs"
          :key="tab"
          :class="['tab', { active: activeTab === tab }]"
          @click="activeTab = tab"
        >
          {{ tab }}
        </button>
      </div>

      <!-- CONTENT -->
      <div class="tab-content">
        <!-- ZUSAMMENFASSUNG -->
        <div v-show="activeTab === '📚 Zusammenfassung'" class="section">
          <h3>Wichtigste Punkte</h3>
          <ul>
            <li v-for="(item, idx) in system.summary" :key="idx">
              {{ item }}
            </li>
          </ul>
        </div>

        <!-- TEST -->
        <div v-show="activeTab === '🧠 Test'" class="section">
          <div v-for="q in system.test" :key="q.number" class="question-card">
            <strong>Frage {{ q.number }}:</strong> {{ q.question }}

            <!-- Multiple Choice -->
            <div v-if="q.type === 'multiple'" class="options">
              <label v-for="(opt, idx) in q.options" :key="idx">
                <input
                  type="radio"
                  :name="`q${q.number}`"
                  :value="idx"
                  v-model="userAnswers[q.number]"
                />
                {{ opt }}
              </label>
            </div>

            <!-- Kurze/Offene Frage -->
            <div v-else class="answer-space">
              <textarea
                v-model="userAnswers[q.number]"
                :placeholder="`Deine Antwort zu Frage ${q.number}...`"
              ></textarea>
            </div>
          </div>

          <button class="btn-submit" @click="showResults">Antworten überprüfen</button>
        </div>

        <!-- LÖSUNGEN -->
        <div v-show="activeTab === '🧾 Lösungen'" class="section">
          <div v-for="sol in system.solutions" :key="sol.number" class="solution-card">
            <strong>Frage {{ sol.number }}:</strong>
            <p v-html="formatAnswer(sol.answer)"></p>
          </div>
        </div>

        <!-- PRINT-VIEW -->
        <div
          v-show="activeTab === '🖨️ Druckansicht'"
          id="print-area"
          class="print-view"
          v-html="system.printLayout"
        ></div>
      </div>

      <!-- FOOTER -->
      <div class="learning-footer">
        <button @click="downloadPDF" class="btn-download">📥 Als PDF</button>
        <button @click="printWindow" class="btn-print">🖨️ Drucken</button>
        <button @click="close" class="btn-close">Schließen</button>
      </div>

      <!-- RESULTS MODAL -->
      <div v-if="showResultsModal" class="results-overlay">
        <div class="results-modal glass">
          <h3>Ergebnisse</h3>
          <p>{{ correctCount }}/{{ system.test.length }} Fragen richtig!</p>
          <button @click="showResultsModal = false">OK</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import { generateLearningSystem } from './learningGenerator'

export default {
  name: 'LearningSystem',
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  emits: ['close'],
  setup(props, { emit }) {
    const isOpen = ref(true)
    const activeTab = ref('📚 Zusammenfassung')
    const userAnswers = ref({})
    const showResultsModal = ref(false)

    const system = computed(() => generateLearningSystem(props.post))

    const tabs = [
      '📚 Zusammenfassung',
      '🧠 Test',
      '🧾 Lösungen',
      '🖨️ Druckansicht',
    ]

    const correctCount = computed(() => {
      let correct = 0
      system.value.test.forEach((q) => {
        if (q.type === 'multiple') {
          if (parseInt(userAnswers.value[q.number]) === q.correctAnswer) {
            correct++
          }
        }
      })
      return correct
    })

    function close() {
      isOpen.value = false
      emit('close')
    }

    function formatAnswer(answer) {
      return answer.replace(/\n/g, '<br>')
    }

    function showResults() {
      showResultsModal.value = true
    }

    function printWindow() {
      window.print()
    }

    function downloadPDF() {
      alert('PDF-Export wird demnächst hinzugefügt!')
    }

    return {
      isOpen,
      activeTab,
      tabs,
      system,
      userAnswers,
      correctCount,
      showResultsModal,
      close,
      formatAnswer,
      showResults,
      printWindow,
      downloadPDF,
    }
  },
}
</script>

<style scoped>
.learning-modal {
  position: fixed;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.8);
  z-index: 2000;
  overflow-y: auto;
}

.learning-modal.hidden {
  display: none;
}

.learning-content {
  width: 95%;
  max-width: 900px;
  max-height: 90vh;
  overflow-y: auto;
  padding: 30px;
  margin: 20px 0;
  position: relative;
}

.close-btn {
  position: absolute;
  top: 15px;
  right: 15px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: white;
}

.learning-content h2 {
  margin-top: 0;
  text-align: center;
}

.tabs {
  display: flex;
  gap: 10px;
  margin: 20px 0;
  flex-wrap: wrap;
}

.tab {
  padding: 10px 20px;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.05);
  color: white;
  cursor: pointer;
  transition: 0.2s;
}

.tab.active {
  background: #3b82f6;
  border-color: #3b82f6;
}

.tab-content {
  min-height: 300px;
  margin: 20px 0;
}

.section {
  animation: fadeIn 0.3s ease-in;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.section ul {
  list-style: none;
  padding: 0;
}

.section li {
  padding: 10px;
  margin: 8px 0;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  border-left: 3px solid #3b82f6;
}

.question-card {
  background: rgba(255, 255, 255, 0.05);
  padding: 15px;
  margin: 15px 0;
  border-radius: 8px;
  border-left: 3px solid #3b82f6;
}

.question-card strong {
  display: block;
  margin-bottom: 8px;
}

.options {
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.options label {
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
}

.options input {
  cursor: pointer;
}

.answer-space {
  margin-top: 10px;
}

.answer-space textarea {
  width: 100%;
  min-height: 80px;
  padding: 10px;
  border-radius: 6px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: rgba(255, 255, 255, 0.05);
  color: white;
  font-family: monospace;
  resize: vertical;
}

.answer-space textarea::placeholder {
  color: rgba(255, 255, 255, 0.3);
}

.solution-card {
  background: rgba(255, 255, 255, 0.05);
  padding: 15px;
  margin: 15px 0;
  border-radius: 8px;
  border-left: 3px solid #10b981;
}

.solution-card strong {
  display: block;
  margin-bottom: 8px;
}

.solution-card p {
  margin: 8px 0;
  line-height: 1.6;
}

.print-view {
  background: white;
  color: black;
  padding: 40px;
  border-radius: 8px;
  min-height: 600px;
}

.print-container {
  text-align: center;
  margin-bottom: 30px;
  border-bottom: 2px solid #000;
  padding-bottom: 20px;
}

.print-meta {
  color: #666;
  font-size: 14px;
}

.print-section {
  margin: 30px 0;
  page-break-inside: avoid;
}

.print-section h2 {
  border-bottom: 1px solid #000;
  padding-bottom: 10px;
}

.page-break {
  page-break-after: always;
  margin: 40px 0;
  border-top: 2px dashed #999;
}

.question {
  margin: 15px 0;
  page-break-inside: avoid;
}

.question ul {
  margin-left: 20px;
}

.learning-footer {
  display: flex;
  gap: 10px;
  margin-top: 20px;
  justify-content: center;
  flex-wrap: wrap;
}

.btn-submit,
.btn-download,
.btn-print,
.btn-close {
  padding: 10px 20px;
  border-radius: 8px;
  border: none;
  background: #3b82f6;
  color: white;
  cursor: pointer;
  transition: 0.2s;
}

.btn-submit:hover,
.btn-download:hover,
.btn-print:hover,
.btn-close:hover {
  transform: scale(1.05);
  background: #2563eb;
}

.results-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3000;
}

.results-modal {
  background: rgba(255, 255, 255, 0.95);
  color: #000;
  padding: 40px;
  border-radius: 12px;
  text-align: center;
  max-width: 400px;
}

.results-modal h3 {
  margin-top: 0;
  font-size: 24px;
  color: #3b82f6;
}

.results-modal p {
  font-size: 18px;
  margin: 20px 0;
}

.results-modal button {
  padding: 10px 30px;
  border: none;
  background: #3b82f6;
  color: white;
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;
}

@media print {
  .learning-modal {
    background: white;
    position: static;
  }

  .learning-content {
    background: white;
    color: black;
    max-width: none;
    max-height: none;
    padding: 0;
  }

  .close-btn,
  .tabs,
  .learning-footer,
  .btn-submit {
    display: none;
  }

  .tab-content {
    display: block !important;
  }

  .tab-content > div {
    display: none !important;
  }

  #print-area {
    display: block !important;
  }

  .print-view {
    background: white;
    padding: 0;
  }
}
</style>
