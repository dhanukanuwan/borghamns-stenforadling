import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';


export default function save( { attributes } ) {

	const { columnSize  } = attributes;

	let sectionClasses = 'col-12';

	if ( columnSize ) {
		sectionClasses = `${sectionClasses} col-lg-${columnSize}`;
	}

	const blockProps = useBlockProps.save( {
		className: sectionClasses,
	} );

	const classNames = blockProps.className;

	return (
		<div {...useBlockProps.save()} className={classNames}>
			<InnerBlocks.Content />
		</div>
	);
}
