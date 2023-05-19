const getColor = () => {
    // Hex Code
    const randomNumber = Math.floor(Math.random() * 16777215);
    const  randomCode = '#' + randomNumber.toString(16);
    document.body.style.backgroundColor = randomCode;
    document.getElementById("color-code").innerText = randomCode;
    
    // Copy to clipboard
    navigator.clipboard.writeText(randomCode);
}

// Event Call
document.getElementById("btn").addEventListener(
    "click",
    getColor
);

// Initial Call
getColor();