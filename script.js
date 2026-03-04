// Funcionalidades dos slides

document.addEventListener('DOMContentLoaded', function() {
    // Adicionar numeração aos slides
    const slides = document.querySelectorAll('.slide');
    slides.forEach((slide, index) => {
        const slideNumber = document.createElement('div');
        slideNumber.className = 'slide-number';
        slideNumber.textContent = `${index + 1} / ${slides.length}`;
        slide.appendChild(slideNumber);
    });

    // Suporte a navegação por teclado (opcional)
    let currentSlide = 0;
    
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
            scrollToSlide(currentSlide + 1);
        } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
            scrollToSlide(currentSlide - 1);
        }
    });

    function scrollToSlide(index) {
        if (index >= 0 && index < slides.length) {
            currentSlide = index;
            slides[index].scrollIntoView({ behavior: 'smooth' });
        }
    }

    // Rastrear qual slide está visível
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                currentSlide = Array.from(slides).indexOf(entry.target);
            }
        });
    }, { threshold: 0.5 });

    slides.forEach(slide => observer.observe(slide));
});

// Estilos dinâmicos para numeração
const style = document.createElement('style');
style.textContent = `
    .slide-number {
        position: absolute;
        bottom: 20px;
        right: 30px;
        font-size: 0.9em;
        color: #999;
        font-weight: 500;
    }

    .slide-cover .slide-number {
        color: rgba(255, 255, 255, 0.7);
    }

    .slide-closing .slide-number {
        color: rgba(255, 255, 255, 0.7);
    }
`;
document.head.appendChild(style);
