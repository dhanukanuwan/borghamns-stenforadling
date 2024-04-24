
@if ( isset( $hero_data['disable_hero'] ) && $hero_data['disable_hero'] == '1' )
	@include('partials.header.header-no-hero')
@else
	@include('partials.header.header-with-hero')
@endif
