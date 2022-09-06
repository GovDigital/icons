module.exports = {
    plugins: [
        'removeDimensions',
        'sortAttrs',
        'removeStyleElement',
        'removeUselessDefs',
        'convertShapeToPath',
        'removeXMLProcInst',
        'removeComments',
        'removeEditorsNSData',
        'convertShapeToPath',
        'removeXMLNS',
        'removeUnknownsAndDefaults',
        'collapseGroups',
        {
            name: 'removeAttrs',
            params: {
                attrs: '(id|style|class|x|y|version)'
            }
        },
        {
            name: 'addAttributesToSVGElement',
            params: {
                attributes: [
                    { fill: '#000000' },
                    { xmlns: 'http://www.w3.org/2000/svg' }
                    // { 'aria-hidden': true }
                ]
            }
        }
    ]
}