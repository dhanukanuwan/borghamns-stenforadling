import { TextControl } from '@wordpress/components';
import { useSelect } from '@wordpress/data';
import { useEntityProp } from '@wordpress/core-data';
import { useBlockProps } from '@wordpress/block-editor';
import './editor.scss';

export default function Edit( { setAttributes, attributes } ) {
	const blockProps = useBlockProps();
	const postType = useSelect(
		( select ) => select( 'core/editor' ).getCurrentPostType(),
		[]
	);

	const [ meta, setMeta ] = useEntityProp( 'postType', postType, 'meta' );

	const metaFieldValue = meta[ 'borg_product_type' ];
	const updateMetaValue = ( newValue ) => {
		setMeta( { ...meta, borg_product_type: newValue } );
	};

	return (
		<div { ...blockProps }>
			<TextControl
				label="Meta Block Field"
				value={ metaFieldValue }
				onChange={ updateMetaValue }
			/>
		</div>
	);
}
