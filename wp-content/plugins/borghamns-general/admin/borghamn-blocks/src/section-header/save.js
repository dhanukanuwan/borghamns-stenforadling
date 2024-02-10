import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';


export default function save() {

	let sectionClasses = 'col-12';

	const blockProps = useBlockProps.save( {
		className: sectionClasses,
	} );

	const classNames = blockProps.className;

	return (

		<div {...useBlockProps.save()} className={classNames}>

			<div class="row align-items-center">
				<InnerBlocks.Content />
			</div>

			<div className="row">
				<div className="col-12">
					<div className="mt-2 w-100 d-inline-block">
						<hr />
					</div>
				</div>
			</div>
		</div>
		
	);
}
