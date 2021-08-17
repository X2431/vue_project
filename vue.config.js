module.exports = {
    // 选项...
    lintOnSave: false,
    devServer:{
      proxy:{
        "/api":{
          target:'http://121.5.235.28:8888'
          // pathRewrite:{"^/api" : ""}如果路径中有api想要去掉这个路径，就用此行
        }
      }
    }
  }