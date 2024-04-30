
<div class="d-flex d-md-none overflow-hidden">

    <button type="button" class="btn btn-link mobile-nav-trigger lh-1 p-0 text-{{$text_color}}" id="mobile-nav-trigger">
        <span class="icon-ion-android-menu"></span>
    </button>

    <div class="mobile-nav-container mw-100 position-fixed top-0 bg-white h-100 z-3 py-2" id="mobile-nav-container">
        <div class="d-flex">
            <div class="mobile-logo ps-3 flex-grow-1">
                <a class="navbar-brand" href="{{home_url('/')}}">
                    <img data-src="@asset('images/logo.png')" class="lazyload" alt="{{bloginfo('name')}}" width="150" height="80" />
                </a>
            </div>
            <div class="mobile-nav-close-wrap">
                <button type="button" class="btn btn-link mobile-nav-trigger mobile-nav-close lh-1 p-0 text-primary" id="mobile-nav-close">
                    <span class="icon-ion-android-close"></span>
                </button>
            </div>
        </div>

        <div class="mobile-nav-wrap mt-2 py-3">
            {{ wp_nav_menu(
                array(
                    'theme_location' => 'primary_navigation',
                    'menu_class' => 'navbar-nav mobile-nav no-hero',
                    'container' => false,
                    'fallback_cb' => 'Bootstrap_Walker_Menu::fallback',
                    'walker' => new Bootstrap_Walker_Menu()
                ) 
            )
            }}
        </div>

    </div>

</div>