import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import './editor.scss';
import formScreenshot from './images/form-ss.jpg';

export default function Edit() {

	let wrapperClasses = 'order-samples-wrap';

	const blockProps = useBlockProps({
		className: wrapperClasses,
	});
	
	return (
		<div { ...blockProps }>
			<div className="row">
				<div className="col-12">
					<img src={formScreenshot} className="w-100 mw-100" />
				</div>
			</div>
			
		</div>
	);
}
