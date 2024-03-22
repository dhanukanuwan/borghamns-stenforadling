import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls, MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import { Fragment } from '@wordpress/element';
import { PanelBody, PanelRow, SelectControl, Button } from '@wordpress/components';
import { register } from 'swiper/element/bundle';
import './editor.scss';

register();


export default function Edit( { attributes, setAttributes } ) {

	let wrapperClasses = 'gallery-wrap';

	const blockProps = useBlockProps({
		className: wrapperClasses,
	});

	return (
		<Fragment>

			<div { ...blockProps }>
				<swiper-container slides-per-view="3" speed="500" loop="true" css-mode="true" navigation="true">
					<swiper-slide>Slide 1</swiper-slide>
					<swiper-slide>Slide 2</swiper-slide>
					<swiper-slide>Slide 3</swiper-slide>
					<swiper-slide>Slide 4</swiper-slide>
					<swiper-slide>Slide 5</swiper-slide>
					<swiper-slide>Slide 6</swiper-slide>
				</swiper-container>
			</div>
		</Fragment>
	);
}
