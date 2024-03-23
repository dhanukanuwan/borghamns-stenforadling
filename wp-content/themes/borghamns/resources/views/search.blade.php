@extends('layouts.app')

@section('content')
  @include('partials.page-header')

	<section class="py-5 py-lg-6">
		<div class="container">

			@if (! have_posts())
				<div class="row">
					<div class="col-12">
						<x-alert type="warning">
							<h2>{!! __('Tyvärr, inga resultat hittades.', 'sage') !!}</h2>
						</x-alert>
					</div>
				</div>
			@endif

			@while(have_posts()) @php(the_post())
				<div class="row">
					<div class="col-12 my-3 pb-4 border-bottom">
						@include('partials.content-search')
					</div>
				</div>
			@endwhile

		</div>
	</section>

@endsection
