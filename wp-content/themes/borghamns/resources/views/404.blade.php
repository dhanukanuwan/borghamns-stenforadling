@extends('layouts.app')

@section('content')

  @if (! have_posts())

    <section class="py-5 py-lg-6">
		<div class="container">
			<div class="row justify-content-center">
				<div class="col-12 col-xl-8 text-center">
					<h2 class="h1 liten">Sidan kunde inte hittas!</h2>
					<p>Tyvärr så finns det inte någon sida på den här adressen. Det kan bero på att du klickat på en länk som inte fungerar eller att den aktuella sidan är borttagen.</p>
					<a class="btn btn-primary rounded-0" aria-current="page" href="{{home_url('/')}}">
						<div class="d-flex">
							<span class="pe-2">Tillbaka till startsidan</span>
							<div class="d-flex align-items-center">
								<span class="line-right bg-white d-inline-block" style="margin-right: -12px;"></span>
								<span class="icon-ion-ios-arrow-right"></span>
							</div>
						</div>
					</a>
				</div>
			</div>

			<div class="row justify-content-center"">
				<div class="col-12 col-xl-8 mt-5 text-center">
					<h3 class="h4 liten">Kanske kan någon av länkarna nedan vara intressanta?</h3>
					<div class="d-flex justify-content-center">
						<div class="text-start" style="max-width: 400px;">
							<div class="row">
								<div class="col-12 col-lg-6 mb-2">
									<a href="{{home_url('/stensorter/produktbeskrivning/')}}" class="text-decoration-hover text-decoration-none">
										<span class="icon-ion-arrow-right-c"></span>
										<span>Stensorter</span>
									</a>
								</div>
								<div class="col-12 col-lg-6 mb-2">
									<a href="{{home_url('/restaurering/')}}" class="text-decoration-hover text-decoration-none">
										<span class="icon-ion-arrow-right-c"></span>
										<span>Restaurering</span>
									</a>
								</div>
								<div class="col-12 col-lg-6 mb-2">
									<a href="{{home_url('/produktion/')}}" class="text-decoration-hover text-decoration-none">
										<span class="icon-ion-arrow-right-c"></span>
										<span>Produktion</span>
									</a>
								</div>
								<div class="col-12 col-lg-6 mb-2">
									<a href="{{home_url('/nyheter/')}}" class="text-decoration-hover text-decoration-none">
										<span class="icon-ion-arrow-right-c"></span>
										<span>Nyheter</span>
									</a>
								</div>
								<div class="col-12 col-lg-6 mb-2">
									<a href="{{home_url('/kontakta-oss/')}}" class="text-decoration-hover text-decoration-none">
										<span class="icon-ion-arrow-right-c"></span>
										<span>Kontakt</span>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

		</div>
    </section>
    
  @endif
@endsection
