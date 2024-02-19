<?php
/**
 * Homepage Hero Settings ACF fields
 *
 * @link       https://hashcodeab.se
 * @since      1.0.0
 *
 * @package    Borghamns_General
 * @subpackage Borghamns_General/admin/acf
 */

if ( ! function_exists( 'acf_add_local_field_group' ) ) {
	return;
}

acf_add_local_field_group(
	array(
		'key'      => 'group_homepage_hero',
		'title'    => 'Homepage Hero',
		'fields'   => array(
			array(
				'key'   => 'field_hero_tagline',
				'label' => 'Hero Tagline',
				'name'  => 'hero_tagline',
				'type'  => 'text',
			),
			array(
				'key'   => 'field_hero_title',
				'label' => 'Hero Title',
				'name'  => 'hero_title',
				'type'  => 'text',
			),
			array(
				'key'   => 'field_hero_cta',
				'label' => 'Hero CTA',
				'name'  => 'hero_cta',
				'type'  => 'link',
			),
			array(
				'key'   => 'field_home_hero_images',
				'label' => 'Hero Images',
				'name'  => 'hero_images',
				'type'  => 'gallery',
				'max'   => 3,
			),
		),
		'location' => array(
			array(
				array(
					'param'    => 'page_type',
					'operator' => '==',
					'value'    => 'front_page',
				),
			),
		),
		'active'   => true,
	)
);
