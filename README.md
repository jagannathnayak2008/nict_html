# HTML MCQ Online Examination System (50 Questions)

An interactive, responsive, and production-ready online examination web application for assessing HTML knowledge with 50 multiple choice questions.

## 📌 Features

1. **50 Comprehensive HTML Questions**:
   - Covers HTML5 basics, DOCTYPE, semantic tags (`<article>`, `<nav>`, `<aside>`, `<main>`), forms & inputs (`email`, `required`, `<textarea>`, `<select>`, `<datalist>`), tables, media (`<audio>`, `<video>`, `<canvas>`, `<svg>`), links, lists, `<details>`, `<dialog>`, and best practices.
   - 1 Mark per question (Maximum score: **50 Marks**).

2. **Student Identity Intake**:
   - Captures Student Full Name, Roll / Registration Number, Email Address, and Center Name before starting the test.

3. **Interactive Test Interface**:
   - Real-time countdown timer (60 Minutes).
   - Dynamic **Question Palette (1 to 50)** with live status indicators:
     - 🟩 Answered
     - 🟪 Marked for Review
     - ⬜ Unanswered
     - 🟦 Current Active Question
   - Direct navigation to any question.
   - Navigation controls: Previous, Next, Clear Selection, and Mark for Review.

4. **Instant Evaluation & Summary Report**:
   - Real-time calculation upon clicking **Submit**.
   - Circular percentage score gauge with letter grade (Distinction, First Class, Pass, Needs Improvement).
   - Performance metrics: Correct, Incorrect, Unattempted, and Accuracy %.
   - Full Question Review with side-by-side comparison of student's choice vs. verified answer, complete with technical explanations.
   - Filter review by: All (50), Correct, Incorrect, and Unanswered.

5. **Official Email Dispatch to `nict.nou@gmail.com`**:
   - Automated direct transmission via FormSubmit AJAX service without requiring a local backend server.
   - Fallback button: 1-click **Open Mail App** (`mailto:nict.nou@gmail.com`) pre-filled with the student's full score and question breakdown.
   - One-click **Copy Summary** to clipboard.
   - **Print / Save as PDF** support with clean print styling.

---

## 🚀 How to Run

1. Open `index.html` in any modern web browser (Google Chrome, Microsoft Edge, Mozilla Firefox, Safari).
2. Enter student details in the entry form.
3. Click **Start Assessment** and answer the 50 questions.
4. Click **Submit Examination** to view the score card, complete answer key, and send the report to `nict.nou@gmail.com`.
