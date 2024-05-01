import { __ } from '@wordpress/i18n';
import { createRoot, useState } from '@wordpress/element';

import StepZero from './steps/step-0';
import StoneType from './steps/stone-type';
import StepTwo from './steps/step-two';
import StepThree from './steps/step-three';
import StepFour from './steps/step-four';
import StepFive from './steps/step-five';
import StepSix from './steps/step-six';
import StepSeven from './steps/step-seven';
import StepEight from './steps/step-eight';
import StepNine from './steps/step-nine';
import StepTen from './steps/step-ten';
import StepEleven from './steps/step-eleven';
import StepTwelve from './steps/step-twelve';
import ContactDeatils from './steps/contactDetails';

import sidebarImg from './images/offert-img.jpg';
import './editor.scss';

const BegarOffert = () => {

	const [currentStep, setCurrentStep] = useState(0);
	const [selectedProductType, setSelectedProductType] = useState('bankskivor');
	const [stoneType, setStoneType] = useState('kolmardsmarmor-ox');
	const [selectedFormType, setSelectedFormType] = useState('l-kok');
	const [stepsCount, setStepsCount] = useState(13);
	const [showDetailsForm, setShowDetailsForm] = useState(false);

	const handleStepChange = ( newStep ) => {

		if ( newStep < currentStep ) {
			setStepsCount(13);
			setShowDetailsForm(false);
		}

		setCurrentStep( newStep );

		const savedProductType = localStorage.getItem('borg_product_type');

		if (  newStep === 6 && savedProductType === 'golvplattor' ) {
			setStepsCount(7);
			setShowDetailsForm(true);
		}

		if ( newStep === 10 ) {
			const punchingHoles = localStorage.getItem('borg_step_9_punching_holes');

			if ( punchingHoles !== 'inga-hal' && punchingHoles !== 'jag-onskar-hal-i-skivan' ) {
				setStepsCount(11);
				setShowDetailsForm(true);
			}

		}

		if ( newStep === 11 ) {
			const punchingHoles = localStorage.getItem('borg_step_9_punching_holes');
        	const edgeStrip = localStorage.getItem('borg_step_10_edge_stripes');

			let showForm = true;

			if ( punchingHoles === 'inga-hal' && edgeStrip === 'vill-ha-bakkantslist-stankskydd' ) {
				showForm = false;
			} else if ( punchingHoles === 'jag-onskar-hal-i-skivan' ) {
				showForm = false;
			}

			if ( showForm ) {
				setStepsCount(12);
				setShowDetailsForm(true);
			}
		}

		if ( newStep === 12 ) {
			const edgeStripRear = localStorage.getItem('borg_step_11_bakkantslist_stankskydd');

			if ( edgeStripRear !== 'vill-ha-bakkantslist-stankskydd' ) {
				setStepsCount(13);
				setShowDetailsForm(true);
			}
		}

		if ( newStep === 13 ) {
			setStepsCount(14);
			setShowDetailsForm(true);
		}

		const stepsWrapper = document.getElementById("steps-wrapper");
		stepsWrapper.scroll(0, newStep*100);

	}

	return (
		<div className="container">
			<div className="row g-0">
				<div className="col-12 col-lg-2">
					<div className="offer-img-wrap position-relative h-100">
						<div className="hero-bg position-absolute w-100 h-100 top-0 left-0 d-flex">
							<img src={sidebarImg} className="w-100 object-fit-cover" alt="" />
						</div>
						<div id="steps-wrapper" className="hero-content position-absolute top-0 left-0 py-5 text-center h-100 w-100 overflow-y-scroll">
							<h2 className="h4 liten text-white">{ __('Steps', 'borghamns-general' ) }</h2>
							<div className="dynamic-steps-outer d-none d-lg-flex justify-content-center flex-lg-column align-items-lg-center">

								{ Array.from( {length: stepsCount}, (_, i) => (
									<div className="dynamic-step position-relative" key={i}>
										<span className={`text-white d-flex justify-content-center align-items-center rounded-circle step-number ${currentStep === i ? 'active' : ''}`}>{i}</span>
									</div>
								))}
							</div>

						</div>
					</div>
				</div>

				<div className="col-12 col-lg-10 position-relative">

					<div className="bg-white p-4 h-100 d-flex flex-column">

						{ ! showDetailsForm &&
							<div>

								{currentStep === 0 &&
									<StepZero onProductSelect={(product) => setSelectedProductType(product)} />
								}

								{currentStep === 1 &&
									<StoneType onStoneSelect={(type) => setStoneType(type)} />
								}

								{currentStep === 2 &&
									<StepTwo
										selectedProduct={selectedProductType}
										stoneType={stoneType}
										onFormSelect={(type) => setSelectedFormType(type)}
									/>
								}

								{currentStep === 3 &&
									<StepThree
										selectedProduct={selectedProductType}
										formType={selectedFormType}
									/>
								}

								{currentStep === 4 &&
									<StepFour />
								}

								{currentStep === 5 &&
									<StepFive />
								}

								{currentStep === 6 &&
									<StepSix />
								}

								{currentStep === 7 &&
									<StepSeven />
								}

								{currentStep === 8 &&
									<StepEight />
								}

								{currentStep === 9 &&
									<StepNine />
								}

								{currentStep === 10 &&
									<StepTen />
								}

								{currentStep === 11 &&
									<StepEleven />
								}

								{currentStep === 12 &&
									<StepTwelve />
								}

							</div>
						}
						
						{ showDetailsForm && <ContactDeatils />}
						
						<div className="mt-auto">
							<div className="row">
								<div className="col-12 col-lg-6">

									{ currentStep > 0 &&
										<div className="d-flex justify-content-start">
											<button type="button" className="btn btn-primary rounded-0 mt-4" onClick={() => handleStepChange(currentStep-1)}>
												<div className="d-flex">
													<div className="d-flex align-items-center">
														<span className="icon-ion-ios-arrow-left"></span>
														<span className="line-right bg-white d-inline-block" style={{marginLeft: '-14px'}}></span>
													</div>
													<span className="ps-2">{ __('Tidigare', 'borghamns-general' ) }</span>
												</div>
											</button>
										</div>
									}

								</div>
								<div className="col-12 col-lg-6">

									{ stepsCount > currentStep && !showDetailsForm &&
										<div className="d-flex justify-content-end">
											<button type="button" className="btn btn-primary rounded-0 mt-4" onClick={() => handleStepChange(currentStep+1)}>
												<div className="d-flex">
													<span className="pe-2">{ __('Nästa', 'borghamns-general' ) }</span>
													<div className="d-flex align-items-center">
														<span className="line-right bg-white d-inline-block" style={{marginRight: '-14px'}}></span>
														<span className="icon-ion-ios-arrow-right"></span>
													</div>
												</div>
											</button>
										</div>
									}
									
								</div>
							</div>
						</div>
						
					</div>

				</div>
			</div>
		</div>
	);
}

const container = document.getElementById('offert-wrap');

if ( container ) { //check if element exists before rendering
    const root = createRoot(container);
    root.render(<BegarOffert />);
}

