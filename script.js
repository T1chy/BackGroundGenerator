var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var downloadButton = document.getElementById("downloadBackground");
var canvas = document.createElement("canvas");

// Function to set the gradient background
function setGradient() {
    body.style.background = 
        "linear-gradient(to right, " 
        + color1.value 
        + ", " 
        + color2.value 
        + ")";

    css.textContent = body.style.background + ";";
}

// Function to generate a random color
function getRandomColor() {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return "#" + randomColor;
}

// Function to update the random colors
function updateRandomColors() {
    const randomColor1 = getRandomColor();
    const randomColor2 = getRandomColor();

    color1.value = randomColor1;
    color2.value = randomColor2;

    setGradient();
}

// Add an event listener to the "Generate Random Colors" button
var generateRandomColorsButton = document.getElementById("generateRandomColors");
generateRandomColorsButton.addEventListener("click", updateRandomColors);

// Initial gradient background setup
setGradient();

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

function downloadBackgroundAsImage() {
    // Set canvas dimensions to match the body element
    canvas.width = body.clientWidth;
    canvas.height = body.clientHeight;

    // Get the 2D context of the canvas
    var ctx = canvas.getContext("2d");

    // Define the gradient
    var gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
    gradient.addColorStop(0, color1.value);
    gradient.addColorStop(1, color2.value);

    // Fill the canvas with the gradient
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Convert the canvas to an image data URL
    var dataURL = canvas.toDataURL("image/png"); // Change "image/png" to "image/jpeg" for .jpg format

    // Create a download link
    var a = document.createElement("a");
    a.href = dataURL;
    a.download = "background.png"; // Change to "background.jpg" for .jpg format

    // Trigger a click event on the link to prompt the download
    a.click();
}

downloadButton.addEventListener("click", downloadBackgroundAsImage);