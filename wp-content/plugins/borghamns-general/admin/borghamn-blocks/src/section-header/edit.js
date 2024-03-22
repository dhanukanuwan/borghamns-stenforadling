import { __ } from '@wordpress/i18n';
import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';
import { Fragment } from '@wordpress/element';

import './editor.scss';

export default function Edit() {

	let sectionClasses = 'col-12';

	const blockProps = useBlockProps( {
		className: sectionClasses,
	} );

	const HEADER_TEMPLATE = [
		[ 'borghamns-general/content-column', { columnSize: '8' },
			[
				['borghamns-general/section-header-tag', {}],
				[ 'core/heading', { level: 2, content: 'Example section title' } ],
				[ 'core/paragraph', { content: 'Lorem ipsum dolor sit amet labore cras venenatis.' } ],
			]
		],
		[ 'borghamns-general/content-column', { columnSize: '4' },
			[
				['borghamns-general/button', {}]
			]
		]
	];

	const { children, ...innerBlocksProps } = useInnerBlocksProps(
		blockProps,
		{ 
			template: HEADER_TEMPLATE,
			allowedBlocks: [
				'borghamns-general/content-column',
				'borghamns-general/section-header-tag',
				'core/heading',
				'core/paragraph',
				'borghamns-general/button',
				'core/image',
				'core/video',
				'core/embed',
				'core/file',
			]
		}
	);

	return (
		<Fragment>

			<div {...innerBlocksProps}>

				<div className="row align-items-center">
					{children}
				</div>

				<div className="row">
					<div className="col-12">
						<div className="mt-2 w-100 d-inline-block">
							<hr />
						</div>
					</div>
				</div>
			</div>

		</Fragment>
	);
}
