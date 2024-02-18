import { __ } from '@wordpress/i18n';
import { useState, useEffect } from '@wordpress/element';
const images = require.context('../images/step-2', true);
const imageList = images.keys().map(image => images(image));

const StepTwo = ( props ) => {

    const [formType, setFormType] = useState('l-kok');
    const [treatmentType, setTreatmentType] = useState('');

    const { onFormSelect } = props;

    useEffect(() => {
		
		const savedFormType = localStorage.getItem('borg_form_type');
        const savedTreatmentType = localStorage.getItem('borg_treatment_type');

		if ( savedFormType ) {
			setFormType( savedFormType );
		}

        if ( savedTreatmentType ) {
            setTreatmentType( savedTreatmentType );
        }

	}, []);

    const handleFormSelect = (type) => {
        setFormType(type);
        onFormSelect(type)
        
        localStorage.setItem('borg_form_type', type);
    }

    const handleTreatmentSelect = ( type ) => {
        setTreatmentType( type );
        localStorage.setItem('borg_treatment_type', type);
    }

    return (
        <div className="step-wrap h-100 position-relative">

            {props?.selectedProduct && props?.selectedProduct === 'bankskivor' &&
                <>

                    <h2 className="h3 liten">{ __('Välj form', 'borghamns-general' ) }</h2>

                    <div className="row mt-5 flex-grow-1">
                        <div className="col-12 col-lg-4">
                            <div className={`form-option-wrap pointer p-2 border border-2 rounded-0 ${formType === 'l-kok' ? 'border-primary' : ''}`} onClick={() => handleFormSelect('l-kok')}>
                                <div className="d-flex justify-content-end mb-2">
                                    <span className={`icon-ion-checkmark-circled ${formType === 'l-kok' ? 'text-primary' : 'text-secondary'}`}></span>
                                </div>
                                <img src={imageList[0]} className="d-block mx-auto mw-200"  alt="" />
                                <h4 className="liten h6 text-center mb-2 mt-3">{ __('L-kök', 'borghamns-general' ) }</h4>
                            </div>
                        </div>
                        <div className="col-12 col-lg-4">
                            <div className={`form-option-wrap pointer p-2 border border-2 rounded-0 ${formType === 'u-kok' ? 'border-primary' : ''}`} onClick={() => handleFormSelect('u-kok')}>
                                <div className="d-flex justify-content-end mb-2">
                                    <span className={`icon-ion-checkmark-circled ${formType === 'u-kok' ? 'text-primary' : 'text-secondary'}`}></span>
                                </div>
                                <img src={imageList[1]} className="d-block mx-auto mw-200"  alt="" />
                                <h4 className="liten h6 text-center mb-2 mt-3">{ __('U-kök', 'borghamns-general' ) }</h4>
                            </div>
                        </div>
                        <div className="col-12 col-lg-4">
                            <div className={`form-option-wrap pointer p-2 border border-2 rounded-0 ${formType === 'rakt-kok' ? 'border-primary' : ''}`} onClick={() => handleFormSelect('rakt-kok')}>
                                <div className="d-flex justify-content-end mb-2">
                                    <span className={`icon-ion-checkmark-circled ${formType === 'rakt-kok' ? 'text-primary' : 'text-secondary'}`}></span>
                                </div>
                                <img src={imageList[2]} className="d-block mx-auto mw-200"  alt="" />
                                <h4 className="liten h6 text-center mb-2 mt-3">{ __('Rakt kök', 'borghamns-general' ) }</h4>
                            </div>
                        </div>
                    </div>

                </>
            }

            {props?.selectedProduct && props?.selectedProduct === 'fonsterbankar' &&
                <>
                    <h2 className="h3 liten">{ __('Välj ytbearbetning', 'borghamns-general' ) }</h2>

                    <div className="row mt-5 flex-grow-1">
                        <div className="col-12 col-lg-4">
                            <div className={`form-option-wrap pointer p-2 border border-2 rounded-0 ${treatmentType === 'finslipad' ? 'border-primary' : ''}`} onClick={() => handleTreatmentSelect('finslipad')}>
                                <div className="d-flex justify-content-end mb-2">
                                    <span className={`icon-ion-checkmark-circled ${treatmentType === 'finslipad' ? 'text-primary' : 'text-secondary'}`}></span>
                                </div>
                                {( props?.stoneType === 'kolmardsmarmor-ox' || props?.stoneType === 'kolmardsmarmor-oxl') &&
                                    <img src={imageList[3]} className="d-block mx-auto mw-200"  alt="" />
                                }

                                {( props?.stoneType === 'grabrun-borghamnskalksten' || props?.stoneType === 'ljusgra-borghamnskalksten') &&
                                    <img src={imageList[8]} className="d-block mx-auto mw-200"  alt="" />
                                }
                                
                                <h4 className="liten h6 text-center mb-2 mt-3">{ __('Finslipad', 'borghamns-general' ) }</h4>
                            </div>
                        </div>

                        <div className="col-12 col-lg-4">
                            <div className={`form-option-wrap pointer p-2 border border-2 rounded-0 ${treatmentType === 'borstad' ? 'border-primary' : ''}`} onClick={() => handleTreatmentSelect('borstad')}>
                                <div className="d-flex justify-content-end mb-2">
                                    <span className={`icon-ion-checkmark-circled ${treatmentType === 'borstad' ? 'text-primary' : 'text-secondary'}`}></span>
                                </div>
                                <img src={imageList[4]} className="d-block mx-auto mw-200"  alt="" />
                                <h4 className="liten h6 text-center mb-2 mt-3">{ __('Borstad', 'borghamns-general' ) }</h4>
                            </div>
                        </div>

                        {( props?.stoneType === 'grabrun-borghamnskalksten' || props?.stoneType === 'ljusgra-borghamnskalksten') &&
                            <div className="col-12 col-lg-4">
                                <div className={`form-option-wrap pointer p-2 border border-2 rounded-0 ${treatmentType === 'hyvlad' ? 'border-primary' : ''}`} onClick={() => handleTreatmentSelect('hyvlad')}>
                                    <div className="d-flex justify-content-end mb-2">
                                        <span className={`icon-ion-checkmark-circled ${treatmentType === 'hyvlad' ? 'text-primary' : 'text-secondary'}`}></span>
                                    </div>
                                    <img src={imageList[7]} className="d-block mx-auto mw-200"  alt="" />
                                    <h4 className="liten h6 text-center mb-2 mt-3">{ __('Hyvlad', 'borghamns-general' ) }</h4>
                                </div>
                            </div>
                        }

                        <div className="col-12 col-lg-4">
                            <div className={`form-option-wrap pointer p-2 border border-2 rounded-0 ${treatmentType === 'annan' ? 'border-primary' : ''}`} onClick={() => handleTreatmentSelect('annan')}>
                                <div className="d-flex justify-content-end mb-2">
                                    <span className={`icon-ion-checkmark-circled ${treatmentType === 'annan' ? 'text-primary' : 'text-secondary'}`}></span>
                                </div>
                                {( props?.stoneType === 'kolmardsmarmor-ox' || props?.stoneType === 'kolmardsmarmor-oxl') &&
                                    <img src={imageList[5]} className="d-block mx-auto mw-200"  alt="" />
                                }

                                {( props?.stoneType === 'grabrun-borghamnskalksten' || props?.stoneType === 'ljusgra-borghamnskalksten') &&
                                    <img src={imageList[6]} className="d-block mx-auto mw-200"  alt="" />
                                }
                                <h4 className="liten h6 text-center mb-2 mt-3">{ __('Annan', 'borghamns-general' ) }</h4>
                            </div>
                        </div>
                    </div>
                </>
            }

            {props?.selectedProduct && props?.selectedProduct === 'golvplattor' &&
                <>
                    <h2 className="h3 liten">{ __('Välj ytbearbetning', 'borghamns-general' ) }</h2>

                    <div className="row mt-5 flex-grow-1">
                        <div className="col-12 col-lg-4">
                            <div className={`form-option-wrap pointer p-2 border border-2 rounded-0 ${treatmentType === 'normalslipad' ? 'border-primary' : ''}`} onClick={() => handleTreatmentSelect('normalslipad')}>
                                <div className="d-flex justify-content-end mb-2">
                                    <span className={`icon-ion-checkmark-circled ${treatmentType === 'normalslipad' ? 'text-primary' : 'text-secondary'}`}></span>
                                </div>
                                {( props?.stoneType === 'kolmardsmarmor-ox' || props?.stoneType === 'kolmardsmarmor-oxl') &&
                                    <img src={imageList[9]} className="d-block mx-auto mw-200"  alt="" />
                                }

                                {( props?.stoneType === 'grabrun-borghamnskalksten' || props?.stoneType === 'ljusgra-borghamnskalksten') &&
                                    <img src={imageList[11]} className="d-block mx-auto mw-200"  alt="" />
                                }
                                
                                <h4 className="liten h6 text-center mb-2 mt-3">{ __('Normalslipad', 'borghamns-general' ) }</h4>
                            </div>
                        </div>

                        <div className="col-12 col-lg-4">
                            <div className={`form-option-wrap pointer p-2 border border-2 rounded-0 ${treatmentType === 'borstad' ? 'border-primary' : ''}`} onClick={() => handleTreatmentSelect('borstad')}>
                                <div className="d-flex justify-content-end mb-2">
                                    <span className={`icon-ion-checkmark-circled ${treatmentType === 'borstad' ? 'text-primary' : 'text-secondary'}`}></span>
                                </div>
                                {( props?.stoneType === 'kolmardsmarmor-ox' || props?.stoneType === 'kolmardsmarmor-oxl') &&
                                    <img src={imageList[10]} className="d-block mx-auto mw-200"  alt="" />
                                }

                                {( props?.stoneType === 'grabrun-borghamnskalksten' || props?.stoneType === 'ljusgra-borghamnskalksten') &&
                                    <img src={imageList[12]} className="d-block mx-auto mw-200"  alt="" />
                                }
                                <h4 className="liten h6 text-center mb-2 mt-3">{ __('Borstad', 'borghamns-general' ) }</h4>
                            </div>
                        </div>

                        {( props?.stoneType === 'grabrun-borghamnskalksten' || props?.stoneType === 'ljusgra-borghamnskalksten') &&
                            <div className="col-12 col-lg-4">
                                <div className={`form-option-wrap pointer p-2 border border-2 rounded-0 ${treatmentType === 'hyvlad' ? 'border-primary' : ''}`} onClick={() => handleTreatmentSelect('hyvlad')}>
                                    <div className="d-flex justify-content-end mb-2">
                                        <span className={`icon-ion-checkmark-circled ${treatmentType === 'hyvlad' ? 'text-primary' : 'text-secondary'}`}></span>
                                    </div>
                                    <img src={imageList[13]} className="d-block mx-auto mw-200"  alt="" />
                                    <h4 className="liten h6 text-center mb-2 mt-3">{ __('Hyvlad', 'borghamns-general' ) }</h4>
                                </div>
                            </div>
                        }

                        <div className="col-12 col-lg-4">
                            <div className={`form-option-wrap pointer p-2 border border-2 rounded-0 ${treatmentType === 'annan' ? 'border-primary' : ''}`} onClick={() => handleTreatmentSelect('annan')}>
                                <div className="d-flex justify-content-end mb-2">
                                    <span className={`icon-ion-checkmark-circled ${treatmentType === 'annan' ? 'text-primary' : 'text-secondary'}`}></span>
                                </div>
                                {( props?.stoneType === 'kolmardsmarmor-ox' || props?.stoneType === 'kolmardsmarmor-oxl') &&
                                    <img src={imageList[5]} className="d-block mx-auto mw-200"  alt="" />
                                }

                                {( props?.stoneType === 'grabrun-borghamnskalksten' || props?.stoneType === 'ljusgra-borghamnskalksten') &&
                                    <img src={imageList[6]} className="d-block mx-auto mw-200"  alt="" />
                                }
                                <h4 className="liten h6 text-center mb-2 mt-3">{ __('Annan', 'borghamns-general' ) }</h4>
                            </div>
                        </div>
                    </div>
                </>
            }

        </div>
    );

}

export default StepTwo;