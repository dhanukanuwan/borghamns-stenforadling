import { useBlockProps } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

export default function save( { attributes } ) {

	const { btnText, url, btnColor, hideIcon, align  } = attributes;

	let btnClasses = `btn mt-auto rounded-0 ${ btnColor ? `btn-${btnColor}`: ''}`;

	let wrapperClasses = 'd-flex flex-grow-1';

	if ( align ) {
		
		if ( align === 'right' ) {
			wrapperClasses = `${wrapperClasses} justify-content-end`;
		}

		if ( align === 'center' ) {
			wrapperClasses = `${wrapperClasses} justify-content-center`;
		}
	}

	const blockProps = useBlockProps.save( {
		className: wrapperClasses,
	} );

	const classNames = blockProps.className;
	
	return (
		<div {...useBlockProps.save()} className={classNames}>
			<a  className={btnClasses}  href={url}>
				<div className="d-flex">
					<span className={`${!hideIcon ? 'pe-2' : '' }`}>{btnText}</span>
					
					{ !hideIcon && 
						<div className="d-flex align-items-center">
							<span className={`line-right bg-${ btnColor === 'secondary' || btnColor === 'white' ? 'dark-text' : 'white'} d-inline-block btn-line`} ></span>
							<span className="icon-ion-ios-arrow-right"></span>
						</div>
					}
				</div>
		</a>
		</div>
		
	);
}
