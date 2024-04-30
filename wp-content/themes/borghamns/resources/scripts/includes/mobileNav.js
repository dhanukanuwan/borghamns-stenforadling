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

    if ( !navContainer ) return;

    const mainNavLinks = navContainer.getElementsByClassName( 'nav-depth-0' );

    if ( mainNavLinks && mainNavLinks.length > 0 ) {

        Array.from(mainNavLinks).forEach( (element) => {

            if ( element.classList.contains( 'menu-item-has-children' ) ) {
                const submenuIcon = element.getElementsByClassName( 'submenu-trigger' );

                if ( !submenuIcon || (submenuIcon && submenuIcon.length === 0 ) ) {
                    element.innerHTML = `${element.innerHTML} <span class="icon-ion-chevron-down submenu-trigger position-absolute"></span>`;
                }
            }


            
        });

    }

    document.body.addEventListener( 'click', ( event ) => {

        const iconsClassList = event.target.classList;

        if ( ! iconsClassList.contains('submenu-trigger') ) return;

        if ( ! event.target.parentNode || ! event.target.parentNode.classList.contains('menu-item-has-children') ) return;
        
        const parentEl = event.target.parentNode;
        const parentLinkEl = parentEl.getElementsByClassName( 'nav-link' )[0];

        if ( ! parentLinkEl ) return;

        const parentLinkElID = parentLinkEl.getAttribute('id');

        const dropDownMenu = parentEl.getElementsByClassName( 'dropdown-menu' )[0];

        if ( ! dropDownMenu ) return;

        const dropDownIDAttr = dropDownMenu.getAttribute('mainitem-id');

        if ( ! dropDownIDAttr || dropDownIDAttr !== parentLinkElID ) return;

        if ( dropDownMenu.classList.contains('d-block') ) {

            dropDownMenu.classList.remove('d-block');
            iconsClassList.remove('icon-ion-chevron-up');
            iconsClassList.add('icon-ion-chevron-down');

        } else {

            dropDownMenu.classList.add('d-block');
            iconsClassList.add('icon-ion-chevron-up');
            iconsClassList.remove('icon-ion-chevron-down');

        }

    });

}

export default mobileNav;