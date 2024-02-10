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
			'menu_position'       => 100,
			'menu_icon'           => 'dashicons-businessman',
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
}
