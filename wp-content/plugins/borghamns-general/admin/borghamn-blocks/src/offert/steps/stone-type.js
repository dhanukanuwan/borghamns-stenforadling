import { __ } from '@wordpress/i18n';
import { useState, useEffect } from '@wordpress/element';
const images = require.context('../images/stones', true);
const imageList = images.keys().map(image => images(image));

const StoneType = (props) => {

    const [stone, setStone] = useState('kolmardsmarmor-ox');
    const { onStoneSelect } = props;

    useEffect(() => {
		
		const savedStoneType = localStorage.getItem('borg_stone_type');

		if ( savedStoneType ) {
			setStone( savedStoneType );
		}

	}, []);

    const handleStoneSelect = (type) => {
        setStone(type);
        onStoneSelect(type);

        localStorage.setItem('borg_stone_type', type);
    }

    return (

        <div className="step-wrap h-100 position-relative">

            <h2 className="h3 liten">{ __('Välj stensort', 'borghamns-general' ) }</h2>

            <div className="row mt-5 flex-grow-1">
                <div className="col-12 col-lg-4 mb-4">
                    <div className={`form-option-wrap pointer p-2 border border-2 rounded-0 ${stone === 'kolmardsmarmor-ox' ? 'border-primary' : ''}`} onClick={() => handleStoneSelect('kolmardsmarmor-ox')}>
                        <div className="d-flex justify-content-end mb-2">
                            <span className={`icon-ion-checkmark-circled ${stone === 'kolmardsmarmor-ox' ? 'text-primary' : 'text-secondary'}`}></span>
                        </div>
                        <img src={imageList[0]} className="d-block mx-auto mw-200"  alt="" />
                        <h4 className="liten h6 text-center mb-2 mt-3">{ __('Kolmårdsmarmor OX', 'borghamns-general' ) }</h4>
                    </div>
                </div>
                <div className="col-12 col-lg-4 mb-4">
                    <div className={`form-option-wrap pointer p-2 border border-2 rounded-0 ${stone === 'grabrun-borghamnskalksten' ? 'border-primary' : ''}`} onClick={() => handleStoneSelect('grabrun-borghamnskalksten')}>
                        <div className="d-flex justify-content-end mb-2">
                            <span className={`icon-ion-checkmark-circled ${stone === 'grabrun-borghamnskalksten' ? 'text-primary' : 'text-secondary'}`}></span>
                        </div>
                        <img src={imageList[1]} className="d-block mx-auto mw-200"  alt="" />
                        <h4 className="liten h6 text-center mb-2 mt-3">{ __('Gråbrun Borghamnskalksten', 'borghamns-general' ) }</h4>
                    </div>
                </div>
                <div className="col-12 col-lg-4 mb-4">
                    <div className={`form-option-wrap pointer p-2 border border-2 rounded-0 ${stone === 'ljusgra-borghamnskalksten' ? 'border-primary' : ''}`} onClick={() => handleStoneSelect('ljusgra-borghamnskalksten')}>
                        <div className="d-flex justify-content-end mb-2">
                            <span className={`icon-ion-checkmark-circled ${stone === 'ljusgra-borghamnskalksten' ? 'text-primary' : 'text-secondary'}`}></span>
                        </div>
                        <img src={imageList[2]} className="d-block mx-auto mw-200"  alt="" />
                        <h4 className="liten h6 text-center mb-2 mt-3">{ __('Ljusgrå Borghamnskalksten', 'borghamns-general' ) }</h4>
                    </div>
                </div>
                <div className="col-12 col-lg-4 mb-4">
                    <div className={`form-option-wrap pointer p-2 border border-2 rounded-0 ${stone === 'kolmardsmarmor-oxl' ? 'border-primary' : ''}`} onClick={() => handleStoneSelect('kolmardsmarmor-oxl')}>
                        <div className="d-flex justify-content-end mb-2">
                            <span className={`icon-ion-checkmark-circled ${stone === 'kolmardsmarmor-oxl' ? 'text-primary' : 'text-secondary'}`}></span>
                        </div>
                        <img src={imageList[3]} className="d-block mx-auto mw-200"  alt="" />
                        <h4 className="liten h6 text-center mb-2 mt-3">{ __('Kolmårdsmarmor OXL', 'borghamns-general' ) }</h4>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default StoneType;