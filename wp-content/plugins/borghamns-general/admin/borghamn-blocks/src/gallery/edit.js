import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls, MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import { Fragment } from '@wordpress/element';
import { PanelBody, PanelRow, SelectControl, Button } from '@wordpress/components';
import './editor.scss';

export default function Edit( { attributes, setAttributes } ) {

	const { images, columns, imageData  } = attributes;

	let wrapperClasses = 'gallery-wrap';

	const blockProps = useBlockProps({
		className: wrapperClasses,
	});

	const handleImageUpload = (media) => {

		let imageIDs = [];
		let imgInfo = [];

		if ( media && media.length > 0 ) {
			imageIDs = media.map( (image) => image.id);
			imgInfo = media.map( (image) => ({url: image.url, title: image.title, alt: image.alt}));
		}

		setAttributes({
			images: imageIDs,
			imageData: imgInfo
		});

	}

	const handleImageRemove = ( key ) => {
		setAttributes({ 
			images: images.filter( (item) => item !== images[key]),
			imageUrls: imageUrls.filter( (item) => item !== imageUrls[key])
		})
	}

	const onChangeColumnSize = ( newColumnSize ) => {
		setAttributes( { columns: parseInt( newColumnSize, 10) } );
	}

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
		<Fragment>

			<InspectorControls>

				<PanelBody title={ __( 'Gallery settings', 'borghamns-general' ) } initialOpen={ true }>

					<PanelRow>
						<fieldset>
							<SelectControl
								label={ __('Number of columns','borghamns-general') }
								value={ columns }
								onChange={ onChangeColumnSize }
								options={ [
									{
										value: 2,
										label: __('2','borghamns-general'),
									},
									{
										value: 3,
										label: __('3','borghamns-general'),
									},
									{
										value: 4,
										label: __('4','borghamns-general'),
									},
									{
										value: 6,
										label: __('6','borghamns-general'),
									},
								] }
							/>
						</fieldset>
					</PanelRow>

					<PanelRow>
						<h2 className="components-panel__body-title">{__('Gallery images','borghamns-general')}</h2>
					</PanelRow>
					<PanelRow>
						{imageData && imageData.length > 0 &&
							<div className="row align-items-center g-2">
								{imageData.map( (image, i ) => 
									<div className="image-container col-4 position-relative" key={i}>
										<img src={ image.url } className="mw-100" alt={image.alt} />
										<button type="button" className="btn-close position-absolute top-0 end-0" aria-label="Close" onClick={ () => handleImageRemove(i) } style={{width:'5px', height: '5px', color: '#dc3545'}}></button>
									</div>
								)}
							</div>
						}
					</PanelRow>
					<PanelRow>
						<MediaUploadCheck>
							<MediaUpload
								onSelect={(media) => {handleImageUpload(media)}}
								multiple={true}
								allowedTypes={ ['image'] }
								value={images}
								render={({ open }) => (
									<>
										
										<Button className="editor-post-featured-image__toggle" onClick={open} >Add images</Button>
									</>
								)}
							/>
						</MediaUploadCheck>

					</PanelRow>
					
				</PanelBody>

			</InspectorControls>

			<div { ...blockProps }>

				{imageData && imageData.length > 0 &&
					<div className="row align-items-center justify-content-center">
						{ imageData.map((image,i) => {
							return(
								<div className={`col-12 mb-4 ${columnClasses}`} key={i}>
									<img src={image.url} className="mw-100 w-100" alt={image.alt} />
									<span className="text-break d-inline-block w-100 pt-2 text-center">{image.title}</span>
								</div>
							);
						})}
					</div>
				}
				
			</div>

		</Fragment>
	);
}
