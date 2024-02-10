import { useBlockProps } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

export default function save( { attributes } ) {

	const { tagText, tagColor  } = attributes;

	let tagClasses = 'd-flex align-items-center';

	return (
		
		<div {...useBlockProps.save()} className={tagClasses}>
			<span className={`line-right bg-${tagColor} d-inline-block`}></span>
			<span className={`ms-2 text-${tagColor}`}>{tagText}</span>
		</div>
	);
}
