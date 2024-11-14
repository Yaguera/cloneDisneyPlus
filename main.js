const buttons = document.querySelectorAll('[data-menu-button]');

document.addEventListener('DOMContentLoaded', function(){

    for(let i = 0; i< buttons.length; i++){
        buttons[i].addEventListener('click',function(botao){
            removeActiveButton();
            botao.target.classList.add("shows__menu__button--is-active")
        })
    }
})

const removeActiveButton = () => {
    for(let i = 0; i< buttons.length; i++){
        buttons[i].classList.remove("shows__menu__button--is-active")
    }
    
}