document.addEventListener('DOMContentLoaded', () => {
    const defilement = document.querySelector('.defilement-carousel');
    const elementCarousel = document.querySelectorAll('.element-carousel'); 
    const flecheGauche = document.querySelector('.fleche-gauche'); 
    const flecheDroite = document.querySelector('.fleche-droite');
    
    if (!defilement || !flecheGauche || !flecheDroite || elementCarousel.length === 0) {
        console.error("Éléments du carrousel manquants ou non trouvés.");
        return;
    }
    
    const nbreElement = elementCarousel.length;
    let index = 0;
    
    const updateCarousel = () => {
        const decalage = -index * 100;
        defilement.style.transform = `translateX(${decalage}%)`;
    };

    flecheDroite.addEventListener('click', () => {
        index = (index + 1) % nbreElement;
        updateCarousel();
    });

    flecheGauche.addEventListener('click', () => {
        index = (index - 1 + nbreElement) % nbreElement;
        updateCarousel();
    });

    updateCarousel(); 
});