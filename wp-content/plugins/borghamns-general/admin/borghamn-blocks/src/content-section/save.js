import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';


export default function save( { attributes } ) {

	const { bgType, bgColor, bgImage  } = attributes;

	let sectionClasses = 'py-5 py-xl-6';

	if ( bgColor && ( bgType && bgType === 'color' ) ) {
		sectionClasses = `${sectionClasses} bg-${bgColor}`;
		
		if ( bgColor === 'primary' || bgColor === 'dark-text' ) {
			sectionClasses = `${sectionClasses} text-white`;
		}

	} else {
		sectionClasses = 'py-5 py-xl-6';
	}

	if ( !bgType || ( bgType && bgType.length === 0 ) ) {
		sectionClasses = 'py-5 py-xl-6';
	} 

	const blockProps = useBlockProps.save( {
		className: sectionClasses,
	} );

	const classNames = blockProps.className;


	return (
		<section {...useBlockProps.save()} className={classNames}>
			<div className="container">
					<div className="row">
						<InnerBlocks.Content />
					</div>
				</div>
		</section>
	);
}
