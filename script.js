document.addEventListener('DOMContentLoaded', () => {
    const toTemplatesBtn = document.getElementById('to-templates-btn');
    
    if (toTemplatesBtn) {
        toTemplatesBtn.addEventListener('click', (event) => {
            event.preventDefault(); 
            const templatesSection = document.getElementById('templates');
            if (templatesSection) {
                templatesSection.scrollIntoView({ behavior: 'smooth' }); 
            }
        });
    }
});