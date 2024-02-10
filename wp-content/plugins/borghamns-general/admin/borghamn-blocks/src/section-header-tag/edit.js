import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { TextControl, PanelBody, PanelRow, SelectControl } from '@wordpress/components';
import { Fragment } from '@wordpress/element';

import './editor.scss';

export default function Edit( { attributes, setAttributes } ) {

	const { tagText, tagColor  } = attributes;

	const onChangeTagText = ( newText ) => {
		setAttributes( { tagText: newText } );
	};

	const onChangeTagColor = ( newColor ) => {
		setAttributes( { tagColor: newColor } );
	};

	let tagClasses = 'd-flex align-items-center';

	const blockProps = useBlockProps( {
		className: tagClasses,
	} );

	return (
		
		<Fragment>

			<InspectorControls>

				<PanelBody title={ __( 'Settings', 'borghamns-general' ) } initialOpen={ true }>

					<PanelRow>
						<fieldset>
							<TextControl
								label={ __( 'Tag Text', 'borghamns-general' ) }
								value={ tagText }
								onChange={ onChangeTagText }
							/>
						</fieldset>
					</PanelRow>

					<PanelRow>
						<fieldset>
							<SelectControl
								label={ __('Button Color','borghamns-general') }
								value={ tagColor }
								onChange={ onChangeTagColor }
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

				</PanelBody>

			</InspectorControls>

			<div { ...blockProps }>
				<span className={`line-right bg-${tagColor} d-inline-block`}></span>
				<span className={`ms-2 text-${tagColor}`}>{tagText}</span>
			</div>

		</Fragment>
		


	);
}
