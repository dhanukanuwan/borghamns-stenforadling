import { __ } from '@wordpress/i18n';
import { useState, useEffect } from '@wordpress/element';

const imagesOne = require.context('../images/step-5/one', true);
const imageListOne = imagesOne.keys().map(image => imagesOne(image));

const imagesTwo = require.context('../images/step-5/two', true);
const imageListTwo = imagesTwo.keys().map(image => imagesTwo(image));

const imagesThree = require.context('../images/step-5/three', true);
const imageListThree = imagesThree.keys().map(image => imagesThree(image));

const StepFive = () => {

    const [productType, setProductType] = useState('bankskivor');
    const [visibleEdges, setVisibleEdges] = useState('');
    const [edgeProcessing, setEdgeProcessing] = useState('');
    const [customEdgeProces, setCustomEdgeProces] = useState('');
    const [quantity, setQuantity] = useState('');

    useEffect(() => {

        const savedProductType = localStorage.getItem('borg_product_type');

        if ( savedProductType ) {
			setProductType( savedProductType );
		}

    }, []);

    const handleVisibleEdges = (value) => {
        setVisibleEdges(value);
        localStorage.setItem('borg_step_5_visible_edgez', value);
    }

    const edgeOptions = [
        {
            slug: 'rak-synlig-kant-fasad',
            value: 'Rak synlig kant, fasad 2-3 mm'
        },
        {
            slug: 'halvrund',
            value: 'Halvrund'
        },
        {
            slug: 'helrund',
            value: 'Helrund'
        },
        {
            slug: 'lagerhuggen',
            value: 'Lågerhuggen'
        },
        {
            slug: 'annan',
            value: 'Annan'
        }
    ];

    const handleEdgeProcessing = ( val ) => {
        setEdgeProcessing( val );
        localStorage.setItem('borg_step_5_edge_processing', val);
    }

    const handleCustomEdgeProcessing = ( val ) => {
        setCustomEdgeProces( val );
        localStorage.setItem('borg_step_5_edge_processing_custom', val);
    }

    const handleQuantityChange = (val) => {
        setQuantity(val);
        localStorage.setItem('borg_step_5_quantity', val);
    }

    return (
        <div className="step-wrap h-100 position-relative">

            {productType && productType === 'bankskivor' &&
                <>
                    <h2 className="h3 liten">{ __('Ange synliga kanter', 'borghamns-general' ) }</h2>
                    <div className="alert alert-primary d-flex align-items-center" role="alert">
                        <div style={{width: '25px'}}>
                            <svg xmlns="http://www.w3.org/2000/svg" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-2" viewBox="0 0 16 16" role="img" aria-label="Warning:">
                                <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                            </svg>
                        </div>
                        <div>
                            { __('Ange hur mycket kant som kommer vara synlig', 'borghamns-general' ) }
                        </div>
                    </div>

                    <div className="row mt-5 flex-grow-1">
                        <div className="col-12 col-lg-4 mb-4">
                            <div className="form-option-wrap pointer p-2 border border-2 border-primary rounded-0">
                                <img src={imageListOne[0]} className="d-block mx-auto mw-200"  />
                                <h4 className="liten h6 text-center mb-2 mt-3">{ __('Synliga kanter (mm)', 'borghamns-general' ) }</h4>
                                <div className="input-group mt-3">
                                    <input type="text" className="form-control rounded-0 shadow-none" value={visibleEdges} onChange={(e) => handleVisibleEdges( e.target.value )} />
                                    <span className="input-group-text bg-dark-text text-white rounded-0 border border-dark-text" >mm</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            }

            {productType && productType === 'fonsterbankar' &&
                <>
                    <h2 className="h3 liten">{ __('Välj kantbearbetning', 'borghamns-general' ) }</h2>
                    <div className="alert alert-primary d-flex align-items-center" role="alert">
                        <div style={{width: '25px'}}>
                            <svg xmlns="http://www.w3.org/2000/svg" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-2" viewBox="0 0 16 16" role="img" aria-label="Warning:">
                                <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                            </svg>
                        </div>
                        <div>
                            { __('Synliga hörd rundas som standard 2-3 mm', 'borghamns-general' ) }
                        </div>
                    </div>

                    <div className="row mt-5 flex-grow-1">

                        { edgeOptions.map( (option, i) => {
                            return (
                                <div className="col-12 col-lg-4 mb-4">
                                    <div className={`form-option-wrap pointer p-2 border border-2 rounded-0 ${edgeProcessing === option.slug ? 'border-primary' : ''}`} onClick={() => handleEdgeProcessing(option.slug)}>
                                        <div className="d-flex justify-content-end mb-2">
                                            <span className={`icon-ion-checkmark-circled ${edgeProcessing === option.slug ? 'text-primary' : 'text-secondary'}`}></span>
                                        </div>

                                        <img src={imageListTwo[i]} className="d-block mx-auto mw-200"  alt="" />
                                        <h4 className="liten h6 text-center mb-2 mt-3">{ __( option.value, 'borghamns-general' ) }</h4>
                                        { option.slug === 'annan' &&
                                            <input type="text" className="form-control rounded-0 shadow-none" placeholder={__('Skriv här...', 'borghamns-general')} value={customEdgeProces} onChange={(e) => handleCustomEdgeProcessing( e.target.value )} />
                                        }
                                    </div>
                                </div>
                            );
                        })}

                    </div>
                </>
            }

            {productType && productType === 'golvplattor' &&
                <>
                    <h2 className="h3 liten">{ __('Ange hur mycket', 'borghamns-general' ) }</h2>
                    <div className="row mt-5 flex-grow-1">
                        <div className="col-12 col-lg-4 mb-4">
                            <div className="form-option-wrap pointer p-2 border border-2 border-primary rounded-0">
                                <img src={imageListThree[0]} className="d-block mx-auto mw-200"  />
                                <h4 className="liten h6 text-center mb-2 mt-3">{ __('Ange mängd', 'borghamns-general' ) }</h4>
                                <div className="input-group mt-3">
                                    <input type="text" className="form-control rounded-0 shadow-none" placeholder={__('Skriv här...', 'borghamns-general')} value={quantity} onChange={(e) => handleQuantityChange( e.target.value )} />
                                    <span className="input-group-text bg-dark-text text-white rounded-0 border border-dark-text" >m<sup>2</sup></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            }

        </div>
    );

}

export default StepFive;