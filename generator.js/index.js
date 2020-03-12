module.exports = (api, options, rootOptions) => {
  api.extendPackage({
    dependencies: {
      "axios": "^0.18.1"
    },
    devDependencies: {
      "mockjs": "^1.0.1-beta3"
    }
  });


  //安装 vuex
  if(options.vuex){
    api.extendPackage({
      dependencies: {
        vuex: '^3.1.0'
      } 
    })
    api.render('./template/vuex');
  }

  //安装 element-ui 库
  if (options.elementUI) {
    api.extendPackage({
      devDependencies: {
        "element-ui": "^2.13.0"
      }
    });
  }
   // 公共基础目录和文件
  api.render('./template/default');

   // 配置文件
  api.render({
    './.eslintrc.js'     : '../template/.eslintrc.js',
    './.gitignore'       : '../template/.gitignore',
    './postcss.config.js'    : '../template/postcss.config.js'
  });
}