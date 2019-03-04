const path =require('path')

module.exports={
    chainWebpack:config=>{
        config.resolve.alias
        .set('styles',path.resolve(__dirname,'./src/assets/styles'))
        .set('pages',path.resolve(__dirname,'./src/pages'))
        .set('utils',path.resolve(__dirname,'./src/utils'))
        .set('public',path.resolve(__dirname,'./public'))
        .set('components',path.resolve(__dirname,'./src/components'))
    },
    devServer:{
        proxy:{
            '/search':{
                target:'https://h5.manhua.163.com',
                changeOrigin:true/* ,
                pathRewrite:{
                    '^/search':''
                } */
            }
        }
    }
}