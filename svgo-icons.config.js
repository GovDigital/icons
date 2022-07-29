module.exports = {
    plugins: [
        'removeDimensions',
        'sortAttrs',
        {
            name: 'removeAttrs',
            params: {
                attrs: '(id|style)'
            }
        },
        {
            name: 'addAttributesToSVGElement',
            params: {
                attributes: [
                    { fill: '#000000' },
                    // { 'aria-hidden': true }
                ]
            }
        }
    ]
}