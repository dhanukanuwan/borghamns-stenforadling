import { __ } from '@wordpress/i18n';
import { useState } from '@wordpress/element';
import {defaultContactDetails, dataFields} from './defaultData';
import apiFetch from '@wordpress/api-fetch';
// import { useDispatch } from '@wordpress/data';
// import { store as coreDataStore } from '@wordpress/core-data';

const ContactDeatils = () => {

    const [contactDetails, setContactDetails] = useState( defaultContactDetails );
    const [termsAccepted, setTermsAccespted] = useState(false);
    const [offerComments, setOfferComments] = useState('');
    const [offerFile, setOfferFile] = useState();
    const [loading, setLoading] = useState(false);
    const [success, setSuccsess] = useState('');

    // const { saveEntityRecord } = useDispatch( coreDataStore );

    const handleFormSubmit = async ( event ) => {

        event.preventDefault();
        event.stopPropagation();

        if ( !event.target.checkValidity() ) {

            event.target.classList.add('was-validated');

            return;
        }

        setLoading( true );
        setSuccsess( '' );

        let savedData = [];

        if ( dataFields ) {
            dataFields.forEach( (field) => {

                const savedItem = localStorage.getItem(field.key);

                if ( savedItem ) {
                    savedData.push({
                        key: field.key,
                        val: savedItem,
                        name: field.name
                    });
                }

            });
        }

        let queryParams = {
            contact_info: JSON.stringify(contactDetails ),
            comments: offerComments,
            file: offerFile,
            saved_data: JSON.stringify(savedData )
        }

        await apiFetch( {
            path: 'borghamns/v1/savebegaroffert',
            method: 'POST',
            data: queryParams,
        } ).then( ( res ) => {
            
            if ( res && res.success === true ) {
                setSuccsess( 'true' );
                setContactDetails( defaultContactDetails );
                setOfferComments('');
                setOfferFile(null);

                localStorage.clear();
            } else {
                setSuccsess( 'false' );
            }

        } );

        setLoading( false );

        //const savedRecord = await saveEntityRecord( 'postType', 'begar_offert', {title: 'First offer', status: 'publish', author: 1} );

        
       
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
        <div className="step-wrap h-100 position-relative">
            <h2 className="h3 liten">{ __('Kontaktuppgifter', 'borghamns-general' ) }</h2>

            <form className="row g-3 needs-validation" onSubmit={(event) => handleFormSubmit(event)} noValidate>

                { contactDetails && contactDetails.length > 1 &&
                    <>
                        {contactDetails.map((item, i) => {
                            return(
                                <div className="col-12 col-lg-6" key={i}>
                                    <label htmlFor={item.name.toLowerCase()} className="form-label visually-hidden">{ item.name }</label>
                                    <input type={item.type} className="form-control rounded-0" id={item.name.toLowerCase()} value={item.val} onChange={(e) => handleContactDetailChange( i, e.target.value )} placeholder={ item.name }  required={item.required} />
                                    
                                    {item.required &&
                                        <div className="invalid-feedback">{ __('Du måste fylla i denna information', 'borghamns-general') }</div>
                                    }
                                    
                                </div>
                            );
                        })}
                    </>
                }

                <div className="col-12 mb-4">
                    <label htmlFor="offer_file" className="form-label h5">{ __('Bifoga en fil, exempelvis ritning', 'borghamns-general') }</label>
                    <input className="form-control" type="file" id="offer_file" onChange={(e) => setOfferFile(e.target.files[0])} />
                </div>

                <div className="col-12 mb-4">
                    <label htmlFor="offer_comments" className="form-label h5">{ __('Meddelande/kommentarer', 'borghamns-general') }</label>
                    <textarea className="form-control" id="offer_comments" rows="4" value={offerComments} onChange={(e) => setOfferComments(e.target.value)} placeholder={__('Skriv här...', 'borghamns-general')}></textarea>
                </div>

                <div className="col-12">
                    <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" role="switch" id="minaUppgifter" checked={termsAccepted} onChange={()=> setTermsAccespted(!termsAccepted)} required={true} />
                        <label className="form-check-label" htmlFor="minaUppgifter">
                            { __('Jag accepterar att mina uppgifter tillfälligt sparas,', 'borghamns-general') }
                            <a href="/allmanna-villkor" target="_blank" className="ms-1" rel="noindex, nofollow">{ __('läs mer.', 'borghamns-general') }</a>
                        </label>
                        <div className="invalid-feedback">{ __('Du måste acceptera våra villkor', 'borghamns-general') }</div>
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
                                    <span className="pe-2">{ __('Skicka offertförfrågan', 'borghamns-general') }</span>

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
    );

}

export default ContactDeatils;