
fis.hook('module', {
    mode: 'mod'
    /*paths : {
        'main': 'components/component/main'
    }*/
});


//components下面的所有js资源都是组件化资源
fis.match("components/**", {
    isMod: true,
    release: '/static/$0'
});



fis.match("/component_modules/*.js", {
    isMod: true,
    release: '/static/$0'
});

//component组件资源id支持简写
fis.match(/^\/components\/component\/(.*)$/i, {
    id : '$1'
});

//page里的页面发布到根目录
fis.match("components/page/(*.html)",{
    release: '/$1',
    useCache : false
});

//sass的编译

//文章封面和作者头像等动态图片地址不加hash
fis.match(/static\/images\/.*\.(jpeg|jpg|png)$/,{
    useHash: false
})


fis.match('::packager', {
    // npm install [-g] fis3-postpackager-loader
    // 分析 __RESOURCE_MAP__ 结构，来解决资源加载问题
    postpackager: fis.plugin('loader', {
        resourceType: 'mod',
        useInlineMap: true, // 资源映射表内嵌
        include:"components/**.js"
    }),
    packager: fis.plugin('map',{
        '/static/pkg/all.css': [
            '/static/css/normalize.css',
            '/static/css/font-awesome.min.css',
            '/components/**.css'
        ]
    }),
    spriter: fis.plugin('csssprites', {
        layout: 'matrix',
        margin: '15'
    })
    
})

//生产环境下CSS、JS压缩合并
//使用方法 fis3 release prod
fis.media('prod')
    .match('**.js', {
        optimizer: fis.plugin('uglify-js')
    })
    .match('component_modules/*.js',{
        packTo: '/static/pkg/common.js' 
    })
    .match('components/**/*.js',{
        packTo: '/static/pkg/app.js'
    })
    .match('**.css', {
        optimizer: fis.plugin('clean-css')
    }).match('*.png', {
        optimizer: fis.plugin('png-compressor', {
            type : 'pngquant'
        })
    });

//doc目录不发布
fis.match("doc/**", {
    release: false
});
//.开头的目录不发布
fis.match("\..*", {
    release: false
});
//.开头的目录不发布
fis.match("fis-conf.js", {
    release: false
});
//.开头的目录不发布
fis.match("npm-debug.log", {
    release: false
});
//.开头的目录不发布
fis.match("package.json", {
    release: false
});
//.开头的目录不发布
fis.match("README.md", {
    release: false
});