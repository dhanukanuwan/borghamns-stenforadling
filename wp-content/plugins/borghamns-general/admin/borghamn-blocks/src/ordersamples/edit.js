import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import './editor.scss';

export default function Edit() {

	let wrapperClasses = 'order-samples-wrap';

	const blockProps = useBlockProps({
		className: wrapperClasses,
	});
	
	return (
		<div { ...blockProps }>
			<div className="row">
				<div className="col-12">
					<h3>{ __( 'Borghamnskalksten, gråbrun', 'ordersamples' ) }</h3>
					<div className="bg-white py-3 px-4 d-flex">
						<div className="form-check form-check-inline">
							<input className="form-check-input mt-1 me-0" type="checkbox" id="inlineCheckbox1" value="option1" />
							<label className="form-check-label" htmlFor="inlineCheckbox1">1</label>
						</div>
						<div className="form-check form-check-inline">
							<input className="form-check-input mt-1 me-0" type="checkbox" id="inlineCheckbox2" value="option2" />
							<label className="form-check-label" htmlFor="inlineCheckbox2">2</label>
						</div>
					</div>
				</div>
			</div>
			
		</div>
	);
}
