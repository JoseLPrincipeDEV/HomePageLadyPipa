// Configuración para el slider principal
function changeSlideMain(slideIndex, slider) {
    const slides = slider.querySelectorAll('.slider__section');
    const totalSections = slides.length;
    const widthImg = 100 / totalSections;
    slider.style.transform = `translateX(-${slideIndex * widthImg}%)`;
}

// Configuración para el slider de la sección cuatro
function setupSliderCuatro() {
    const sliderContainer = document.querySelector('.slider-section-cuarto');
    const slides = document.querySelectorAll('.slider-muestra-cuatro');
    let currentSlideCuatro = 0;
    
    function changeSliderCuatro(slideIndex) {
        currentSlideCuatro = slideIndex;
        const widthImg = 33.4 / slides.length;
        sliderContainer.style.transition = "transform 0.6s ease";
        sliderContainer.style.transform = `translateX(-${currentSlideCuatro * widthImg}%)`;
    }

    // Configurar botones de la sección cuatro
    document.querySelector(".left-btn")?.addEventListener("click", () => changeSliderCuatro(0));
    document.querySelector(".center-btn")?.addEventListener("click", () => changeSliderCuatro(1));
    document.querySelector(".right-btn")?.addEventListener("click", () => changeSliderCuatro(2));
}

// Configuración para el slider de la sección cinco
function setupSliderCinco() {
    const sliderCinco = document.querySelector('.slider__cinco');
    const sliderSectionsCinco = document.querySelectorAll('.sleader__cinco__section');
    const totalSlidesCinco = sliderSectionsCinco.length;
    let currentSlideCinco = 0;
    const widthImgCinco = 100 / totalSlidesCinco;

    function changeSliderCinco(slideIndex) {
        currentSlideCinco = slideIndex;
        sliderCinco.style.transition = "transform 0.6s ease";
        sliderCinco.style.transform = `translateX(-${currentSlideCinco * widthImgCinco}%)`;
    }

    function moveToRightCinco() {
        if (currentSlideCinco >= totalSlidesCinco - 1) {
            currentSlideCinco = 0;
        } else {
            currentSlideCinco++;
        }
        changeSliderCinco(currentSlideCinco);
    }

    function moveToLeftCinco() {
        if (currentSlideCinco <= 0) {
            currentSlideCinco = totalSlidesCinco - 1;
        } else {
            currentSlideCinco--;
        }
        changeSliderCinco(currentSlideCinco);
    }

    // Configurar botones de la sección cinco
    document.querySelector(".first-btn")?.addEventListener("click", () => changeSliderCinco(0));
    document.querySelector(".second-btn")?.addEventListener("click", () => changeSliderCinco(1));
    document.querySelector(".third-btn")?.addEventListener("click", () => changeSliderCinco(2));
    document.querySelector(".fourth-btn")?.addEventListener("click", () => changeSliderCinco(3));
    document.querySelector(".btn__left__cinco")?.addEventListener("click", moveToLeftCinco);
    document.querySelector(".btn__right__cinco")?.addEventListener("click", moveToRightCinco);
}

// Configuración para el slider de la sección seis
function setupSliderSeis() {
    const btnLeftSeis = document.querySelector("#button-prev");
    const btnRightSeis = document.querySelector("#button-next");
    const sliderTrackSeis = document.querySelector("#track");
    const sliderSectionsSeis = document.querySelectorAll(".slider__seis");
    let currentIndexSeis = 0;
    const totalSectionsSeis = sliderSectionsSeis.length;
    const sectionWidthSeis = sliderSectionsSeis[0]?.offsetWidth || 0;

    function moveToRightSeis() {
        if (currentIndexSeis >= totalSectionsSeis - 4) {
            currentIndexSeis = 0;
            sliderTrackSeis.style.transform = `translateX(0px)`;
        } else {
            currentIndexSeis++;
            sliderTrackSeis.style.transform = `translateX(-${currentIndexSeis * sectionWidthSeis}px)`;
        }
        sliderTrackSeis.style.transition = "transform 0.6s ease";
    }

    function moveToLeftSeis() {
        if (currentIndexSeis <= 0) {
            currentIndexSeis = totalSectionsSeis - 4;
        } else {
            currentIndexSeis--;
        }
        sliderTrackSeis.style.transform = `translateX(-${currentIndexSeis * sectionWidthSeis}px)`;
        sliderTrackSeis.style.transition = "transform 0.6s ease";
    }

    btnLeftSeis?.addEventListener("click", moveToLeftSeis);
    btnRightSeis?.addEventListener("click", moveToRightSeis);
}

// Función principal de inicialización
function setupSlider(contenedor) {
    const btnLeft = contenedor.querySelector(".btn-left-section, .btn__left");
    const btnRight = contenedor.querySelector(".btn-right-section, .btn__right");
    const slider = contenedor.querySelector(".sliders");
    const sliderSections = slider?.querySelectorAll(".slider__section");

    if (!btnLeft || !btnRight || !slider || !sliderSections?.length) {
        console.error("Elementos no encontrados en el contenedor:", contenedor);
        return;
    }

    let counter = 0;
    const totalSections = sliderSections.length;
    const widthImg = 100 / totalSections;

    function moveToRight() {
        if (counter >= totalSections - 1) {
            counter = 0;
            slider.style.transition = "none";
        } else {
            counter++;
            slider.style.transition = "transform 0.6s ease";
        }
        slider.style.transform = `translateX(-${counter * widthImg}%)`;
        changeSlideMain(counter, slider);
    }

    function moveToLeft() {
        if (counter <= 0) {
            counter = totalSections - 1;
            slider.style.transition = "none";
        } else {
            counter--;
            slider.style.transition = "transform 0.6s ease";
        }
        slider.style.transform = `translateX(-${counter * widthImg}%)`;
        changeSlideMain(counter, slider);
    }

    btnRight.addEventListener("click", e => {
        e.preventDefault();
        moveToRight();
    });

    btnLeft.addEventListener("click", e => {
        e.preventDefault();
        moveToLeft();
    });
}

// Inicialización cuando el DOM está listo
document.addEventListener("DOMContentLoaded", () => {
    // Inicializar sliders principales
    const sliders = document.querySelectorAll(".contenedor__slider, .muestra__contenedor");
    if (sliders.length === 0) {
        console.error("No se encontraron sliders principales");
    } else {
        sliders.forEach(setupSlider);
    }

    // Inicializar sliders específicos
    setupSliderCuatro();
    setupSliderCinco();
    setupSliderSeis();

    // Mostrar primera imagen en todos los sliders
    document.querySelectorAll(".sliders").forEach(slider => {
        changeSlideMain(0, slider);
    });
});


function handleScroll() {
    const header = document.querySelector('.header');
    const scrollPosition = window.scrollY;
    
    if (scrollPosition > 500) {
        header.classList.add('header--scrolled');
    } else {
        header.classList.remove('header--scrolled');
    }
}

window.addEventListener('scroll', handleScroll);
document.addEventListener('DOMContentLoaded', handleScroll);

document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.slider__box ul');
    const slides = document.querySelectorAll('.slider__box li');
    const dots = document.querySelectorAll('.slider__nav1 a');
    const arrowLeft = document.querySelector('.arrow-left');
    const arrowRight = document.querySelector('.arrow-right');
    
    let currentSlide = 0;
    const totalSlides = slides.length;
    
    function updateSlider(index) {
        // Actualizar posición del slider
        slider.style.transform = `translateX(-${index * 33.333}%)`;
        
        // Actualizar dots
        dots.forEach(dot => dot.classList.remove('active'));
        dots[index].classList.add('active');
        
        currentSlide = index;
    }
    
    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateSlider(currentSlide);
    }
    
    function prevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        updateSlider(currentSlide);
    }
    
    // Event Listeners para las flechas
    arrowLeft.addEventListener('click', prevSlide);
    arrowRight.addEventListener('click', nextSlide);
    
    // Event Listeners para los dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            updateSlider(index);
        });
    });
});