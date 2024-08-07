@php
	$hero_height = '400px';
	$home_hero = array();

	if ( is_front_page() ) {
		$hero_height = '600px';
		$home_hero = $hero_data['home_hero'];

		if ( wp_is_mobile() ) {
			$hero_height = '400px';
		}
	}
@endphp

@if ( ! is_front_page() )

	<style>
		@media (min-width: 1700px) {
			.hero .hero-bg {
				min-height: 600px !important;
				height: 600px !important;
			}
		}
	</style>
	
@endif

<section class="hero position-relative">
	@if ( ! empty( $hero_data['hero_image'] ) && empty( $hero_data['hero_video'] ) )
		<div class="hero-bg mw-100 d-flex" style="min-height: {{$hero_height}};max-height: {{$hero_height}};">
            <img data-src="{{ wp_is_mobile() ? $hero_data['hero_image']['small'] : $hero_data['hero_image']['large']}}" class="w-100 object-fit-cover lazyload" alt="" />
		</div>
	@endif

	@if ( ! empty( $hero_data['hero_video'] )  )
		<div class="hero-bg mw-100 d-flex" style="min-height: {{$hero_height}};max-height: {{$hero_height}};">
			<video  class="w-100 object-fit-cover" autoplay="autoplay" loop="true" muted>
				<source src="{{$hero_data['hero_video']['url']}}" type="video/mp4" />
			</video>
		</div>
	@endif
	
	<div class="hero-content position-absolute top-0 left-0 w-100 h-100 d-flex flex-column">

		<div class="small-nav-wrap">
			<nav class="navbar navbar-expand-xl pb-0">
				<div class="container">
					@include('partials.header.small-nav', ['text_color' => 'white'])
				</div>
			</nav>
		</div>

		<nav class="navbar navbar-expand-xl">
			<div class="container">
				<a class="navbar-brand" href="{{home_url('/')}}">
					<img src="@asset('images/logo-white.png')" alt="{{bloginfo('name')}}" class="mw-100" width="170" height="47" />
				</a>

				<div class="collapse navbar-collapse" >

					{{ wp_nav_menu(
						array(
							'theme_location' => 'primary_navigation',
							'menu_class' => 'navbar-nav ms-auto me-auto mb-2 mb-lg-0',
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

				@include('partials.header.mobile-nav', ['text_color' => 'white'])

			</div>
		</nav>

		@if (is_front_page())
			<div class="hero-images-wrap d-flex flex-grow-1 align-items-center">
				<div class="container">
					<div class="row align-items-center">
						<div class="col-12 col-lg-5">

							@if ( isset( $home_hero['tagline'] ) && !empty( $home_hero['tagline'] ))
								<div class="d-flex align-items-center">
									<span class="line-right bg-white d-inline-block"></span>
									<span class="ps-2 text-white">{!! $home_hero['tagline'] !!}</span>
								</div>
							@endif

							@if ( isset( $home_hero['title'] ) && !empty( $home_hero['title'] ))
								<h1 class="text-white liten h2">{!! $home_hero['title'] !!}</h1>
							@endif

							@if ( isset( $home_hero['cta'] ) && !empty( $home_hero['cta'] ))
								<a class="btn btn-primary rounded-0" aria-current="page" href="{{$home_hero['cta']['url']}}" {{ $home_hero['cta']['target'] === '_blank' ? 'target="_blank"' : '' }}>
									<div class="d-flex">
										<span class="pe-2">{!! $home_hero['cta']['title'] !!}</span>
										<div class="d-flex align-items-center">
											<span class="line-right bg-white d-inline-block" style="margin-right: -14px;"></span>
											<span class="icon-ion-ios-arrow-right"></span>
										</div>
									</div>
								</a>
							@endif
							
							
						</div>
						<div class="col-12 col-lg-7">

							@if ( isset( $home_hero['images'] ) && !empty( $home_hero['images'] ))
								<div class="d-none d-lg-flex">
									@php $i = 1; @endphp
									@foreach ($home_hero['images'] as $image)
										<div class="hero-img-{{$i}} d-flex align-items-center">
											<img data-src="{{$image['url']}}" class="lazyload" alt="{{$image['alt']}}" title="{{$image['title']}}" />
										</div>
									@php $i++; @endphp
									@endforeach
								</div>
							@endif
						</div>
					</div>
				</div>
			</div>

		@else 
			
			<div class="d-flex align-items-center flex-grow-1">
				<div class="container">
					<div class="row justify-content-center">
						<div class="col-12 col-lg-10 text-center">

							@if ( is_404())
								<h1 class="text-white not-found-h1 mb-0">404</h1>
							@elseif( is_search() )
								<h1 class="text-white liten mb-0">
									<span>{{__( 'Sökresultat för:', 'sage')}}</span>
									@if ( isset( $_GET['s'] ) && !empty( $_GET['s'] ) )
										<span class="ms-2">{{$_GET['s']}}</span>
									@endif
								</h1>
							@else
								<h1 class="text-white liten mb-3">{!! $hero_data['page_title'] !!}</h1>

								@if (! empty( $hero_data['page_description'] ) )
									<div class="mb-4 text-white">
										{!! $hero_data['page_description'] !!}
									</div>
								@endif

								<div class="bg-white px-4 py-3 d-inline-block">
									<div class="d-flex">
										<a href="{{home_url('/')}}" class="text-dark-text link-underline link-underline-opacity-0">
											<span class="icon-ion-home"></span>
											<span>{{ __( 'Hem', 'sage')}}</span>
										</a>
										<span class="mx-2">
											<span class="icon-ion-ios-arrow-right"></span>
										</span>

										@if ( $hero_data['post_parent'] && isset( $hero_data['post_parent']->ID ) )

											<a href="{{get_the_permalink( $hero_data['post_parent']->ID )}}" class="text-dark-text link-underline link-underline-opacity-0">
												<span>{!! get_the_title( $hero_data['post_parent']->ID ) !!}</span>
											</a>
											<span class="mx-2">
												<span class="icon-ion-ios-arrow-right"></span>
											</span>
											
										@endif

										<span class="text-primary">{{$hero_data['page_title']}}</span>
									</div>
								</div>
							@endif
						</div>
					</div>
				</div>
			</div>

		@endif

	</div>
</section>