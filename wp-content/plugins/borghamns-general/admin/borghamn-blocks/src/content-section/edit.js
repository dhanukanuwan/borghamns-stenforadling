import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls, InnerBlocks } from '@wordpress/block-editor';
import { TextControl, PanelBody, PanelRow, SelectControl } from '@wordpress/components';

import './editor.scss';

export default function Edit( { attributes, setAttributes } ) {

	const { bgType, bgColor, bgImage  } = attributes;

	const onChangeBgType = ( newBgType ) => {
		setAttributes( { bgType: newBgType } );
	}

	const onChangeBgColor = ( newBgColor ) => {
		setAttributes( { bgColor: newBgColor } );
	}

	const onChangeBgImage = ( newBgImage ) => {
		setAttributes( { bgImage: newBgImage } );
	}

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

	const blockProps = useBlockProps( {
		className: sectionClasses,
	} );

	return (

		<>
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
						<PanelRow>
							<fieldset>
								<TextControl
									label={ __( 'Image url', 'basic-block' ) }
									value={ bgImage }
									onChange={ onChangeBgImage }
								/>
							</fieldset>
						</PanelRow>
					}

				</PanelBody>
				
			</InspectorControls>

			<section { ...blockProps }>
				<InnerBlocks />
			</section>
		</>
		
	);
}
