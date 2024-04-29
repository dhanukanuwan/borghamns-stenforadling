import { __ } from '@wordpress/i18n';
import { createRoot, useState } from '@wordpress/element';
import defaultOrderCheckboxes from './checkboxes';

const OrderSamples = () => {

    const [ orderCheckBoxes, setOrderCheckBoxes ] = useState( defaultOrderCheckboxes );

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
                                    <input type="text" className="form-control" id={`${key}_annan_ytbehandling`} value={checkBox.annan_ytbehandling} placeholder={ __('Skriv här...', 'ordersamples')} onChange={(e) => handleYtbehandling(key, e.target.value)} />
                                </div>
                                
                                
                            </div>
                        </div>
                    </div>
                );
            })}

        </div>
    );

}

const container = document.getElementById('order-samples-wrap');

if ( container ) { //check if element exists before rendering
    const root = createRoot(container);
    root.render(<OrderSamples />);
}
