<?php
/**
 * Page Hero Settings ACF fields
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
		'key'      => 'group_page_hero_settings',
		'title'    => 'Page Hero Settings',
		'fields'   => array(
			array(
				'key'   => 'field_disable_hero_section',
				'label' => 'Disable Hero Section?',
				'name'  => 'disable_hero_section',
				'type'  => 'true_false',
				'ui'    => 1,
			),
			array(
				'key'   => 'field_hero_image',
				'label' => 'Hero Image',
				'name'  => 'hero_image',
				'type'  => 'image',
				'conditional_logic' => array(
					array(
						array(
							'field'    => 'field_use_video_background',
							'operator' => '!=',
							'value'    => '1',
						),
					),
				),
			),
			array(
				'key'   => 'field_use_video_background',
				'label' => 'Use Video Background?',
				'name'  => 'use_video_background',
				'type'  => 'true_false',
				'ui'    => 1,
			),
			array(
				'key'   => 'field_hero_video',
				'label' => 'Hero Video',
				'name'  => 'hero_video',
				'type'  => 'file',
				'conditional_logic' => array(
					array(
						array(
							'field'    => 'field_use_video_background',
							'operator' => '==',
							'value'    => '1',
						),
					),
				),
			),
			array(
				'key'          => 'field_custom_page_title',
				'label'        => 'Custom Page Title',
				'name'         => 'custom_page_title',
				'type'         => 'text',
				'instructions' => 'Use this field if you want to display a different title other than the main title of the page.',
			),
			array(
				'key'       => 'field_page_description',
				'label'     => 'Page Description',
				'name'      => 'page_description',
				'type'      => 'textarea',
				'new_lines' => 'wpautop',
			),
		),
		'location' => array(
			array(
				array(
					'param'    => 'post_type',
					'operator' => '==',
					'value'    => 'post',
				),
			),
			array(
				array(
					'param'    => 'post_type',
					'operator' => '==',
					'value'    => 'page',
				),
				array(
					'param'    => 'page_type',
					'operator' => '!=',
					'value'    => 'front_page',
				),
			),
		),
		'active'   => true,
	)
);
