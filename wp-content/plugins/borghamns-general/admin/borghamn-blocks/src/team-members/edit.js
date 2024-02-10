import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, PanelRow, SelectControl, TextControl, __experimentalNumberControl as NumberControl } from '@wordpress/components';
import { useSelect } from '@wordpress/data';
import { Fragment } from '@wordpress/element';

import './editor.scss';

export default function Edit( { attributes, setAttributes } ) {

	const { displayType, category, itemsNum, displayIds, columns  } = attributes;

	let sectionClasses = 'col-12';

	const onChangeDisplayType = ( newType ) => {
		setAttributes( { displayType: newType } );
	}

	const onChangeCategory = ( newCategory ) => {
		setAttributes( { category: newCategory } );
	}

	const onChangeItemsNum = ( newNum ) => {
		setAttributes( { itemsNum: newNum } );
	}

	const onChangeDisplayIds = ( newIds ) => {

		const postIds = newIds.split(',');

		if ( postIds ) {
			setAttributes( { displayIds:postIds } );
		} else {
			setAttributes( { displayIds: [] } );
		}
	}

	const onChangeColumns = ( newNum ) => {
		setAttributes( { columns: newNum } );
	}

	const blockProps = useBlockProps({
		className: sectionClasses,
	});

	let teamQuery = {_embed: 1, per_page: itemsNum}

	if ( displayType === 'category' && category !== 0 ) {
		teamQuery = { ...teamQuery, department: [category] }
	}

	if ( displayType === 'selected' && displayIds && displayIds.length > 0 ) {
		teamQuery = { ...teamQuery, include: displayIds }
	}
	
	const teamData = useSelect( ( select ) => {
		return select( 'core' ).getEntityRecords( 'postType', 'team', teamQuery );
	}, [category, displayType, itemsNum, displayIds] );

	const departments = useSelect( ( select ) => {
		return select( 'core' ).getEntityRecords( 'taxonomy', 'department' );
	}, [] );

	let categoryOptions = [];

	if ( departments && departments.length > 0 ) {
		categoryOptions = departments.map( (department) => {
			return { value: department.id, label: department.name }
		});

		categoryOptions.unshift({value: 0, label: __('Please select','borghamns-general')})
	}

	let columnClasses;

	if ( columns == 4 ) {
		columnClasses = `col-md-6 col-lg-3`;
	} else if ( columns == 3 ) {
		columnClasses = `col-md-6 col-lg-4`;
	} else if ( columns == 2 ) {
		columnClasses = `col-lg-6`;
	}

	return (

		<Fragment>

			<InspectorControls>

				<PanelBody title={ __( 'Settings', 'borghamns-general' ) } initialOpen={ true }>

					<PanelRow>
						<fieldset>
							<SelectControl
								label={ __('Display Type','borghamns-general') }
								value={ displayType }
								onChange={ onChangeDisplayType }
								options={ [
									{
										value: 'all',
										label: __('All','borghamns-general'),
									},
									{
										value: 'category',
										label: __('Department','borghamns-general'),
									},
									{
										value: 'selected',
										label: __('Manually selected','borghamns-general'),
									},
								] }
							/>
						</fieldset>
					</PanelRow>

					{ displayType && displayType === 'category' &&
						<PanelRow>
							<fieldset>
								<SelectControl
									label={ __('Display Type','borghamns-general') }
									value={ category }
									onChange={ onChangeCategory }
									options={categoryOptions}
								/>
							</fieldset>
						</PanelRow>
					}

					{ displayType && displayType === 'selected' &&
						<PanelRow>
							<fieldset>
								<TextControl
									label={ __('Member Ids','borghamns-general') }
									value={ displayIds }
									onChange={ onChangeDisplayIds  }
									help={ __('Please use comma separated member post ids.','borghamns-general') }
								/>
							</fieldset>
						</PanelRow>
					}

					<PanelRow>
						<fieldset>
							<NumberControl
								label={ __('No. of items','borghamns-general') }
								isShiftStepEnabled={ true }
								onChange={ onChangeItemsNum }
								shiftStep={ 1 }
								value={ itemsNum }
								min={1}
							/>
						</fieldset>
					</PanelRow>

					<PanelRow>
						<fieldset>
							<NumberControl
								label={ __('No. of columns','borghamns-general') }
								isShiftStepEnabled={ true }
								onChange={ onChangeColumns }
								shiftStep={ 1 }
								value={ columns }
								min={1}
								max={4}
							/>
						</fieldset>
					</PanelRow>

				</PanelBody>

			</InspectorControls>
		
			<div {...blockProps}>

				{ teamData && teamData.length > 0 &&
					<div className="row">
						{ teamData.map( (member, i ) => {
							return (
								<div className={`col-12 ${columnClasses}`} key={i}>
									<div className="team-item-wrap bg-white pb-4 mb-4">

										{ member._embedded && member._embedded['wp:featuredmedia'] && member._embedded['wp:featuredmedia'][0] &&
											<div className="round-img-wrap position-relative">
												<div className="p-2">
													<img src={member._embedded['wp:featuredmedia'][0].source_url} className="mw-100 w-100" alt={member._embedded['wp:featuredmedia'][0].alt_text} title={member._embedded['wp:featuredmedia'][0].title.rendered} />
												</div>
											</div>
										}
										
										<div className="mt-3 text-center">
											<h3 className="liten h4 mb-1">{member.title.rendered}</h3>
											{member.acf.position &&
												<span className="text-primary">{member.acf.position}</span>
											}
											
										</div>
									</div>
								</div>
							);
						})}
					</div>
				}

			</div>
		</Fragment>

	);
}
