import { __ } from '@wordpress/i18n';
import { createRoot, useState } from '@wordpress/element';
import {defaultOrderCheckboxes, defaultContactDetails} from './checkboxes';

const OrderSamples = () => {

    const [ orderCheckBoxes, setOrderCheckBoxes ] = useState( defaultOrderCheckboxes );
    const [contactDetails, setContactDetails] = useState( defaultContactDetails );
    const [termsAccepted, setTermsAccespted] = useState(false);

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

    const handleFormSubmit = ( event ) => {

        if ( !event.target.checkValidity() ) {
            event.preventDefault();
            event.stopPropagation();

            event.target.classList.add('was-validated');

            return;
        }
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

                            <div className="col-12 mt-4 mb-3 mt-lg-5">
                                <div className="row justify-content-center">
                                    <div className="col-12 col-lg-4">
                                        <button type="submit" className="btn btn-primary rounded-0">
                                            <div className="d-flex">
                                                <span className="pe-2">{ __('Skicka beställning', 'ordersamples') }</span>
                                                <div className="d-flex align-items-center">
                                                    <span className="line-right bg-white d-inline-block" style={{marginRight: '-14px'}}></span>
                                                    <span className="icon-ion-ios-arrow-right"></span>
                                                </div>
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
