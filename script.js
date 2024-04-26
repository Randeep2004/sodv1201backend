document.addEventListener('DOMContentLoaded', function () {
    const quoteText = document.getElementById('quote').textContent.trim();
    const quoteLength = quoteText.length;
    const quoteElement = document.getElementById('quote');
    let counter = 0;

    // Clear the quote text to animate each letter individually
    quoteElement.textContent = '';

    function animateQuote() {
        if (counter < quoteLength) {
            quoteElement.textContent += quoteText[counter];
            counter++;
            setTimeout(animateQuote, 300);
        }
    }

    animateQuote();
});