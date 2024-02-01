@extends('layouts.app')

@section('content')
  @while(have_posts()) @php(the_post())

	<section class="py-5 py-xl-6">
		<div class="container">
			<div class="row">
				<div class="col-12 col-lg-7">
					<div class="d-flex align-items-center">
						<span class="line-right bg-primary d-inline-block"></span>
						<span class="ms-2 text-primary">Kontakta oss</span>
					</div>
					<h2 class="mt-2 mb-3 liten">Hur kan vi hjälpa dig?</h2>
					<p>Välkommen att kontakta oss via formuläret nedan. Vi skulle älska att höra från dig.</p>

				</div>
			</div>
			<div class="row">
				<div class="col-12 mb-5">
					<div class="mt-2 w-100 d-inline-block">
						<hr />
					</div>
				</div>
			</div>

			<div class="row">
				<div class="col-12 col-lg-4">
					<div class="d-flex mb-4">
						<div class="me-2">
							<span class="icon-ion-home text-primary" style="font-size: 1.5rem"></span>
						</div>
						<div class="flex-grow-1 d-flex flex-column">
							<span class="h6 mb-1 liten">Våra Adress</span>
							<span>Stenvägen 6, 592 93 Borghamn</span>
						</div>
					</div>
					<div class="d-flex mb-4">
						<div class="me-2">
							<span class=" icon-ion-email text-primary" style="font-size: 1.5rem"></span>
						</div>
						<div class="flex-grow-1 d-flex flex-column">
							<span class="h6 mb-1 liten">E-post</span>
							<a href="mailto:info@borghamns-stenforadling.se" class="text-decoration-hover text-decoration-none">info@borghamns-stenforadling.se</a>
						</div>
					</div>
					<div class="d-flex mb-4">
						<div class="me-2">
							<span class="icon-ion-android-call text-primary" style="font-size: 1.5rem"></span>
						</div>
						<div class="flex-grow-1 d-flex flex-column">
							<span class="h6 mb-1 liten">Telefon</span>
							<span>+46 (0)143 - 201 74</span>
						</div>
					</div>
					<div class="d-flex">
						<div class="me-2">
							<span class="icon-ion-android-call text-primary" style="font-size: 1.5rem"></span>
						</div>
						<div class="flex-grow-1 d-flex flex-column">
							<span class="h6 mb-1 liten">Fax</span>
							<span>+46 (0)143 - 201 32</span>
						</div>
					</div>
				</div>

				<div class="col-12 col-lg-8">
					<form action="/" method="post">
						
						<div class="row mb-3">
							<div class="col-12 col-lg-6">
								<input type="text" name="first_name" class="form-control bg-white rounded-0" placeholder="Förnamn" />
							</div>
							<div class="col-12 col-lg-6">
								<input type="text" name="last_name" class="form-control bg-white rounded-0" placeholder="Efternamn" />
							</div>
						</div>

						<div class="row mb-3">
							<div class="col-12 col-lg-6">
								<input type="email" name="user_email" class="form-control bg-white rounded-0" placeholder="E-post" />
							</div>
							<div class="col-12 col-lg-6">
								<input type="text" name="subject" class="form-control bg-white rounded-0" placeholder="Ämne" />
							</div>
						</div>

						<div class="row">
							<div class="col-12">
								<textarea class="form-control bg-white rounded-0" name="message" id="" rows="6" placeholder="Skriv ditt meddelande här"></textarea>
							</div>
						</div>

						<div class="row">
							<div class="col-12 mt-3">
								<button type="submit" class="btn btn-primary rounded-0" >
									<div class="d-flex">
										<span class="pe-2">Skicka meddelande</span>
										<div class="d-flex align-items-center">
											<span class="line-right bg-white d-inline-block" style="margin-right: -12px;"></span>
											<span class="icon-ion-ios-arrow-right"></span>
										</div>
									</div>
								</button>
							</div>
						</div>

					</form>
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
					<div class="col-12 col-lg-7 text-white">
						<div class="d-flex align-items-center">
							<span class="line-right bg-white d-inline-block"></span>
							<span class="ms-2 text-white">Stensorter</span>
						</div>
						<h2 class="mt-2 mb-3 liten text-white">Beställ prover</h2>
						<p>Nedan kan du beställa handprover med olika ytbehandlingar som vi skickar hem till dig. Välj de olika ytbehandlingarna för respektive stensort som du vill beställa.</p>
	
					</div>
					<div class="col-12 col-lg-5">
						<div class="d-flex justify-content-end">
							<a class="btn btn-dark-text rounded-0" aria-current="page" href="{{home_url('/stensorter/bestall-prover/')}}">
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
							<hr class="text-white" />
						</div>
					</div>
				</div>
				<div class="row align-items-center">
					<div class="col-12 col-lg-7 text-white">
						{{-- <div class="d-flex align-items-center">
							<span class="line-right bg-white d-inline-block"></span>
							<span class="ms-2 text-white">Stensorter</span>
						</div> --}}
						<h2 class="mt-2 mb-3 liten text-white">Begär offert</h2>
						<p>Använd vår funktion för att skicka en offertförfrågan. Börja med att välja vilken produkt du är ute efter och ange sedan vilka material och behandlingar du vill ha.</p>
	
					</div>
					<div class="col-12 col-lg-5">
						<div class="d-flex justify-content-end">
							<a class="btn btn-dark-text rounded-0" aria-current="page" href="{{home_url('/offert/')}}">
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
							<hr class="text-white" />
						</div>
					</div>
				</div>
			</div>
		</div>
		
	</section>

  @endwhile
@endsection
