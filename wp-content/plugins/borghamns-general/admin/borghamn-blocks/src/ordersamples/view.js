import { __ } from '@wordpress/i18n';
import { createRoot, useState } from '@wordpress/element';
import {defaultOrderCheckboxes, defaultContactDetails} from './checkboxes';
import apiFetch from '@wordpress/api-fetch';

const OrderSamples = () => {

    const [ orderCheckBoxes, setOrderCheckBoxes ] = useState( defaultOrderCheckboxes );
    const [contactDetails, setContactDetails] = useState( defaultContactDetails );
    const [termsAccepted, setTermsAccespted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [success, setSuccsess] = useState('');

    const handleCheckBoxUpdate = ( key, index, checked ) => {

        let orderCheckBoxesNew = {...orderCheckBoxes}

        let updatedBoxes = orderCheckBoxes[key].boxes;

        if ( !updatedBoxes ) return;

        let updatedItem = { ...updatedBoxes[index], checked: checked}

        if ( updatedItem ) {
            updatedBoxes[index] = updatedItem;
            orderCheckBoxesNew[key].boxes = updatedBoxes;
        }

        setOrderCheckBoxes( orderCheckBoxesNew );

    }

    const handleYtbehandling = ( key, val ) => {

        let orderCheckBoxesNew = {...orderCheckBoxes}

        let updatedItem = { ...orderCheckBoxes[key], annan_ytbehandling: val}

        if ( updatedItem ) {
            orderCheckBoxesNew[key] = updatedItem;
        }

        setOrderCheckBoxes( orderCheckBoxesNew );

    }

    const handleFormSubmit = async ( event ) => {

        event.preventDefault();
        event.stopPropagation();

        if ( !event.target.checkValidity() ) {

            event.target.classList.add('was-validated');

            return;
        }

        setLoading( true );
        setSuccsess( '' );

        let savedData = [...contactDetails];

        const checkboxKeys = [ 'grabrun', 'ljusgra', 'ox', 'oxl' ];

        checkboxKeys.forEach( (key) => {

            const checkboxItem = orderCheckBoxes[key];

            if ( checkboxItem ) {

                let selectedBoxes = [];

                checkboxItem.boxes.forEach( (box) => {

                    if ( box.checked ) {
                        selectedBoxes.push( box.name );
                    }

                });

                savedData.push(
                    {
                        key: `borg_${key}`,
                        val: selectedBoxes.join()
                    },
                    {
                        key: `borg_${key}_annan_ytbehandling`,
                        val: checkboxItem.annan_ytbehandling
                    }
                );

            }

        });

        let queryParams = {
            saved_data: JSON.stringify(savedData ),
        }

        
        await apiFetch( {
            path: 'borghamns/v1/savebestallprover',
            method: 'POST',
            data: queryParams,
        } ).then( ( res ) => {
            
            if ( res && res.success === true ) {
                setSuccsess( 'true' );
                setContactDetails( defaultContactDetails );
            } else {
                setSuccsess( 'false' );
            }

        } );

        setLoading( false );
        

    }

    const handleContactDetailChange = ( key, val ) => {
        
        let newDetails = [...contactDetails];

        let updatedItem = {...newDetails[key], val: val}

        if ( updatedItem ) {
            newDetails[key] = updatedItem;
            setContactDetails( newDetails );
        }
        
    }

    return(
        <div className="order-samples-wrap">

            {Object.keys(orderCheckBoxes).map( (key, index) => {

                const checkBox = orderCheckBoxes[key];

                return(
                    <div className="row" key={index}>
                        <div className="col-12">
                            <h3 className="h4">{checkBox.title}</h3>
                            <div className="bg-white p-4 d-flex flex-column mb-4 mb-lg-5">

                                <div className="boxes-wrap">

                                    {checkBox.boxes.map( (box, i) => {
                                        return(
                                            <div className="form-check form-check-inline" key={i}>
                                                <input className="form-check-input mt-1 me-0" type="checkbox" id={`${key}_${box.val}`} value={box.val} checked={box.checked} onChange={() => handleCheckBoxUpdate( key, i, !box.checked)} />
                                                <label className="form-check-label" htmlFor={`${key}_${box.val}`}>{box.name}</label>
                                            </div>
                                        );
                                    })}

                                </div>

                                <div className="mt-3">
                                    <label htmlFor={`${key}_annan_ytbehandling`} className="form-label h6">{ __('Annan ytbehandling', 'ordersamples')}</label>
                                    <input type="text" className="form-control rounded-0" id={`${key}_annan_ytbehandling`} value={checkBox.annan_ytbehandling} placeholder={ __('Skriv här...', 'ordersamples')} onChange={(e) => handleYtbehandling(key, e.target.value)} />
                                </div>
                                
                                
                            </div>
                        </div>
                    </div>
                );
            })}

            <div className="row">
                <div className="col-12">
                    <h3 className="h4">{ __('Kontaktuppgifter', 'ordersamples')}</h3>
                    <div className="bg-white p-4 mb-4 mb-lg-5">

                        <form className="row g-3 needs-validation" onSubmit={(event) => handleFormSubmit(event)} noValidate>

                            { contactDetails && contactDetails.length > 1 &&
                                <>
                                    {contactDetails.map((item, i) => {
                                        return(
                                            <div className="col-12 col-lg-6" key={i}>
                                                <label htmlFor={item.name.toLowerCase()} className="form-label visually-hidden">{ item.name }</label>
                                                <input type={item.type} className="form-control rounded-0" id={item.name.toLowerCase()} value={item.val} onChange={(e) => handleContactDetailChange( i, e.target.value )} placeholder={ item.name }  required={item.required} />
                                                
                                                {item.required &&
                                                    <div className="invalid-feedback">{ __('Du måste fylla i denna information', 'ordersamples') }</div>
                                                }
                                                
                                            </div>
                                        );
                                    })}
                                </>
                            }

                            <div className="col-12">
                                <div className="form-check form-switch">
                                    <input className="form-check-input" type="checkbox" role="switch" id="minaUppgifter" checked={termsAccepted} onChange={()=> setTermsAccespted(!termsAccepted)} required={true} />
                                    <label className="form-check-label" htmlFor="minaUppgifter">
                                        { __('Jag accepterar att mina uppgifter tillfälligt sparas,', 'ordersamples') }
                                        <a href="/allmanna-villkor" target="_blank" className="ms-1" rel="noindex, nofollow">{ __('läs mer.', 'ordersamples') }</a>
                                    </label>
                                    <div className="invalid-feedback">{ __('Du måste acceptera våra villkor', 'ordersamples') }</div>
                                </div>
                            </div>

                            { success === 'true' &&
                                <div className="alert alert-success d-flex align-items-center" role="alert">
                                    <div>
                                        <span className="icon-ion-android-done h4 mb-0"></span>
                                    </div>
                                    <div>
                                        { __('Tack för att du skickade din information till oss. Vi kommer att kontakta dig så snart som möjligt.', 'borghamns-general' ) }
                                    </div>
                                </div>
                            }

                            { success === 'false' &&
                                <div className="alert alert-danger d-flex align-items-center" role="alert">
                                    <div style={{width: '25px'}}>
                                        <svg xmlns="http://www.w3.org/2000/svg" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-2" viewBox="0 0 16 16" role="img" aria-label="Warning:">
                                            <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                                        </svg>
                                    </div>
                                    <div>
                                        { __('Något gick fel. Ladda om sidan och försök igen.', 'borghamns-general' ) }
                                    </div>
                                </div>
                            }

                            <div className="col-12 mt-4 mb-3 mt-lg-5">
                                <div className="row justify-content-center">
                                    <div className="col-12 col-lg-4">
                                        <button type="submit" className="btn btn-primary rounded-0">
                                            <div className="d-flex">
                                                <span className="pe-2">{ __('Skicka beställning', 'ordersamples') }</span>
                                                {loading &&
                                                    <span className="icon-ion-ios-reload animate-spin"></span>
                                                }

                                                { !loading &&
                                                    <div className="d-flex align-items-center">
                                                        <span className="line-right bg-white d-inline-block" style={{marginRight: '-14px'}}></span>
                                                        <span className="icon-ion-ios-arrow-right"></span>
                                                    </div>
                                                }
                                            </div>
                                        </button>
                                    </div>
                                </div>
                            </div>

                        </form>

                    </div>
                </div>
            </div>

        </div>
    );

}

const container = document.getElementById('order-samples-wrap');

if ( container ) { //check if element exists before rendering
    const root = createRoot(container);
    root.render(<OrderSamples />);
}
