import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { TextControl, PanelBody, PanelRow } from '@wordpress/components';
import { Fragment } from '@wordpress/element';
import { useSelect } from '@wordpress/data';

import './editor.scss';

export default function Edit( { attributes, setAttributes } ) {

	const { faqID  } = attributes;

	const onChangeFaqID = ( newID ) => {

		const postId = newID.split(',');

		if ( postId ) {
			setAttributes( { faqID:postId } );
		} else {
			setAttributes( { faqID: [] } );
		}
	};

	const faqData = useSelect( ( select ) => {
		return select( 'core' ).getEntityRecords( 'postType', 'faq_block', {include: faqID, _embed: 1} );
	}, [faqID] );

	let wrapperClasses = 'faq-wrap';

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
								label={ __( 'FAQ Block ID', 'borghamns-general' ) }
								value={ faqID }
								onChange={ onChangeFaqID }
							/>
						</fieldset>
					</PanelRow>
					
				</PanelBody>

			</InspectorControls>

			<div { ...blockProps }>

				{ faqData && faqData.length > 0 &&
					<>
						{ faqData.map( ( faq, i ) => {
							return(
								<div className="accordion" key={i} id={`accordion-${i}`}>
									{ faq.acf && faq.acf.faq_block && faq.acf.faq_block.length > 0 &&
										<>
											{ faq.acf.faq_block.map( ( block, j ) => {
												return(
													<div className={`accordion-item mb-2 ${j === 0 ? 'bg-white' : ''}`} key={j}>
														<h2 className="accordion-header">
															<button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse-${i}-${j}`} aria-expanded={`${j === 0 ? 'true' : 'false'}`} aria-controls={`collapse-${i}-${j}`}>
																<h3 className="liten h5 mb-0 text-white">{block.question}</h3>
															</button>
														</h2>
														<div id={`collapse-${i}-${j}`} className={`accordion-collapse collapse ${j === 0 ? 'show' : ''}`} data-bs-parent={`#accordion-${i}`}>
															<div className={`accordion-body`}>
																<p>{block.answer}</p>
															</div>
														</div>
													</div>
												);
											})}
										</>
									}
								</div>
							);
						})}
						
					</>
				}

			</div>

		</Fragment>

	);
}
