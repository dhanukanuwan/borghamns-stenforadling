<?php
/**
 * Team Member Info ACF fields
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
		'key'          => 'group_team_member_info',
		'title'        => 'Team Member Info',
		'fields'       => array(
			array(
				'key'   => 'field_member_position',
				'label' => 'Position',
				'name'  => 'position',
				'type'  => 'text',
			),
			array(
				'key'   => 'field_member_email',
				'label' => 'Email',
				'name'  => 'email',
				'type'  => 'email',
			),
			array(
				'key'   => 'field_member_telephone_number',
				'label' => 'Telephone Number',
				'name'  => 'telephone_number',
				'type'  => 'text',
			),
		),
		'location'     => array(
			array(
				array(
					'param'    => 'post_type',
					'operator' => '==',
					'value'    => 'team',
				),
			),
		),
		'active'       => true,
		'show_in_rest' => 1,
	)
);
