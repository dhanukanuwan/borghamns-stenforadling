import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';


export default function save( { attributes } ) {

	const { bgType, bgColor, bgImage, hPadding  } = attributes;

	let paddingClasses = '';

	if ( hPadding && hPadding.length > 0 ) {
		paddingClasses = hPadding;
	} else {
		paddingClasses = 'py-5 py-lg-6';
	}

	let sectionClasses = paddingClasses;

	if ( bgColor && ( bgType && bgType === 'color' ) ) {
		sectionClasses = `${sectionClasses} bg-${bgColor}`;
		
		if ( bgColor === 'primary' || bgColor === 'dark-text' ) {
			sectionClasses = `${sectionClasses} text-white`;
		}

	} else {
		sectionClasses = 'position-relative';
	}

	if ( !bgType || ( bgType && bgType.length === 0 ) ) {
		sectionClasses = paddingClasses;
	} 

	const blockProps = useBlockProps.save( {
		className: sectionClasses,
	} );

	const classNames = blockProps.className;


	return (
		<section {...useBlockProps.save()} className={classNames}>

			{ bgType === 'image' && bgImage.mediaId && 
				<>
					<div className="hero-bg position-absolute w-100 h-100 top-0 left-0 d-flex">
						<img src={bgImage.mediaUrl} className="w-100 object-fit-cover" />
					</div>
					<div class="hero-content position-relative py-5 py-xl-6">
						<div className="container">
							<div className="row">
								<InnerBlocks.Content />
							</div>
						</div>
					</div>
				</>
			}

			{ bgType !== 'image' &&
				<div className="container">
					<div className="row">
						<InnerBlocks.Content />
					</div>
				</div>
			}
			
		</section>
	);
}
