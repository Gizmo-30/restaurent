export const aboutSection = () => {
    const sliderController = document.querySelectorAll('.mainAbout__slider-controller'),
        sliderItem = document.querySelectorAll('.mainAbout__slider-item'),
        sliderBlock = document.querySelector('.mainAbout__section-slider');
        
    const width = sliderBlock.clientWidth 
    const lastSlider = sliderItem.length - 1
    sliderController.forEach(element => {
        element.addEventListener('click', (e) => {
            const sliderActive = document.querySelector('.mainAbout__slider-controller.active')
            removeActivve(sliderController)
            element.classList.add('active')
            let index = e.target.dataset.index
            let res = width * index
            if (index > sliderActive.dataset.index) {
                for (let i = 0; i <= lastSlider; i++) {
                    sliderItem[i].style.transform = `translateX(-${res}px)`
                }
            }
            else {
                sliderItem.forEach(element => {
                    element.style.transform = `translateX(0px)` 
                });
                for (let i = 0; i <= lastSlider; i++) {
                    sliderItem[i].style.transform = `translateX(-${res}px)`
                }
            }
        })
    });

    


    const removeActivve = (array) => {
        array.forEach(element => {
            element.classList.remove('active')
        });
        for (let i = 0; i < array.length; i++) {
            array[i].setAttribute('data-index', i)
        }
    }



}

export default aboutSection