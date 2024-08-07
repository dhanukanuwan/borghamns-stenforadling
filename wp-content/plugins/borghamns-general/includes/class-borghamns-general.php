<?php

/**
 * The file that defines the core plugin class
 *
 * A class definition that includes attributes and functions used across both the
 * public-facing side of the site and the admin area.
 *
 * @link       https://https://hashcodeab.se/
 * @since      1.0.0
 *
 * @package    Borghamns_General
 * @subpackage Borghamns_General/includes
 */

/**
 * The core plugin class.
 *
 * This is used to define internationalization, admin-specific hooks, and
 * public-facing site hooks.
 *
 * Also maintains the unique identifier of this plugin as well as the current
 * version of the plugin.
 *
 * @since      1.0.0
 * @package    Borghamns_General
 * @subpackage Borghamns_General/includes
 * @author     Dhanuka Gunarathna <dhanuka@hashcodeab.se>
 */
class Borghamns_General {

	/**
	 * The loader that's responsible for maintaining and registering all hooks that power
	 * the plugin.
	 *
	 * @since    1.0.0
	 * @access   protected
	 * @var      Borghamns_General_Loader    $loader    Maintains and registers all hooks for the plugin.
	 */
	protected $loader;

	/**
	 * The unique identifier of this plugin.
	 *
	 * @since    1.0.0
	 * @access   protected
	 * @var      string    $plugin_name    The string used to uniquely identify this plugin.
	 */
	protected $plugin_name;

	/**
	 * The current version of the plugin.
	 *
	 * @since    1.0.0
	 * @access   protected
	 * @var      string    $version    The current version of the plugin.
	 */
	protected $version;

	/**
	 * Define the core functionality of the plugin.
	 *
	 * Set the plugin name and the plugin version that can be used throughout the plugin.
	 * Load the dependencies, define the locale, and set the hooks for the admin area and
	 * the public-facing side of the site.
	 *
	 * @since    1.0.0
	 */
	public function __construct() {
		if ( defined( 'BORGHAMNS_GENERAL_VERSION' ) ) {
			$this->version = BORGHAMNS_GENERAL_VERSION;
		} else {
			$this->version = '1.0.0';
		}
		$this->plugin_name = 'borghamns-general';

		$this->load_dependencies();
		$this->set_locale();
		$this->define_admin_hooks();
		$this->define_public_hooks();

	}

	/**
	 * Load the required dependencies for this plugin.
	 *
	 * Include the following files that make up the plugin:
	 *
	 * - Borghamns_General_Loader. Orchestrates the hooks of the plugin.
	 * - Borghamns_General_i18n. Defines internationalization functionality.
	 * - Borghamns_General_Admin. Defines all hooks for the admin area.
	 * - Borghamns_General_Public. Defines all hooks for the public side of the site.
	 *
	 * Create an instance of the loader which will be used to register the hooks
	 * with WordPress.
	 *
	 * @since    1.0.0
	 * @access   private
	 */
	private function load_dependencies() {

		/**
		 * The class responsible for orchestrating the actions and filters of the
		 * core plugin.
		 */
		require_once plugin_dir_path( dirname( __FILE__ ) ) . 'includes/class-borghamns-general-loader.php';

		/**
		 * The class responsible for defining internationalization functionality
		 * of the plugin.
		 */
		require_once plugin_dir_path( dirname( __FILE__ ) ) . 'includes/class-borghamns-general-i18n.php';

		/**
		 * The Bootstrap nav walker
		 */
		require_once plugin_dir_path( dirname( __FILE__ ) ) . 'includes/class-bootstrap-walker-menu.php';

		/**
		 * The class responsible for defining all actions that occur in the admin area.
		 */
		require_once plugin_dir_path( dirname( __FILE__ ) ) . 'admin/class-borghamns-general-admin.php';

		/**
		 * The class responsible for defining all actions that occur in the public-facing
		 * side of the site.
		 */
		require_once plugin_dir_path( dirname( __FILE__ ) ) . 'public/class-borghamns-general-public.php';

		require_once plugin_dir_path( dirname( __FILE__ ) ) . 'admin/class-borghamns-cpt.php';

		$this->loader = new Borghamns_General_Loader();

	}

	/**
	 * Define the locale for this plugin for internationalization.
	 *
	 * Uses the Borghamns_General_i18n class in order to set the domain and to register the hook
	 * with WordPress.
	 *
	 * @since    1.0.0
	 * @access   private
	 */
	private function set_locale() {

		$plugin_i18n = new Borghamns_General_i18n();

		$this->loader->add_action( 'plugins_loaded', $plugin_i18n, 'load_plugin_textdomain' );

	}

	/**
	 * Register all of the hooks related to the admin area functionality
	 * of the plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 */
	private function define_admin_hooks() {

		$plugin_admin  = new Borghamns_General_Admin( $this->get_plugin_name(), $this->get_version() );
		$borghamns_cpt = new Borghamns_CPT( $this->get_plugin_name(), $this->get_version() );

		$this->loader->add_action( 'init', $plugin_admin, 'borghamn_register_site_blocks' );
		$this->loader->add_action( 'init', $plugin_admin, 'borghamn_register_dynamic_blocks' );
		$this->loader->add_action( 'init', $plugin_admin, 'borghamn_register_testimonial_dynamic_block' );
		$this->loader->add_action( 'init', $plugin_admin, 'borghamn_register_faq_dynamic_block' );
		$this->loader->add_action( 'acf/include_fields', $plugin_admin, 'borghamn_register_acf_field_groups' );
		$this->loader->add_action( 'add_meta_boxes_begar_offert', $plugin_admin, 'borghamn_register_offert_metabox' );
		$this->loader->add_action( 'add_meta_boxes_bestall_prover', $plugin_admin, 'borghamn_register_bestall_prover_metabox' );

		//$this->loader->add_action( 'acf/settings/remove_wp_meta_box', $plugin_admin, 'borghamn_disable_acf_remove_wp_metabox' );

		$this->loader->add_filter( 'allowed_block_types_all', $plugin_admin, 'borghamn_remove_core_blocks' );

		$this->loader->add_action( 'init', $borghamns_cpt, 'borghamns_team_post_type' );
		$this->loader->add_action( 'init', $borghamns_cpt, 'borghamns_faq_blocks_post_type' );
		$this->loader->add_action( 'init', $borghamns_cpt, 'borghamns_testimonial_blocks_post_type' );
		$this->loader->add_action( 'init', $borghamns_cpt, 'borghamns_begar_offert_post_type' );
		$this->loader->add_action( 'init', $borghamns_cpt, 'borghamns_bestall_prover_post_type' );
		$this->loader->add_action( 'init', $borghamns_cpt, 'borghamns_begar_offert_post_type_meta_fields' );
		$this->loader->add_action( 'init', $borghamns_cpt, 'borghamns_bestall_prover_post_type_meta_fields' );

		$this->loader->add_action( 'rest_api_init', $plugin_admin, 'borghamn_save_begar_offert_endpoint' );
		$this->loader->add_action( 'rest_api_init', $plugin_admin, 'borghamn_save_bestall_prover_endpoint' );

	}

	/**
	 * Register all of the hooks related to the public-facing functionality
	 * of the plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 */
	private function define_public_hooks() {

		$plugin_public = new Borghamns_General_Public( $this->get_plugin_name(), $this->get_version() );

	}

	/**
	 * Run the loader to execute all of the hooks with WordPress.
	 *
	 * @since    1.0.0
	 */
	public function run() {
		$this->loader->run();
	}

	/**
	 * The name of the plugin used to uniquely identify it within the context of
	 * WordPress and to define internationalization functionality.
	 *
	 * @since     1.0.0
	 * @return    string    The name of the plugin.
	 */
	public function get_plugin_name() {
		return $this->plugin_name;
	}

	/**
	 * The reference to the class that orchestrates the hooks with the plugin.
	 *
	 * @since     1.0.0
	 * @return    Borghamns_General_Loader    Orchestrates the hooks of the plugin.
	 */
	public function get_loader() {
		return $this->loader;
	}

	/**
	 * Retrieve the version number of the plugin.
	 *
	 * @since     1.0.0
	 * @return    string    The version number of the plugin.
	 */
	public function get_version() {
		return $this->version;
	}

}
