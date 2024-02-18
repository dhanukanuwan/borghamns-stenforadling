import { __ } from '@wordpress/i18n';
import { useState, useEffect } from '@wordpress/element';
const imagesOne = require.context('../images/step-3/one', true);
const imageListOne = imagesOne.keys().map(image => imagesOne(image));

const imagesTwo = require.context('../images/step-3/two', true);
const imageListTwo = imagesTwo.keys().map(image => imagesTwo(image));

const imagesThree = require.context('../images/step-3/three', true);
const imageListThree = imagesThree.keys().map(image => imagesThree(image));

const imagesFour = require.context('../images/step-3/four', true);
const imageListFour = imagesFour.keys().map(image => imagesFour(image));

const imagesFive = require.context('../images/step-3/five', true);
const imageListFive = imagesFive.keys().map(image => imagesFive(image));

const StepThree = ( props ) => {

    const defaultMeasurements = {
        alangd: '',
        abredd: '',
        tjocklek: '',
        blangd: '',
        bbredd: '',
        clangd: '',
        cbredd: ''
    }

    const defaultSizes = {
        fallande_langder: '',
        rektangulara_plattor: '',
        fyrkantsplattor: ''

    }

    const [measurements, setMeasurements] = useState(defaultMeasurements);
    const [placing, setPlacing] = useState('');
    const [sizes, setSizes] = useState( defaultSizes );

    useEffect(() => {

        const savedMeasurements = localStorage.getItem('borg_measurements');
        const savedPlacing = localStorage.getItem('borg_placing');
        const savedsizes = localStorage.getItem('borg_sizes');

        if ( savedMeasurements ) {
            setMeasurements( JSON.parse(savedMeasurements) )
        }

        if ( savedPlacing ) {
            setPlacing( savedPlacing );
        }

        if ( savedsizes ) {
            setSizes( JSON.parse(savedsizes) );
        }

    }, []);

    const handleMeasurementChange = ( item, value ) => {

        const newMeasurements = { ...measurements, [item]:[value] }

        localStorage.setItem('borg_measurements', JSON.stringify(newMeasurements ));

        setMeasurements( newMeasurements );

    }

    const handlePlacingChange = (val) => {
        setPlacing(val);
        localStorage.setItem('borg_placing', val);
    }

    const handleSizeChange = ( item, value ) => {

        const newSizes = { ...sizes, [item]:[value]}

        localStorage.setItem('borg_sizes', JSON.stringify(newSizes ));
        setSizes(newSizes);

    }

    let imageList = imageListOne;

    if ( props?.formType === 'u-kok' ) {
        imageList = imageListTwo;
    } else if ( props?.formType === 'rakt-kok' ) {
        imageList = imageListThree;
    }

    const measurementOptions = [
        {
            name: __('A - Längd', 'borghamns-general' ),
            slug: 'alangd',
            forms: ['l-kok', 'u-kok', 'rakt-kok']
        },
        {
            name: __('A - Bredd', 'borghamns-general' ),
            slug: 'abredd',
            forms: ['l-kok', 'u-kok', 'rakt-kok']
        },
        {
            name: __('Tjocklek', 'borghamns-general' ),
            slug: 'tjocklek',
            forms: ['l-kok', 'u-kok', 'rakt-kok']
        },
        {
            name: __('B - Längd', 'borghamns-general' ),
            slug: 'blangd',
            forms: ['l-kok', 'u-kok']
        },
        {
            name: __('B - Bredd', 'borghamns-general' ),
            slug: 'bbredd',
            forms: ['l-kok', 'u-kok']
        },
        {
            name: __('C - Längd', 'borghamns-general' ),
            slug: 'clangd',
            forms: ['u-kok']
        },
        {
            name: __('C - Bredd', 'borghamns-general' ),
            slug: 'cbredd',
            forms: ['u-kok']
        }
    ];

    return (
        <div className="step-wrap h-100 position-relative">

            {props?.selectedProduct && props?.selectedProduct === 'bankskivor' &&
                <>
                    <h2 className="h3 liten">{ __('Ange mått', 'borghamns-general' ) }</h2>

                    <div className="row mt-5 flex-grow-1">

                        { measurementOptions.map( ( option, i ) => {
                            return (

                                <>
                                    { option.forms.includes( props?.formType ) && 
                                        <div className="col-12 col-lg-4 mb-4" key={i}>
                                            <div className="form-option-wrap pointer p-2 border border-2 border-primary rounded-0">
                                                <img src={imageList[i]} className="d-block mx-auto mw-200"  />
                                                <div className="input-group mt-3">
                                                    <input type="text" className="form-control rounded-0 shadow-none" placeholder={ option.name } value={measurements[option.slug]} onChange={(e) => handleMeasurementChange( option.slug, e.target.value )} />
                                                    <span className="input-group-text bg-dark-text text-white rounded-0 border border-dark-text" >mm</span>
                                                </div>
                                            </div>
                                        </div>
                                    }
                                </>

                            );
                        } ) }

                    </div>
                </>
            }

            {props?.selectedProduct && props?.selectedProduct === 'fonsterbankar' &&
                <>
                    <h2 className="h3 liten">{ __('Placering', 'borghamns-general' ) }</h2>

                    <div className="row mt-5 flex-grow-1">

                        <div className="col-12 col-lg-4">
                            <div className={`form-option-wrap pointer p-2 border border-2 rounded-0 ${placing === 'inmurad' ? 'border-primary' : ''}`} onClick={() => handlePlacingChange('inmurad')}>
                                <div className="d-flex justify-content-end mb-2">
                                    <span className={`icon-ion-checkmark-circled ${placing === 'inmurad' ? 'text-primary' : 'text-secondary'}`}></span>
                                </div>
                                <img src={imageListFour[0]} className="d-block mx-auto mw-200"  alt="" />
                                
                                <h4 className="liten h6 text-center mb-2 mt-3">{ __('Inmurad', 'borghamns-general' ) }</h4>
                            </div>
                        </div>
                        <div className="col-12 col-lg-4">
                            <div className={`form-option-wrap pointer p-2 border border-2 rounded-0 ${placing === 'pa-konsol' ? 'border-primary' : ''}`} onClick={() => handlePlacingChange('pa-konsol')}>
                                <div className="d-flex justify-content-end mb-2">
                                    <span className={`icon-ion-checkmark-circled ${placing === 'pa-konsol' ? 'text-primary' : 'text-secondary'}`}></span>
                                </div>
                                <img src={imageListFour[1]} className="d-block mx-auto mw-200"  alt="" />
                                
                                <h4 className="liten h6 text-center mb-2 mt-3">{ __('På konsol', 'borghamns-general' ) }</h4>
                            </div>
                        </div>

                    </div>
                </>
            }

            {props?.selectedProduct && props?.selectedProduct === 'golvplattor' &&
                <>
                    <h2 className="h3 liten">{ __('Välj storlek', 'borghamns-general' ) }</h2>

                    <div className="row mt-5 flex-grow-1">
                        <div className="col-12 col-lg-4 mb-4">
                            <div className="form-option-wrap pointer p-2 border border-2 border-primary rounded-0">
                                <img src={imageListFive[0]} className="d-block mx-auto mw-200"  />
                                <h4 className="liten h6 text-center mb-2 mt-3">{ __('Fallande längder', 'borghamns-general' ) }</h4>
                                <select className="form-select h-40" value={sizes.fallande_langder} onChange={(e) => handleSizeChange( 'fallande_langder', e.target.value )}>
                                    <option value="">{ __('(Välj en bredd)', 'borghamns-general' ) }</option>
                                    <option value="200mm">{ __('200mm breda', 'borghamns-general' ) }</option>
                                    <option value="300mm">{ __('300mm breda', 'borghamns-general' ) }</option>
                                    <option value="400mm">{ __('400mm breda', 'borghamns-general' ) }</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-12 col-lg-4 mb-4">
                            <div className="form-option-wrap pointer p-2 border border-2 border-primary rounded-0">
                                <img src={imageListFive[1]} className="d-block mx-auto mw-200"  />
                                <h4 className="liten h6 text-center mb-2 mt-3">{ __('Rektangulära plattor', 'borghamns-general' ) }</h4>
                                <select className="form-select h-40" value={sizes.rektangulara_plattor} onChange={(e) => handleSizeChange( 'rektangulara_plattor', e.target.value )}>
                                    <option value="">{ __('(Välj en storlek)', 'borghamns-general' ) }</option>
                                    <option value="400x200mm">{ __('400x200mm', 'borghamns-general' ) }</option>
                                    <option value="600x200mm">{ __('600x200mm', 'borghamns-general' ) }</option>
                                    <option value="600x300mm">{ __('600x300mm', 'borghamns-general' ) }</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-12 col-lg-4 mb-4">
                            <div className="form-option-wrap pointer p-2 border border-2 border-primary rounded-0">
                                <img src={imageListFive[2]} className="d-block mx-auto mw-200"  />
                                <h4 className="liten h6 text-center mb-2 mt-3">{ __('Fyrkantsplattor', 'borghamns-general' ) }</h4>
                                <select className="form-select h-40" value={sizes.fyrkantsplattor} onChange={(e) => handleSizeChange( 'fyrkantsplattor', e.target.value )}>
                                    <option value="">{ __('(Välj en storlek)', 'borghamns-general' ) }</option>
                                    <option value="100x100mm">{ __('100x100mm', 'borghamns-general' ) }</option>
                                    <option value="150x150mm">{ __('150x150mm', 'borghamns-general' ) }</option>
                                    <option value="200x200mm">{ __('200x200mm', 'borghamns-general' ) }</option>
                                    <option value="300x300mm">{ __('300x300mm', 'borghamns-general' ) }</option>
                                    <option value="400x400mm">{ __('400x400mm', 'borghamns-general' ) }</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </>
            }

        </div>
    );

}

export default StepThree;