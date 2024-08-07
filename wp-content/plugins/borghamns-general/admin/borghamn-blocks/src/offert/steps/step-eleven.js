import { __ } from '@wordpress/i18n';
import { useState, useEffect } from '@wordpress/element';

const imagesOne = require.context('../images/step-11/one', true);
const imageListOne = imagesOne.keys().map(image => imagesOne(image));

const imagesTwo = require.context('../images/step-10/one', true);
const imageListTwo = imagesTwo.keys().map(image => imagesTwo(image));

const StepEleven = () => {

    const defaultDimentions = {
        hojd: 0,
        tjocklek: 15,
        lopmeter_bakkantslist: 0
    };

    const [punchingHoles, setPunchingHoles] = useState('inga-hal');
    const [edgeStrip, setEdgeStrip] = useState('vill-ha-bakkantslist-stankskydd');
    const [dimentions, setDimentions] = useState( defaultDimentions );
    const [edgeStripRear, setEdgeStripRear] = useState('');

    useEffect(() => {

        const savedHo = localStorage.getItem('borg_step_9_punching_holes');
        const savedStripes = localStorage.getItem('borg_step_10_edge_stripes');
        const savedRearStripes = localStorage.getItem('borg_step_11_bakkantslist_stankskydd');
        const savedDimentions = localStorage.getItem('borg_step_11_matt_bakkantslist_stankskydd');

        if ( savedHo ) {
            setPunchingHoles( savedHo );
        }

        if ( savedStripes ) {
            setEdgeStrip( savedStripes );
        }

        if ( savedDimentions ) {
            const savedDimentionsJson = JSON.parse( savedDimentions );
            setDimentions( savedDimentionsJson );
        }

        if ( savedRearStripes ) {
            setEdgeStripRear( savedRearStripes );
        }

    }, []);

    const handleDimentionsUpdate = ( item, value ) => {

        const newSizes = { ...dimentions, [item]:[value] }

        localStorage.setItem('borg_step_11_matt_bakkantslist_stankskydd', JSON.stringify(newSizes ));

        setDimentions( newSizes );

    }

    const hoOptions = [
        {
            slug: 'vill-ha-bakkantslist-stankskydd',
            name: 'Ja, jag vill ha bakkantslist/stänkskydd'
        },
        {
            slug: 'ingen-bakkantslist-stankskydd',
            name: 'Nej, ingen bakkantslist/stänkskydd'
        }
    ];

    const handleStripSelect = (val) => {
        setEdgeStripRear(val);
        localStorage.setItem('borg_step_11_bakkantslist_stankskydd', val);
    }

    return(
        <div className="step-wrap h-100 position-relative">

            { punchingHoles === 'inga-hal' && edgeStrip === 'vill-ha-bakkantslist-stankskydd' &&
                <>
                    <h2 className="h3 liten">{ __('Ange mått för bakkantslist/stänkskydd', 'borghamns-general' ) }</h2>
                    <div className="row mt-5 flex-grow-1">
                        <div className="col-12 col-lg-4 mb-4">
                            <div className="form-option-wrap pointer p-2 border border-2 border-primary rounded-0">
                                <img src={imageListOne[0]} className="d-block mx-auto mw-200"  />
                                <h4 className="liten h6 text-center mb-2 mt-3">{ __( 'Höjd', 'borghamns-general' ) }</h4>
                                <div className="input-group mt-3">
                                    <input type="number" min={0} className="form-control rounded-0 shadow-none" value={dimentions['hojd']} onChange={(e) => handleDimentionsUpdate( 'hojd', e.target.value )} />
                                    <span className="input-group-text bg-dark-text text-white rounded-0 border border-dark-text" >mm</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-4 mb-4">
                            <div className="form-option-wrap pointer p-2 border border-2 border-primary rounded-0">
                                <img src={imageListOne[1]} className="d-block mx-auto mw-200"  />
                                <h4 className="liten h6 text-center mb-2 mt-3">{ __( 'Tjocklek', 'borghamns-general' ) }</h4>
                                <div className="input-group mt-3">
                                    <select className="form-select rounded-0 shadow-none" value={dimentions['tjocklek']} onChange={(e) => handleDimentionsUpdate( 'tjocklek', e.target.value )}>
                                        <option value={15}>{ __('15', 'borghamns-general' ) }</option>
                                        <option value={20}>{ __('20', 'borghamns-general' ) }</option>
                                    </select>
                                    <span className="input-group-text bg-dark-text text-white rounded-0 border border-dark-text" >mm</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-4 mb-4">
                            <div className="form-option-wrap pointer p-2 border border-2 border-primary rounded-0">
                                <img src={imageListOne[2]} className="d-block mx-auto mw-200"  />
                                <h4 className="liten h6 text-center mb-2 mt-3">{ __( 'Löpmeter bakkantslist (mm)', 'borghamns-general' ) }</h4>
                                <div className="input-group mt-3">
                                    <input type="number" min={0} className="form-control rounded-0 shadow-none" value={dimentions['lopmeter_bakkantslist']} onChange={(e) => handleDimentionsUpdate( 'lopmeter_bakkantslist', e.target.value )} />
                                    <span className="input-group-text bg-dark-text text-white rounded-0 border border-dark-text" >mm</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            }

            { punchingHoles === 'jag-onskar-hal-i-skivan' &&
                <>
                    <h2 className="h3 liten">{ __('Bakkantslist/stänkskydd', 'borghamns-general' ) }</h2>

                    <div className="row mt-5 flex-grow-1">

                    { hoOptions.map( (option, i) => {
                        return (
                            <div className="col-12 col-lg-4 mb-4">
                                <div className={`form-option-wrap pointer p-2 border border-2 rounded-0 ${edgeStripRear === option.slug ? 'border-primary' : ''}`} onClick={() => handleStripSelect(option.slug)}>
                                    <div className="d-flex justify-content-end mb-2">
                                        <span className={`icon-ion-checkmark-circled ${edgeStripRear === option.slug ? 'text-primary' : 'text-secondary'}`}></span>
                                    </div>

                                    <img src={imageListTwo[i]} className="d-block mx-auto mw-200"  alt="" />
                                    <h4 className="liten h6 text-center mb-2 mt-3">{ __( option.name, 'borghamns-general' ) }</h4>
                                </div>
                            </div>
                        );
                    })}

                    </div>
                </>
            }
             
        </div>
    );

}

export default StepEleven;