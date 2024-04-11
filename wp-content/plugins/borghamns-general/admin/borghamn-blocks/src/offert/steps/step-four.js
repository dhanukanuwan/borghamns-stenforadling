import { __ } from '@wordpress/i18n';
import { useState, useEffect } from '@wordpress/element';
const imagesOne = require.context('../images/step-4/one', true);
const imageListOne = imagesOne.keys().map(image => imagesOne(image));

const imagesTwo = require.context('../images/step-4/two', true);
const imageListTwo = imagesTwo.keys().map(image => imagesTwo(image));

const imagesThree = require.context('../images/step-4/three', true);
const imageListThree = imagesThree.keys().map(image => imagesThree(image));

const imagesFour = require.context('../images/step-4/two', true);
const imageListFour = imagesFour.keys().map(image => imagesFour(image));

const StepFour = () => {

    const [surfaceTreatment, setSurfaceTreatment] = useState('');
    const [customTreatment, setCustomTreatment] = useState('');
    const [treatmentType, setTreatmentType] = useState('');
    const [stoneType, setStoneType] = useState('kolmardsmarmor-ox');
    const [productType, setProductType] = useState('bankskivor');
    const [placering, setPlacering] = useState('');
    const [thickness, setThickness] = useState('');

    let defaultInmuradPlacering = [
        {
            slug: 'langd_inmurad_sida',
            name: 'Längd inmurad sida',
        },
        {
            slug: 'langd_utsida',
            name: 'Längd utsida',
        },
        {
            slug: 'djup_uttag',
            name: 'Djup uttag',
        },
        {
            slug: 'djup_overhang',
            name: 'Djup överhäng',
        },
        {
            slug: 'tjocklek',
            name: 'Tjocklek',
        },
    ];

    let defaultKonsolPlacering = [
        {
            slug: 'langd',
            name: 'Längd',
            value: ''
        },
        {
            slug: 'bredd',
            name: 'Bredd',
            value: ''
        },
        {
            slug: 'tjocklek',
            name: 'Tjocklek',
            value: ''
        },
    ];

    let defaultSizes = {
        langd_inmurad_sida: '',
        langd_utsida: '',
        djup_uttag: '',
        djup_overhang: '',
        tjocklek: '',
        langd: '',
        bredd: '',
        tjocklek: ''
    }

    const [placeringSizes, setPlaceringSizes] = useState( defaultInmuradPlacering );
    const [savedPlaceringSizes, setSavedPlaceringSizes] = useState( defaultSizes );

    useEffect(() => {

        const savedStoneType = localStorage.getItem('borg_stone_type');
        const savedPlacing = localStorage.getItem('borg_placing');
        const savedProductType = localStorage.getItem('borg_product_type');

        if ( savedStoneType ) {
            setStoneType( savedStoneType );
        }

		if ( savedProductType ) {
			setProductType( savedProductType );
		}

        if ( savedPlacing ) {
            setPlacering( savedPlacing );

            if ( savedPlacing === 'pa-konsol' ) {
                setPlaceringSizes( defaultKonsolPlacering );
            }
        }

    }, []);

    const handleTreatmentTypeChange = ( type, value ) => {

        setTreatmentType( type );

        if ( type === 'input' ) {
            setCustomTreatment(value);
            setSurfaceTreatment(value);
            localStorage.setItem('borg_surface_treatment', value);
        } else {
            setSurfaceTreatment(value);
            localStorage.setItem('borg_surface_treatment', value);
        }

    }

    const handlePlaceringSizeChange = ( item, value ) => {

        const newSizes = { ...savedPlaceringSizes, [item]:[value] }

        localStorage.setItem('borg_placering_sizes', JSON.stringify(newSizes ));

        setSavedPlaceringSizes( newSizes );

    }

    const handleThicknessChange = ( value ) => {

        setThickness(value);

        localStorage.setItem('borg_step_4_thickness', value);
    }

    let placeringImages = imageListTwo;

    if ( placering === 'pa-konsol' ) {
        placeringImages = imageListThree;
    }

    return (
        <div className="step-wrap h-100 position-relative">

             {productType && productType === 'bankskivor' &&
                <>
                    <h2 className="h3 liten">{ __('Välj ytbearbetning', 'borghamns-general' ) }</h2>
                    <div className="row mt-5 flex-grow-1">
                        <div className="col-12 col-lg-4">
                            <div className={`form-option-wrap pointer p-2 border border-2 rounded-0 ${surfaceTreatment === 'finslipad' ? 'border-primary' : ''}`} onClick={() => handleTreatmentTypeChange('finslipad', 'finslipad')}>
                                <div className="d-flex justify-content-end mb-2">
                                    <span className={`icon-ion-checkmark-circled ${surfaceTreatment === 'finslipad' ? 'text-primary' : 'text-secondary'}`}></span>
                                </div>

                                {( stoneType === 'kolmardsmarmor-ox' || stoneType === 'kolmardsmarmor-oxl' ) &&
                                    <img src={imageListOne[0]} className="d-block mx-auto mw-200"  alt="" />
                                }

                                {( stoneType === 'grabrun-borghamnskalksten' || stoneType === 'ljusgra-borghamnskalksten' ) &&
                                    <img src={imageListOne[2]} className="d-block mx-auto mw-200"  alt="" />
                                }
                                <h4 className="liten h6 text-center mb-2 mt-3">{ __('Finslipad', 'borghamns-general' ) }</h4>
                            </div>
                        </div>
                        <div className="col-12 col-lg-4">
                            <div className={`form-option-wrap pointer p-2 border border-2 rounded-0 ${treatmentType === 'custom' ? 'border-primary' : ''}`} onClick={() => setTreatmentType('custom')}>
                                {( stoneType === 'kolmardsmarmor-ox' || stoneType === 'kolmardsmarmor-oxl' ) &&
                                    <img src={imageListOne[1]} className="d-block mx-auto mw-200"  alt="" />
                                }

                                {( stoneType === 'grabrun-borghamnskalksten' || stoneType === 'ljusgra-borghamnskalksten' ) &&
                                    <img src={imageListOne[3]} className="d-block mx-auto mw-200"  alt="" />
                                }
                                <div className="input-group mt-3">
                                    <input type="text" className="form-control rounded-0 shadow-none" placeholder={ __('Annan', 'borghamns-general' ) } value={customTreatment} onChange={(e) => handleTreatmentTypeChange( 'input', e.target.value )} />
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            }

            {productType && productType === 'fonsterbankar' &&
                <>
                    <h2 className="h3 liten">{ __('Ange storlek', 'borghamns-general' ) }</h2>
                    <div className="row mt-5 flex-grow-1">

                    { placeringSizes && placeringSizes.length > 0 &&  placeringSizes.map( ( option, i ) => {
                            return (

                                <div className="col-12 col-lg-4 mb-4" key={i}>
                                    <div className="form-option-wrap pointer p-2 border border-2 border-primary rounded-0">
                                        <img src={placeringImages[i]} className="d-block mx-auto mw-200"  />
                                        <div className="input-group mt-3">
                                            <input type="text" className="form-control rounded-0 shadow-none" placeholder={ option.name } value={savedPlaceringSizes[option.slug]} onChange={(e) => handlePlaceringSizeChange( option.slug, e.target.value )} />
                                            <span className="input-group-text bg-dark-text text-white rounded-0 border border-dark-text" >mm</span>
                                        </div>
                                    </div>
                                </div>

                            );
                        } ) }

                    </div>
                </>
            }

            {productType && productType === 'golvplattor' &&
                <>
                    <h2 className="h3 liten">{ __('Välj tjocklek', 'borghamns-general' ) }</h2>
                    <div className="row mt-5 flex-grow-1">
                        <div className="col-12 col-lg-4 mb-4">
                            <div className="form-option-wrap pointer p-2 border border-2 border-primary rounded-0">
                                <img src={imageListFour[0]} className="d-block mx-auto mw-200"  />
                                <h4 className="liten h6 text-center mb-2 mt-3">{ __('Tjocklek', 'borghamns-general' ) }</h4>
                                <select className="form-select" value={thickness} onChange={(e) => handleThicknessChange( e.target.value )}>
                                    <option value="">{ __('(Välj en tjocklek)', 'borghamns-general' ) }</option>
                                    <option value="10mm">{ __('10mm', 'borghamns-general' ) }</option>
                                    <option value="20mm">{ __('20mm', 'borghamns-general' ) }</option>
                                    <option value="25-35mm">{ __('25-35mm', 'borghamns-general' ) }</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </>
            }

        </div>
    )

}

export default StepFour;