/**
 * HTML MCQ Examination Portal Engine
 * Official Submission Target: nict.nou@gmail.com
 */

const OFFICIAL_EMAIL = "nict.nou@gmail.com";
const TOTAL_QUESTIONS = questions.length; // 50
const EXAM_DURATION_MINUTES = 60;

// Application State
const state = {
  student: {
    name: "",
    rollNo: "",
    email: "",
    center: "NICT Center"
  },
  currentIndex: 0,
  answers: new Array(TOTAL_QUESTIONS).fill(null),
  reviewFlags: new Array(TOTAL_QUESTIONS).fill(false),
  visited: new Array(TOTAL_QUESTIONS).fill(false),
  timerSeconds: EXAM_DURATION_MINUTES * 60,
  timerInterval: null,
  isSubmitted: false,
  submissionTime: null,
  startTime: null,
  reviewFilter: 'all' // 'all', 'correct', 'wrong', 'unanswered'
};

// DOM Elements
const startModal = document.getElementById('start-modal');
const studentForm = document.getElementById('student-form');
const confirmModal = document.getElementById('confirm-modal');
const quizSection = document.getElementById('quiz-section');
const resultSection = document.getElementById('result-section');
const timerDisplay = document.getElementById('timer-display');
const studentNameDisplay = document.getElementById('display-student-name');
const studentRollDisplay = document.getElementById('display-student-roll');

// Question Elements
const qIndexBadge = document.getElementById('q-index-badge');
const qText = document.getElementById('q-text');
const optionsContainer = document.getElementById('options-container');
const prevBtn = document.getElementById('btn-prev');
const nextBtn = document.getElementById('btn-next');
const markReviewBtn = document.getElementById('btn-mark-review');
const clearBtn = document.getElementById('btn-clear');
const submitQuizBtn = document.getElementById('btn-submit-quiz');
const questionPalette = document.getElementById('question-palette');
const answeredCountSpan = document.getElementById('stat-answered-count');

// Initialize
window.addEventListener('DOMContentLoaded', () => {
  setupRegistration();
  setupFilterListeners();
});

// Setup Student Form Registration
function setupRegistration() {
  studentForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('input-name').value.trim();
    const rollNo = document.getElementById('input-roll').value.trim();
    const email = document.getElementById('input-email').value.trim();
    const center = document.getElementById('input-center').value.trim() || "NICT Center";

    if (!name || !rollNo || !email) {
      alert("Please enter all required student details.");
      return;
    }

    state.student = { name, rollNo, email, center };
    studentNameDisplay.textContent = name;
    studentRollDisplay.textContent = `ID: ${rollNo}`;

    // Hide Modal, Show Quiz
    startModal.style.display = 'none';
    quizSection.style.display = 'block';

    // Start Exam
    state.startTime = new Date();
    startTimer();
    renderPalette();
    renderQuestion(0);
  });
}

// Timer Logic
function startTimer() {
  updateTimerDisplay();
  state.timerInterval = setInterval(() => {
    state.timerSeconds--;
    updateTimerDisplay();

    if (state.timerSeconds <= 0) {
      clearInterval(state.timerInterval);
      alert("Time is up! Your answers are being submitted automatically.");
      finalizeSubmission();
    }
  }, 1000);
}

function updateTimerDisplay() {
  const m = Math.floor(state.timerSeconds / 60);
  const s = state.timerSeconds % 60;
  const formatted = `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  timerDisplay.textContent = formatted;

  const timerBox = document.getElementById('timer-box');
  if (state.timerSeconds < 300) {
    timerBox.className = 'timer-box danger';
  } else if (state.timerSeconds < 600) {
    timerBox.className = 'timer-box warning';
  }
}

// Render Palette
function renderPalette() {
  questionPalette.innerHTML = '';
  questions.forEach((q, idx) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'q-btn';
    btn.textContent = idx + 1;
    btn.dataset.idx = idx;

    btn.addEventListener('click', () => {
      renderQuestion(idx);
    });

    questionPalette.appendChild(btn);
  });
  updatePaletteStates();
}

function updatePaletteStates() {
  const btns = questionPalette.querySelectorAll('.q-btn');
  let answered = 0;

  btns.forEach((btn, idx) => {
    btn.classList.remove('active', 'answered', 'review');

    if (idx === state.currentIndex) {
      btn.classList.add('active');
    }

    if (state.answers[idx] !== null) {
      answered++;
      btn.classList.add('answered');
    }

    if (state.reviewFlags[idx]) {
      btn.classList.add('review');
    }
  });

  answeredCountSpan.textContent = `${answered} / ${TOTAL_QUESTIONS}`;
}

// Render Question at currentIndex
function renderQuestion(index) {
  if (index < 0 || index >= TOTAL_QUESTIONS) return;

  state.currentIndex = index;
  state.visited[index] = true;
  const currentQ = questions[index];

  // Header meta & Question Text
  qIndexBadge.textContent = `Question ${index + 1} of ${TOTAL_QUESTIONS}`;
  qText.textContent = currentQ.question;

  // Options
  optionsContainer.innerHTML = '';
  const optionLetters = ['A', 'B', 'C', 'D'];

  currentQ.options.forEach((optText, optIdx) => {
    const optDiv = document.createElement('div');
    optDiv.className = 'option-item';
    if (state.answers[index] === optIdx) {
      optDiv.classList.add('selected');
    }

    const marker = document.createElement('div');
    marker.className = 'option-marker';
    marker.textContent = optionLetters[optIdx];

    const label = document.createElement('div');
    label.className = 'option-label';
    label.textContent = optText;

    optDiv.appendChild(marker);
    optDiv.appendChild(label);

    optDiv.addEventListener('click', () => {
      selectOption(index, optIdx);
    });

    optionsContainer.appendChild(optDiv);
  });

  // Buttons state
  prevBtn.disabled = (index === 0);
  nextBtn.disabled = (index === TOTAL_QUESTIONS - 1);

  // Review button status
  if (state.reviewFlags[index]) {
    markReviewBtn.classList.add('marked');
    markReviewBtn.textContent = '★ Marked for Review';
  } else {
    markReviewBtn.classList.remove('marked');
    markReviewBtn.textContent = '☆ Mark for Review';
  }

  updatePaletteStates();
}

// Option Selected
function selectOption(qIdx, optIdx) {
  state.answers[qIdx] = optIdx;
  renderQuestion(qIdx);
}

// Event Listeners for Nav Buttons
prevBtn.addEventListener('click', () => {
  if (state.currentIndex > 0) {
    renderQuestion(state.currentIndex - 1);
  }
});

nextBtn.addEventListener('click', () => {
  if (state.currentIndex < TOTAL_QUESTIONS - 1) {
    renderQuestion(state.currentIndex + 1);
  }
});

clearBtn.addEventListener('click', () => {
  state.answers[state.currentIndex] = null;
  renderQuestion(state.currentIndex);
});

markReviewBtn.addEventListener('click', () => {
  state.reviewFlags[state.currentIndex] = !state.reviewFlags[state.currentIndex];
  renderQuestion(state.currentIndex);
});

// Submit Button & Confirmation Modal
submitQuizBtn.addEventListener('click', () => {
  const answered = state.answers.filter(a => a !== null).length;
  const unattempted = TOTAL_QUESTIONS - answered;
  const markedReview = state.reviewFlags.filter(f => f).length;

  document.getElementById('confirm-answered').textContent = answered;
  document.getElementById('confirm-unattempted').textContent = unattempted;
  document.getElementById('confirm-review').textContent = markedReview;

  confirmModal.style.display = 'flex';
});

document.getElementById('btn-cancel-submit').addEventListener('click', () => {
  confirmModal.style.display = 'none';
});

document.getElementById('btn-confirm-submit').addEventListener('click', () => {
  confirmModal.style.display = 'none';
  finalizeSubmission();
});

// Cache for evaluated results
let evaluatedResultsCache = [];

// Finalize and Evaluate
function finalizeSubmission() {
  clearInterval(state.timerInterval);
  state.isSubmitted = true;
  state.submissionTime = new Date();

  // Hide quiz, show result
  quizSection.style.display = 'none';
  resultSection.style.display = 'block';

  // Scroll to top of results
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Calculate Marks (1 mark each)
  let score = 0;
  let correctCount = 0;
  let wrongCount = 0;
  let unattemptedCount = 0;

  evaluatedResultsCache = questions.map((q, idx) => {
    const studentAns = state.answers[idx];
    const isCorrect = (studentAns !== null && studentAns === q.answer);
    if (studentAns === null) {
      unattemptedCount++;
    } else if (isCorrect) {
      correctCount++;
      score += 1; // 1 mark per correct question
    } else {
      wrongCount++;
    }

    return {
      id: q.id,
      question: q.question,
      options: q.options,
      correctAnswer: q.answer,
      studentAnswer: studentAns,
      isCorrect: isCorrect,
      explanation: q.explanation
    };
  });

  const percentage = ((score / TOTAL_QUESTIONS) * 100).toFixed(1);
  const timeTakenSeconds = (EXAM_DURATION_MINUTES * 60) - state.timerSeconds;
  const minutesTaken = Math.floor(timeTakenSeconds / 60);
  const secondsTaken = timeTakenSeconds % 60;
  const timeTakenFormatted = `${minutesTaken}m ${secondsTaken}s`;

  // Render Summary Score Card
  renderResultSummary(score, percentage, correctCount, wrongCount, unattemptedCount, timeTakenFormatted);

  // Render Detailed Review of All 50 Questions
  drawFilteredReviewList();

  // Send Email Report to nict.nou@gmail.com
  sendReportToOfficialMail(score, percentage, correctCount, wrongCount, unattemptedCount, timeTakenFormatted, evaluatedResultsCache);
}

// Render Summary Screen Cards
function renderResultSummary(score, percentage, correct, wrong, unattempted, timeTaken) {
  document.getElementById('res-score-num').textContent = score;
  document.getElementById('res-score-total').textContent = `/ ${TOTAL_QUESTIONS}`;

  // Update circular gauge
  const circle = document.getElementById('res-score-circle');
  circle.style.background = `conic-gradient(var(--primary) ${percentage}%, #e2e8f0 ${percentage}%)`;

  // Grade
  const gradeBadge = document.getElementById('res-grade-badge');
  let gradeText = "";
  let gradeClass = "";
  if (percentage >= 80) {
    gradeText = "Grade: Outstanding / Distinction (A+)";
    gradeClass = "badge-grade grade-distinction";
  } else if (percentage >= 60) {
    gradeText = "Grade: First Class (A)";
    gradeClass = "badge-grade grade-first";
  } else if (percentage >= 40) {
    gradeText = "Grade: Pass (B)";
    gradeClass = "badge-grade grade-pass";
  } else {
    gradeText = "Grade: Needs Improvement (F)";
    gradeClass = "badge-grade grade-fail";
  }
  gradeBadge.className = gradeClass;
  gradeBadge.textContent = gradeText;

  // Student summary info
  document.getElementById('res-student-name').textContent = state.student.name;
  document.getElementById('res-student-roll').textContent = state.student.rollNo;
  document.getElementById('res-student-email').textContent = state.student.email;
  document.getElementById('res-student-time').textContent = timeTaken;
  document.getElementById('res-timestamp').textContent = state.submissionTime.toLocaleString();

  // Stat tiles
  document.getElementById('stat-correct-val').textContent = correct;
  document.getElementById('stat-wrong-val').textContent = wrong;
  document.getElementById('stat-unattempted-val').textContent = unattempted;
  document.getElementById('stat-accuracy-val').textContent = `${percentage}%`;
}

// Setup Review Filter Listeners once
function setupFilterListeners() {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      state.reviewFilter = e.target.dataset.filter;
      drawFilteredReviewList();
    });
  });
}

// Render Review of all Questions (Safe DOM manipulation)
function drawFilteredReviewList() {
  const container = document.getElementById('review-list-container');
  if (!container) return;
  container.innerHTML = '';

  const optionLetters = ['A', 'B', 'C', 'D'];

  const filtered = evaluatedResultsCache.filter(item => {
    if (state.reviewFilter === 'correct') return item.isCorrect;
    if (state.reviewFilter === 'wrong') return item.studentAnswer !== null && !item.isCorrect;
    if (state.reviewFilter === 'unanswered') return item.studentAnswer === null;
    return true; // 'all'
  });

  if (filtered.length === 0) {
    const emptyMsg = document.createElement('div');
    emptyMsg.style.cssText = 'text-align: center; padding: 2.5rem; color: var(--text-muted); font-size: 1rem;';
    emptyMsg.textContent = 'No questions match the selected filter category.';
    container.appendChild(emptyMsg);
    return;
  }

  filtered.forEach((item) => {
    const card = document.createElement('div');
    let statusClass = "skipped-card";

    if (item.isCorrect) {
      statusClass = "correct-card";
    } else if (item.studentAnswer !== null) {
      statusClass = "wrong-card";
    }
    card.className = `review-card ${statusClass}`;

    // Header
    const headDiv = document.createElement('div');
    headDiv.className = 'review-q-head';

    const titleDiv = document.createElement('div');
    titleDiv.className = 'review-q-title';
    titleDiv.textContent = `Q${item.id}. ${item.question}`;

    const pillSpan = document.createElement('span');
    pillSpan.className = 'review-status-pill';
    if (item.isCorrect) {
      pillSpan.classList.add('pill-correct');
      pillSpan.textContent = '✓ Correct (+1 Mark)';
    } else if (item.studentAnswer !== null) {
      pillSpan.classList.add('pill-wrong');
      pillSpan.textContent = '✗ Incorrect (0/1)';
    } else {
      pillSpan.classList.add('pill-skipped');
      pillSpan.textContent = 'Unanswered (0/1)';
    }

    headDiv.appendChild(titleDiv);
    headDiv.appendChild(pillSpan);
    card.appendChild(headDiv);

    // Options List
    const optionsDiv = document.createElement('div');
    optionsDiv.className = 'review-options';

    item.options.forEach((opt, optIndex) => {
      const optDiv = document.createElement('div');
      optDiv.className = 'review-opt';

      if (optIndex === item.correctAnswer) {
        optDiv.classList.add('is-correct-answer');
      } else if (optIndex === item.studentAnswer && !item.isCorrect) {
        optDiv.classList.add('user-chosen-wrong');
      }

      const letterStrong = document.createElement('strong');
      letterStrong.textContent = `${optionLetters[optIndex]}. `;

      const labelSpan = document.createElement('span');
      labelSpan.style.flexGrow = '1';
      labelSpan.textContent = opt;

      optDiv.appendChild(letterStrong);
      optDiv.appendChild(labelSpan);

      if (optIndex === item.correctAnswer) {
        const badge = document.createElement('span');
        badge.textContent = '✓ (Correct Answer)';
        optDiv.appendChild(badge);
      } else if (optIndex === item.studentAnswer && !item.isCorrect) {
        const badge = document.createElement('span');
        badge.textContent = '✗ (Your Choice)';
        optDiv.appendChild(badge);
      }

      optionsDiv.appendChild(optDiv);
    });

    card.appendChild(optionsDiv);

    // Explanation
    const expDiv = document.createElement('div');
    expDiv.className = 'review-explanation';

    const expStrong = document.createElement('strong');
    expStrong.textContent = '💡 Technical Explanation: ';
    expDiv.appendChild(expStrong);

    const expText = document.createTextNode(item.explanation);
    expDiv.appendChild(expText);

    card.appendChild(expDiv);

    container.appendChild(card);
  });
}

// Send Report to Official Mail: nict.nou@gmail.com
async function sendReportToOfficialMail(score, percentage, correct, wrong, unattempted, timeTaken, detailedResults) {
  const banner = document.getElementById('email-banner');
  const bannerText = document.getElementById('email-status-text');
  const fallbackLink = document.getElementById('email-fallback-link');

  // Prepare Email Body & Data
  let answersSummaryText = detailedResults.map(item => {
    const studentChoice = item.studentAnswer !== null ? `Option ${['A','B','C','D'][item.studentAnswer]}` : 'Unanswered';
    const correctChoice = `Option ${['A','B','C','D'][item.correctAnswer]}`;
    const resultFlag = item.isCorrect ? '[CORRECT +1]' : (item.studentAnswer === null ? '[SKIPPED 0]' : '[INCORRECT 0]');
    return `Q${item.id}: ${resultFlag} Student Answer: ${studentChoice} | Correct: ${correctChoice}\nQuestion: ${item.question}\n`;
  }).join('\n');

  const emailSubject = `HTML MCQ Exam Result - ${state.student.name} (${state.student.rollNo}) - Score: ${score}/50 (${percentage}%)`;

  const emailPayload = {
    _subject: emailSubject,
    _replyto: state.student.email,
    "Student Name": state.student.name,
    "Roll Number": state.student.rollNo,
    "Student Email": state.student.email,
    "Examination Center": state.student.center,
    "Total Questions": TOTAL_QUESTIONS,
    "Total Marks Obtained": `${score} / ${TOTAL_QUESTIONS}`,
    "Percentage": `${percentage}%`,
    "Correct Answers": correct,
    "Incorrect Answers": wrong,
    "Unattempted Questions": unattempted,
    "Time Taken": timeTaken,
    "Submission Timestamp": state.submissionTime.toLocaleString(),
    "Detailed Summary": answersSummaryText
  };

  // Prepare mailto link as direct fallback
  const mailtoBody = encodeURIComponent(
    `HTML MCQ EXAMINATION REPORT\n` +
    `======================================\n` +
    `Student Name: ${state.student.name}\n` +
    `Roll No: ${state.student.rollNo}\n` +
    `Email: ${state.student.email}\n` +
    `Center: ${state.student.center}\n` +
    `Date & Time: ${state.submissionTime.toLocaleString()}\n` +
    `Marks Scored: ${score} / ${TOTAL_QUESTIONS} (${percentage}%)\n` +
    `Performance: ${correct} Correct, ${wrong} Incorrect, ${unattempted} Unanswered\n` +
    `Time Taken: ${timeTaken}\n` +
    `======================================\n\n` +
    `QUESTION BREAKDOWN:\n` +
    answersSummaryText
  );

  const directMailtoUrl = `mailto:${OFFICIAL_EMAIL}?subject=${encodeURIComponent(emailSubject)}&body=${mailtoBody}`;
  fallbackLink.href = directMailtoUrl;

  try {
    bannerText.innerHTML = `<strong>Sending report to ${OFFICIAL_EMAIL}...</strong><span>Please wait while the official assessment record is securely transmitted.</span>`;

    // Send via FormSubmit AJAX service directly to nict.nou@gmail.com
    const response = await fetch(`https://formsubmit.co/ajax/${OFFICIAL_EMAIL}`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(emailPayload)
    });

    if (response.ok) {
      banner.className = 'email-notification-banner sent';
      bannerText.innerHTML = `
        <strong>✓ Report Successfully Sent to Official Email!</strong>
        <span>A complete examination copy has been submitted to <strong>${OFFICIAL_EMAIL}</strong> on ${state.submissionTime.toLocaleTimeString()}.</span>
      `;
    } else {
      throw new Error("Submission service returned status " + response.status);
    }
  } catch (err) {
    console.warn("Direct HTTP transmission note:", err);
    banner.className = 'email-notification-banner';
    bannerText.innerHTML = `
      <strong>Report Prepared for Official Email (${OFFICIAL_EMAIL})</strong>
      <span>Click "Open Mail App" to confirm delivery, copy the report summary, or print as PDF.</span>
    `;
  }
}

// Helper: Copy Report to Clipboard
window.copyReportToClipboard = function() {
  let score = 0;
  questions.forEach((q, idx) => {
    if (state.answers[idx] === q.answer) score++;
  });
  const percentage = ((score / TOTAL_QUESTIONS) * 100).toFixed(1);

  const text = `HTML MCQ ASSESSMENT SUMMARY
Student: ${state.student.name} (Roll: ${state.student.rollNo})
Email: ${state.student.email}
Target Official Email: ${OFFICIAL_EMAIL}
Marks Obtained: ${score} / ${TOTAL_QUESTIONS} (${percentage}%)
Submission Date: ${state.submissionTime ? state.submissionTime.toLocaleString() : new Date().toLocaleString()}
Status: Complete & Evaluated`;

  navigator.clipboard.writeText(text).then(() => {
    alert("Exam report summary copied to clipboard!");
  }).catch(() => {
    alert(text);
  });
};
