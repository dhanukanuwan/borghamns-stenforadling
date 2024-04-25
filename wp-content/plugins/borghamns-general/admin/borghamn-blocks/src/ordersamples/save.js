import { useBlockProps } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

export default function save() {

	let wrapperClasses = 'order-samples-wrap';

	const blockProps = useBlockProps.save( {
		className: wrapperClasses,
	} );

	const classNames = blockProps.className;

	return (
		<p { ...useBlockProps.save() } className={classNames}>
			
		</p>
	);
}
