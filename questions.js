// 50 High-Quality HTML Multiple Choice Questions
// Each question has: id, question, options, answer (0-indexed), explanation

const questions = [
  {
    id: 1,
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "High Text Machine Language",
      "Hyper Transfer Marking Language",
      "Hyperlink and Text Management Language"
    ],
    answer: 0,
    explanation: "HTML stands for Hyper Text Markup Language. It is the standard markup language used to design web pages."
  },
  {
    id: 2,
    question: "Which HTML tag is used to define the root of an HTML document?",
    options: [
      "<!DOCTYPE html>",
      "<html>",
      "<head>",
      "<root>"
    ],
    answer: 1,
    explanation: "The <html> element represents the root of an HTML document. All other elements must be descendants of this element."
  },
  {
    id: 3,
    question: "What is the correct declaration for specifying HTML5 documents?",
    options: [
      "<!DOCTYPE html>",
      "<!DOCTYPE HTML5>",
      "<doctype html5>",
      "<?xml version=\"1.0\"?>"
    ],
    answer: 0,
    explanation: "In HTML5, the doctype declaration is case-insensitive and is written simply as <!DOCTYPE html>."
  },
  {
    id: 4,
    question: "Which tag is used to create the largest heading in standard HTML?",
    options: [
      "<heading>",
      "<h6>",
      "<h1>",
      "<head>"
    ],
    answer: 2,
    explanation: "HTML defines six levels of headings from <h1> (largest and most important) to <h6> (smallest)."
  },
  {
    id: 5,
    question: "Which HTML element is used to insert a line break?",
    options: [
      "<break>",
      "<lb>",
      "<br>",
      "<newline>"
    ],
    answer: 2,
    explanation: "The <br> tag inserts a single line break. It is an empty/void element and does not require a closing tag."
  },
  {
    id: 6,
    question: "Which element is used to create a hyperlink in HTML?",
    options: [
      "<link>",
      "<a>",
      "<href>",
      "<hyperlink>"
    ],
    answer: 1,
    explanation: "The <a> (anchor) tag defines a hyperlink that links one page or resource to another."
  },
  {
    id: 7,
    question: "Which attribute specifies the destination URL of a hyperlink?",
    options: [
      "src",
      "link",
      "href",
      "target"
    ],
    answer: 2,
    explanation: "The 'href' (hypertext reference) attribute specifies the target URL or web address."
  },
  {
    id: 8,
    question: "How do you open a hyperlink in a new tab or window?",
    options: [
      "target=\"_new\"",
      "target=\"_blank\"",
      "open=\"newtab\"",
      "window=\"blank\""
    ],
    answer: 1,
    explanation: "The target=\"_blank\" attribute instructs the browser to open the linked document in a new window or tab."
  },
  {
    id: 9,
    question: "Which tag is used to embed an image in an HTML document?",
    options: [
      "<image>",
      "<pic>",
      "<img>",
      "<photo>"
    ],
    answer: 2,
    explanation: "The <img> tag embeds an image in an HTML page. It requires the 'src' and 'alt' attributes."
  },
  {
    id: 10,
    question: "Which attribute provides alternative text for an image if it fails to load?",
    options: [
      "title",
      "alt",
      "caption",
      "description"
    ],
    answer: 1,
    explanation: "The 'alt' attribute specifies an alternate text for an image if the image cannot be displayed, and is essential for accessibility."
  },
  {
    id: 11,
    question: "Which tag is used to create an unordered (bulleted) list?",
    options: [
      "<ol>",
      "<list>",
      "<ul>",
      "<li>"
    ],
    answer: 2,
    explanation: "The <ul> element defines an unordered (bulleted) list of items."
  },
  {
    id: 12,
    question: "Which tag is used to represent an individual item in a list?",
    options: [
      "<item>",
      "<li>",
      "<ul>",
      "<list-item>"
    ],
    answer: 1,
    explanation: "The <li> (list item) tag is used inside ordered (<ol>) and unordered (<ul>) lists."
  },
  {
    id: 13,
    question: "Which element is used to create a numbered (ordered) list?",
    options: [
      "<ul>",
      "<nl>",
      "<ol>",
      "<num>"
    ],
    answer: 2,
    explanation: "The <ol> element defines an ordered list, where items are numbered sequentially by default."
  },
  {
    id: 14,
    question: "Which HTML element represents tabular data formatted in rows and columns?",
    options: [
      "<grid>",
      "<table>",
      "<data>",
      "<matrix>"
    ],
    answer: 1,
    explanation: "The <table> tag represents data in a two-dimensional grid composed of rows and columns."
  },
  {
    id: 15,
    question: "Which tag defines a table row in an HTML table?",
    options: [
      "<row>",
      "<td>",
      "<tr>",
      "<th>"
    ],
    answer: 2,
    explanation: "The <tr> element defines a row of cells inside an HTML table."
  },
  {
    id: 16,
    question: "Which tag defines a standard data cell inside a table row?",
    options: [
      "<th>",
      "<td>",
      "<cell>",
      "<data>"
    ],
    answer: 1,
    explanation: "The <td> (table data) element defines standard content cells in a table."
  },
  {
    id: 17,
    question: "Which tag defines a header cell in an HTML table (bold and centered by default)?",
    options: [
      "<thead>",
      "<header>",
      "<th>",
      "<caption>"
    ],
    answer: 2,
    explanation: "The <th> (table header) element defines a header cell that is bold and center-aligned by default."
  },
  {
    id: 18,
    question: "Which table attribute merges two or more columns into a single cell?",
    options: [
      "rowspan",
      "colspan",
      "merge-col",
      "col-span"
    ],
    answer: 1,
    explanation: "The 'colspan' attribute defines the number of columns a cell should span horizontally."
  },
  {
    id: 19,
    question: "Which table attribute allows a single cell to span multiple vertical rows?",
    options: [
      "rowspan",
      "colspan",
      "row-merge",
      "spanrows"
    ],
    answer: 0,
    explanation: "The 'rowspan' attribute specifies the number of rows a cell should span vertically."
  },
  {
    id: 20,
    question: "What is the correct syntax for writing comments in HTML?",
    options: [
      "// This is a comment",
      "/* This is a comment */",
      "<!-- This is a comment -->",
      "# This is a comment"
    ],
    answer: 2,
    explanation: "HTML comments begin with <!-- and end with -->. Browsers do not render content inside comments."
  },
  {
    id: 21,
    question: "Which HTML5 semantic element is intended for self-contained, independent distributable content?",
    options: [
      "<section>",
      "<article>",
      "<aside>",
      "<main>"
    ],
    answer: 1,
    explanation: "The <article> element represents a self-contained composition (such as a blog post or news story) intended to be reusable or distributable."
  },
  {
    id: 22,
    question: "Which HTML5 tag is used for the main navigation block containing links?",
    options: [
      "<navigation>",
      "<nav>",
      "<menu>",
      "<links>"
    ],
    answer: 1,
    explanation: "The <nav> element represents a section of a page that links to other pages or to parts within the page."
  },
  {
    id: 23,
    question: "Which element represents tangential or sidebar content related to the page?",
    options: [
      "<sidebar>",
      "<aside>",
      "<sub>",
      "<section>"
    ],
    answer: 1,
    explanation: "The <aside> element represents a portion of a document whose content is only indirectly related to the document's main content."
  },
  {
    id: 24,
    question: "Which HTML element specifies the dominant and unique content of the <body>?",
    options: [
      "<content>",
      "<body-main>",
      "<main>",
      "<center>"
    ],
    answer: 2,
    explanation: "The <main> element represents the dominant content of the <body>. There should not be more than one visible <main> element per document."
  },
  {
    id: 25,
    question: "Which HTML tag is used to create an interactive form for user input?",
    options: [
      "<input>",
      "<form>",
      "<fieldset>",
      "<submit>"
    ],
    answer: 1,
    explanation: "The <form> element is used to collect user inputs and submit them to a processing server or script."
  },
  {
    id: 26,
    question: "Which input type is specifically optimized for entering email addresses with built-in validation?",
    options: [
      "type=\"mail\"",
      "type=\"text\"",
      "type=\"email\"",
      "type=\"address\""
    ],
    answer: 2,
    explanation: "The <input type=\"email\"> element provides automated email syntax validation and mobile keyboard optimization."
  },
  {
    id: 27,
    question: "Which attribute ensures that an input field must be filled out before submitting a form?",
    options: [
      "validate",
      "mandatory",
      "required",
      "important"
    ],
    answer: 2,
    explanation: "The 'required' boolean attribute specifies that an input field must contain a value before form submission."
  },
  {
    id: 28,
    question: "Which tag provides a multi-line text input control in a form?",
    options: [
      "<text>",
      "<input type=\"multiline\">",
      "<textarea>",
      "<textbox>"
    ],
    answer: 2,
    explanation: "The <textarea> tag defines a multi-line plain-text editing control."
  },
  {
    id: 29,
    question: "Which tag is used to create a dropdown selection list in a form?",
    options: [
      "<dropdown>",
      "<select>",
      "<listbox>",
      "<picklist>"
    ],
    answer: 1,
    explanation: "The <select> element creates a drop-down menu with child <option> tags."
  },
  {
    id: 30,
    question: "Which HTML5 element provides an 'autocomplete' list of predefined options for an <input>?",
    options: [
      "<select>",
      "<datalist>",
      "<autocomplete>",
      "<options>"
    ],
    answer: 1,
    explanation: "The <datalist> tag contains a set of <option> elements that represent recommended options available to an <input> element."
  },
  {
    id: 31,
    question: "Which attribute defines the HTTP method used when submitting form data?",
    options: [
      "action",
      "method",
      "type",
      "enctype"
    ],
    answer: 1,
    explanation: "The 'method' attribute specifies the HTTP method (typically GET or POST) used to submit form data."
  },
  {
    id: 32,
    question: "What is the primary difference between GET and POST form methods?",
    options: [
      "GET hides form data in the body, POST shows data in URL",
      "GET appends data to the URL, POST sends data in the HTTP request body",
      "GET is used only for passwords, POST is for simple searches",
      "GET has no size limits, while POST has a 256 character limit"
    ],
    answer: 1,
    explanation: "GET attaches key-value pairs to the URL query string, whereas POST sends the payload in the request body, offering better security for sensitive data."
  },
  {
    id: 33,
    question: "Which tag embeds sound or music streams in HTML5?",
    options: [
      "<sound>",
      "<audio>",
      "<music>",
      "<mp3>"
    ],
    answer: 1,
    explanation: "The HTML5 <audio> tag embeds audio content directly into a document without third-party plugins."
  },
  {
    id: 34,
    question: "Which tag embeds video files into an HTML5 document?",
    options: [
      "<movie>",
      "<media>",
      "<video>",
      "<player>"
    ],
    answer: 2,
    explanation: "The HTML5 <video> tag is used to embed video clips or streams natively into a web page."
  },
  {
    id: 35,
    question: "Which attribute is required on <audio> or <video> to display playback buttons (play, pause, volume)?",
    options: [
      "buttons",
      "controls",
      "interface",
      "playback"
    ],
    answer: 1,
    explanation: "The boolean 'controls' attribute adds default browser audio/video controls such as play, pause, seekbar, and volume."
  },
  {
    id: 36,
    question: "Which HTML5 element is used to draw graphics on the fly via JavaScript?",
    options: [
      "<graphics>",
      "<canvas>",
      "<svg>",
      "<draw>"
    ],
    answer: 1,
    explanation: "The <canvas> element is a container used to draw pixel-based 2D and 3D graphics on the fly via JavaScript."
  },
  {
    id: 37,
    question: "Which technology/element is used for resolution-independent vector graphics written directly in XML/HTML?",
    options: [
      "<canvas>",
      "<vector>",
      "<svg>",
      "<shape>"
    ],
    answer: 2,
    explanation: "SVG (Scalable Vector Graphics) is an XML-based markup language for describing two-dimensional vector graphics."
  },
  {
    id: 38,
    question: "Which element is used to display another independent web page inside the current document?",
    options: [
      "<frame>",
      "<embedpage>",
      "<iframe>",
      "<web>"
    ],
    answer: 2,
    explanation: "An <iframe> (inline frame) embeds another HTML document within the current document."
  },
  {
    id: 39,
    question: "Where should the document's metadata such as <meta>, <title>, and <link> reside?",
    options: [
      "<header>",
      "<head>",
      "<meta-container>",
      "<body>"
    ],
    answer: 1,
    explanation: "The <head> element contains machine-readable metadata about the document that is not directly displayed in the main window."
  },
  {
    id: 40,
    question: "Which meta tag is essential for responsive mobile-friendly web design?",
    options: [
      "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">",
      "<meta name=\"responsive\" content=\"true\">",
      "<meta name=\"screen\" content=\"mobile\">",
      "<meta name=\"zoom\" content=\"fixed\">"
    ],
    answer: 0,
    explanation: "The viewport meta tag sets the page width to match the device screen width and controls the initial zoom level."
  },
  {
    id: 41,
    question: "Which tag is used to link an external CSS stylesheet to an HTML document?",
    options: [
      "<style src=\"style.css\">",
      "<link rel=\"stylesheet\" href=\"style.css\">",
      "<stylesheet>style.css</stylesheet>",
      "<script href=\"style.css\">"
    ],
    answer: 1,
    explanation: "The <link> element with rel=\"stylesheet\" and an href attribute links external stylesheets."
  },
  {
    id: 42,
    question: "Which tag is used to embed or reference client-side JavaScript code?",
    options: [
      "<javascript>",
      "<js>",
      "<script>",
      "<code>"
    ],
    answer: 2,
    explanation: "The <script> tag is used to embed or refer to an executable script (typically JavaScript)."
  },
  {
    id: 43,
    question: "Which HTML5 element represents an interactive disclosure widget that can be opened and closed?",
    options: [
      "<accordion>",
      "<details>",
      "<toggle>",
      "<collapse>"
    ],
    answer: 1,
    explanation: "The <details> element creates a disclosure widget in which information is visible only when toggled into an 'open' state."
  },
  {
    id: 44,
    question: "Which tag provides the visible summary or heading for a <details> element?",
    options: [
      "<title>",
      "<header>",
      "<summary>",
      "<caption>"
    ],
    answer: 2,
    explanation: "The <summary> element defines a visible heading or legend for its parent <details> disclosure box."
  },
  {
    id: 45,
    question: "Which element is used to highlight or visually mark text for reference or notation purposes?",
    options: [
      "<highlight>",
      "<mark>",
      "<strong>",
      "<yellow>"
    ],
    answer: 1,
    explanation: "The <mark> element represents text that is highlighted or marked for reference due to its relevance in another context."
  },
  {
    id: 46,
    question: "Which element represents text with preformatted spacing and line breaks intact?",
    options: [
      "<code>",
      "<pre>",
      "<format>",
      "<raw>"
    ],
    answer: 1,
    explanation: "The <pre> element represents preformatted text where whitespace, tabs, and line breaks are preserved exactly as written."
  },
  {
    id: 47,
    question: "Which attribute is used to provide a tooltip when a user hovers over an HTML element?",
    options: [
      "tooltip",
      "hover",
      "title",
      "hint"
    ],
    answer: 2,
    explanation: "The global 'title' attribute offers advisory information that browsers display as a tooltip on hover."
  },
  {
    id: 48,
    question: "What is the key difference between the 'id' and 'class' attributes?",
    options: [
      "'id' can be repeated across many elements; 'class' must be unique per document",
      "'id' must be unique per document; 'class' can be assigned to multiple elements",
      "'id' is only for styling; 'class' is only for JavaScript",
      "There is no difference; they are interchangeable aliases"
    ],
    answer: 1,
    explanation: "The 'id' attribute must be unique within an HTML document, whereas the 'class' attribute can be reused across multiple elements."
  },
  {
    id: 49,
    question: "Which HTML5 element represents a modal or non-modal popup dialog box?",
    options: [
      "<popup>",
      "<window>",
      "<dialog>",
      "<modal>"
    ],
    answer: 2,
    explanation: "The <dialog> element represents a dialog box, subwindow, or inspector with native JavaScript methods like showModal() and close()."
  },
  {
    id: 50,
    question: "Which HTML5 element is used to define template content that is not rendered on page load but can be cloned via JavaScript?",
    options: [
      "<template>",
      "<blueprint>",
      "<placeholder>",
      "<stash>"
    ],
    answer: 0,
    explanation: "The <template> tag holds HTML code fragments that are inactive when the page loads, but can be instantiated and cloned via JavaScript."
  }
];
