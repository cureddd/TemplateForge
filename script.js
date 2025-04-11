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
});