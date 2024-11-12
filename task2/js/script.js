// JavaScript to toggle the burger menu
const burgerIcon = document.getElementById('burger-icon');
const navbarLinks = document.getElementById('navbar-links');

burgerIcon.addEventListener('click', () => {
    navbarLinks.classList.toggle('show');
});


// JavaScript for typing effect with color change

document.addEventListener('DOMContentLoaded', function () {
    const text = [
        "Hi, My name is",
        "SHUBHAM RAJ SHARMA,",
        "I am a passionate",
        "WEB DEVELOPER"
    ];
    let index = 0;
    let lineIndex = 0;
    const speed = 100; 
    const element = document.getElementById("typed-text");

    function typeWriter() {
        if (lineIndex < text.length) {
            const line = text[lineIndex];
            if (index < line.length) {
                let currentText = line.charAt(index);
                
                // Change color for SHUBHAM RAJ SHARMA text
                if (lineIndex === 1 && index >= 0 && index < line.length) {
                    currentText = `<span style="color: #f39c12;">${line.charAt(index)}</span>`; 
                }

                element.innerHTML += currentText;
                index++;
                setTimeout(typeWriter, speed); 
            } else {
                index = 0; 
                lineIndex++;
                element.innerHTML += "<br>"; 
                setTimeout(typeWriter, 400); 
            }
        }
    }

    typeWriter();
});


