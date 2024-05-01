@extends('layouts.app')

@section('content')

    <section class="py-5 py-xl-6">
		<div class="container">
			<div class="row">
				
				@while(have_posts()) @php(the_post())

					@php( $post_categories = wp_get_post_categories( get_the_ID(), array( 'fields' => 'all' ) ))

					<div class="col-12 col-md-6 col-lg-4 mb-4">
						<div class="position-relative h-100 bg-white p-2 d-flex flex-column">

							@if ( has_post_thumbnail() )

								<div class="post-thumb position-relative">
									<a href="{{the_permalink()}}" class="text-decoration-none">
										<img src={{get_the_post_thumbnail_url(get_the_ID(), 'full' )}} alt="{{the_title()}}" class="w-100 mw-100" />
									</a>

									@if ( $post_categories )
										<div class="post-meta d-flex position-absolute w-100 h-100 top-0 left-0 bg-primary bg-opacity-25">

											<div class="post-categories pt-3 ps-3">
												@foreach ($post_categories as $cat)
													<a href="{{get_category_link( $cat->term_id )}}" class="text-decoration-none text-white px-3 py-2 bg-dark-text me-2 text-size-small">{!! $cat->name !!}</a>
												@endforeach
											</div>
										</div>
										
									@endif
								</div>
								
							@endif

							<div class="px-2 mb-3 d-flex flex-column flex-grow-1">

								<h3 class="mt-2 h4 mb-2">{{the_title()}}</h3>

									<span class="opacity-75 text-size-medium">{{human_time_diff( get_the_time('U'), current_time('timestamp') )}} ago</span>

								<div class="post-excerpt my-3">
									{!! the_excerpt() !!}
								</div>

								<div class="mt-auto">
									<a class="btn btn-primary rounded-0"  href="{{the_permalink()}}" >
										<div class="d-flex">
											<span class="pe-2">{{__('Läs mer', 'sage')}}</span>
											<div class="d-flex align-items-center">
												<span class="line-right bg-white d-inline-block" style="margin-right: -14px;"></span>
												<span class="icon-ion-ios-arrow-right"></span>
											</div>
										</div>
									</a>
								</div>
							</div>
							
						</div>
					</div>
    
  				@endwhile

			</div>
		</div>
	</section>

@endsection
