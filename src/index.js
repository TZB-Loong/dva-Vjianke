import  dva from 'dva';

import assetModel from './models/asssetModel';
import applyModel from './models/applyModel';
import RouterConfig from './router';
import createLoading from 'dva-loading';


/**
 * app.model（）添加model
 * app.router() //添加路由
 * app.start() // 添加真个react挂载在原来的位置
 */


 /**
  * app.user({}) 整个App要使用的插件
  * app.onAction(createLogger(oopts))  异步请求异常
  * app.onReducer(fn)  执行封装的reducer，比如借助redux-undo实现redo/undo
  * app.onEffect(fn)  执行封装的effect，比如dva-loading基于此实现自动处理loding的状态
  * app.model   model相当于是一个功能对应一个moedl（包含了reducers与action,这是一种混合处理的原则）
  * 
  */

  /**
   * 原则上是有多个功能就要设计多少个model 避免获取获取数据的混乱 避免与ui的状态混乱
   */

const app = dva(); //创建应用

app.use(createLoading());  //使用dva-loading 插件来监听全局的loading

app.model(assetModel); //model(同步与异步处理的混合体)
app.model(applyModel)

app.router(RouterConfig); //路由


app.start('#main'); //关联实例


 