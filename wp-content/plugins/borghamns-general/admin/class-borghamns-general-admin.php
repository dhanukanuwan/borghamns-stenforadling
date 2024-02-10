<?php
/**
 * The admin-specific functionality of the plugin.
 *
 * @link       https://https://hashcodeab.se/
 * @since      1.0.0
 *
 * @package    Borghamns_General
 * @subpackage Borghamns_General/admin
 */

/**
 * The admin-specific functionality of the plugin.
 *
 * Defines the plugin name, version, and two examples hooks for how to
 * enqueue the admin-specific stylesheet and JavaScript.
 *
 * @package    Borghamns_General
 * @subpackage Borghamns_General/admin
 * @author     Dhanuka Gunarathna <dhanuka@hashcodeab.se>
 */
class Borghamns_General_Admin {

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
	 * Register the stylesheets for the admin area.
	 *
	 * @since    1.0.0
	 */
	public function borghamn_register_site_blocks() {
		register_block_type( __DIR__ . '/borghamn-blocks/build/offert/' );
		register_block_type( __DIR__ . '/borghamn-blocks/build/content-section/' );
		register_block_type( __DIR__ . '/borghamn-blocks/build/content-column/' );
		register_block_type( __DIR__ . '/borghamn-blocks/build/button/' );
		register_block_type( __DIR__ . '/borghamn-blocks/build/section-header/' );
		register_block_type( __DIR__ . '/borghamn-blocks/build/section-header-tag/' );
		register_block_type( __DIR__ . '/borghamn-blocks/build/team-members/' );
	}

	/**
	 * Remove unwanted core blocks.
	 *
	 * @since    1.0.0
	 * @param    array $allowed_blocks .
	 */
	public function borghamn_remove_core_blocks( $allowed_blocks ) {

		// get all the registered blocks.
		$blocks = WP_Block_Type_Registry::get_instance()->get_all_registered();

		// then disable some of them.
		unset( $blocks['core/buttons'] );
		unset( $blocks['core/columns'] );
		unset( $blocks['core/row'] );

		// return the new list of allowed blocks.
		return array_keys( $blocks );
	}

	/**
	 * Register ACF field groups.
	 *
	 * @since    1.0.0
	 */
	public function borghamn_register_acf_field_groups() {

		require_once plugin_dir_path( dirname( __FILE__ ) ) . 'admin/acf/page-hero-settings.php';
		require_once plugin_dir_path( dirname( __FILE__ ) ) . 'admin/acf/team-member-info.php';
	}
}
