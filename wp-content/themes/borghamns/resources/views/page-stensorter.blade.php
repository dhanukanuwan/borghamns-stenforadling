@extends('layouts.app')

@section('content')
  @while(have_posts()) @php(the_post())

  <section class="py-5 py-lg-6">
	<div class="container">
		<div class="row align-items-center">
			<div class="col-12 col-lg-7">
				<div class="d-flex align-items-center">
					<span class="line-right bg-primary d-inline-block"></span>
					<span class="ms-2 text-primary">Produkter</span>
				</div>
				<h2 class="mt-2 mb-3 liten">Våra Stensorter</h2>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis finibus nisi. Aliquam mollis eleifend ex, a aliquam leo porta ut. Nunc interdum tristique rhoncus.</p>

			</div>
			<div class="col-12 col-lg-5">
				<div class="d-flex justify-content-end">
					<a class="btn btn-primary rounded-0" aria-current="page" href="{{home_url('/produkter')}}">
						<div class="d-flex">
							<span class="pe-2">Visa Produkter</span>
							<div class="d-flex align-items-center">
								<span class="line-right bg-white d-inline-block" style="margin-right: -12px;"></span>
								<span class="icon-ion-ios-arrow-right"></span>
							</div>
						</div>
					</a>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="col-12">
				<div class="mt-2 w-100 d-inline-block">
					<hr />
				</div>
			</div>
		</div>

		<div class="row">
			<div class="col-12 col-md-6 col-lg-3">
				<div class="round-img-wrap position-relative">
					<div class="p-2 bg-white">
						<img src="@asset('images/stones/Kolmardsmarmor_ox_normalslipad.jpg')" class="mw-100" alt="">
					</div>
					<a href="{{home_url('/stensorter/kolmardsmarmor/')}}" class="img-wrap-overlay position-absolute w-100 h-100 top-0 left-0 hero-content d-flex justify-content-center align-items-center text-decoration-none">
						<span class="text-white">Kolmårdsmarmor Ox</span>
					</a>
					
				</div>
				<h3 class="h6 liten text-center mt-3 mb-0">Kolmårdsmarmor Ox</h3>
			</div>
			<div class="col-12 col-md-6 col-lg-3">
				<div class="round-img-wrap position-relative">
					<div class="p-2 bg-white">
						<img src="@asset('images/stones/Grabrun_kalksten_borstad.jpg')" class="mw-100" alt="">
					</div>
					<a href="{{home_url('/stensorter/kalksten/')}}" class="img-wrap-overlay position-absolute w-100 h-100 top-0 left-0 hero-content d-flex justify-content-center align-items-center text-decoration-none">
						<span class="text-white">Gråbrun Kalksten</span>
					</a>
					
				</div>
				<h3 class="h6 liten text-center mt-3 mb-0">Gråbrun Kalksten</h3>
			</div>
			<div class="col-12 col-md-6 col-lg-3">
				<div class="round-img-wrap position-relative">
					<div class="p-2 bg-white">
						<img src="@asset('images/stones/Kolmardsmarmor_oxl_borstad.jpg')" class="mw-100" alt="">
					</div>
					<a href="{{home_url('/stensorter/kolmardsmarmor/')}}" class="img-wrap-overlay position-absolute w-100 h-100 top-0 left-0 hero-content d-flex justify-content-center align-items-center text-decoration-none">
						<span class="text-white">Kolmårdsmarmor Oxl</span>
					</a>
					
				</div>
				<h3 class="h6 liten text-center mt-3 mb-0">Kolmårdsmarmor Oxl</h3>
			</div>
			<div class="col-12 col-md-6 col-lg-3">
				<div class="round-img-wrap position-relative">
					<div class="p-2 bg-white">
						<img src="@asset('images/stones/Ljusgra_kalksten_lagerhuggen.jpg')" class="mw-100" alt="">
					</div>
					<a href="{{home_url('/stensorter/kalksten/')}}" class="img-wrap-overlay position-absolute w-100 h-100 top-0 left-0 hero-content d-flex justify-content-center align-items-center text-decoration-none">
						<span class="text-white">Ljusgrå Kalksten</span>
					</a>
					
				</div>
				<h3 class="h6 liten text-center mt-3 mb-0">Ljusgrå Kalksten</h3>
			</div>
		</div>

	</div>
</section>

<section class="position-relative">
	<div class="hero-bg position-absolute w-100 h-100 top-0 left-0 d-flex">
		<img src="@asset('images/stone-bg.jpg')" class="w-100 object-fit-cover" alt="" />
	</div>
	<div class="hero-content position-relative py-5 py-xl-6">
		<div class="container">
			<div class="row align-items-center">
				<div class="col-12 col-lg-7">
					<div class="d-flex align-items-center">
						<span class="line-right bg-white d-inline-block"></span>
						<span class="ms-2 text-white">Rekommendation</span>
					</div>
					<h2 class="mt-2 mb-3 liten text-white">Vad våra kunder säger</h2>

				</div>
				<div class="col-12 col-lg-5">
					<div class="d-flex justify-content-end">
						<a class="btn btn-dark-text rounded-0" aria-current="page" href="{{home_url('/om-oss')}}">
							<div class="d-flex">
								<span class="pe-2">Visa mer</span>
								<div class="d-flex align-items-center">
									<span class="line-right bg-white d-inline-block" style="margin-right: -12px;"></span>
									<span class="icon-ion-ios-arrow-right"></span>
								</div>
							</div>
						</a>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-12">
					<div class="mt-2 w-100 d-inline-block">
						<hr class="text-white" />
					</div>
				</div>
			</div>

			<div class="row">
				<div class="col-12">
					<div class="testimonial-wrap d-flex flex-column">
						<div class="testimonial-item p-4 p-xl-5 bg-white">
							<div class="row">
								<div class="col-3 col-lg-2">
									<img src="@asset('images/1.jpg')" class="mw-100" alt="">
								</div>
								<div class="col-9 col-lg-10">
									<p>There are many variations of passages of Lorem Ipsum
										available, the majority have suffered alter ation in someform, by injected humour, or
										randomised words which don't look even variations of able. Lorem Ipsum available, the
										majority have sufferedThere are many variations of passages of It is a long established fact
										that a reader.</p>
									<div class="mt-3 d-flex align-items-center">
										<div class="flex-grow-1">
											<h4 class="liten mb-2">Alex John</h4>
											<span class="text-primary">Manager of Company</span>
										</div>
										<div>
											<span class="h2 liten text-primary">,,</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<section class="py-5 py-lg-6">
	<div class="container">
		<div class="row align-items-center">
			<div class="col-12 col-lg-7">
				<div class="d-flex align-items-center">
					<span class="line-right bg-primary d-inline-block"></span>
					<span class="ms-2 text-primary">Produkter</span>
				</div>
				<h2 class="mt-2 mb-3 liten">Produktbeskrivning</h2>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis finibus nisi. Aliquam mollis eleifend ex, a aliquam leo porta ut. Nunc interdum tristique rhoncus.</p>

			</div>
			<div class="col-12 col-lg-5">
				<div class="d-flex justify-content-end">
					<a class="btn btn-primary rounded-0" aria-current="page" href="{{home_url('/stensorter/produktbeskrivning/')}}">
						<div class="d-flex">
							<span class="pe-2">Gå med</span>
							<div class="d-flex align-items-center">
								<span class="line-right bg-white d-inline-block" style="margin-right: -12px;"></span>
								<span class="icon-ion-ios-arrow-right"></span>
							</div>
						</div>
					</a>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="col-12">
				<div class="mt-2 w-100 d-inline-block">
					<hr />
				</div>
			</div>
		</div>

	</div>
</section>

<section class="py-5 bg-primary">
	<div class="container">
		<div class="row">
			<div class="col-12 col-lg-3">
				<div class="border-end d-flex flex-column border-secondary text-white text-center">
					<span class="h1 text-white mb-0">750+</span>
					<span>Client Satisfaction</span>
				</div>
			</div>
			<div class="col-12 col-lg-3">
				<div class="border-end d-flex flex-column border-secondary text-white text-center">
					<span class="h1 text-white mb-0">100+</span>
					<span>Clients in Sweden</span>
				</div>
			</div>
			<div class="col-12 col-lg-3">
				<div class="border-end d-flex flex-column border-secondary text-white text-center">
					<span class="h1 text-white mb-0">900+</span>
					<span>Amazing Projects</span>
				</div>
			</div>
			<div class="col-12 col-lg-3">
				<div class="border-end d-flex flex-column border-secondary text-white text-center">
					<span class="h1 text-white mb-0">150+</span>
					<span>Production Plans</span>
				</div>
			</div>
		</div>
	</div>
</section>

<section class="py-5 py-lg-6">
	<div class="container">
		<div class="row align-items-center">
			<div class="col-12 col-lg-7">
				<div class="d-flex align-items-center">
					<span class="line-right bg-dark-text d-inline-block"></span>
					<span class="ms-2 text-primary">Service</span>
				</div>
				<h2 class="mt-2 mb-3 liten">Våra prisbelönta tjänster</h2>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis finibus nisi. Aliquam mollis eleifend ex, a aliquam leo porta ut.</p>
			</div>
			<div class="col-12 col-lg-5">
				<div class="d-flex justify-content-end">
					<a class="btn btn-primary rounded-0" aria-current="page" href="{{home_url('/om-oss')}}">
						<div class="d-flex">
							<span class="pe-2">Våra tjänster</span>
							<div class="d-flex align-items-center">
								<span class="line-right bg-white d-inline-block" style="margin-right: -12px;"></span>
								<span class="icon-ion-ios-arrow-right"></span>
							</div>
						</div>
					</a>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="col-12">
				<div class="mt-2 w-100 d-inline-block">
					<hr />
				</div>
			</div>
		</div>

		<div class="row justify-content-center align-items-center mt-4">
			<div class="col-12 col-md-6 col-lg mb-4">
				<img src="@asset('images/awards/arets-sten.png')" class="mw-100 mx-auto d-block" style="max-height: 140px;" alt="">
			</div>
			<div class="col-12 col-md-6 col-lg mb-4">
				<img src="@asset('images/awards/mastare.png')" class="mw-100 mx-auto d-block" style="max-height: 140px;" alt="">
			</div>
			<div class="col-12 col-md-6 col-lg mb-4">
				<img src="@asset('images/awards/natur-sten.png')" class="mw-100 mx-auto d-block" style="max-height: 140px;" alt="">
			</div>
			<div class="col-12 col-md-6 col-lg mb-4">
				<img src="@asset('images/awards/sten.png')" class="mw-100 mx-auto d-block" style="max-height: 140px;" alt="">
			</div>
		</div>
	</div>
</section>

  @endwhile
@endsection
