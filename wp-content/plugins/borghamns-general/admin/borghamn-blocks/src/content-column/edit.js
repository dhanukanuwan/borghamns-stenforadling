import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls, InnerBlocks } from '@wordpress/block-editor';
import { PanelBody, PanelRow, SelectControl } from '@wordpress/components';
import './editor.scss';

export default function Edit( { attributes, setAttributes } ) {

	const { columnSize, columnBg, columnPadding  } = attributes;

	const onChangeColumnSize = ( newColumnSize ) => {
		setAttributes( { columnSize: newColumnSize } );
	}

	const onChangeColumnBg = ( newBg ) => {
		setAttributes( { columnBg: newBg } );
	}

	const onChangeColumnPadding = ( newPadding ) => {
		setAttributes( { columnPadding: newPadding } );
	}

	let sectionClasses = 'col-12 position-relative';
	let columnInnerClasses = 'd-flex flex-column h-100';

	if ( columnBg ) {
		columnInnerClasses = `${columnInnerClasses} bg-${columnBg}`;

		if ( columnBg === 'primary' || columnBg === 'dark-text' ) {
			columnInnerClasses = `${columnInnerClasses} text-white`;
		}
	}

	if ( columnPadding && columnPadding !== '0' ) {
		columnInnerClasses = `${columnInnerClasses} p-${columnPadding}`;
	}

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

					<PanelRow>
						<fieldset>
							<SelectControl
								label={ __('Background Color','borghamns-general') }
								value={ columnBg }
								onChange={ onChangeColumnBg }
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

					<PanelRow>
						<fieldset>
							<SelectControl
								label={ __('Padding Size','borghamns-general') }
								value={ columnPadding }
								onChange={ onChangeColumnPadding }
								options={ [
									{
										value: '0',
										label: __('Default','borghamns-general'),
									},
									{
										value: '1',
										label: __('1','borghamns-general'),
									},
									{
										value: '2',
										label: __('2','borghamns-general'),
									},
									{
										value: '3',
										label: __('3','borghamns-general'),
									},
									{
										value: '4',
										label: __('4','borghamns-general'),
									},
								] }
							/>
						</fieldset>
					</PanelRow>

				</PanelBody>

			</InspectorControls>

			<div { ...blockProps }>
				<div className={columnInnerClasses}>
					<InnerBlocks
						template={ COLUMN_TEMPLATE }
						allowedBlocks={[
							'borghamns-general/section-header-tag',
							'core/heading',
							'core/paragraph',
							'borghamns-general/button',
							'core/image',
							'core/video',
							'core/embed',
							'core/file',
							'borghamns-general/testimonial',
							'borghamns-general/faq-block',
							'borghamns-general/team-members',
							'borghamns-general/slideshow',
							'borghamns-general/gallery',
							'borghamns-general/ordersamples',]} 
					/>
				</div>
			</div>
		</>
	);
}
