import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls, useInnerBlocksProps, MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import { Fragment } from '@wordpress/element';
import { PanelBody, PanelRow, SelectControl, Button } from '@wordpress/components';

import './editor.scss';

export default function Edit( { attributes, setAttributes } ) {

	const { bgType, bgColor, bgImage, hPadding  } = attributes;

	const onChangeBgType = ( newBgType ) => {
		setAttributes( { bgType: newBgType } );
	}

	const onChangeBgColor = ( newBgColor ) => {
		setAttributes( { bgColor: newBgColor } );
	}

	const onChangeBgImage = ( newBgImage ) => {
		setAttributes( { bgImage: newBgImage } );
	}

	const onChangeHPadding = ( newhPadding ) => {
		setAttributes( { hPadding: newhPadding } );
	}

	const onSelectMedia = (media) => {
		setAttributes({
			bgImage: {
				mediaId: media.id,
				mediaUrl: media.url
			}
		});

		//console.log( media );
	}

	const removeMedia = () => {
		setAttributes({
			bgImage: {
				mediaId: 0,
				mediaUrl: ''
			}
		});
	}

	let sectionClasses = '';

	let paddingClasses = 'py-5 py-xl-6';

	if ( hPadding && hPadding.length > 0 ) {
		paddingClasses = hPadding;

	}

	if ( bgColor && ( bgType && bgType === 'color' ) ) {
		sectionClasses = `${sectionClasses} bg-${bgColor}`;
		
		if ( bgColor === 'primary' || bgColor === 'dark-text' ) {
			sectionClasses = `${sectionClasses} ${paddingClasses} text-white`;
		}

	} else {
		sectionClasses = 'position-relative';
	}

	if ( !bgType || ( bgType && bgType.length === 0 ) ) {
		sectionClasses = paddingClasses;
	} 

	const blockProps = useBlockProps( {
		className: sectionClasses,
	} );

	const innerBlocksProps = useInnerBlocksProps({
		className: 'row',
	});

	return (

		<Fragment>
			<InspectorControls>

				<PanelBody title={ __( 'Settings', 'borghamns-general' ) } initialOpen={ true }>

					<PanelRow>
						<fieldset>
							<SelectControl
								label={ __('Background Type','borghamns-general') }
								value={ bgType }
								onChange={ onChangeBgType }
								options={ [
									{
										value: '',
										label: __('Default','borghamns-general'),
									},
									{
										value: 'color',
										label: __('Color','borghamns-general'),
									},
									{
										value: 'image',
										label: __('Image','borghamns-general'),
									},
								] }
							/>
						</fieldset>
					</PanelRow>

					{ bgType === 'color' &&
						<PanelRow>
							<fieldset>
								<SelectControl
									label={ __('Background Color','borghamns-general') }
									value={ bgColor }
									onChange={ onChangeBgColor }
									options={ [
										{
											value: 'transparent',
											label: __('Default','borghamns-general'),
										},
										{
											value: 'primary',
											label: __('Green','borghamns-general'),
										},
										{
											value: 'secondary',
											label: __('Gray','borghamns-general'),
										},
										{
											value: 'dark-text',
											label: __('Dark','borghamns-general'),
										},
										{
											value: 'white',
											label: __('White','borghamns-general'),
										},
									] }
								/>
							</fieldset>
						</PanelRow>
					}

					{ bgType === 'image' &&
						<>
							<PanelRow>
								<h2 className="components-panel__body-title">{__('Background image','borghamns-general')}</h2>
							</PanelRow>
							<PanelRow>
								<MediaUploadCheck>
									<MediaUpload
										onSelect={onSelectMedia}
										multiple={false}
										allowedTypes={ ['image'] }
										value={bgImage.mediaId}
										render={({ open }) => (
											<>
												<Button className={bgImage.mediaId == 0 ? 'editor-post-featured-image__toggle' : 'editor-post-featured-image__preview'} onClick={open} >
														{bgImage.mediaId == 0 && __('Choose an image', 'borghamns-general')}

														{bgImage.mediaUrl &&
															<img src={bgImage.mediaUrl} />
														}
														
												</Button>
											</>
										)}
									/>
								</MediaUploadCheck>

							</PanelRow>

							{ bgImage.mediaId != 0 &&
								<PanelRow>
									<MediaUploadCheck>
										<MediaUpload
											title={__('Replace image', 'borghamns-general')}
											value={bgImage.mediaId}
											onSelect={onSelectMedia}
											allowedTypes={['image']}
											render={({open}) => (
												<Button onClick={open} variant="secondary" isLarge>{__('Replace image', 'borghamns-general')}</Button>
											)}
										/>
									</MediaUploadCheck>
								</PanelRow>
								
							}

							{bgImage.mediaId != 0 && 
								<PanelRow>
									<MediaUploadCheck>
										<Button onClick={removeMedia} variant="link" isDestructive>{__('Remove image', 'borghamns-general')}</Button>
									</MediaUploadCheck>
								</PanelRow>
							}
						</>
					}

					<PanelRow>
						<fieldset>
							<SelectControl
								label={ __('Top and Bottom Spacing','borghamns-general') }
								value={ hPadding }
								onChange={ onChangeHPadding }
								options={ [
									{
										value: '',
										label: __('Default','borghamns-general'),
									},
									{
										value: 'py-5',
										label: __('5','borghamns-general'),
									},
									{
										value: 'py-4',
										label: __('4','borghamns-general'),
									},
									{
										value: 'py-3',
										label: __('3','borghamns-general'),
									},
									{
										value: 'py-2',
										label: __('2','borghamns-general'),
									},
									{
										value: 'py-1',
										label: __('1','borghamns-general'),
									},
									{
										value: 'py-0',
										label: __('0','borghamns-general'),
									},
								] }
							/>
						</fieldset>
					</PanelRow>

				</PanelBody>
				
			</InspectorControls>

			<section { ...blockProps }>
				
				{ bgType === 'image' && bgImage.mediaId && 
					<>
						<div className="hero-bg position-absolute w-100 h-100 top-0 left-0 d-flex">
							<img src={bgImage.mediaUrl} className="w-100 object-fit-cover" />
						</div>
						<div className="hero-content position-relative py-5 py-xl-6">
							<div className="container">
								<div {...innerBlocksProps} />
							</div>
						</div>
					</>
				}

				{ bgType !== 'image' &&
					<div className="container">
						<div {...innerBlocksProps} />
					</div>
				}
			</section>
		</Fragment>
		
	);
}
