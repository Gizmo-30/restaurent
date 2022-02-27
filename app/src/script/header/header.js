export const header = () => {
    const menuButton = document.querySelector('.header__menu-button'),
    aside = document.querySelector('.header__aside'),    
    reservationButton = document.querySelector('.header__nav-button'),
    headerImg = document.querySelector('.header-img'),
    headerNav = document.querySelector('.header__nav');
    // menuButton.addEventListener('click', (e) => {
    //     console.log(e.target );
    //     if(e.target.classList.contains('header__menu-button', 'header__menu-line')) {
    //         aside.classList.add('active')  
    //     }else {
    //         aside.classList.remove('active') 
    //     }
    // })

    menuButton.addEventListener('click',  () => {
        aside.classList.add('active')
        reservationButton.style.opacity = `0`
        headerNav.style = `
            z-index: -1;
        `
        
    })

    headerImg.addEventListener('click', () => {
        aside.classList.remove('active')        
        reservationButton.style.opacity = `1`  
        headerNav.style = `
            z-index: 0;
        `
    })
    
}

export default header 