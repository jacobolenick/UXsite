document.addEventListener('DOMContentLoaded', () => {
    const changeColorBtn = document.getElementById('changeColorBtn');
    
    changeColorBtn.addEventListener('click', () => {
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        document.body.style.backgroundColor = "#" + randomColor;
    });
});

function checkPassword(url) {
    const password = prompt("Please enter the password to view this case study:");
    if (password === "coffeedesigner") { // Replace "AXS2023" with your desired password
        sessionStorage.setItem('authenticated', 'true');
        window.location.href = url;
    } else {
        alert("Incorrect password. Access denied.");
    }
}

document.addEventListener('DOMContentLoaded', function() {
    // Check if slider has already been initialized
    if (window.sliderInitialized) return;
    
    const sliderContainer = document.querySelector('.slider-container');
    if (!sliderContainer) return; // Exit if slider container doesn't exist
    
    const sliderIndicators = document.querySelector('.slider-indicators');
    const images = sliderContainer.querySelectorAll('.slider-image');
    let currentIndex = 0;

    // Clear existing indicators
    sliderIndicators.innerHTML = '';

    // Create indicators
    images.forEach((_, index) => {
        const indicator = document.createElement('div');
        indicator.classList.add('indicator');
        indicator.addEventListener('click', () => goToSlide(index));
        sliderIndicators.appendChild(indicator);
    });

    const indicators = sliderIndicators.querySelectorAll('.indicator');

    function goToSlide(index) {
        images[currentIndex].classList.remove('active');
        indicators[currentIndex].classList.remove('active');
        currentIndex = index;
        images[currentIndex].classList.add('active');
        indicators[currentIndex].classList.add('active');
    }

    function nextSlide() {
        goToSlide((currentIndex + 1) % images.length);
    }

    // Initialize first slide
    goToSlide(0);

    // Auto-advance slides every 5 seconds
    const intervalId = setInterval(nextSlide, 5000);

    // Mark slider as initialized
    window.sliderInitialized = true;

    // Clean up function
    return function cleanup() {
        clearInterval(intervalId);
        window.sliderInitialized = false;
    };
});
