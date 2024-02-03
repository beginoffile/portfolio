document.addEventListener('DOMContentLoaded', (e)=>{
    
    let button = document.querySelector('.layout__menu-toggle');
    // let Icon_bars = document.querySelector('.fa-bars');
    // let Icon_xmark = document.querySelector('.fa-xmark');
    
    let menu_togge_icon = document.querySelector('.layout__menu-toggle');
    let aside = document.querySelector('.layout__aside');

    
    button.addEventListener('click', (e)=>{
        let visible = document.querySelector('.layout__aside--visible');
        // if (!visible){
        //     aside.classList.add('.layout__aside--visible')
        // }else{
        //     aside.classList.remove('.layout__aside--visible')
        // }
        aside.classList.toggle('layout__aside--visible');
        menu_togge_icon.classList.toggle('menu-togge__icon--visible');
        menu_togge_icon.classList.toggle('layout__menu-toggle--color');
    })
})