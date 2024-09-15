document.addEventListener("DOMContentLoaded", function() {
    // Select all filter headers (h4 elements)
    const filterHeaders = document.querySelectorAll('.filter-header');

    // Add click event listener to each header
    filterHeaders.forEach(header => {
        header.addEventListener('click', function() {
            // Get the closest section and find the ul.dropdown within it
            const dropdown = this.nextElementSibling.querySelector('ul.dropdown');

            // Check if dropdown exists, then toggle the 'active' class to show/hide it
            if (dropdown) {
                dropdown.classList.toggle('active');
            }
        });
    });
});


let slideIndex = 0;

function showSlides() {
    let slides = document.querySelector('.slides-wrapper');
    let totalSlides = slides.children.length;
    
    // Update the slide index to ensure it loops correctly
    slideIndex = (slideIndex + totalSlides) % totalSlides;
    
    // Move the slides wrapper to the correct position
    slides.style.transform = `translateX(${-slideIndex * 100}%)`;
}

function plusSlides(n) {
    slideIndex += n;
    showSlides();
}

document.addEventListener("DOMContentLoaded", function() {
    showSlides(); // Initialize the slideshow
});


<script>
    document.querySelector('.collapsible').addEventListener('click', function() {
        this.classList.toggle('active')}
        var content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null}
         else {
            content.style.maxHeight = content.scrollHeight + "px"}
    );
</script>


