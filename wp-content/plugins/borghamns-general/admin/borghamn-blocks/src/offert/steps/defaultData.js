import { __ } from '@wordpress/i18n';

const defaultContactDetails = [
    {
        name: __('Namn', 'borghamns-general'),
        val: '',
        type: 'text',
        key: 'borg_sender_name',
        required: true
    },
    {
        name: __('Företag', 'borghamns-general'),
        val: '',
        type: 'text',
        key: 'borg_sender_company',
        required: false
    },
    {
        name: __('Adress', 'borghamns-general'),
        val: '',
        type: 'text',
        key: 'borg_sender_address',
        required: true
    },
    {
        name: __('Postnummer', 'borghamns-general'),
        val: '',
        type: 'text',
        key: 'borg_sender_post_code',
        required: true
    },
    {
        name: __('Postort', 'borghamns-general'),
        val: '',
        type: 'text',
        key: 'borg_sender_city',
        required: true
    },
    {
        name: __('Telefon', 'borghamns-general'),
        val: '',
        type: 'tel',
        key: 'borg_sender_telephone',
        required: true
    },
    {
        name: __('Fax', 'borghamns-general'),
        val: '',
        type: 'tel',
        key: 'borg_sender_fax',
        required: false
    },
    {
        name: __('E-post', 'borghamns-general'),
        val: '',
        type: 'email',
        key: 'borg_sender_email',
        required: true
    },
];

const dataFields = [
    {
        key: 'borg_product_type',
        name: 'Produkt type'
    },
    {
        key: 'borg_stone_type',
        name: 'Stensort'
    },
    {
        key: 'borg_form_type',
        name: 'Form'
    },
    {
        key: 'borg_treatment_type',
        name: 'Step 2 - Ytbearbetning'
    },
    {
        key: 'borg_measurements',
        name: 'Step 3 - Mått'
    },
    {
        key: 'borg_placing',
        name: 'Step 3 - Placering'
    },
    {
        key: 'borg_sizes',
        name: 'Step 3 - Storlek'
    },
    {
        key: 'borg_surface_treatment',
        name: 'Step 4 - Ytbearbetning'
    },
    {
        key: 'borg_surface_treatment_custom',
        name: 'Step 4 - Annan Ytbearbetning'
    },
    {
        key: 'borg_placering_sizes',
        name: 'Step 4 - Storlek'
    },
    {
        key: 'borg_step_4_thickness',
        name: 'Step 4 - Tjocklek'
    },
    {
        key: 'borg_step_5_visible_edgez',
        name: 'Step 5 - Synliga kanter'
    },
    {
        key: 'borg_step_5_edge_processing',
        name: 'Step 5 - Kantbearbetning'
    },
    {
        key: 'borg_step_5_edge_processing_custom',
        name: 'Step 5 - Annan Kantbearbetning'
    },
    {
        key: 'borg_step_5_quantity',
        name: 'Step 5 - Hur mycket'
    },
    {
        key: 'borg_step_6_edge_processing',
        name: 'Step 6 - Kantbearbetning'
    },
    {
        key: 'borg_step_6_edge_processing_custom',
        name: 'Step 6 - Annan Kantbearbetning'
    },
    {
        key: 'borg_step_6_fonsterbank_quantity',
        name: 'Step 6 - Hur många av denna fönsterbänk'
    },
    {
        key: 'borg_step_7_ho_type',
        name: 'Step 7 - Ho-typ'
    },
    {
        key: 'borg_step_8_hall_type',
        name: 'Step 8 - Häll-typ'
    },
    {
        key: 'borg_step_9_punching_holes',
        name: 'Step 9 - Håltagning'
    },
    {
        key: 'borg_step_10_edge_stripes',
        name: 'Step 10 - Håltagning'
    },
    {
        key: 'borg_step_10_holes_number',
        name: 'Step 10 - Antal hål'
    },
    {
        key: 'borg_step_11_bakkantslist_stankskydd',
        name: 'Step 11 - Bakkantslist/stänkskydd'
    },
    {
        key: 'borg_step_11_matt_bakkantslist_stankskydd',
        name: 'Step 11 - Mått för bakkantslist/stänkskydd'
    },
    {
        key: 'borg_step_12_matt_bakkantslist_stankskydd',
        name: 'Step 12 - mått för bakkantslist/stänkskydd'
    },
];

export  {defaultContactDetails, dataFields};