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
	}

	/**
	 * Register team members dynamic block.
	 *
	 * @since    1.0.0
	 */
	public function borghamn_register_team_dynamic_block() {

		register_block_type(
			__DIR__ . '/borghamn-blocks/build/team-members/',
			array(
				'api_version'     => 3,
				'render_callback' => array( $this, 'borghamn_register_team_dynamic_block_render_callback' ),
			)
		);
	}

	/**
	 * Register team members dynamic block.
	 *
	 * @since    1.0.0
	 * @param    array  $block_attributes .
	 * @param    string $content .
	 */
	public function borghamn_register_team_dynamic_block_render_callback( $block_attributes, $content ) {

		$args = array(
			'post_type' => 'team',
		);

		$output = '';

		if ( isset( $block_attributes['itemsNum'] ) && ! empty( $block_attributes['itemsNum'] ) ) {
			$args['posts_per_page'] = $block_attributes['itemsNum'];
		}

		if ( isset( $block_attributes['displayType'] ) && 'category' === $block_attributes['displayType'] ) {
			if ( isset( $block_attributes['category'] ) && 0 !== $block_attributes['category'] ) {

				$args['tax_query'] = array(
					array(
						'taxonomy' => 'department',
						'field'    => 'term_id',
						'terms'    => $block_attributes['category'],
					),
				);
			}
		}

		if ( isset( $block_attributes['displayType'] ) && 'selected' === $block_attributes['displayType'] ) {
			if ( isset( $block_attributes['displayIds'] ) && is_array( $block_attributes['displayIds'] ) && 0 < count( $block_attributes['displayIds'] ) ) {

				$args['post__in'] = $block_attributes['displayIds'];

			}
		}

		$column_classes = '';

		if ( isset( $block_attributes['columns'] ) && 0 < $block_attributes['columns'] ) {

			if ( 4 == $block_attributes['columns'] ) {
				$column_classes = 'col-md-6 col-lg-3';
			} elseif ( 3 == $block_attributes['columns'] ) {
				$column_classes = 'col-md-6 col-lg-4';
			} elseif ( 2 == $block_attributes['columns'] ) {
				$column_classes = 'col-lg-6';
			}
		}

		$team_query = new WP_Query( $args );

		if ( $team_query->have_posts() ) {

			$output .= '<div class="row">';

			while ( $team_query->have_posts() ) {
				$team_query->the_post();

				$position = get_field( 'position' );

				$output .= '<div class="col-12 ' . esc_attr( $column_classes ) . '">';

					$output .= '<div class="team-item-wrap bg-white pb-4 mb-4">';

					if ( has_post_thumbnail() ) {

						$output .= '<div class="round-img-wrap position-relative"><div class="p-2">';

							$output .= get_the_post_thumbnail( get_the_ID(), 'full', array( 'class' => 'mw-100 w-100 h-auto' ) );

						$output .= '</div></div>';

					}

					$output .= '<div class="mt-3 text-center">';

						$output .= '<h3 class="liten h4 mb-1">' . get_the_title() . '</h3>';

						if ( ! empty( $position ) ) {
							$output .= '<span class="text-primary">' . $position . '</span>';
						}

					$output .= '</div>';

					$output .= '</div>';

				$output .= '</div>';

			}

			$output .= '</div>';

		}

		wp_reset_postdata();

		return $output;

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
