export const menuSection = () => {
    const mainBlock = document.querySelectorAll('.mainMenu__section-block ')
    mainBlock.forEach(element => {
        element.addEventListener('mouseover', () => {
            removeActive(mainBlock)
            element.classList.add('active')
        })
    });
    const removeActive = (array) => {
        array.forEach(element => {
            element.classList.remove('active')
        });
    }
}

export default menuSection