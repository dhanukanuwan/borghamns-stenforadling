import { useBlockProps } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

export default function save( { attributes } ) {

	const { columns, imageData  } = attributes;

	let wrapperClasses = 'gallery-wrap';

	let columnClasses = 'col-md-6 col-lg-3';

	if ( columns === 2 ) {
		columnClasses = 'col-lg-6';
	} else if ( columns === 3 ) {
		columnClasses = 'col-md-6 col-lg-4';
	} else if ( columns === 6 ) {
		columnClasses = 'col-md-4 col-lg-2';
	} else {
		columnClasses = 'col-md-6 col-lg-3';
	}

	return (
		
		<div {...useBlockProps.save()} className={wrapperClasses}>
			{imageData && imageData.length > 0 &&
				<div className="row align-items-center justify-content-center">
					{ imageData.map((image,i) => {
						return(
							<div className={`col-12 mb-4 ${columnClasses}`} key={i}>
								<a href={image.url} data-fancybox="gallery" data-src={image.url} data-caption={false}>
									<img src={image.url} className="mw-100 w-100" alt={image.alt} />
								</a>
								{/* <span className="text-break d-inline-block w-100 pt-2 text-center">{image.title}</span> */}
							</div>
						);
					})}
				</div>
			}
		</div>
	);
}
