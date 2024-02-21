<?php
/**
 * Testimonial Data ACF fields
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
		'key'          => 'group_testimonial_data',
		'title'        => 'Testimonial Data',
		'fields'       => array(
			array(
				'key'       => 'field_testimonial_content',
				'label'     => 'Testimonial Content',
				'name'      => 'testimonial_content',
				'type'      => 'textarea',
				'new_lines' => 'wpautop',
			),
			array(
				'key'   => 'field_testi_company',
				'label' => 'Company',
				'name'  => 'testi_company',
				'type'  => 'text',
			),
		),
		'location'     => array(
			array(
				array(
					'param'    => 'post_type',
					'operator' => '==',
					'value'    => 'testimonial_block',
				),
			),
		),
		'active'       => true,
		'show_in_rest' => 1,
	)
);
