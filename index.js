// Get references to the input elements for colors
let colorOne = document.getElementById("color-a");
let colorTwo = document.getElementById("color-b");

// Set the default direction for the gradient
let currentDirection = 'to bottom';

// Get reference to the output textarea where the generated CSS code will be displayed
let outputCode = document.getElementById("code");

/**
 * Sets the direction of the gradient and updates the UI to reflect the active direction button.
 * @param {string} value - The direction value (e.g., 'to bottom', 'to right').
 * @param {HTMLElement} _this - The button element that was clicked.
 */
function setDirection(value, _this) {
    // Get all direction buttons
    let directions = document.querySelectorAll(".buttons button");

    // Remove the 'active' class from all buttons
    for (let i of directions) {
        i.classList.remove("active");
    }

    // Add the 'active' class to the clicked button
    _this.classList.add("active");

    // Update the current direction with the selected value
    currentDirection = value;
}

/**
 * Generates the CSS code for the linear gradient and updates the background of the document body.
 */
function generateCode() {
    // Generate the CSS code for the linear gradient and display it in the output textarea
    outputCode.value = `background-image: linear-gradient(${currentDirection}, ${colorOne.value}, ${colorTwo.value})`;

    // Set the background image of the body to the generated linear gradient
    document.getElementsByTagName("BODY")[0].style.backgroundImage = `linear-gradient(${currentDirection}, ${colorOne.value}, ${colorTwo.value})`;
}

/**
 * Copies the generated CSS code from the output textarea to the clipboard.
 */
function copyText() {
    // Select the text in the output textarea
    outputCode.select();

    // Execute the copy command to copy the selected text to the clipboard
    document.execCommand('copy');

    // Alert the user that the gradient CSS code has been copied
    alert("Gradient Copied!");
}
