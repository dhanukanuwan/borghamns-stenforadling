import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { TextControl, PanelBody, PanelRow } from '@wordpress/components';
import { Fragment } from '@wordpress/element';
import { useSelect } from '@wordpress/data';
import './editor.scss';


export default function Edit( { attributes, setAttributes } ) {

	const { tetimonialID  } = attributes;

	const onChangeTestimonialID = ( newID ) => {

		const postId = newID.split(',');

		if ( postId ) {
			setAttributes( { tetimonialID:postId } );
		} else {
			setAttributes( { tetimonialID: [] } );
		}
	};

	const testimonialData = useSelect( ( select ) => {
		return select( 'core' ).getEntityRecords( 'postType', 'testimonial_block', {include: tetimonialID, _embed: 1} );
	}, [tetimonialID] );

	let wrapperClasses = 'testimonial-wrap d-flex flex-column';

	const blockProps = useBlockProps({
		className: wrapperClasses,
	});

	return (

		<Fragment>

			<InspectorControls>

				<PanelBody title={ __( 'Settings', 'borghamns-general' ) } initialOpen={ true }>

					<PanelRow>
						<fieldset>
							<TextControl
								label={ __( 'Testimonial ID', 'borghamns-general' ) }
								value={ tetimonialID }
								onChange={ onChangeTestimonialID }
							/>
						</fieldset>
					</PanelRow>
					
				</PanelBody>

			</InspectorControls>

			<div { ...blockProps }>

				{ testimonialData && testimonialData.length > 0 &&
					<>
						{ testimonialData.map( ( testimonial, i ) => {
							return (
								<div className="testimonial-item p-4 p-xl-5 bg-white" key={i}>
									<div className="row">
										{ testimonial._embedded && testimonial._embedded['wp:featuredmedia'] && testimonial._embedded['wp:featuredmedia'][0] &&
											<div className="col-3 col-lg-2">
												<img src={testimonial._embedded['wp:featuredmedia'][0].source_url} className="mw-100" alt={testimonial._embedded['wp:featuredmedia'][0].alt_text} title={testimonial._embedded['wp:featuredmedia'][0].title.rendered} />
											</div>
										}
											
										<div className="col-9 col-lg-10">
											{ testimonial.acf && testimonial.acf.testimonial_content &&
												<p>{testimonial.acf.testimonial_content}</p>
											}
											<div className="mt-3 d-flex align-items-center">
												<div className="flex-grow-1">
													<h4 className="liten mb-2">{testimonial.title.rendered}</h4>
													{ testimonial.acf && testimonial.acf.testi_company &&
														<span className="text-primary">{testimonial.acf.testi_company}</span>
													}
													
												</div>
												<div>
													<span className="h2 liten text-primary">,,</span>
												</div>
											</div>
										</div>
									</div>
								</div>
							);
						})}
					</>
				}
			</div>

		</Fragment>
		
	);
}
