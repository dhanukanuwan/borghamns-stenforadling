<?php
/**
 * Defines all custom post types used in the site.
 *
 * @link       https://hashcodeab.se/
 * @since      1.0.0
 *
 * @package    Borghamns_General
 * @subpackage Borghamns_General/admin
 */

/**
 * The admin-specific functionality of the plugin.
 *
 * @package    Borghamns_General
 * @subpackage Borghamns_General/admin
 * @author     Dhanuka Nuwan Gunarathna <dhanuka@hashcodeab.se>
 */
class Borghamns_CPT {

	/**
	 * The ID of this plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $plugin_name    The ID of this plugin.
	 */
	private $plugin_name;

	/**
	 * The version of this plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $version    The current version of this plugin.
	 */
	private $version;

	/**
	 * Initialize the class and set its properties.
	 *
	 * @since    1.0.0
	 * @param      string $plugin_name       The name of this plugin.
	 * @param      string $version    The version of this plugin.
	 */
	public function __construct( $plugin_name, $version ) {

		$this->plugin_name = $plugin_name;
		$this->version     = $version;

	}

	/**
	 * Register team post type.
	 *
	 * @since    1.0.0
	 */
	public function borghamns_team_post_type() {

		$labels = array(
			'name'                  => _x( 'Team', 'Post Type General Name', 'borghamns-general' ),
			'singular_name'         => _x( 'Team', 'Post Type Singular Name', 'borghamns-general' ),
			'menu_name'             => __( 'Team', 'borghamns-general' ),
			'name_admin_bar'        => __( 'Team', 'borghamns-general' ),
			'archives'              => __( 'Member Archives', 'borghamns-general' ),
			'attributes'            => __( 'Member Attributes', 'borghamns-general' ),
			'parent_item_colon'     => __( 'Parent Item:', 'borghamns-general' ),
			'all_items'             => __( 'All Members', 'borghamns-general' ),
			'add_new_item'          => __( 'Add New Member', 'borghamns-general' ),
			'add_new'               => __( 'Add New Member', 'borghamns-general' ),
			'new_item'              => __( 'New Member', 'borghamns-general' ),
			'edit_item'             => __( 'Edit Member', 'borghamns-general' ),
			'update_item'           => __( 'Update Member', 'borghamns-general' ),
			'view_item'             => __( 'View Member', 'borghamns-general' ),
			'view_items'            => __( 'View Member', 'borghamns-general' ),
			'search_items'          => __( 'Search Member', 'borghamns-general' ),
			'not_found'             => __( 'Not found', 'borghamns-general' ),
			'not_found_in_trash'    => __( 'Not found in Trash', 'borghamns-general' ),
			'featured_image'        => __( 'Member Image', 'borghamns-general' ),
			'set_featured_image'    => __( 'Set member image', 'borghamns-general' ),
			'remove_featured_image' => __( 'Remove member image', 'borghamns-general' ),
			'use_featured_image'    => __( 'Use as member image', 'borghamns-general' ),
			'insert_into_item'      => __( 'Insert into item', 'borghamns-general' ),
			'uploaded_to_this_item' => __( 'Uploaded to this item', 'borghamns-general' ),
			'items_list'            => __( 'Items list', 'borghamns-general' ),
			'items_list_navigation' => __( 'Items list navigation', 'borghamns-general' ),
			'filter_items_list'     => __( 'Filter items list', 'borghamns-general' ),
		);

		$args = array(
			'label'               => __( 'Team', 'borghamns-general' ),
			'description'         => __( 'Team Members', 'borghamns-general' ),
			'labels'              => $labels,
			'supports'            => array( 'title', 'thumbnail' ),
			'hierarchical'        => false,
			'public'              => false,
			'show_ui'             => true,
			'show_in_menu'        => true,
			'menu_icon'           => 'dashicons-groups',
			'show_in_admin_bar'   => false,
			'show_in_nav_menus'   => false,
			'can_export'          => true,
			'has_archive'         => false,
			'exclude_from_search' => false,
			'publicly_queryable'  => true,
			'capability_type'     => 'page',
			'show_in_rest'        => true,
		);

		register_post_type( 'team', $args );

		$labels = array(
			'name'              => _x( 'Departments', 'taxonomy general name', 'borghamns-general' ),
			'singular_name'     => _x( 'Department', 'taxonomy singular name', 'borghamns-general' ),
			'search_items'      => __( 'Search Departments', 'borghamns-general' ),
			'all_items'         => __( 'All Departments', 'borghamns-general' ),
			'parent_item'       => __( 'Parent Department', 'borghamns-general' ),
			'parent_item_colon' => __( 'Parent Department:', 'borghamns-general' ),
			'edit_item'         => __( 'Edit Department', 'borghamns-general' ),
			'update_item'       => __( 'Update Department', 'borghamns-general' ),
			'add_new_item'      => __( 'Add New Department', 'borghamns-general' ),
			'new_item_name'     => __( 'New Department Name', 'borghamns-general' ),
			'menu_name'         => __( 'Department', 'borghamns-general' ),
		);

		$args = array(
			'hierarchical'      => true,
			'labels'            => $labels,
			'show_ui'           => true,
			'show_admin_column' => true,
			'query_var'         => true,
			'show_in_rest'      => true,
			'rewrite'           => array( 'slug' => 'department' ),
		);

		register_taxonomy( 'department', array( 'team' ), $args );
	}

	/**
	 * Register FAQ Blocks post type.
	 *
	 * @since    1.0.0
	 */
	public function borghamns_faq_blocks_post_type() {

		$labels = array(
			'name'                  => _x( 'FAQ Blocks', 'Post Type General Name', 'borghamns-general' ),
			'singular_name'         => _x( 'FAQ Blocks', 'Post Type Singular Name', 'borghamns-general' ),
			'menu_name'             => __( 'FAQ Blocks', 'borghamns-general' ),
			'name_admin_bar'        => __( 'FAQ Blocks', 'borghamns-general' ),
			'archives'              => __( 'FAQ Block Archives', 'borghamns-general' ),
			'attributes'            => __( 'FAQ Block Attributes', 'borghamns-general' ),
			'parent_item_colon'     => __( 'Parent Item:', 'borghamns-general' ),
			'all_items'             => __( 'All FAQ Blocks', 'borghamns-general' ),
			'add_new_item'          => __( 'Add New FAQ Block', 'borghamns-general' ),
			'add_new'               => __( 'Add New FAQ Block', 'borghamns-general' ),
			'new_item'              => __( 'New FAQ Block', 'borghamns-general' ),
			'edit_item'             => __( 'Edit FAQ Block', 'borghamns-general' ),
			'update_item'           => __( 'Update FAQ Block', 'borghamns-general' ),
			'view_item'             => __( 'View FAQ Block', 'borghamns-general' ),
			'view_items'            => __( 'View FAQ Block', 'borghamns-general' ),
			'search_items'          => __( 'Search FAQ Block', 'borghamns-general' ),
			'not_found'             => __( 'Not found', 'borghamns-general' ),
			'not_found_in_trash'    => __( 'Not found in Trash', 'borghamns-general' ),
			'featured_image'        => __( 'FAQ Block Image', 'borghamns-general' ),
			'set_featured_image'    => __( 'Set FAQ Block image', 'borghamns-general' ),
			'remove_featured_image' => __( 'Remove FAQ Block image', 'borghamns-general' ),
			'use_featured_image'    => __( 'Use as FAQ Block image', 'borghamns-general' ),
			'insert_into_item'      => __( 'Insert into item', 'borghamns-general' ),
			'uploaded_to_this_item' => __( 'Uploaded to this item', 'borghamns-general' ),
			'items_list'            => __( 'Items list', 'borghamns-general' ),
			'items_list_navigation' => __( 'Items list navigation', 'borghamns-general' ),
			'filter_items_list'     => __( 'Filter items list', 'borghamns-general' ),
		);

		$args = array(
			'label'               => __( 'FAQ Blocks', 'borghamns-general' ),
			'description'         => __( 'FAQ Blocks', 'borghamns-general' ),
			'labels'              => $labels,
			'supports'            => array( 'title' ),
			'hierarchical'        => false,
			'public'              => false,
			'show_ui'             => true,
			'show_in_menu'        => true,
			'menu_icon'           => 'dashicons-feedback',
			'show_in_admin_bar'   => false,
			'show_in_nav_menus'   => false,
			'can_export'          => true,
			'has_archive'         => false,
			'exclude_from_search' => false,
			'publicly_queryable'  => true,
			'capability_type'     => 'page',
			'show_in_rest'        => true,
		);

		register_post_type( 'faq_block', $args );
	}

	/**
	 * Register Testimonial Blocks post type.
	 *
	 * @since    1.0.0
	 */
	public function borghamns_testimonial_blocks_post_type() {

		$labels = array(
			'name'                  => _x( 'Testimonial Blocks', 'Post Type General Name', 'borghamns-general' ),
			'singular_name'         => _x( 'Testimonial Blocks', 'Post Type Singular Name', 'borghamns-general' ),
			'menu_name'             => __( 'Testimonial Blocks', 'borghamns-general' ),
			'name_admin_bar'        => __( 'Testimonial Blocks', 'borghamns-general' ),
			'archives'              => __( 'Testimonial Block Archives', 'borghamns-general' ),
			'attributes'            => __( 'Testimonial Block Attributes', 'borghamns-general' ),
			'parent_item_colon'     => __( 'Parent Item:', 'borghamns-general' ),
			'all_items'             => __( 'All Testimonial Blocks', 'borghamns-general' ),
			'add_new_item'          => __( 'Add New Testimonial Block', 'borghamns-general' ),
			'add_new'               => __( 'Add New Testimonial Block', 'borghamns-general' ),
			'new_item'              => __( 'New Testimonial Block', 'borghamns-general' ),
			'edit_item'             => __( 'Edit Testimonial Block', 'borghamns-general' ),
			'update_item'           => __( 'Update Testimonial Block', 'borghamns-general' ),
			'view_item'             => __( 'View Testimonial Block', 'borghamns-general' ),
			'view_items'            => __( 'View Testimonial Block', 'borghamns-general' ),
			'search_items'          => __( 'Search Testimonial Block', 'borghamns-general' ),
			'not_found'             => __( 'Not found', 'borghamns-general' ),
			'not_found_in_trash'    => __( 'Not found in Trash', 'borghamns-general' ),
			'featured_image'        => __( 'Testimonial Block Image', 'borghamns-general' ),
			'set_featured_image'    => __( 'Set Testimonial Block image', 'borghamns-general' ),
			'remove_featured_image' => __( 'Remove Testimonial Block image', 'borghamns-general' ),
			'use_featured_image'    => __( 'Use as Testimonial Block image', 'borghamns-general' ),
			'insert_into_item'      => __( 'Insert into item', 'borghamns-general' ),
			'uploaded_to_this_item' => __( 'Uploaded to this item', 'borghamns-general' ),
			'items_list'            => __( 'Items list', 'borghamns-general' ),
			'items_list_navigation' => __( 'Items list navigation', 'borghamns-general' ),
			'filter_items_list'     => __( 'Filter items list', 'borghamns-general' ),
		);

		$args = array(
			'label'               => __( 'Testimonial Blocks', 'borghamns-general' ),
			'description'         => __( 'Testimonial Blocks', 'borghamns-general' ),
			'labels'              => $labels,
			'supports'            => array( 'title', 'thumbnail' ),
			'hierarchical'        => false,
			'public'              => false,
			'show_ui'             => true,
			'show_in_menu'        => true,
			'menu_icon'           => 'dashicons-admin-comments',
			'show_in_admin_bar'   => false,
			'show_in_nav_menus'   => false,
			'can_export'          => true,
			'has_archive'         => false,
			'exclude_from_search' => false,
			'publicly_queryable'  => true,
			'capability_type'     => 'page',
			'show_in_rest'        => true,
		);

		register_post_type( 'testimonial_block', $args );
	}

	/**
	 * Register Begär offert post type.
	 *
	 * @since    1.0.0
	 */
	public function borghamns_begar_offert_post_type() {

		$labels = array(
			'name'                  => _x( 'Begär offert', 'Post Type General Name', 'borghamns-general' ),
			'singular_name'         => _x( 'Begär offert', 'Post Type Singular Name', 'borghamns-general' ),
			'menu_name'             => __( 'Begär offert', 'borghamns-general' ),
			'name_admin_bar'        => __( 'Begär offert', 'borghamns-general' ),
			'archives'              => __( 'Begär offert Archives', 'borghamns-general' ),
			'attributes'            => __( 'Begär offert Attributes', 'borghamns-general' ),
			'parent_item_colon'     => __( 'Parent Item:', 'borghamns-general' ),
			'all_items'             => __( 'All Begär offert', 'borghamns-general' ),
			'add_new_item'          => __( 'Add New Begär offert', 'borghamns-general' ),
			'add_new'               => __( 'Add New Begär offert', 'borghamns-general' ),
			'new_item'              => __( 'New Begär offert', 'borghamns-general' ),
			'edit_item'             => __( 'Edit Begär offert', 'borghamns-general' ),
			'update_item'           => __( 'Update Begär offert', 'borghamns-general' ),
			'view_item'             => __( 'View Begär offert', 'borghamns-general' ),
			'view_items'            => __( 'View Begär offert', 'borghamns-general' ),
			'search_items'          => __( 'Search Begär offert', 'borghamns-general' ),
			'not_found'             => __( 'Not found', 'borghamns-general' ),
			'not_found_in_trash'    => __( 'Not found in Trash', 'borghamns-general' ),
			'featured_image'        => __( 'Begär offert Image', 'borghamns-general' ),
			'set_featured_image'    => __( 'Set Begär offert image', 'borghamns-general' ),
			'remove_featured_image' => __( 'Remove Begär offert image', 'borghamns-general' ),
			'use_featured_image'    => __( 'Use as Begär offert image', 'borghamns-general' ),
			'insert_into_item'      => __( 'Insert into item', 'borghamns-general' ),
			'uploaded_to_this_item' => __( 'Uploaded to this item', 'borghamns-general' ),
			'items_list'            => __( 'Items list', 'borghamns-general' ),
			'items_list_navigation' => __( 'Items list navigation', 'borghamns-general' ),
			'filter_items_list'     => __( 'Filter items list', 'borghamns-general' ),
		);

		$args = array(
			'label'               => __( 'Begär offert', 'borghamns-general' ),
			'description'         => __( 'Begär offert', 'borghamns-general' ),
			'labels'              => $labels,
			'supports'            => array( 'title', 'custom-fields' ),
			'hierarchical'        => false,
			'public'              => false,
			'show_ui'             => true,
			'show_in_menu'        => true,
			'menu_icon'           => 'dashicons-editor-table',
			'show_in_admin_bar'   => false,
			'show_in_nav_menus'   => false,
			'can_export'          => true,
			'has_archive'         => false,
			'exclude_from_search' => false,
			'publicly_queryable'  => true,
			'capability_type'     => 'page',
			'show_in_rest'        => true,
		);

		register_post_type( 'begar_offert', $args );
	}

	/**
	 * Register Begär offert post type.
	 *
	 * @since    1.0.0
	 */
	public function borghamns_bestall_prover_post_type() {

		$labels = array(
			'name'                  => _x( 'Beställ prover', 'Post Type General Name', 'borghamns-general' ),
			'singular_name'         => _x( 'Beställ prover', 'Post Type Singular Name', 'borghamns-general' ),
			'menu_name'             => __( 'Beställ prover', 'borghamns-general' ),
			'name_admin_bar'        => __( 'Beställ prover', 'borghamns-general' ),
			'archives'              => __( 'Beställ prover Archives', 'borghamns-general' ),
			'attributes'            => __( 'Beställ prover Attributes', 'borghamns-general' ),
			'parent_item_colon'     => __( 'Parent Item:', 'borghamns-general' ),
			'all_items'             => __( 'All Beställ prover', 'borghamns-general' ),
			'add_new_item'          => __( 'Add New', 'borghamns-general' ),
			'add_new'               => __( 'Add New', 'borghamns-general' ),
			'new_item'              => __( 'New Beställ prover', 'borghamns-general' ),
			'edit_item'             => __( 'Edit', 'borghamns-general' ),
			'update_item'           => __( 'Update Beställ prover', 'borghamns-general' ),
			'view_item'             => __( 'View Beställ prover', 'borghamns-general' ),
			'view_items'            => __( 'View Beställ prover', 'borghamns-general' ),
			'search_items'          => __( 'Search Beställ prover', 'borghamns-general' ),
			'not_found'             => __( 'Not found', 'borghamns-general' ),
			'not_found_in_trash'    => __( 'Not found in Trash', 'borghamns-general' ),
			'featured_image'        => __( 'Beställ prover Image', 'borghamns-general' ),
			'set_featured_image'    => __( 'Set Beställ prover image', 'borghamns-general' ),
			'remove_featured_image' => __( 'Remove Beställ prover image', 'borghamns-general' ),
			'use_featured_image'    => __( 'Use as Beställ prover image', 'borghamns-general' ),
			'insert_into_item'      => __( 'Insert into item', 'borghamns-general' ),
			'uploaded_to_this_item' => __( 'Uploaded to this item', 'borghamns-general' ),
			'items_list'            => __( 'Items list', 'borghamns-general' ),
			'items_list_navigation' => __( 'Items list navigation', 'borghamns-general' ),
			'filter_items_list'     => __( 'Filter items list', 'borghamns-general' ),
		);

		$args = array(
			'label'               => __( 'Beställ prover', 'borghamns-general' ),
			'description'         => __( 'Beställ prover', 'borghamns-general' ),
			'labels'              => $labels,
			'supports'            => array( 'title', 'custom-fields' ),
			'hierarchical'        => false,
			'public'              => false,
			'show_ui'             => true,
			'show_in_menu'        => true,
			'menu_icon'           => 'dashicons-editor-table',
			'show_in_admin_bar'   => false,
			'show_in_nav_menus'   => false,
			'can_export'          => true,
			'has_archive'         => false,
			'exclude_from_search' => false,
			'publicly_queryable'  => true,
			'capability_type'     => 'page',
			'show_in_rest'        => true,
		);

		register_post_type( 'bestall_prover', $args );
	}

	/**
	 * Register Begär offert post type meta fields.
	 *
	 * @since    1.0.0
	 */
	public function borghamns_begar_offert_post_type_meta_fields() {

		$meta_keys = array(
			'borg_product_type',
			'borg_stone_type',
			'borg_form_type',
			'borg_treatment_type',
			'borg_measurements',
			'borg_placing',
			'borg_sizes',
			'borg_surface_treatment',
			'borg_surface_treatment_custom',
			'borg_placering_sizes',
			'borg_step_4_thickness',
			'borg_step_5_visible_edgez',
			'borg_step_5_edge_processing',
			'borg_step_5_edge_processing_custom',
			'borg_step_5_quantity',
			'borg_step_6_edge_processing',
			'borg_step_6_edge_processing_custom',
			'borg_step_6_fonsterbank_quantity',
			'borg_step_7_ho_type',
			'borg_step_8_hall_type',
			'borg_step_9_punching_holes',
			'borg_step_10_edge_stripes',
			'borg_step_10_holes_number',
			'borg_step_11_bakkantslist_stankskydd',
			'borg_step_11_matt_bakkantslist_stankskydd',
			'borg_step_12_matt_bakkantslist_stankskydd',
		);

		foreach ( $meta_keys as $meta_key ) {
			register_meta(
				'post',
				$meta_key,
				array(
					'object_subtype' => 'begar_offert',
					'show_in_rest'   => true,
					'type'           => 'string',
				),
			);
		}
	}
}
