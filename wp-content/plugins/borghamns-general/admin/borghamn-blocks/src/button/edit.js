import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls, AlignmentControl, BlockControls } from '@wordpress/block-editor';
import { TextControl, PanelBody, PanelRow, SelectControl, ToggleControl } from '@wordpress/components';

import './editor.scss';

export default function Edit( { attributes, setAttributes } ) {

	const { btnText, url, btnColor, hideIcon, align  } = attributes;

	const onChangeBtnText = ( newText ) => {
		setAttributes( { btnText: newText } );
	};

	const onChangeUrl = ( newUrl ) => {
		setAttributes( { url: newUrl } );
	};

	const onChangeBtnColor = ( newColor ) => {
		setAttributes( { btnColor: newColor } );
	};

	const toggleIcon = () => {
		setAttributes( { hideIcon: ! hideIcon } );
	};

	const onChangeAlign = ( newAlign ) => {
		setAttributes( {
			align: newAlign === undefined ? '' : newAlign,
		} );
	};

	let btnClasses = `btn text-decoration-none rounded-0 ${ btnColor ? `btn-${btnColor}`: ''}`;

	let wrapperClasses = 'd-flex';

	if ( align ) {
		
		if ( align === 'right' ) {
			wrapperClasses = `${wrapperClasses} justify-content-end`;
		}

		if ( align === 'center' ) {
			wrapperClasses = `${wrapperClasses} justify-content-center`;
		}
	}

	const blockProps = useBlockProps({
		className: wrapperClasses,
	});

	return (
		<>
			<InspectorControls>

				<PanelBody title={ __( 'Settings', 'borghamns-general' ) } initialOpen={ true }>

					<PanelRow>
						<fieldset>
							<TextControl
								label={ __( 'Button Text', 'borghamns-general' ) }
								value={ btnText }
								onChange={ onChangeBtnText }
							/>
						</fieldset>
					</PanelRow>

					<PanelRow>
						<fieldset>
							<TextControl
								label={ __( 'Button Link', 'borghamns-general' ) }
								value={ url }
								onChange={ onChangeUrl }
							/>
						</fieldset>
					</PanelRow>

					<PanelRow>
						<fieldset>
							<SelectControl
								label={ __('Button Color','borghamns-general') }
								value={ btnColor }
								onChange={ onChangeBtnColor }
								options={ [
									{
										value: 'primary',
										label: __('Green','borghamns-general'),
									},
									{
										value: 'dark-text',
										label: __('Dark','borghamns-general'),
									},
									{
										value: 'secondary',
										label: __('Gray','borghamns-general'),
									},
									{
										value: 'white',
										label: __('White','borghamns-general'),
									},
								] }
							/>
						</fieldset>
					</PanelRow>

					<PanelRow>
						<fieldset>
							<ToggleControl
									label={ __('Hide Button Icon','borghamns-general') }
									checked={ hideIcon }
									onChange={ toggleIcon }
								/>
						</fieldset>
					</PanelRow>

				</PanelBody>

			</InspectorControls>

			<BlockControls group="block">
				<AlignmentControl value={ align } onChange={ onChangeAlign } />
			</BlockControls>
			
			<div { ...blockProps }>
				<a className={btnClasses}  href={url}>
					<div className="d-flex">
						<span className={`${!hideIcon ? 'pe-2' : '' }`}>{btnText}</span>
						
						{ !hideIcon && 
							<div className="d-flex align-items-center">
								<span className={`line-right bg-${ btnColor === 'secondary' || btnColor === 'white' ? 'dark-text' : 'white'} d-inline-block btn-line`} ></span>
								<span className="icon-ion-ios-arrow-right"></span>
							</div>
						}
					</div>
				</a>
			</div>

		</>
	);
}
