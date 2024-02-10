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
		sectionClasses = 'position-relative';
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
