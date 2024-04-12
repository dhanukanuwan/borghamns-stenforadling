import { __ } from '@wordpress/i18n';
import { useState, useEffect } from '@wordpress/element';

const imagesOne = require.context('../images/step-10/one', true);
const imageListOne = imagesOne.keys().map(image => imagesOne(image));

const imagesTwo = require.context('../images/step-10/two', true);
const imageListTwo = imagesTwo.keys().map(image => imagesTwo(image));

const StepTen = () => {

    const holeOptions = [
        {
            slug: '10_40mm',
            name: '10-40 mm'
        },
        {
            slug: '41_80mm',
            name: '41-80 mm'
        },
        {
            slug: '81_150mm',
            name: '81-150 mm'
        },
        {
            slug: '151_250mm',
            name: '151-250 mm'
        }
    ];

    const defaultHoles = {
        '10_40mm': 0,
        '41_80mm': 0,
        '81_150mm': 0,
        '151_250mm': 0
    };

    const [punchingHoles, setPunchingHoles] = useState('inga-hal');
    const [edgeStrip, setEdgeStrip] = useState('');
    const [holes, setHoles] = useState( defaultHoles );

    useEffect(() => {

        const savedHo = localStorage.getItem('borg_step_9_punching_holes');
        const savedStripes = localStorage.getItem('borg_step_10_edge_stripes');
        const savedHoles = localStorage.getItem('borg_step_10_holes_number');

        if ( savedHo ) {
            setPunchingHoles( savedHo );
        }

        if ( savedStripes ) {
            setEdgeStrip( savedStripes );
        }

        if ( savedHoles ) {
            const savedHolesJson = JSON.parse( savedHoles );
            setHoles( savedHolesJson );
        }

    }, []);

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
        setEdgeStrip(val);
        localStorage.setItem('borg_step_10_edge_stripes', val);
    }

    const handleHolesChange = ( item, value ) => {

        const newSizes = { ...holes, [item]:[value] }

        localStorage.setItem('borg_step_10_holes_number', JSON.stringify(newSizes ));

        setHoles( newSizes );

    }

    return(
        <div className="step-wrap h-100 position-relative">

            {punchingHoles === 'inga-hal' &&
                <>
                    <h2 className="h3 liten">{ __('Håltagning', 'borghamns-general' ) }</h2>

                    <div className="row mt-5 flex-grow-1">

                    { hoOptions.map( (option, i) => {
                        return (
                            <div className="col-12 col-lg-4 mb-4">
                                <div className={`form-option-wrap pointer p-2 border border-2 rounded-0 ${edgeStrip === option.slug ? 'border-primary' : ''}`} onClick={() => handleStripSelect(option.slug)}>
                                    <div className="d-flex justify-content-end mb-2">
                                        <span className={`icon-ion-checkmark-circled ${edgeStrip === option.slug ? 'text-primary' : 'text-secondary'}`}></span>
                                    </div>

                                    <img src={imageListOne[i]} className="d-block mx-auto mw-200"  alt="" />
                                    <h4 className="liten h6 text-center mb-2 mt-3">{ __( option.name, 'borghamns-general' ) }</h4>
                                </div>
                            </div>
                        );
                    })}

                    </div>
                </>
            }

            {punchingHoles === 'jag-onskar-hal-i-skivan' &&
                <>
                     <h2 className="h3 liten">{ __('Välj antal hål', 'borghamns-general' ) }</h2>
                     <div className="alert alert-primary d-flex align-items-center" role="alert">
                        <div style={{width: '25px'}}>
                            <svg xmlns="http://www.w3.org/2000/svg" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-2" viewBox="0 0 16 16" role="img" aria-label="Warning:">
                                <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                            </svg>
                        </div>
                        <div>
                            { __('Ange antal av varje håltyp', 'borghamns-general' ) }
                        </div>
                    </div>
                    <div className="row mt-5 flex-grow-1">

                        { holeOptions.map( ( option, i ) => {
                            return (

                                <div className="col-12 col-lg-4 mb-4" key={i}>
                                    <div className="form-option-wrap pointer p-2 border border-2 border-primary rounded-0">
                                        <img src={imageListTwo[0]} className="d-block mx-auto mw-200"  />
                                        <div className="input-group mt-3">
                                            <input type="number" min={0} max={10} className="form-control rounded-0 shadow-none" placeholder={ option.name } value={holes[option.slug]} onChange={(e) => handleHolesChange( option.slug, e.target.value )} />
                                            <span className="input-group-text bg-dark-text text-white rounded-0 border border-dark-text" >st</span>
                                        </div>
                                    </div>
                                </div>

                            );
                        } ) }

                    </div>
                </>
            }

             
        </div>
    );

}

export default StepTen;