import { __ } from '@wordpress/i18n';
import { useState, useEffect } from '@wordpress/element';

const imagesOne = require.context('../images/step-9/one', true);
const imageListOne = imagesOne.keys().map(image => imagesOne(image));

const StepNine = () => {

    const [hoType, setHoType] = useState('');

    useEffect(() => {

        const savedHo = localStorage.getItem('borg_step_9_punching_holes');

        if ( savedHo ) {
            setHoType( savedHo );
        }

    }, []);

    const hoOptions = [
        {
            slug: 'inga-hal',
            name: 'Inga hål'
        },
        {
            slug: 'jag-onskar-hal-i-skivan',
            name: 'Ja, jag önskar hål i skivan'
        }
    ];

    const handleHoSelect = (val) => {
        setHoType(val);
        localStorage.setItem('borg_step_9_punching_holes', val);
    }

    return(
        <div className="step-wrap h-100 position-relative">
             <h2 className="h3 liten">{ __('Håltagning', 'borghamns-general' ) }</h2>

             <div className="row mt-5 flex-grow-1">

                { hoOptions.map( (option, i) => {
                    return (
                        <div className="col-12 col-lg-4 mb-4">
                            <div className={`form-option-wrap pointer p-2 border border-2 rounded-0 ${hoType === option.slug ? 'border-primary' : ''}`} onClick={() => handleHoSelect(option.slug)}>
                                <div className="d-flex justify-content-end mb-2">
                                    <span className={`icon-ion-checkmark-circled ${hoType === option.slug ? 'text-primary' : 'text-secondary'}`}></span>
                                </div>

                                <img src={imageListOne[i]} className="d-block mx-auto mw-200"  alt="" />
                                <h4 className="liten h6 text-center mb-2 mt-3">{ __( option.name, 'borghamns-general' ) }</h4>
                            </div>
                        </div>
                    );
                })}

            </div>
        </div>
    );

}

export default StepNine;