module.exports = {
    plugins: [
        'removeDimensions',
        'sortAttrs',
        {
            name: 'removeAttrs',
            params: {
                attrs: '(id)'
            }
        },
        // {
        //     name: 'addAttributesToSVGElement',
        //     params: {
        //         attributes: [
        //             { fill: 'currentColor' },
        //             { 'aria-hidden': true }
        //         ]
        //     }
        // }
    ]
}