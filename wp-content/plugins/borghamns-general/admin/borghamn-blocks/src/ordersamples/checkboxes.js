import { __ } from '@wordpress/i18n';

const defaultOrderCheckboxes = {
    'grabrun': {
        'title': __( 'Borghamnskalksten, gråbrun', 'ordersamples' ),
        'annan_ytbehandling': '',
        'boxes': [
            {
                name: __( 'Borstad', 'ordersamples' ),
                val: 'borstad',
                checked: false,
            },
            {
                name: __( 'Diamantfräst', 'ordersamples' ),
                val: 'diamantfrast',
                checked: false,
            },
            {
                name: __( 'Finslipad', 'ordersamples' ),
                val: 'finslipad',
                checked: false,
            },
            {
                name: __( 'Hyvlad', 'ordersamples' ),
                val: 'hyvlad',
                checked: false,
            },
            {
                name: __( 'Normalslipad', 'ordersamples' ),
                val: 'normalslipad',
                checked: false,
            },
            {
                name: __( 'Polerad', 'ordersamples' ),
                val: 'polerad',
                checked: false,
            },
            {
                name: __( 'Sandsågad', 'ordersamples' ),
                val: 'sandsagad',
                checked: false,
            },
        ]
    },
    'ljusgra': {
        'title': __( 'Borghamnskalksten, ljusgrå', 'ordersamples' ),
        'annan_ytbehandling': '',
        'boxes': [
            {
                name: __( 'Borstad', 'ordersamples' ),
                val: 'borstad',
                checked: false,
            },
            {
                name: __( 'Diamantfräst', 'ordersamples' ),
                val: 'diamantfrast',
                checked: false,
            },
            {
                name: __( 'Finslipad', 'ordersamples' ),
                val: 'finslipad',
                checked: false,
            },
            {
                name: __( 'Hyvlad', 'ordersamples' ),
                val: 'hyvlad',
                checked: false,
            },
            {
                name: __( 'Normalslipad', 'ordersamples' ),
                val: 'normalslipad',
                checked: false,
            },
            {
                name: __( 'Polerad', 'ordersamples' ),
                val: 'polerad',
                checked: false,
            },
            {
                name: __( 'Sandsågad', 'ordersamples' ),
                val: 'sandsagad',
                checked: false,
            },
        ]
    },
    'ox': {
        'title': __( 'Kolmårdsmarmor OX', 'ordersamples' ),
        'annan_ytbehandling': '',
        'boxes': [
            {
                name: __( 'Borstad', 'ordersamples' ),
                val: 'borstad',
                checked: false,
            },
            {
                name: __( 'Diamantfräst', 'ordersamples' ),
                val: 'diamantfrast',
                checked: false,
            },
            {
                name: __( 'Polerad', 'ordersamples' ),
                val: 'polerad',
                checked: false,
            },
            {
                name: __( 'Sandsågad', 'ordersamples' ),
                val: 'sandsagad',
                checked: false,
            },
            {
                name: __( 'Slipad', 'ordersamples' ),
                val: 'slipad',
                checked: false,
            },
        ]
    },
    'oxl': {
        'title':__(  'Kolmårdsmarmor OXL', 'ordersamples' ),
        'annan_ytbehandling': '',
        'boxes': [
            {
                name: __( 'Borstad', 'ordersamples' ),
                val: 'borstad',
                checked: false,
            },
            {
                name: __( 'Diamantfräst', 'ordersamples' ),
                val: 'diamantfrast',
                checked: false,
            },
            {
                name: __( 'Polerad', 'ordersamples' ),
                val: 'polerad',
                checked: false,
            },
            {
                name: __( 'Sandsågad', 'ordersamples' ),
                val: 'sandsagad',
                checked: false,
            },
            {
                name: __( 'Slipad', 'ordersamples' ),
                val: 'slipad',
                checked: false,
            },
        ]
    }
};

const defaultContactDetails = [
    {
        name: __('Namn', 'ordersamples'),
        val: '',
        type: 'text',
        key: 'borg_sender_name',
        required: true
    },
    {
        name: __('Företag', 'ordersamples'),
        val: '',
        type: 'text',
        key: 'borg_sender_company',
        required: false
    },
    {
        name: __('Adress', 'ordersamples'),
        val: '',
        type: 'text',
        key: 'borg_sender_address',
        required: true
    },
    {
        name: __('Postnummer', 'ordersamples'),
        val: '',
        type: 'text',
        key: 'borg_sender_post_code',
        required: true
    },
    {
        name: __('Postort', 'ordersamples'),
        val: '',
        type: 'text',
        key: 'borg_sender_city',
        required: true
    },
    {
        name: __('Telefon', 'ordersamples'),
        val: '',
        type: 'tel',
        key: 'borg_sender_telephone',
        required: true
    },
    {
        name: __('Fax', 'ordersamples'),
        val: '',
        type: 'tel',
        key: 'borg_sender_fax',
        required: false
    },
    {
        name: __('E-post', 'ordersamples'),
        val: '',
        type: 'email',
        key: 'borg_sender_email',
        required: true
    },
];

export {defaultOrderCheckboxes, defaultContactDetails};