let smartgrid = require('smart-grid');

let settings = {
    outputStyle: 'scss',
    columns: 12,
    offset: '16px',
    mobileFirst: false,
    container: {
        maxWidth: '1520px',
        fields: '150px'
    },
    breakPoints: {
        lm: {
            width: '1280px',
            fields: '50px'
        },
        md: {
            width: '990px',
            fields: '25px'
        },
        sm: {
            width: '780px',
            fields: '15px'
        },
        xsm: {
            width: '550px',
            fields: '15px'
        },
        xxs: {
            width: '440px',
            fields: '10px'
        }
    }
};

smartgrid('./src/styles', settings);


/*
 * mobileFirst
 *  false -> max-width
 *  true -> min-width
 */