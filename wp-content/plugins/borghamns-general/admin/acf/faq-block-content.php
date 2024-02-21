<?php
/**
 * FAQ Block Content ACF fields
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
		'key'          => 'group_faq_block_content',
		'title'        => 'FAQ Block Content',
		'fields'       => array(
			array(
				'key'           => 'field_faq_block',
				'label'         => 'FAQ Block',
				'name'          => 'faq_block',
				'type'          => 'repeater',
				'layout'        => 'block',
				'button_label'  => 'Add New Question',
				'rows_per_page' => 20,
				'sub_fields'    => array(
					array(
						'key'             => 'field_faq_question',
						'label'           => 'Question',
						'name'            => 'question',
						'type'            => 'text',
						'parent_repeater' => 'field_faq_block',
					),
					array(
						'key'             => 'field_faq_answer',
						'label'           => 'Answer',
						'name'            => 'answer',
						'type'            => 'textarea',
						'new_lines'       => 'wpautop',
						'parent_repeater' => 'field_faq_block',
					),
				),
			),
		),
		'location'     => array(
			array(
				array(
					'param'    => 'post_type',
					'operator' => '==',
					'value'    => 'faq_block',
				),
			),
		),
		'active'       => true,
		'show_in_rest' => 1,
	)
);
