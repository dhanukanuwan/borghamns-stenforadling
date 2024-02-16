import { __ } from '@wordpress/i18n';
import { useState } from '@wordpress/element';
const images = require.context('../images/step-0', true);
const imageList = images.keys().map(image => images(image));

const StepZero = (props) => {

    const [productType, setProductType] = useState('bankskivor');
    const { onProductSelect } = props;

    const handleProductSelect = ( product ) => {
        setProductType(product);
        onProductSelect(product);
    }

    return (
        <div className="step-wrap h-100 position-relative">

            <h2 className="h3 liten">{ __('Välja produkt type', 'borghamns-general' ) }</h2>

            <div className="row mt-5 flex-grow-1">
                <div className="col-12 col-lg-4">
                    <div className={`form-option-wrap pointer p-2 border border-2 rounded-0 ${productType === 'bankskivor' ? 'border-primary' : ''}`} onClick={() => handleProductSelect('bankskivor')}>
                        <div className="d-flex justify-content-end mb-2">
                            <span className={`icon-ion-checkmark-circled ${productType === 'bankskivor' ? 'text-primary' : 'text-secondary'}`}></span>
                        </div>
                        <img src={imageList[1]} className="d-block mx-auto mw-200"  alt="" />
                        <h4 className="liten h6 text-center mb-2 mt-3">{ __('Bänkskivor', 'borghamns-general' ) }</h4>
                    </div>
                </div>
                <div className="col-12 col-lg-4">
                    <div className={`form-option-wrap pointer p-2 border border-2 rounded-0 ${productType === 'fonsterbankar' ? 'border-primary' : ''}`} onClick={() => handleProductSelect('fonsterbankar')}>
                        <div className="d-flex justify-content-end mb-2">
                            <span className={`icon-ion-checkmark-circled ${productType === 'fonsterbankar' ? 'text-primary' : 'text-secondary'}`}></span>
                        </div>
                        <img src={imageList[3]} className="d-block mx-auto mw-200"  alt="" />
                        <h4 className="liten h6 text-center mb-2 mt-3">{ __('Fönsterbänkar', 'borghamns-general' ) }</h4>
                    </div>
                </div>
                <div className="col-12 col-lg-4">
                    <div className={`form-option-wrap pointer p-2 border border-2 rounded-0 ${productType === 'golvplattor' ? 'border-primary' : ''}`} onClick={() => handleProductSelect('golvplattor')}>
                        <div className="d-flex justify-content-end mb-2">
                            <span className={`icon-ion-checkmark-circled ${productType === 'golvplattor' ? 'text-primary' : 'text-secondary'}`}></span>
                        </div>
                        <img src={imageList[0]} className="d-block mx-auto mw-200"  alt="" />
                        <h4 className="liten h6 text-center mb-2 mt-3">{ __('Golvplattor', 'borghamns-general' ) }</h4>
                    </div>
                </div>
            </div>

        </div>
    );

}

export default StepZero;