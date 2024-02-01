@php
	$hero_height = '400px';

	if ( is_front_page() ) {
		$hero_height = '600px';
	}
@endphp

<section class="hero position-relative">
	<div class="hero-bg mw-100 d-flex" style="min-height: {{$hero_height}};max-height: {{$hero_height}};">
		<img src="@asset('images/home-banner.jpg')" class="w-100 object-fit-cover" alt="" />
	</div>
	<div class="hero-content position-absolute top-0 left-0 w-100 h-100 d-flex flex-column">
		<nav class="navbar navbar-expand-xl">
			<div class="container">
				<a class="navbar-brand" href="{{home_url('/')}}">
					<img src="@asset('images/logo-white.png')" alt="{{bloginfo('name')}}" style="max-width: 170px" />
				</a>
				
				<div class="collapse navbar-collapse" >
					<ul class="navbar-nav ms-auto me-auto mb-2 mb-lg-0">
						<li class="nav-item dropdown">
							<a class="nav-link text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Stensorter</a>
							<ul class="dropdown-menu bg-secondary rounded-0">
								<li><a class="dropdown-item" href="#">Produktbeskrivning</a></li>
								<li><a class="dropdown-item" href="#">Kolmårdsmarmor</a></li>
								<li><a class="dropdown-item" href="#">Kalksten</a></li>
								<li><a class="dropdown-item" href="#">Beställ prover</a></li>
								<li><a class="dropdown-item" href="#">Begär offert</a></li>
							</ul>
						</li>
						<li class="nav-item">
							<a class="nav-link text-white" href="#">Produktion</a>
						</li>
						<li class="nav-item dropdown">
							<a class="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Restaurering</a>
							<ul class="dropdown-menu bg-secondary rounded-0">
								<li><a class="dropdown-item" href="#">Galleri</a></li>
								<li><a class="dropdown-item" href="#">Dokument</a></li>
								<li><a class="dropdown-item" href="{{home_url('/om-oss')}}">Om oss</a></li>
							</ul>
						</li>
						<li class="nav-item dropdown">
							<a class="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Produkter</a>
							<ul class="dropdown-menu bg-secondary rounded-0">
								<li><a class="dropdown-item" href="#">Badrum</a></li>
								<li><a class="dropdown-item" href="#">Kök</a></li>
								<li><a class="dropdown-item" href="#">Rum</a></li>
								<li><a class="dropdown-item" href="#">Produktion & restaurering</a></li>
								<li><a class="dropdown-item" href="#">Golv</a></li>
							</ul>
						</li>
						<li class="nav-item dropdown">
							<a class="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Referenser</a>
							<ul class="dropdown-menu bg-secondary rounded-0">
								<li><a class="dropdown-item" href="#">Näringslivets hus</a></li>
								<li><a class="dropdown-item" href="#">Nationalmuseum</a></li>
								<li><a class="dropdown-item" href="#">Bro park</a></li>
								<li><a class="dropdown-item" href="#">Konstakademien</a></li>
							</ul>
						</li>
						<li class="nav-item">
							<a class="nav-link text-white" href="#">Kontakt</a>
						</li>
					</ul>

					<ul class="navbar-nav ms-auto mb-2 mb-lg-0">
						<li class="nav-item">
							<a class="btn btn-primary rounded-0" aria-current="page" href="#">
								<div class="d-flex">
									<span class="pe-2">Begär offert</span>
									<div class="d-flex align-items-center">
										<span class="line-right bg-white d-inline-block" style="margin-right: -12px;"></span>
										<span class="icon-ion-ios-arrow-right"></span>
									</div>
								</div>
							</a>
						</li>
					</ul>

				</div>
			</div>
		</nav>

		@if (is_front_page())
			<div class="hero-images-wrap d-flex flex-grow-1 align-items-center">
				<div class="container">
					<div class="row align-items-center">
						<div class="col-12 col-lg-5">
							<div class="d-flex align-items-center">
								<span class="line-right bg-white d-inline-block"></span>
								<span class="ps-2 text-white">Välkommen till Borghamns Stenförädling AB</span>
							</div>
							<h1 class="text-white liten h2">Ett familjeföretag, grundat 1951</h1>
							<a class="btn btn-primary rounded-0" aria-current="page" href="{{home_url('/om-oss')}}">
								<div class="d-flex">
									<span class="pe-2">Läs mer</span>
									<div class="d-flex align-items-center">
										<span class="line-right bg-white d-inline-block" style="margin-right: -12px;"></span>
										<span class="icon-ion-ios-arrow-right"></span>
									</div>
								</div>
							</a>
						</div>
						<div class="col-12 col-lg-7">
							<div class="d-none d-lg-flex">
								<div class="hero-img-1 d-flex align-items-center">
									<img src="@asset('images/home-new-4.png')" class="" alt="">
								</div>
								<div class="hero-img-2 d-flex align-items-center">
									<img src="@asset('images/new-home-5.png')" class="" alt="">
								</div>
								<div class="hero-img-3 d-flex align-items-center">
									<img src="@asset('images/home-new-3.png')" class="" alt="">
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

		@else 
			
			<div class="d-flex align-items-center flex-grow-1">
				<div class="container">
					<div class="row">
						<div class="col-12 text-center">

							@if ( is_404())
								<h1 class="text-white not-found-h1 mb-0">404</h1>
							@else
								<h1 class="text-white liten">{{the_title()}}</h1>

								<div class="bg-white px-4 py-3 d-inline-block">
									<div class="d-flex">
										<a href="{{home_url('/')}}" class="text-dark-text link-underline link-underline-opacity-0">
											<span class="icon-ion-home"></span>
											<span>Hem</span>
										</a>
										<span class="mx-2">
											<span class="icon-ion-ios-arrow-right"></span>
										</span>
										<span class="text-primary">{{the_title()}}</span>
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
