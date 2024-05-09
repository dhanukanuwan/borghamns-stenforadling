<?php
/**
 * Offert metabox output
 *
 * @link       https://https://hashcodeab.se/
 * @since      1.0.0
 *
 * @package    Borghamns_General
 * @subpackage Borghamns_General/admin/partials
 */

$saved_meta_data = array();

foreach ( $field_data as $field ) {
	$field_val = get_post_meta( $post->ID, $field['key'], true );

	if ( ! empty( $field_val ) ) {
		$saved_meta_data[] = array(
			'name' => $field['name'],
			'val'  => $field_val,
		);
	}
}

?>

<?php if ( ! empty( $saved_meta_data ) ) : ?>

<table class="table table-striped table-hover">
	<thead>
		<tr>
			<th scope="col">#</th>
			<th scope="col">Item</th>
			<th scope="col">Value</th>
		</tr>
	</thead>
	<tbody>

		<?php $i = 1; foreach ( $saved_meta_data as $meta_val ) : ?>

			<tr>
				<th scope="row"><?php echo esc_html( $i ); ?></th>
				<td><?php echo esc_html( $meta_val['name'] ); ?></td>
				<td><?php echo esc_html( $meta_val['val'] ); ?></td>
			</tr>

		<?php $i++; endforeach; ?>
	</tbody>
</table>

<?php endif; ?>
