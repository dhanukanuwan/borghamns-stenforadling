<style>
    .dropdown-item:hover, .dropdown-item:focus {
        color: #fff;
        background-color: #5e7975;
    }
</style>

<section>

    <div class="small-nav-wrap">
        <nav class="navbar navbar-expand-xl pb-0">
            <div class="container">
                @include('partials.header.small-nav', ['text_color' => 'black'])
            </div>
        </nav>
    </div>

    <nav class="navbar navbar-expand-xl">
        <div class="container">
            <a class="navbar-brand" href="{{home_url('/')}}">
                <img data-src="@asset('images/logo.png')" class="lazyload" alt="{{bloginfo('name')}}" style="max-width: 170px" />
            </a>

            <div class="collapse navbar-collapse" >

                {{ wp_nav_menu(
                    array(
                        'theme_location' => 'primary_navigation',
                        'menu_class' => 'navbar-nav ms-auto me-auto mb-2 mb-lg-0 no-hero',
                        'container' => false,
                        'fallback_cb' => 'Bootstrap_Walker_Menu::fallback',
                        'walker' => new Bootstrap_Walker_Menu()
                    ) 
                )
                }}

                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="btn btn-primary rounded-0" aria-current="page" href="{{home_url('/offert')}}">
                            <div class="d-flex">
                                <span class="pe-2">{{__( 'Begär offert', 'sage')}}</span>
                                <div class="d-flex align-items-center">
                                    <span class="line-right bg-white d-inline-block" style="margin-right: -14px;"></span>
                                    <span class="icon-ion-ios-arrow-right"></span>
                                </div>
                            </div>
                        </a>
                    </li>
                </ul>

            </div>

            @include('partials.header.mobile-nav', ['text_color' => 'black'])

        </div>
    </nav>

</section>