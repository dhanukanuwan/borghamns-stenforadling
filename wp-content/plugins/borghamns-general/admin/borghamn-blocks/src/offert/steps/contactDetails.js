import { __ } from '@wordpress/i18n';
import { useState } from '@wordpress/element';

const ContactDeatils = () => {

    const defaultContactDetails = [
        {
            name: __('Namn', 'borghamns-general'),
            val: '',
            type: 'text',
            required: true
        },
        {
            name: __('Företag', 'borghamns-general'),
            val: '',
            type: 'text',
            required: false
        },
        {
            name: __('Adress', 'borghamns-general'),
            val: '',
            type: 'text',
            required: true
        },
        {
            name: __('Postnummer', 'borghamns-general'),
            val: '',
            type: 'text',
            required: true
        },
        {
            name: __('Postort', 'borghamns-general'),
            val: '',
            type: 'text',
            required: true
        },
        {
            name: __('Telefon', 'borghamns-general'),
            val: '',
            type: 'tel',
            required: true
        },
        {
            name: __('Fax', 'borghamns-general'),
            val: '',
            type: 'tel',
            required: false
        },
        {
            name: __('E-post', 'borghamns-general'),
            val: '',
            type: 'email',
            required: true
        },
    ];

    const [contactDetails, setContactDetails] = useState( defaultContactDetails );
    const [termsAccepted, setTermsAccespted] = useState(false);
    const [offerComments, setOfferComments] = useState('');
    const [offerFile, setOfferFile] = useState();

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

                <div className="col-12 mt-4 mb-3 mt-lg-5">
                    <div className="row justify-content-center">
                        <div className="col-12 col-lg-4">
                            <button type="submit" className="btn btn-primary rounded-0">
                                <div className="d-flex">
                                    <span className="pe-2">{ __('Skicka offertförfrågan', 'borghamns-general') }</span>
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
    );

}

export default ContactDeatils;