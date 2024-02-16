@extends('layouts.app')

@section('content')
  @while(have_posts()) @php(the_post())

  <style>
	@media (min-width: 992px)  {
		.offer-img-wrap {
			min-height: 700px;
			max-height: 1000px;
		}
	}
  </style>
    
	<section class="py-5 py-xl-6">

		<div class="container">
			<div class="row g-0">
				<div class="col-12 col-lg-4">
					<div class="offer-img-wrap position-relative">
						<div class="hero-bg position-absolute w-100 h-100 top-0 left-0 d-flex">
							<img src="@asset('images/offer/offert-img.jpg')" class="w-100 object-fit-cover" alt="" />
						</div>
						<div class="hero-content position-absolute top-0 left-0 py-5 text-center h-100 w-100 ">
							<h2 class="h4 liten text-white">Step 1</h2>
							<div class="dynamic-steps-outer d-none d-lg-flex justify-content-center flex-lg-column align-items-lg-center">
								<div class="dynamic-step position-relative">
									<span class="text-white d-flex justify-content-center align-items-center rounded-circle step-number active">1</span>
								</div>
								<div class="dynamic-step position-relative">
									<span class="text-white d-flex justify-content-center align-items-center rounded-circle step-number">2</span>
								</div>
								<div class="dynamic-step position-relative">
									<span class="text-white d-flex justify-content-center align-items-center rounded-circle step-number">3</span>
								</div>
								<div class="dynamic-step position-relative">
									<span class="text-white d-flex justify-content-center align-items-center rounded-circle step-number">4</span>
								</div>
							</div>

						</div>
					</div>
				</div>

				<div class="col-12 col-lg-8 position-relative">

					<div class="bg-white p-4 h-100 d-flex flex-column">
						<h2 class="h3 liten">Step 1</h2>

							<div class="row mt-5 flex-grow-1">
								<div class="col-12 col-lg-4">
									<div class="form-option-wrap pointer p-2 border border-2 border-primary rounded-0">
										<div class="d-flex justify-content-end mb-2">
											<span class="icon-ion-checkmark-circled text-primary"></span>
										</div>
										<img src="@asset('images/offer/kitchen.jpg')" class="d-block mx-auto rounded-circle" style="max-width: 150px;" alt="">
										<h4 class="liten h6 text-center mb-2 mt-3">Bänkskivor</h4>
									</div>
								</div>
								<div class="col-12 col-lg-4">
									<div class="form-option-wrap pointer p-2 border border-2 rounded-0">
										<div class="d-flex justify-content-end mb-2">
											<span class="icon-ion-checkmark-circled text-secondary"></span>
										</div>
										<img src="@asset('images/offer/window.jpg')" class="d-block mx-auto rounded-circle" style="max-width: 150px;" alt="">
										<h4 class="liten h6 text-center mb-2 mt-3">Fönsterbänkar</h4>
									</div>
								</div>
								<div class="col-12 col-lg-4">
									<div class="form-option-wrap pointer p-2 border border-2 rounded-0">
										<div class="d-flex justify-content-end mb-2">
											<span class="icon-ion-checkmark-circled text-secondary"></span>
										</div>
										<img src="@asset('images/offer/floor.jpg')" class="d-block mx-auto rounded-circle" style="max-width: 150px;" alt="">
										<h4 class="liten h6 text-center mb-2 mt-3">Golvplattor</h4>
									</div>
								</div>
							</div>

							<div class="d-flex justify-content-end">
								<button type="button" class="btn btn-primary rounded-0 mt-4" >
									<div class="d-flex">
										<span class="pe-2">Nästa</span>
										<div class="d-flex align-items-center">
											<span class="line-right bg-white d-inline-block" style="margin-right: -12px;"></span>
											<span class="icon-ion-ios-arrow-right"></span>
										</div>
									</div>
								</button>
							</div>
					</div>

				</div>
			</div>
		</div>

	</section>

  @endwhile
@endsection
