document.addEventListener('DOMContentLoaded', function () {
    const ratingForm = document.getElementById('container');
    const thankYouMessage = document.getElementById('thankYouMessage');
    let ratingsArray = [];
    ratingForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form submission
        const selectedRating = document.getElementById('rating').value;
        ratingsArray.push(selectedRating);
        localStorage.setItem('ratings', JSON.stringify(ratingsArray));
        thankYouMessage.classList.remove('hidden'); // Display thank you message
        console.log(ratingsArray);
    });
});