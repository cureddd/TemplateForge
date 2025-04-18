document.addEventListener('DOMContentLoaded', () => {
    const toTemplatesBtn = document.getElementById('to-templates-btn');
    const templatesSection = document.getElementById('templates');

    toTemplatesBtn.addEventListener('click', (event) => {
        event.preventDefault();  
        try {
            templatesSection.scrollIntoView({ behavior: 'smooth' });          
        } catch (error) {    
            const topPos = templatesSection.getBoundingClientRect().top + window.pageYOffset;
            window.scrollTo({
                top: topPos,
                behavior: 'smooth'
            });
        }
    });

    const form = document.querySelector(".search");
    const enterImage = document.querySelector(".enter-img");
    const input = document.querySelector(".input-search");
    const cards = document.querySelectorAll(".template-card");
    
    enterImage.addEventListener("click", function () {
        form.submit();
    });
    
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        const inputValue = input.value.trim().toLowerCase();
    
        cards.forEach(card => {
            if (inputValue !== "") {
                if (card.querySelector("h3").textContent.toLowerCase().includes(inputValue)) {
                    card.style.display = "block";
                } else {
                    card.style.display = "none";
                }
            } else {
                card.style.display = "block";
            }
        });
    });
});