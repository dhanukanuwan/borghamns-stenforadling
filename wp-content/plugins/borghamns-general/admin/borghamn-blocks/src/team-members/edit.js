import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, PanelRow, SelectControl, TextControl } from '@wordpress/components';
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
		setAttributes( { displayIds: newIds } );
	}

	const onChangeColumns = ( newNum ) => {
		setAttributes( { columns: newNum } );
	}

	const blockProps = useBlockProps({
		className: sectionClasses,
	});
	
	const teamData = useSelect( ( select ) => {
		return select( 'core' ).getEntityRecords( 'postType', 'team', {_embed: 1} );
	}, [] );

	

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

				</PanelBody>

			</InspectorControls>
		
			<div {...blockProps}>

				{ teamData && teamData.length > 0 &&
					<div className="row">
						{ teamData.map( (member, i ) => {
							return (
								<div className="col-12 col-md-6 col-lg-4" key={i}>
									<div className="team-item-wrap bg-white pb-4 mb-4">

										{ member._embedded && member._embedded['wp:featuredmedia'] && member._embedded['wp:featuredmedia'][0] &&
											<div className="round-img-wrap position-relative">
												<div className="p-2">
													<img src={member._embedded['wp:featuredmedia'][0].source_url} className="mw-100" alt={member._embedded['wp:featuredmedia'][0].alt_text} title={member._embedded['wp:featuredmedia'][0].title.rendered} />
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
