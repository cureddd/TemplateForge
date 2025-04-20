document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.querySelector('.input-search');
    const templateCards = document.querySelectorAll('.template-card');
    const toTemplatesBtn = document.getElementById('to-templates-btn');
    const templatesSection = document.getElementById('templates');
    const aboutSection = document.getElementById('about');

    
    toTemplatesBtn.addEventListener('click', function(e) {
        e.preventDefault();
        templatesSection.scrollIntoView({ behavior: 'smooth' });
    });

    
    document.querySelector('a[href="#about"]').addEventListener('click', function(e) {
        e.preventDefault();
        aboutSection.scrollIntoView({ behavior: 'smooth' });
    });

    // Поиск сломался и пришлось код поменять, богдан прости но я не все поменял только 25-26 строку потому-что я менял названия для прокруток и тд...//
    searchInput.addEventListener('input', function(e) {
        const searchValue = e.target.value.toLowerCase();

        templateCards.forEach(card => {
            const title = card.querySelector('h3').textContent.toLowerCase();
            if (title.includes(searchValue)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });

    //это тоже функция скачивания, опираясь на нее я искал ошибки в этой функции и поэтому на всякий случай решил не убирать//
    function downloadFile(fileUrl, fileName) {
        fetch(fileUrl)
            .then(response => response.blob())
            .then(blob => {
                const url = window.URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.style.display = 'none';
                a.href = url;
                a.download = fileName;
                document.body.appendChild(a);
                a.click();
                window.URL.revokeObjectURL(url);
                document.body.removeChild(a);
            })
            .catch(err => console.error('Ошибка при скачивании:', err));
    }

   //P/S -> Сломались кнопки скачать и пришлось сделать обработчики для них(нашел в чате ГПТ)//
    document.getElementById('download-portfolio').addEventListener('click', function(e) {
        e.preventDefault();
        downloadFile('/images/templates/template-portfolio.html', 'template-portfolio.html');
    });

    document.getElementById('download-business').addEventListener('click', function(e) {
        e.preventDefault();
        downloadFile('/images/templates/template-business.html', 'template-business.html');
    });

    document.getElementById('download-blog').addEventListener('click', function(e) {
        e.preventDefault();
        downloadFile('/images/templates/template-blog.html', 'template-blog.html');
    });

    document.getElementById('download-ecommerce').addEventListener('click', function(e) {
        e.preventDefault();
        downloadFile('/images/templates/template-ecommerce.html', 'template-ecommerce.html');
    });

    document.getElementById('download-cafe').addEventListener('click', function(e) {
        e.preventDefault();
        downloadFile('/images/templates/template-cafe.html', 'template-cafe.html');
    });

    document.getElementById('download-photographer').addEventListener('click', function(e) {
        e.preventDefault();
        downloadFile('/images/templates/template-photographer.html', 'template-photographer.html');
    });

    document.getElementById('download-news').addEventListener('click', function(e) {
        e.preventDefault();
        downloadFile('/images/templates/template-news.html', 'template-news.html');
    });

    document.getElementById('download-personal').addEventListener('click', function(e) {
        e.preventDefault();
        downloadFile('/images/templates/template-personal.html', 'template-personal.html');
    });
});