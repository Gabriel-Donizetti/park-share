module.export = {
    presets:[
        [
            '@babel/preset-env',
            {
                target: {
                    node: 'current'
                }
            }
        ],
        '@babel/preset-typescrit'
    ],
    plugins: [
        ['module-resolver',{
            alias:{
                '@config': './src/config',
                '@models': './src/models',
                '@controllers': './src/controllers',
                '@views': './src/views',
            }
        }]
    ],
    ignore:[
        '**/*.spec.ts'
    ]
}