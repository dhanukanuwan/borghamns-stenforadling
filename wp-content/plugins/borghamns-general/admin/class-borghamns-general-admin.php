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
		register_block_type( __DIR__ . '/borghamn-blocks/build/content-section/' );
		register_block_type( __DIR__ . '/borghamn-blocks/build/content-column/' );
		register_block_type( __DIR__ . '/borghamn-blocks/build/button/' );
		register_block_type( __DIR__ . '/borghamn-blocks/build/section-header/' );
		register_block_type( __DIR__ . '/borghamn-blocks/build/section-header-tag/' );
		//register_block_type( __DIR__ . '/borghamn-blocks/build/slideshow/' );
		register_block_type( __DIR__ . '/borghamn-blocks/build/gallery/' );
	}

	/**
	 * Register team members dynamic block.
	 *
	 * @since    1.0.0
	 */
	public function borghamn_register_dynamic_blocks() {

		register_block_type(
			__DIR__ . '/borghamn-blocks/build/team-members/',
			array(
				'api_version'     => 3,
				'render_callback' => array( $this, 'borghamn_register_team_dynamic_block_render_callback' ),
			)
		);

		register_block_type(
			__DIR__ . '/borghamn-blocks/build/offert/',
			array(
				'api_version'     => 3,
				'render_callback' => array( $this, 'borghamn_register_offer_dynamic_block_render_callback' ),
			)
		);

		register_block_type(
			__DIR__ . '/borghamn-blocks/build/ordersamples/',
			array(
				'api_version'     => 3,
				'render_callback' => array( $this, 'borghamn_register_order_samples_dynamic_block_render_callback' ),
			)
		);

		register_block_type(
			__DIR__ . '/borghamn-blocks/build/offert-metabox/',
			array(
				'api_version'     => 3,
				'render_callback' => array( $this, 'borghamn_register_offer_dynamic_block_render_callback' ),
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

			while ( $team_query->have_posts() ) {
				$team_query->the_post();

				$position = get_field( 'position' );

				$output .= '<div class="col-12 ' . esc_attr( $column_classes ) . '">';

					$output .= '<div class="team-item-wrap bg-white pb-4 mb-4">';

					if ( has_post_thumbnail() ) {

						$output .= '<div class="round-img-wrap position-relative"><div class="p-2">';

							$member_image = get_the_post_thumbnail( get_the_ID(), 'full', array( 'class' => 'mw-100 w-100 h-auto lazyload' ) );
							$member_image = str_replace( 'src=', 'data-src=', $member_image );

							$output .= $member_image;

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

		}

		wp_reset_postdata();

		return $output;
	}

	/**
	 * Register team members dynamic block.
	 *
	 * @since    1.0.0
	 */
	public function borghamn_register_testimonial_dynamic_block() {

		register_block_type(
			__DIR__ . '/borghamn-blocks/build/testimonial/',
			array(
				'api_version'     => 3,
				'render_callback' => array( $this, 'borghamn_register_testimonial_dynamic_block_render_callback' ),
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
	public function borghamn_register_testimonial_dynamic_block_render_callback( $block_attributes, $content ) {

		$output = '';

		$post_ids = null;

		if ( isset( $block_attributes['tetimonialID'] ) && ! empty( $block_attributes['tetimonialID'] ) ) {
			$post_ids = $block_attributes['tetimonialID'];
		}

		if ( ! empty( $post_ids ) ) {

			$output .= '<div class="testimonial-wrap d-flex carousel-inner">';

			$i = 1;

			foreach ( $post_ids as $post_id ) {

				$testimonial_content = get_field( 'testimonial_content', $post_id );
				$testi_company       = get_field( 'testi_company', $post_id );
				$active = '';

				if ( 1 === $i ) {
					$active = 'active';
				}

				$output .= '<div class="testimonial-item carousel-item p-4 p-xl-5 bg-white ' . $active . '"><div class="row">';

				if ( has_post_thumbnail( $post_id ) ) {
					$output .= '<div class="col-3 col-lg-2">';
					$output .= get_the_post_thumbnail( $post_id, 'full', array( 'class' => 'mw-100' ) );
					$output .= '</div>';
				}

				$output .= '<div class="col-9 col-lg-10">';

				if ( ! empty( $testimonial_content ) ) {
					$output .= $testimonial_content;
				}

				$output .= '<div class="mt-3 d-flex align-items-center">';
				$output .= '<div class="flex-grow-1">';
				$output .= '<h4 class="liten mb-2">' . get_the_title( $post_id ) . '</h4>';

				if ( ! empty( $testi_company ) ) {
					$output .= '<span class="text-primary">' . $testi_company . '</span>';
				}

				$output .= '</div>';
				$output .= '<div><span class="h2 liten text-primary">,,</span></div>';
				$output .= '</div>';

				$output .= '</div>';

				$output .= '</div></div>';

				$i++;

			}

			$output .= '</div>';

		}

		if ( ! empty( $post_ids ) && 1 < count( $post_ids ) ) {

			$slider_html  = '<div id="carousel_testimonial" class="carousel slide" data-bs-ride="carousel">';
			$slider_html .= '<div class="carousel-indicators">';

			foreach ( $post_ids as $item_key => $item_val ) {

				$active_slide = '';

				if ( 0 === $item_key ) {
					$active_slide = 'active';
				}

				$slider_html .= '<button type="button" data-bs-target="#carousel_testimonial" data-bs-slide-to="' . $item_key . '" class="' . $active_slide . ' bg-dark-text" aria-current="true" aria-label="Slide ' . $item_key + 1 . '"></button>';
			}

			$slider_html .= '</div>';

				$slider_html .= $output;

			$slider_html .= '</div>';

			$output = $slider_html;

		}

		return $output;
	}

	/**
	 * Register FAQ dynamic block.
	 *
	 * @since    1.0.0
	 */
	public function borghamn_register_faq_dynamic_block() {

		register_block_type(
			__DIR__ . '/borghamn-blocks/build/faq-block/',
			array(
				'api_version'     => 3,
				'render_callback' => array( $this, 'borghamn_register_faq_dynamic_block_render_callback' ),
			)
		);
	}

	/**
	 * Register FAQ dynamic block.
	 *
	 * @since    1.0.0
	 * @param    array  $block_attributes .
	 * @param    string $content .
	 */
	public function borghamn_register_faq_dynamic_block_render_callback( $block_attributes, $content ) {

		$output = '';

		$post_ids = null;

		if ( isset( $block_attributes['faqID'] ) && ! empty( $block_attributes['faqID'] ) ) {
			$post_ids = $block_attributes['faqID'];
		}

		if ( ! empty( $post_ids ) ) {

			$output .= '<div class="faq-warp">';

			foreach ( $post_ids as $key => $post_id ) {

				$output .= '<div class="accordion" id="accordion-' . $key . '">';

				$faq_block = get_field( 'faq_block', $post_id );

				if ( ! empty( $faq_block ) ) {

					foreach ( $faq_block as $block_key => $block_data ) {

						$expanded  = 'false';
						$show      = '';
						$collapsed = 'collapsed';

						if ( 0 === $block_key ) {
							$expanded  = 'true';
							$show      = 'show';
							$collapsed = '';
						}

						$output .= '<div class="accordion-item mb-2">';
						$output .= '<h2 class="accordion-header">';
						$output .= '<button class="accordion-button ' . $collapsed . '" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-' . $key . '-' . $block_key . '" aria-expanded="' . $expanded . '" aria-controls="collapse-' . $key . '-' . $block_key . '">';
						$output .= '<h3 class="liten h5 mb-0">' . $block_data['question'] . '</h3>';
						$output .= '</button>';
						$output .= '</h2>';
						$output .= '<div id="collapse-' . $key . '-' . $block_key . '" class="accordion-collapse collapse ' . $show . '" data-bs-parent="#accordion-' . $key . '">';
						$output .= '<div class="accordion-body">';
						$output .= $block_data['answer'];
						$output .= '</div>';
						$output .= '</div>';
						$output .= '</div>';

					}
				}

				$output .= '</div>';

			}

			$output .= '</div>';

		}

		return $output;
	}

	/**
	 * Render offer dynamic block.
	 *
	 * @since    1.0.0
	 * @param    array  $block_attributes .
	 * @param    string $content .
	 */
	public function borghamn_register_offer_dynamic_block_render_callback( $block_attributes, $content ) {

		$output = '<section class="py-5 py-lg-6" id="offert-wrap"></section>';

		return $output;

	}

	/**
	 * Order samples dynamic block.
	 *
	 * @since    1.0.0
	 * @param    array  $block_attributes .
	 * @param    string $content .
	 */
	public function borghamn_register_order_samples_dynamic_block_render_callback( $block_attributes, $content ) {

		$output = '<section id="order-samples-wrap"></section>';

		return $output;

	}

	/**
	 * Register options pages.
	 *
	 * @since    1.0.0
	 */
	public function borghamn_register_acf_options_pages() {

		acf_add_options_page(
			array(
				'page_title' => 'Begär offert',
				'menu_slug'  => 'begar-offert',
				'icon_url'   => 'dashicons-forms',
				'position'   => '',
				'redirect'   => false,
			),
		);
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

		require_once plugin_dir_path( __DIR__ ) . 'admin/acf/page-hero-settings.php';
		require_once plugin_dir_path( __DIR__ ) . 'admin/acf/team-member-info.php';
		require_once plugin_dir_path( __DIR__ ) . 'admin/acf/homepage-hero.php';
		require_once plugin_dir_path( __DIR__ ) . 'admin/acf/faq-block-content.php';
		require_once plugin_dir_path( __DIR__ ) . 'admin/acf/testimonial-data.php';
	}

	/**
	 * Save Begär offert endpoint.
	 *
	 * @since    1.0.0
	 */
	public function borghamn_save_begar_offert_endpoint() {

		register_rest_route(
			'borghamns/v1',
			'/savebegaroffert',
			array(
				'methods'             => WP_REST_Server::CREATABLE,
				'callback'            => array( $this, 'borghamn_save_begar_offert_endpoint_callback' ),
				'permission_callback' => '__return_true',
			)
		);
	}

	/**
	 * Save Begär offert callback function.
	 *
	 * @since    1.0.0
	 * @param     array $request .
	 */
	public function borghamn_save_begar_offert_endpoint_callback( $request ) {

		$data    = array();
		$success = false;
		$message = '';

		$contact_info = json_decode( sanitize_text_field( $request->get_param( 'contact_info' ) ), true );
		$comments     = sanitize_textarea_field( $request->get_param( 'comments' ) );
		$saved_data   = json_decode( sanitize_text_field( $request->get_param( 'saved_data' ) ), true );

		$contact_name = '';
		$meta_data    = array();

		if ( ! empty( $contact_info ) ) {

			$found_key = array_search( 'Namn', array_column( $contact_info, 'name' ), true );

			if ( false !== $found_key ) {
				$contact_name = $contact_info[ $found_key ]['val'];
			}

			foreach ( $contact_info as $contact_item ) {
				$meta_data[ $contact_item['key'] ] = $contact_item['val'];
			}
		}

		if ( ! empty( $saved_data ) ) {

			foreach ( $saved_data as $saved_item ) {
				$meta_data[ $saved_item['key'] ] = $saved_item['val'];
			}
		}

		if ( ! empty( $comments ) ) {
			$meta_data['borg_sender_comments'] = $comments;
		}

		if ( ! empty( $contact_name ) ) {

			$post_title = 'Nya Begär offert från ' . $contact_name;

			$post_args = array(
				'post_title'   => $post_title,
				'post_content' => '',
				'post_status'  => 'publish',
				'post_author'  => 1,
				'post_type'    => 'begar_offert',
			);

			if ( ! empty( $meta_data ) ) {
				$post_args['meta_input'] = $meta_data;
			}

			$post_id = wp_insert_post( $post_args );

			if ( ! empty( $post_id ) && ! is_wp_error( $post_id ) ) {
				$success         = true;
				$data['post_id'] = $post_id;

				$this->borghamn_send_begar_offert_email( $post_id, $post_title );
			}
		}

		$response = rest_ensure_response(
			array(
				'data'    => $data,
				'success' => $success,
				'message' => $message,
			)
		);

		return $response;
	}

	/**
	 * Send Begär offert email.
	 *
	 * @since    1.0.0
	 * @param     int    $post_id .
	 * @param     string $title .
	 */
	private function borghamn_send_begar_offert_email( $post_id, $title ) {

		if ( ! $post_id || ! $title ) {
			return;
		}

		$post_admin_link = home_url( '/wp-admin/post.php?post=' . $post_id . '&action=edit' );

		$message  = '<p>Hej!</p>';
		$message .= '<p>Du har ett nya ' . esc_html( $title ) . '</p>';
		$message .= '<p>Logga in på hemsidan för att se erbjudandeinformation.</p>';
		$message .= '<p>Nya Begär offert link: <a href="' . esc_url( $post_admin_link ) . '" target="_blank" rel="nofollow, noindex, noreferrer">' . esc_url( $post_admin_link ) . '</a></p>';

		$to        = 'info@borghamns-stenforadling.se';
		$subject   = $title;
		$body      = $message;
		$headers   = array( 'Content-Type: text/html; charset=UTF-8' );
		$headers[] = 'From: Borghamns Stenförädling Hemsida <noreply@borghamns-stenforadling.se>';
		$headers[] = 'Cc: Kajsa <kajsa@borghamns-stenforadling.se>';
		$headers[] = 'Cc: Dhanuka Gunarathna <dhanuka@hashcodeab.se>';

		wp_mail( $to, $subject, $body, $headers );

	}

	/**
	 * Add Begär offert custom fields meta box.
	 *
	 * @since    1.0.0
	 */
	public function borghamn_disable_acf_remove_wp_metabox() {
		return false;
	}

	/**
	 * Add Begär offert custom fields meta box.
	 *
	 * @since    1.0.0
	 */
	public function borghamn_register_offert_metabox() {

		add_meta_box(
			'offert_information_metabox',
			'Begr offert Information',
			array( $this, 'borghamn_register_offert_metabox_callback' ),
			'begar_offert',
			'advanced',
			'low',
		);
	}

	/**
	 * Add Begär offert custom fields meta box.
	 *
	 * @since    1.0.0
	 */
	public function borghamn_register_offert_metabox_callback( $post ) {
		include plugin_dir_path( __DIR__ ) . 'admin/partials/offert-field-data.php';
		include plugin_dir_path( __DIR__ ) . 'admin/partials/offert-metabox-output.php';
	}

}
