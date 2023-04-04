const questions = [
    {
        "question": "What is HTML?",
        "options": [
            "A programming language",
            "A markup language",
            "A scripting language",
            "A styling language"
        ],
        "answer": 1
    },
    {
        "question": "What does CSS stand for?",
        "options": [
            "Cascading Style Sheets",
            "Cascading Script Styles",
            "Computer Style Sheets",
            "Computer Script Styles"
        ],
        "answer": 0
    },
    {
        "question": "What is the purpose of JavaScript?",
        "options": [
            "To create dynamic and interactive web pages",
            "To style web pages",
            "To structure web pages",
            "To markup web pages"
        ],
        "answer": 0
    },
    {
        "question": "What is a variable in programming?",
        "options": [
            "A constant value",
            "A reserved word",
            "A memory location that stores a value",
            "A mathematical operator"
        ],
        "answer": 2
    },
    {
        "question": "What is a function in programming?",
        "options": [
            "A group of statements that perform a specific task",
            "A type of data structure",
            "A reserved word",
            "A mathematical operator"
        ],
        "answer": 0
    },
    {
        "question": "What is a loop in programming?",
        "options": [
            "A conditional statement",
            "A type of data structure",
            "A group of statements that execute repeatedly",
            "A reserved word"
        ],
        "answer": 2
    },
    {
        "question": "What is a class in programming?",
        "options": [
            "A group of variables",
            "A group of functions",
            "A template for creating objects",
            "A type of data structure"
        ],
        "answer": 2
    },
    {
        "question": "What is a constructor in programming?",
        "options": [
            "A method for destroying objects",
            "A method for creating objects",
            "A method for updating objects",
            "A method for copying objects"
        ],
        "answer": 1
    },
    {
        "question": "What is a database?",
        "options": [
            "A collection of web pages",
            "A collection of files",
            "A collection of data that is organized and can be accessed electronically",
            "A collection of functions"
        ],
        "answer": 2
    },
    {
        "question": "What is SQL?",
        "options": [
            "A programming language",
            "A markup language",
            "A scripting language",
            "A database language"
        ],
        "answer": 3
    },
    {
        "question": "What is the purpose of a doctype declaration in HTML?",
        "options": [
            "To indicate the version of HTML being used",
            "To indicate the type of web page being created",
            "To ensure that the web page is displayed correctly",
            "To validate the HTML code"
        ],
        "answer": 0
    },
    {
        "question": "What is a responsive web design?",
        "options": [
            "A design that responds to user input",
            "A design that responds to different device sizes and screen resolutions",
            "A design that responds to different programming languages",
            "A design that responds to different web browsers"
        ],
        "answer": 1
    },
    {
        "question": "What is the purpose of a meta tag in HTML?",
        "options": [
            "To provide information about the author of the web page",
            "To provide a title for the web page",
            "To provide a description for the web page",
            "To provide keywords for the web page"
        ],
        "answer": 2
    },
    {
        "question": "What is a Git repository?",
        "options": [
            "A folder on a computer",
            "A server that stores code",
            "A version control system",
            "A programming language"
        ],
        "answer": 2
    },
    {
        "question": "What is the purpose of the command 'git add'?",
        "options": [
            "To commit changes to the local repository",
            "To add changes to the staging area",
            "To push changes to the remote repository",
            "To discard changes in the local repository"
        ],
        "answer": 1
    },
    {
        "question": "What is a CSS selector?",
        "options": [
            "A way to select HTML elements based on their attributes",
            "A way to select HTML elements based on their content",
            "A way to select HTML elements based on their position in the document",
            "A way to select HTML elements randomly"
        ],
        "answer": 0
    },
    {
        "question": "What is the purpose of the 'font-size' property in CSS?",
        "options": [
            "To set the color of text",
            "To set the font family used for text",
            "To set the weight of text",
            "To set the size of text"
        ],
        "answer": 3
    },
    {
        "question": "What is the difference between '==' and '===' operators in JavaScript?",
        "options": [
            "'==' compares values and data types, while '===' only compares values",
            "'==' only compares values, while '===' compares values and data types",
            "'==' and '===' are the same",
            "There is no difference between '==' and '==='"
        ],
        "answer": 1
    },
    {
        "question": "What is the purpose of a loop in programming?",
        "options": [
            "To run a block of code only once",
            "To run a block of code multiple times",
            "To skip a block of code",
            "To stop the execution of a block of code"
        ],
        "answer": 1
    },
    {
        "question": "What is a variable in programming?",
        "options": [
            "A value that does not change",
            "A value that changes",
            "A keyword in a programming language",
            "A function that returns a value"
        ],
        "answer": 1
    },
    {
        "question": "What is the purpose of the 'float' property in CSS?",
        "options": [
            "To set the color of an element",
            "To position an element to the left or right of its container",
            "To change the shape of an element",
            "To animate an element"
        ],
        "answer": 1
    },
    {
        "question": "What is the purpose of the 'z-index' property in CSS?",
        "options": [
            "To set the background color of an element",
            "To set the position of an element",
            "To set the size of an element",
            "To set the stacking order of an element"
        ],
        "answer": 3
    },
    {
        "question": "What is a SQL database?",
        "options": [
            "A programming language",
            "A markup language",
            "A database management system",
            "A web server"
        ],
        "answer": 2
    },
    {
        "question": "What is the purpose of the 'SELECT' statement in SQL?",
        "options": [
            "To create a new table",
            "To insert data into a table",
            "To delete data from a table",
            "To retrieve data from a table"
        ],
        "answer": 3
    },
    {
        "question": "What is a function in programming?",
        "options": [
            "A block of code that performs a specific task",
            "A variable that stores a value",
            "A loop that runs a block of code multiple times",
            "A conditional statement that checks for a specific condition"
        ],
        "answer": 0
    },
    {
        "question": "What is the purpose of the 'console.log()' function in JavaScript?",
        "options": [
            "To print output to the console",
            "To read input from the console",
            "To display an alert message",
            "To create a new object"
        ],
        "answer": 0
    },
    {
        "question": "What is the purpose of the 'addEventListener()' method in JavaScript?",
        "options": [
            "To add a new HTML element to the page",
            "To remove an HTML element from the page",
            "To change the content of an HTML element",
            "To add an event listener to an HTML element"
        ],
        "answer": 3
    },
    {
        "question": "What is the purpose of the 'this' keyword in JavaScript?",
        "options": [
            "To refer to the previous element in an array",
            "To refer to the current element in an array",
            "To refer to the global object",
            "To refer to the current object"
        ],
        "answer": 3
    },
    {
        "question": "What is a constructor function in JavaScript?",
        "options": [
            "A function that creates a new object",
            "A function that performs a specific task",
            "A function that deletes an object",
            "A function that returns a value"
        ],
        "answer": 0
    },
    {
        "question": "What is the purpose of the 'return' statement in a function?",
        "options": [
            "To end the execution of the function",
            "To specify the arguments of the function",
            "To store a value in a variable",
            "To return a value from the function"
        ],
        "answer": 3
    },
    {
        "question": "What is the purpose of the 'document' object in JavaScript?",
        "options": [
            "To store data in a local database",
            "To manipulate the HTML document",
            "To display an alert message",
            "To create a new object"
        ],
        "answer": 1
    },
    {
        "question": "What is the purpose of the 'async' attribute in a script tag?",
        "options": [
            "To load the script synchronously",
            "To load the script asynchronously",
            "To specify the source of the script",
            "To execute the script immediately"
        ],
        "answer": 1
    },
    {
        "question": "What is the purpose of the 'require()' function in Node.js?",
        "options": [
            "To load a module",
            "To create a new server",
            "To execute a function",
            "To perform a database query"
        ],
        "answer": 0
    },
    {
        "question": "What is the purpose of the 'POST' method in HTTP?",
        "options": [
            "To retrieve data from the server",
            "To update data on the server",
            "To delete data from the server",
            "To create new data on the server"
        ],
        "answer": 3
    },
    {
        "question": "What is a callback function in JavaScript?",
        "options": [
            "A function that is executed immediately",
            "A function that is executed after a specific event occurs",
            "A function that is executed after a delay",
            "A function that is executed when an error occurs"
        ],
        "answer": 1
    },
    {
        "question": "What is the purpose of the 'fetch()' method in JavaScript?",
        "options": [
            "To retrieve data from a local database",
            "To send data to a server",
            "To retrieve data from a server",
            "To store data in a cookie"
        ],
        "answer": 2
    },
    {
        "question": "What is the purpose of the 'localStorage' object in JavaScript?",
        "options": [
            "To store data in a cookie",
            "To store data on the server",
            "To store data on the client",
            "To store data in a database"
        ],
        "answer": 2
    },
    {
        "question": "What is a RESTful API?",
        "options": [
            "An API that is based on the SOAP protocol",
            "An API that is based on the XML protocol",
            "An API that is based on the JSON protocol",
            "An API that is based on the HTTP protocol"
        ],
        "answer": 3
    },
    {
        "question": "What is the purpose of the 'git clone' command in Git?",
        "options": [
            "To create a new branch",
            "To merge two branches",
            "To download a repository from a remote server",
            "To upload a repository to a remote server"
        ],
        "answer": 2
    },
    {
        "question": "What is the purpose of the 'npm' command in Node.js?",
        "options": [
            "To install a package",
            "To update a package",
            "To uninstall a package",
            "To publish a package"
        ],
        "answer": 0
    },
    {
        "question": "What is the purpose of the 'addEventListener()' method in JavaScript?",
        "options": [
            "To create a new HTML element",
            "To add an event handler to an HTML element",
            "To remove an HTML element",
            "To add a CSS class to an HTML element"
        ],
        "answer": 1
    },
    {
        "question": "What is the purpose of the 'return' keyword in JavaScript?",
        "options": [
            "To exit a loop",
            "To exit a function",
            "To exit a conditional statement",
            "To exit a switch statement"
        ],
        "answer": 1
    },
    {
        "question": "What is the purpose of the 'margin' property in CSS?",
        "options": [
            "To specify the width of an element",
            "To specify the height of an element",
            "To specify the position of an element",
            "To specify the space outside an element"
        ],
        "answer": 3
    },
    {
        "question": "What is the purpose of the 'SQL' language?",
        "options": [
            "To style HTML documents",
            "To program interactive websites",
            "To create and manage databases",
            "To create animations and effects"
        ],
        "answer": 2
    },
    {
        "question": "What is the purpose of the 'while' loop in JavaScript?",
        "options": [
            "To repeat a block of code a specific number of times",
            "To repeat a block of code while a specific condition is true",
            "To execute a block of code at a specific time interval",
            "To execute a block of code immediately"
        ],
        "answer": 1
    },
    {
        "question": "What is the purpose of the 'typeof' operator in JavaScript?",
        "options": [
            "To check if a variable is undefined",
            "To check if a variable is null",
            "To check the type of a variable",
            "To check if a variable is a function"
        ],
        "answer": 2
    },
    {
        "question": "What is the purpose of the 'array.splice()' method in JavaScript?",
        "options": [
            "To remove the last element from an array",
            "To add a new element to the beginning of an array",
            "To add a new element to the end of an array",
            "To remove or replace elements from an array"
        ],
        "answer": 3
    },
    {
        "question": "What is the purpose of the 'map()' method in JavaScript?",
        "options": [
            "To modify an array in place",
            "To create a new array by applying a function to each element of an existing array",
            "To sort an array in ascending order",
            "To reverse the order of an array"
        ],
        "answer": 1
    },
    {
        "question": "What is the purpose of the 'try...catch' statement in JavaScript?",
        "options": [
            "To handle exceptions that occur in a block of code",
            "To execute a block of code repeatedly",
            "To stop the execution of a block of code",
            "To create a new variable"
        ],
        "answer": 0
    },
    {
        "question": "What is the purpose of the 'transform' property in CSS?",
        "options": [
            "To rotate an element",
            "To scale an element",
            "To translate an element",
            "To skew an element"
        ],
        "answer": 3
    },
    {
        "question": "What does PHP stand for?",
        "options": [
            "Personal Home Page",
            "PHP: Hypertext Preprocessor",
            "Programming Hypertext Pages",
            "Public Hosting Platform"
        ],
        "answer": 1
    },
    {
        "question": "What is the file extension used for PHP files?",
        "options": [
            ".php",
            ".html",
            ".js",
            ".css"
        ],
        "answer": 0
    },
    {
        "question": "What is the syntax for commenting in PHP?",
        "options": [
            "// This is a comment",
            "<!-- This is a comment -->",
            "/* This is a comment */",
            "# This is a comment"
        ],
        "answer": 2
    },
    {
        "question": "Which of the following is not a data type in PHP?",
        "options": [
            "boolean",
            "integer",
            "float",
            "string",
            "object",
            "double"
        ],
        "answer": 5
    },
    {
        "question": "What is the operator used for concatenation in PHP?",
        "options": [
            "+",
            "-",
            "*",
            "."
        ],
        "answer": 3
    },
    {
        "question": "What is the function used to output text in PHP?",
        "options": [
            "echo",
            "print",
            "write",
            "display"
        ],
        "answer": 0
    },
    {
        "question": "What is the function used to include a file in PHP?",
        "options": [
            "import",
            "require",
            "include",
            "load"
        ],
        "answer": 1
    },
    {
        "question": "What is the syntax for a 'for' loop in PHP?",
        "options": [
            "for i=0; i<10; i++",
            "for (i=0; i<10; i++)",
            "for (i<10; i++;)",
            "for (i<10; i++)"
        ],
        "answer": 1
    },
    {
        "question": "What is the function used to get the length of a string in PHP?",
        "options": [
            "len()",
            "length()",
            "strlen()",
            "strlength()"
        ],
        "answer": 2
    },
    {
        "question": "What is the function used to get the current date and time in PHP?",
        "options": [
            "date()",
            "time()",
            "now()",
            "current_datetime()"
        ],
        "answer": 0
    },
    {
        "question": "What is the function used to count the number of elements in an array in PHP?",
        "options": [
            "count()",
            "length()",
            "size()",
            "elements()"
        ],
        "answer": 0
    },
    {
        "question": "What is the operator used to check if two values are equal and of the same type in PHP?",
        "options": [
            "==",
            "===",
            "=",
            "!="
        ],
        "answer": 1
    },
    {
        "question": "What is the function used to check if a variable is an array in PHP?",
        "options": [
            "is_array()",
            "array()",
            "check_array()",
            "validate_array()"
        ],
        "answer": 0
    },
    {
        "question": "What is the function used to remove whitespace from the beginning and end of a string in PHP?",
        "options": [
            "trim()",
            "clean()",
            "strip()",
            "remove()"
        ],
        "answer": 0
    },
    {
        "question": "What is the function used to generate a random number in PHP?",
        "options": [
            "random()",
            "rand()",
            "generate()",
            "random_number()"
        ],
        "answer": 1
    },
    {
        "question": "What is the function used to convert a string to lowercase in PHP?",
        "options": [
            "lower()",
            "strtolower()",
            "case_lower()",
            "case_lower_string()"
        ],
        "answer": 1
    },
    {
        "question": "What is the function used to redirect the user to a different page in PHP?",
        "options": [
            "header()",
            "redirect()",
            "go_to()",
            "change_page()"
        ],
        "answer": 0
    },
    {
        "question": "What is the function used to remove a specific element from an array in PHP?",
        "options": [
            "remove()",
            "delete()",
            "unset()",
            "remove_element()"
        ],
        "answer": 2
    },
    {
        "question": "What is the function used to sort an array in ascending order in PHP?",
        "options": [
            "sort()",
            "ascending()",
            "order()",
            "arrange()"
        ],
        "answer": 0
    },
    {
        "question": "What is the function used to check if a string contains a specific substring in PHP?",
        "options": [
            "in()",
            "str_in()",
            "strpos()",
            "contains()"
        ],
        "answer": 2
    },
    {
        "question": "What is the keyword used to define a class in PHP?",
        "options": [
            "class",
            "function",
            "object",
            "interface"
        ],
        "answer": 0
    },
    {
        "question": "What is the keyword used to instantiate an object in PHP?",
        "options": [
            "instantiate",
            "new",
            "create",
            "generate"
        ],
        "answer": 1
    },
    {
        "question": "What is the keyword used to refer to the current instance of a class in PHP?",
        "options": [
            "self",
            "this",
            "instance",
            "current"
        ],
        "answer": 1
    },
    {
        "question": "What is the keyword used to access a static property or method in PHP?",
        "options": [
            "static",
            "self",
            "this",
            "class"
        ],
        "answer": 0
    },
    {
        "question": "What is the keyword used to define a constant in a class in PHP?",
        "options": [
            "constant",
            "define",
            "const",
            "static"
        ],
        "answer": 2
    },
    {
        "question": "What is the keyword used to inherit from a parent class in PHP?",
        "options": [
            "extend",
            "inherit",
            "parent",
            "super"
        ],
        "answer": 0
    },
    {
        "question": "What is the keyword used to override a method in a child class in PHP?",
        "options": [
            "override",
            "replace",
            "new",
            "parent"
        ],
        "answer": 2
    },
    {
        "question": "What is the method used to implement an interface in a class in PHP?",
        "options": [
            "implements",
            "interface",
            "implement",
            "extend"
        ],
        "answer": 0
    },
    {
        "question": "What is the magic method used to create a string representation of an object in PHP?",
        "options": [
            "__tostring()",
            "__string()",
            "__print()",
            "__output()"
        ],
        "answer": 0
    },
    {
        "question": "What is the magic method used to handle errors in PHP?",
        "options": [
            "__error()",
            "__exception()",
            "__debug()",
            "__call()"
        ],
        "answer": 1
    },
    {
        "question": "What does SQL stand for?",
        "options": [
            "Structured Query Language",
            "Standard Query Language",
            "System Query Language",
            "Special Query Language"
        ],
        "answer": 0
    },
    {
        "question": "What is a database schema?",
        "options": [
            "A diagram that shows the relationships between database tables",
            "A file that contains SQL statements",
            "A set of rules that governs the structure of a database",
            "A list of user accounts and their permissions"
        ],
        "answer": 2
    },
    {
        "question": "Which SQL keyword is used to retrieve data from a table?",
        "options": [
            "INSERT",
            "SELECT",
            "UPDATE",
            "DELETE"
        ],
        "answer": 1
    },
    {
        "question": "Which SQL function is used to return the average value of a numeric column?",
        "options": [
            "AVG()",
            "SUM()",
            "MAX()",
            "MIN()"
        ],
        "answer": 0
    },
    {
        "question": "Which SQL statement is used to update data in a table?",
        "options": [
            "INSERT INTO",
            "SELECT",
            "UPDATE",
            "DELETE FROM"
        ],
        "answer": 2
    },
    {
        "question": "Which SQL statement is used to delete data from a table?",
        "options": [
            "INSERT INTO",
            "SELECT",
            "UPDATE",
            "DELETE FROM"
        ],
        "answer": 3
    },
    {
        "question": "Which SQL operator is used to combine two or more conditions in a WHERE clause?",
        "options": [
            "AND",
            "OR",
            "NOT",
            "XOR"
        ],
        "answer": 0
    },
    {
        "question": "Which SQL function is used to count the number of rows in a table?",
        "options": [
            "COUNT()",
            "AVG()",
            "SUM()",
            "MAX()"
        ],
        "answer": 0
    },
    {
        "question": "Which SQL statement is used to create a new table?",
        "options": [
            "CREATE TABLE",
            "ALTER TABLE",
            "DROP TABLE",
            "RENAME TABLE"
        ],
        "answer": 0
    },
    {
        "question": "Which SQL statement is used to add a new column to a table?",
        "options": [
            "ADD COLUMN",
            "CREATE COLUMN",
            "INSERT COLUMN",
            "UPDATE COLUMN"
        ],
        "answer": 0
    },
    {
        "question": "What is Git?",
        "options": [
            "A web development language",
            "A version control system",
            "A text editor",
            "A database management system"
        ],
        "answer": 1
    },
    {
        "question": "What is a repository in Git?",
        "options": [
            "A server that hosts the code",
            "A directory that contains the code and Git metadata",
            "A branch in Git",
            "A commit in Git"
        ],
        "answer": 1
    },
    {
        "question": "What is the command used to initialize a Git repository?",
        "options": [
            "git init",
            "git add",
            "git commit",
            "git push"
        ],
        "answer": 0
    },
    {
        "question": "What is a branch in Git?",
        "options": [
            "A server that hosts the code",
            "A directory that contains the code and Git metadata",
            "A copy of the code that can be modified independently",
            "A commit in Git"
        ],
        "answer": 2
    },
    {
        "question": "What is a pull request in GitHub?",
        "options": [
            "A request to merge changes from one branch into another",
            "A request to revert changes made in a commit",
            "A request to delete a repository",
            "A request to clone a repository"
        ],
        "answer": 0
    },
    {
        "question": "What is the command used to add changes to the staging area in Git?",
        "options": [
            "git init",
            "git add",
            "git commit",
            "git push"
        ],
        "answer": 1
    },
    {
        "question": "What is the command used to view the commit history in Git?",
        "options": [
            "git init",
            "git add",
            "git log",
            "git push"
        ],
        "answer": 2
    },
    {
        "question": "What is the command used to create a new branch in Git?",
        "options": [
            "git branch",
            "git clone",
            "git pull",
            "git checkout"
        ],
        "answer": 0
    },
    {
        "question": "What is the command used to switch to a different branch in Git?",
        "options": [
            "git branch",
            "git clone",
            "git pull",
            "git checkout"
        ],
        "answer": 3
    },
    {
        "question": "What is the command used to push changes to a remote repository in Git?",
        "options": [
            "git init",
            "git add",
            "git commit",
            "git push"
        ],
        "answer": 3
    }
];

let answeredQuestions = [];
// render the questions in #mcqQuestions div with above template
const mcqQuestions = document.getElementById("mcq-questions");


// on click of user-answer store question and option in answeredQuestions array
// update if already answered
// apply it to all .user-answer divs
document.addEventListener("click", (e) => {
    if (e.target.classList.contains("user-answer")) {
        const questionIndex = parseInt(e.target.dataset.question);
        const optionIndex = parseInt(e.target.dataset.option);
        // check if answer is correct
        const question = questions[questionIndex];
        const isCorrect = optionIndex === question.answer;

        // store the answer in answeredQuestions array with questionIndex and optionIndex and isCorrect
        const questionAnswered = answeredQuestions.find((question) => question.questionIndex === questionIndex);
        if (questionAnswered) {
            questionAnswered.optionIndex = optionIndex;
            questionAnswered.isCorrect = isCorrect;
        }
        else {
            answeredQuestions.push({ questionIndex, optionIndex, isCorrect });
        }
        // update .answer-counter div
        const answerCounter = document.getElementById("answer-counter");
        answerCounter.innerHTML = answeredQuestions.length;

        // show submit button if all questions are answered
        if (answeredQuestions.length > 0) {
            document.getElementById("submit-btn").style.display = "block";
        }
    }

});

// submit-btn click event
// show the result  in #result div
document.getElementById("submit-btn").addEventListener("click", () => {
    const result = document.getElementById("result");
    const correctAnswers = answeredQuestions.filter((question) => question.isCorrect).length;
    // hide quiz div
    document.getElementById("mcq-questions").style.display = "none";
    // also hide submit button
    document.getElementById("submit-btn").style.display = "none";

    result.innerHTML = `
        <div class="result">
            <div class="result-title success-message">
                Congratulations! 🥳 You have completed the quiz.
            </div>
            <div class="result-title">
                You have answered ${correctAnswers} out of ${questions.length} questions correctly.
            </div>
            <div class="result-options">
                <button class="btn btn-primary" id="reset-btn">Reset</button>
            </div>
        </div>
    `;
    document.getElementById("reset-btn").addEventListener("click", () => {
        answeredQuestions.length = 0;
        answeredQuestions = [];
        document.getElementById("answer-counter").innerHTML = answeredQuestions.length;
        document.getElementById("result").innerHTML = "";
        // show quiz div
        document.getElementById("mcq-questions").style.display = "block";
        // also show submit button
        document.getElementById("submit-btn").style.display = "block";
        renderQuiz(questions, mcqQuestions);
        // reset answer counter

    });
});



function renderQuiz(questions,element) {
    element.innerHTML = questions.map((question, questionIndex) => {
        const options = question.options.map((option, optionIndex) => {
            let name = question.question.replace(/[^a-zA-Z0-9]/g, "");
            let uniqueOptionId = option.replace(/[^a-zA-Z0-9]/g, "") + questionIndex + optionIndex;
            return `
            <div class="form-check" >
                <input data-question=${questionIndex} data-option=${optionIndex} type="radio" class="form-check-input user-answer" value=${optionIndex} name=${name} id="${uniqueOptionId}">
                <label for="${uniqueOptionId}">${option}</label>
            </div>
        `;
        }
        ).join("");
        return `
            <div class="quiz">
                <div class="quiz-title">
                ${questionIndex + 1}. ${question.question}
                </div>
                <div class="quiz-options">
                    ${options}
                </div>
            </div>

    `;

    }).join("");
}
renderQuiz(questions,mcqQuestions);
