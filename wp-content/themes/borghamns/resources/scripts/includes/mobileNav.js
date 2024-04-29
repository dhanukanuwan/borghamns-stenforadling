const mobileNav = () => {

    const navTrigger = document.getElementById('mobile-nav-trigger');
    const navContainer = document.getElementById('mobile-nav-container');
    const navClose = document.getElementById('mobile-nav-close');

    navTrigger.addEventListener( 'click', () => {
        navContainer.classList.add('end-0');
    } );

    navClose.addEventListener( 'click', () => {
        navContainer.classList.remove('end-0');
    } );

    const mainNavLinks = document.getElementsByClassName( 'nav-depth-0' );

    if ( mainNavLinks && mainNavLinks.length > 0 ) {

        Array.from(mainNavLinks).forEach( (element) => {

            if ( element.classList.contains( 'menu-item-has-children' ) ) {
                const submenuIcon = element.getElementsByClassName( 'submenu-trigger' );

                if ( !submenuIcon || (submenuIcon && submenuIcon.length === 0 ) ) {
                    element.innerHTML = `${element.innerHTML} <span class="icon-ion-chevron-down submenu-trigger position-absolute" id="submenu-trigger"></span>`;
                }
            }


            
        });

    }

}

export default mobileNav;