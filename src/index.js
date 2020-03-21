// This line is a comment in JavaScript. It starts with a double slash.

/* This group of lines is a comment too, but it starts with a slash followed by an asterisk and
ends with an asterisk followed by a slash.
A comment is regular text a developer leaves to explain what the following code is doing,
when it is not obvious, or to remind themselves to complete or review it.
Comments are ignored by the JavaScript engine (typically a web browser) when parsing (interpreting)
the file. */

/* Like in other programming languages, in JavaScript each variable, function or any other symbol
defined by the developer is accessible only in that part of the program where it was declared.
A variable which is defined inside a function or an IF block, in example, is 'visible' only within
that portion of code, and it cannot be accessed outside of it.
The range of visibility of a variable is known as "scope (of a variable)". */   

// The JavaScript engine executes code in the order it encounters it.

/* The following "alert" function is one of the many native functions in JavaScript. More
specifically, it's one of the functions defined in the "GLOBAL SCOPE" of the web browser.
Every global function or variable is in reality a member of the global "window" object,
which represents indeed the web browser's windows. We could explicitly write in fact
"windows.alert", but that's not necessary. */

// The "alert" function displays a message dialog to the user, showing the text argument
// passed to the function.
// The popup displayed is a MODAL dialog, which means JavaScript won't continue executing
// the following code until the users has dismissed (closed) the popup.
alert('Hello, and welcome to Sowa Programming School!');

// We declare and define now a variable named "bookings" where we will keep track of all
// the bookings made by people to eat at our amazing restaurant!
// Two things to note here:
// 1) The variable definition is introduced by the keyword "const". It stands for 'constant',
//    meaning that the value of the variable cannot be changed after it is initialised the first
//    time. If we wanted to change its value over the course of our program, instead, we would have
//    prefixed it with the keyword "var" (or the similar "let"), which stands for 'variable'.
// 2) The variable is initialised as an ARRAY (because of the []). An ARRAY is one of the primitive
//    data types in many programming languages, and it represents a list of values or objects
//    which can be accessed by their position (we say "index") within the array.
//    The first booking, in example, will be "bookings[0]", the second "bookings[1]", and so on.
const bookings = [];

// Here we define a function for adding a booking to our "bookings" array.
// Observe that when the JavaScript engine parses the file and reaches this point, it doesn't
// execute the function but it simply knows that a function named 'addBooking' was defined
// using the keyword 'function', and that it exists in the program.
// To execute the function, instead, we will 'call' without the keyword function, as we did
// earlier with the "alert" function.
function addBooking() {
    // The following instructions use the method "querySelector" to retrieve specific HTML
    // elements we have defined in our "index.html" page.
    // The "querySelector" method belongs to the global variable "document" which, again,
    // is implicitly a property of the "window" object.
    // We want to access those HTML elements so that we can read the values typed in by
    // the user and store them in the variables "name", "numberOfGuests", etc.
    // Note that we're prefixing the ID of each element with an hash symbol (#),
    // so that the "querySelector" method will look for "id" attributes found in 
    // the "index.html" file.
    const name = document.querySelector('#bookingName').value;
    const numberOfGuests = document.querySelector('#bookingGuestNumber').value;
    const hour = document.querySelector('#bookingHour').value;
    const minute = document.querySelector('#bookingMinute').value;
    // While the previous variables store primitive type values (in our example either a string or
    // an integer number), with the following "newBooking" variable we're creating an object
    // (because of the {}) composed of three properties. The first two properties have the same name
    // as the variables defined above. The third property "time" is a string built by concatenating
    // the variables "hour" and "minute".
    const newBooking = {
        name,
        numberOfGuests,
        time: hour + ':' + minute
    }
    // Once we have created our new booking object, we call the "push" method to append it
    // at the end of our "bookings" array.
    bookings.push(newBooking);
    // Now that the content of our "bookings" list has changed, we call the "updateBookingList"
    // function to update the list on our HTML page.
    updateBookingList();
}

// This function re-generates the HTML list of bookings, dynamically manipulating the content
// of the "index.html" page.
// By 'dynamically' we mean while our code is executing (also 'running') in the browser.
function updateBookingList() {
    // Again, we use "querySelector" to find our bookings list.
    const bookingList = document.querySelector('#bookingList');
    // We clear that portion of our web page, by setting the inner HTML of the bookings list
    // to an empty (text) string.
    bookingList.innerHTML = '';
    // Now we iterate through all the bookings in our "bookings" array, (re)adding them one by one
    // to our HTML page.
    for (let index = 0; index < bookings.length; index++) {
        const booking = bookings[index];
        // With the following "createElement" method we generate a new <DIV> element in our HTML tree,
        // which will be the container for the current booking.
        // in HTML, the DIV element is used indeed as a container for other elements.  
        const bookingDiv = document.createElement('div');
        // We set the text content of our DIV with all the information we need about the current
        // booking 
        bookingDiv.textContent = booking.name + ' - ' + booking.numberOfGuests + ' person(s) at ' + booking.time;
        // Finally, the following "appendChild" method adds the booking's DIV element to our HTML
        // "bookingList", on screen.
        bookingList.appendChild(bookingDiv);        
    }
}