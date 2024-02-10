import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls, InnerBlocks } from '@wordpress/block-editor';
import { PanelBody, PanelRow, SelectControl } from '@wordpress/components';
import './editor.scss';

export default function Edit( { attributes, setAttributes } ) {

	const { columnSize  } = attributes;

	const onChangeColumnSize = ( newColumnSize ) => {
		setAttributes( { columnSize: newColumnSize } );
	}

	let sectionClasses = 'col-12';

	if ( columnSize ) {
		sectionClasses = `${sectionClasses} col-lg-${columnSize}`;
	}

	const blockProps = useBlockProps( {
		className: sectionClasses,
	} );

	const COLUMN_TEMPLATE = [
		[ 'core/paragraph', { placeholder: 'Lorem Ipsum ....' } ],
	];

	return (
		<>
			<InspectorControls>

				<PanelBody title={ __( 'Settings', 'borghamns-general' ) } initialOpen={ true }>

					<PanelRow>
						<fieldset>
							<SelectControl
								label={ __('Column size','borghamns-general') }
								value={ columnSize }
								onChange={ onChangeColumnSize }
								options={ [
									{
										value: 'auto',
										label: __('Auto','borghamns-general'),
									},
									{
										value: '12',
										label: __('12 ( 100% )','borghamns-general'),
									},
									{
										value: '9',
										label: __('9 ( 75% )','borghamns-general'),
									},
									{
										value: '8',
										label: __('8 ( 66.66% )','borghamns-general'),
									},
									{
										value: '7',
										label: __('7 ( 58.33% )','borghamns-general'),
									},
									{
										value: '6',
										label: __('6 ( 50% )','borghamns-general'),
									},
									{
										value: '5',
										label: __('5 ( 41.66% )','borghamns-general'),
									},
									{
										value: '4',
										label: __('4 ( 33.33% )','borghamns-general'),
									},
									{
										value: '3',
										label: __('3 ( 25% )','borghamns-general'),
									}
								] }
							/>
						</fieldset>
					</PanelRow>

				</PanelBody>

			</InspectorControls>

			<div { ...blockProps }>
				<InnerBlocks template={ COLUMN_TEMPLATE } allowedBlocks={['borghamns-general/section-header-tag', 'core/heading', 'core/paragraph', 'borghamns-general/button', 'core/image']} />
			</div>
		</>
	);
}
