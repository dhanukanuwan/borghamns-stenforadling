import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import { useState } from '@wordpress/element';

import StepZero from './steps/step-0';
import StoneType from './steps/stone-type';

import sidebarImg from './images/offert-img.jpg';
import './editor.scss';

export default function Edit() {

	const blockProps = useBlockProps( {
		className: 'py-5',
	} );

	const [currentStep, setCurrentStep] = useState(0);
	const [selectedProductType, setSelectedProductType] = useState('bankskivor');
	const [stoneType, setStoneType] = useState('kolmardsmarmor-ox');

	return (
		<section { ...blockProps }>
			<div className="container">
			<div className="row g-0">
				<div className="col-12 col-lg-4">
					<div className="offer-img-wrap position-relative h-100">
						<div className="hero-bg position-absolute w-100 h-100 top-0 left-0 d-flex">
							<img src={sidebarImg} className="w-100 object-fit-cover" alt="" />
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
						
						{currentStep === 0 &&
							<StepZero onProductSelect={(product) => setSelectedProductType(product)} />
						}

						{currentStep === 1 &&
							<StoneType onStoneSelect={(type) => setStoneType(type)} />
						}

						<div className="mt-auto">
							<div className="row">
								<div className="col-12 col-lg-6">

									{ currentStep > 0 &&
										<div className="d-flex justify-content-start">
											<button type="button" className="btn btn-primary rounded-0 mt-4" onClick={() => setCurrentStep(currentStep-1)}>
												<div className="d-flex">
													<div className="d-flex align-items-center">
														<span className="icon-ion-ios-arrow-left"></span>
														<span className="line-right bg-white d-inline-block" style={{marginLeft: '-12px'}}></span>
													</div>
													<span className="ps-2">{ __('Tidigare', 'borghamns-general' ) }</span>
												</div>
											</button>
										</div>
									}

								</div>
								<div className="col-12 col-lg-6">
									<div className="d-flex justify-content-end">
										<button type="button" className="btn btn-primary rounded-0 mt-4" onClick={() => setCurrentStep(currentStep+1)}>
											<div className="d-flex">
												<span className="pe-2">{ __('Nästa', 'borghamns-general' ) }</span>
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

				</div>
			</div>
			</div>
		</section>
	);
}
