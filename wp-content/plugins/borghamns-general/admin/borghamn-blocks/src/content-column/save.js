import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';


export default function save( { attributes } ) {

	const { columnSize, columnBg, columnPadding  } = attributes;

	let sectionClasses = 'col-12 position-relative';
	let columnInnerClasses = 'd-flex flex-column h-100';

	if ( columnBg ) {
		columnInnerClasses = `${columnInnerClasses} bg-${columnBg}`;

		if ( columnBg === 'primary' || columnBg === 'dark-text' ) {
			columnInnerClasses = `${columnInnerClasses} text-white`;
		}
	}

	if ( columnPadding && columnPadding !== '0' ) {
		columnInnerClasses = `${columnInnerClasses} p-${columnPadding}`;
	}

	if ( columnSize ) {
		sectionClasses = `${sectionClasses} col-lg-${columnSize}`;
	}

	const blockProps = useBlockProps.save( {
		className: sectionClasses,
	} );

	const classNames = blockProps.className;

	return (
		<div {...useBlockProps.save()} className={classNames}>
			<div className={columnInnerClasses}>
				<InnerBlocks.Content />
			</div>
		</div>
	);
}
