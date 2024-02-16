import { useBlockProps } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
const images = require.context('./images', true);
const imageList = images.keys().map(image => images(image));

export default function save() {

	const blockProps = useBlockProps.save( {
		className: 'py-5 py-xl-6',
	} );

	const classNames = blockProps.className;

	return (
		<section {...useBlockProps.save()} className={classNames}>
			<div className="container">
			<div className="row g-0">
				<div className="col-12 col-lg-4">
					<div className="offer-img-wrap position-relative">
						<div className="hero-bg position-absolute w-100 h-100 top-0 left-0 d-flex">
							<img src={imageList[2]} className="w-100 object-fit-cover" alt="" />
						</div>
						<div className="hero-content position-absolute top-0 left-0 py-5 text-center h-100 w-100 ">
							<h2 className="h4 liten text-white">{ __('Steps', 'borghamns-general' ) }</h2>
							<div className="dynamic-steps-outer d-none d-lg-flex justify-content-center flex-lg-column align-items-lg-center">
								<div className="dynamic-step position-relative">
									<span className="text-white d-flex justify-content-center align-items-center rounded-circle step-number active">1</span>
								</div>
								<div className="dynamic-step position-relative">
									<span className="text-white d-flex justify-content-center align-items-center rounded-circle step-number">2</span>
								</div>
								<div className="dynamic-step position-relative">
									<span className="text-white d-flex justify-content-center align-items-center rounded-circle step-number">3</span>
								</div>
								<div className="dynamic-step position-relative">
									<span className="text-white d-flex justify-content-center align-items-center rounded-circle step-number">4</span>
								</div>
							</div>

						</div>
					</div>
				</div>

				<div className="col-12 col-lg-8 position-relative">

					<div className="bg-white p-4 h-100 d-flex flex-column">
						<h2 className="h3 liten">{ __('Välja produkt type', 'borghamns-general' ) }</h2>

							<div className="row mt-5 flex-grow-1">
								<div className="col-12 col-lg-4">
									<div className="form-option-wrap pointer p-2 border border-2 border-primary rounded-0">
										<div className="d-flex justify-content-end mb-2">
											<span className="icon-ion-checkmark-circled text-primary"></span>
										</div>
										<img src={imageList[1]} className="d-block mx-auto rounded-circle mw-150"  alt="" />
										<h4 className="liten h6 text-center mb-2 mt-3">Bänkskivor</h4>
									</div>
								</div>
								<div className="col-12 col-lg-4">
									<div className="form-option-wrap pointer p-2 border border-2 rounded-0">
										<div className="d-flex justify-content-end mb-2">
											<span className="icon-ion-checkmark-circled text-secondary"></span>
										</div>
										<img src={imageList[3]} className="d-block mx-auto rounded-circle mw-150"  alt="" />
										<h4 className="liten h6 text-center mb-2 mt-3">Fönsterbänkar</h4>
									</div>
								</div>
								<div className="col-12 col-lg-4">
									<div className="form-option-wrap pointer p-2 border border-2 rounded-0">
										<div className="d-flex justify-content-end mb-2">
											<span className="icon-ion-checkmark-circled text-secondary"></span>
										</div>
										<img src={imageList[0]} className="d-block mx-auto rounded-circle mw-150"  alt="" />
										<h4 className="liten h6 text-center mb-2 mt-3">Golvplattor</h4>
									</div>
								</div>
							</div>

							<div className="d-flex justify-content-end">
								<button type="button" className="btn btn-primary rounded-0 mt-4" >
									<div className="d-flex">
										<span className="pe-2">Nästa</span>
										<div className="d-flex align-items-center">
											<span className="line-right bg-white d-inline-block" style={{marginRight: '-12px'}}></span>
											<span className="icon-ion-ios-arrow-right"></span>
										</div>
									</div>
								</button>
							</div>
					</div>

				</div>
			</div>
			</div>
		</section>
	);
}
