<?php //phpcs:ignore

namespace App\View\Composers;

use Roots\Acorn\View\Composer;

/**
 * Class providing header and footer data.
 *
 * @since      1.0.0
 * @package    Borghamns_General
 * @subpackage Borghamns_General/includes
 * @author     Dhanuka Gunarathna <dhanuka@hashcodeab.se>
 */
class Hero extends Composer {
	/**
	 * List of views served by this composer.
	 *
	 * @var array
	 */
	protected static $views = array(
		'sections.header',
		'partials.header.header-no-hero',
		'partials.header.header-with-hero',
	);

	/**
	 * Data to be passed to view before rendering, but after merging.
	 *
	 * @return array
	 */
	public function override() {
		return array(
			'hero_data' => $this->hero_data(),
		);
	}

	/**
	 * Returns the post title.
	 *
	 * @return string
	 */
	public function hero_data() {

		$hero_data = array();

		if ( ! function_exists( 'get_field' ) ) {
			return $hero_data;
		}

		$page_id = get_the_ID();

		if ( is_home() ) {
			$page_id = get_option( 'page_for_posts' );
		}

		$hero_image        = get_field( 'hero_image', $page_id );
		$custom_page_title = get_field( 'custom_page_title', $page_id );
		$page_description  = get_field( 'page_description', $page_id );

		$use_video_background = get_field( 'use_video_background', $page_id );
		$hero_video_array     = get_field( 'hero_video', $page_id );
		$disable_hero_section = get_field( 'disable_hero_section', $page_id );

		$hero_video = null;

		if ( '1' == $use_video_background ) {
			$hero_video = $hero_video_array;
		}

		$page_title = get_the_title();

		if ( ! empty( $custom_page_title ) ) {
			$page_title = $custom_page_title;
		}

		if ( empty( $hero_image ) ) {

			$hero_asset = \Roots\asset( 'images/home-banner.jpg' );

			if ( $hero_asset ) {
				$hero_image = $hero_asset->uri();
			}
		} else {
			$hero_image = $hero_image['url'];
		}

		if ( is_tax() || is_category() ) {

			$queried_object = get_queried_object();

			if ( ! empty( $queried_object ) && isset( $queried_object->name ) ) {
				$page_title = $queried_object->name;

			}
		}

		$post_parent = get_post_parent( get_the_ID() );

		$hero_data = array(
			'page_title'       => $page_title,
			'hero_image'       => $hero_image,
			'page_description' => $page_description,
			'post_parent'      => $post_parent,
			'hero_video'       => $hero_video,
			'disable_hero'     => $disable_hero_section,
		);

		if ( is_front_page() ) {

			$hero_tagline = get_field( 'hero_tagline' );
			$hero_title   = get_field( 'hero_title' );
			$hero_cta     = get_field( 'hero_cta' );
			$hero_images  = get_field( 'hero_images' );

			$hero_data['home_hero'] = array(
				'tagline' => $hero_tagline,
				'title'   => $hero_title,
				'cta'     => $hero_cta,
				'images'  => $hero_images,
			);

		}

		return $hero_data;
	}
}
