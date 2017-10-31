import React from 'react';

export const questions = [
  // {
  //   "question": <p>What is the difference between a variable and a constant?</p>,
  //   "answers": [
  //     <p>Variables can be declared only in software languages.</p>,
  //     <p>Constants can be declared only in Java.</p>,
  //     <p>The value of a constant doesn't change, the value of a variable can change all throughout a program</p>,
  //     <p>No difference.</p>
  //   ],
  //   "correct": "The value of a constant doesn't change, the value of a variable can change all throughout a program."
  // },
  {
    "question": <p>What is computer programming?</p>,
    "answers": [
      <p>Setting the alarm on a computer.</p>,
      <p>Telling the computer what to do through a special set of instructions.</p>,
      <p>Speeding up your computer.</p>,
      <p>Convincing the computer to never freeze.</p>
    ],
    "correct": "Telling the computer what to do through a special set of instructions."
  },
  // {
  //   "question": <p>Which of the following is NOT a web language??</p>,
  //   "answers": [
  //     <p>PHP.</p>,
  //     <p>HTML.</p>,
  //     <p>Javascript.</p>,
  //     <p>C++.</p>
  //   ],
  //   "correct": "C++, C++ is a software development language. HTML, Javascript, and PHP are all web languages.."
  // },
  {
    "question": <p>Where might you use a closure in JavaScript?</p>,
    "answers": [
      <p>When currying or implementing partial application.</p>,
      <p>To emulate private methods.</p>,
      <p>Event handlers and callback functions.</p>,
      <p>All of the above.</p>
    ],
    "correct": "All of the above."
  },
  // {
  //   "question": <p>Ask user for a number, ask user for another number, multiply the two numbers, print result..What do you call this set of instructions?</p>,
  //   "answers": [
  //     <p>A compiler.</p>,
  //     <p>PHP.</p>,
  //     <p>A Class.</p>,
  //     <p>An algorithm.</p>
  //   ],
  //   "correct": "An algorithm is a set of steps for carrying out a specific task. Algorithms are used extensively in computer programming to arrive at a solution for a problem. A real world example of an algorithm would be a recipe. The instructions of a typical recipe (add ingredients, mix, stir, etc.) are an algorithm.."
  // },
  {
    "question": <p>What is the software called that translates code into something meaningful the computer can understand?</p>,
    "answers": [
      <p>Transliterator.</p>,
      <p>Translator.</p>,
      <p>Converter.</p>,
      <p>Compiler.</p>
    ],
    "correct": "Compiler."
  },
  {
    "question": <p>Before source code can be compiled, it has to be _______________?</p>,
    "answers": [
      <p>Saved in a separate file.</p>,
      <p>Viewed in a command prompt.</p>,
      <p>Capitalized.</p>,
      <p>Parsed.</p>
    ],
    "correct": "Parsed."
  },
  {
    "question": <p>If you needed to execute some code repeatedly based on a certain condition, which of the following would you use?</p>,
    "answers": [
      <p>Conditional.</p>,
      <p>Compiler.</p>,
      <p>Variable.</p>,
      <p>Loop.</p>
    ],
    "correct": "Loop."
  },
  {
    "question": <p>What is CORS?</p>,
    "answers": [
      <p>Cross-Origin Resource Sharing</p>,
      <p>Allows restricted resources (e.g. fonts) on a web page to be requested from an outside domain.</p>,
      <p>Allows scripts to interact more openly with content outside of the original domain, leading to better integration between web services.</p>,
      <p>All of the above.</p>
    ],
    "correct": "All of the above."
  },
  // {
  //   "question": <p>What is object-oriented programming?</p>,
  //   "answers": [
  //     <p>A type of programming involving a structured method of creating programs.</p>,
  //     <p>A type of programming using only numbers.</p>,
  //     <p>A type of programming not in use anymore.</p>,
  //     <p> A type of programming involving data types representing data structures.</p>
  //   ],
  //   "correct": "A type of programming involving data types representing data structures."
  // },
  // {
  //   "question": <p>Which of the following is NOT a software language?</p>,
  //   "answers": [
  //     <p> C.</p>,
  //     <p>C++.</p>,
  //     <p>Visual Basic.</p>,
  //     <p>HTML.</p>
  //   ],
  //   "correct": "HTML is is a web language. C, C++, and Visual Basic are all software development languages.."
  // },
  {
    "question": <p>What does strict mode do?</p>,
    "answers": [
      <p>Makes code more optimizable.</p>,
      <p>Adds restrictions to prevent errors.</p>,
      <p>Prevents the use of global variables and the use of dangerous code like <code>with</code> and <code>eval</code>.</p>,
      <p>All of the above.</p>
    ],
    "correct": "All of the above."
  },
  {
    "question": <p>What's the opposite of git clone, instead of downloading your code from GitHub, uploads your changes and code back to GitHub?</p>,
    "answers": [
      <p>git add.</p>,
      <p>git push.</p>,
      <p>git upload.</p>,
      <p>git status.</p>
    ],
    "correct": "git push."
  },
  {
    "question": <p>How do you save the current state of your code into the git version control?</p>,
    "answers": [
      <p>By adding all changes and staging them with git add.</p>,
      <p>By adding all changes and staging them with git stage.</p>,
      <p>By committing the staged changes with git commit.</p>,
      <p>By creating a new commit with git init.</p>
    ],
    "correct": "By committing the staged changes with git commit."
  },
  // {
  //   "question": <p>How can you open a link in a new browser window?</p>,
  //   "answers": [
  //     <p>< a href = "url" target = "new">.</p>,
  //     <p><a href = "url" target= "-blank">.</p>,
  //     <p><a href = "url" new = "-new">.</p>,
  //     <p><a href = "url" target ="open">.</p>
  //   ],
  //   "correct": "<a href = "url" target= "-blank">."
  // },
  {
    "question": <p>What are the six primitive data types in JavaScript?</p>,
    "answers": [
      <p>Function, String, Undefined, Digit, Nil, and Double.</p>,
      <p>Boolean, Null, Undefined, Number, String, and Symbol in ES6.</p>,
      <p>Number, Class, Object, Hash, String, and Function.</p>,
      <p>None of the above.</p>
    ],
    "correct": "Boolean, Null, Undefined, Number, String, and Symbol in ES6."
  },
  // {
  //   "question": <p>Which of the tag is used to creates a number list?</p>,
  //   "answers": [
  //     <p><LI>.</p>,
  //     <p><OL>.</p>,
  //     <p><LI> and <OL>.</p>,
  //     <p>None of the above.</p>
  //   ],
  //   "correct": "<LI> and <OL>."
  // },
  // {
  //   "question": <p>Reusability is a desirable feature of a language as it?</p>,
  //   "answers": [
  //     <p>decreases the testing time</p>,
  //     <p>lowers the maintenance cost</p>,
  //     <p>reduces the compilation time</p>,
  //     <p>Both (a) and (b).</p>
  //   ],
  //   "correct": "Both (a) and (b). Reusable code is an already used code, as the name implies. Hence it is bug-free and pre-tested. There is no need to test it."
  // },
  // {
  //   "question": <p>The process of walking through a program's logic on paper before you actually write the program is called ____.?</p>,
  //   "answers": [
  //     <p>Desk-checking.</p>,
  //     <p>Flowcharting.</p>,
  //     <p>Pseudocoding.</p>,
  //     <p>Testing.</p>
  //   ],
  //   "correct": "Flowcharting. A flowchart is a graphical tool to construct the logic behind the program."
  // },
  {
    "question": <p>Who is the best instructor?</p>,
    "answers": [
      <p>Cj</p>,
      <p>Hannah</p>,
      <p>Cj and Hannah</p>,
      <p>Yoda</p>
    ],
    "correct": "Yoda"
  },
  // {
  //   "question": <p>What is an example of a string constant?</p>,
  //   "answers": [
  //     <p>1</p>,
  //     <p>12432</p>,
  //     <p>"oops"</p>,
  //     <p>o</p>
  //   ],
  //   "correct": "oops"
  // },
  {
    "question": <p>Type of programmer who write programs for specific users to carry out special instructions is classified as?</p>,
    "answers": [
      <p>analysis programmer</p>,
      <p>applications programmer</p>,
      <p>train programmers</p>,
      <p>design programmers</p>
    ],
    "correct": "applications programmer"
  },
  {
    "question": <p>In React, what method is used to change state?</p>,
    "answers": [
      <p><code>changeState()</code></p>,
      <p><code>onChange()</code></p>,
      <p><code>setState()</code></p>,
      <p><code>stateSet()</code></p>
    ],
    "correct": "setState()"
  },
  // {
  //   "question": <p>One GB (Gega Byte) contains --- bytes?</p>,
  //   "answers": [
  //     <p>8192.</p>,
  //     <p>1048576.</p>,
  //     <p>83886808.</p>,
  //     <p>1073741824.</p>
  //   ],
  //   "correct": "1073741824 = One GB."
  // },
  {
    "question": <p>Where is JavaScript used besides the browser?</p>,
    "answers": [
      <p>Servers, databases, operating systems</p>,
      <p>Desktop apps, mobile web apps, mobile hybrid apps, mobile native apps</p>,
      <p>Robots, drones, Internet of Things devices</p>,
      <p>All of the above.</p>
    ],
    "correct": "All of the above."
  },
  {
    "question": <p>What are higher order components in React?</p>,
    "answers": [
      <p>They're basically wrappers for other components.</p>,
      <p>They take in another component as an argument.</p>,
      <p>They're used to extend or modify the behavior of a wrapped component.</p>,
      <p>All of the above.</p>
    ],
    "correct": "All of the above."
  },
  {
    "question": <p>Can you tell what passes into and out from the computer via its ports?</p>,
    "answers": [
      <p>Pictures.</p>,
      <p>Bytes.</p>,
      <p>Graphics.</p>,
      <p>Data.</p>
    ],
    "correct": "Data."
  },
  // {
  //   "question": <p>The basic difference between JavaScript and Java is?</p>,
  //   "answers": [
  //     <p>There is no difference.</p>,
  //     <p>Functions are considered as fields.</p>,
  //     <p>Variables are specific.</p>,
  //     <p>Functions are values, and there is no hard distinction between methods and fields.</p>
  //   ],
  //   "correct": "D. The basic difference between JavaScript and Java is that the functions are values, and there is no hard distinction between methods and fields."
  // },
  {
    "question": <p>The statement a===b refers to?</p>,
    "answers": [
      <p>Both a and b are equal in value, type and reference address.</p>,
      <p>Both a and b are equal in value.</p>,
      <p> There is no such statement.</p>,
      <p>Both a and b are equal in value and type.</p>
    ],
    "correct": "Both a and b are equal in value and type."
  },
  // {
  //   "question": <p> JavaScript is a _______________ language</p>,
  //   "answers": [
  //     <p>Object-Oriented.</p>,
  //     <p>High-level.</p>,
  //     <p>Assembly-language.</p>,
  //     <p>Object-Based.</p>
  //   ],
  //   "correct": "Object-Based. JavaScript is not a full-blown OOP (Object-Oriented Programming) language, such as Java or PHP, but it is an object-based language."
  // },
  // {
  //   "question": <p>The “var” and “function” are?</p>,
  //   "answers": [
  //     <p>Keywords.</p>,
  //     <p>Prototypes.</p>,
  //     <p>Datatypes</p>,
  //     <p>Declaration statements.</p>
  //   ],
  //   "correct": "D. The var and function are declaration statements—they declare or define variables and functions. These statements define identifiers (variable and function names) that can be used elsewhere in your program and assign values to those identifiers.."
  // }
];
