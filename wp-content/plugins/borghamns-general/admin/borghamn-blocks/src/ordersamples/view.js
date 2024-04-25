import { __ } from '@wordpress/i18n';
import { createRoot, useState } from '@wordpress/element';
import orderCheckboxes from './checkboxes';

const OrderSamples = () => {

    return(
        <div className="order-samples-wrap">

            {orderCheckboxes && 
                <>
                    {Object.keys(orderCheckboxes).map( (key, index) => {

                        const checkBox = orderCheckboxes[key];

                        return(
                            <div className="row" key={index}>
                                <div className="col-12">
                                    <h3 className="h4">{checkBox.title}</h3>
                                    <div className="bg-white py-3 px-4 d-flex mb-4 mb-lg-5">

                                        {checkBox.boxes.map( (box, i) => {
                                            return(
                                                <div className="form-check form-check-inline" key={i}>
                                                    <input className="form-check-input mt-1 me-0" type="checkbox" id={`${key}_${box.val}`} value={box.val} checked={box.checked} />
                                                    <label className="form-check-label" htmlFor={`${key}_${box.val}`}>{box.name}</label>
                                                </div>
                                            );
                                        })}
                                        
                                        
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </>
            }

        </div>
    );

}

const container = document.getElementById('order-samples-wrap');

if ( container ) { //check if element exists before rendering
    const root = createRoot(container);
    root.render(<OrderSamples />);
}
