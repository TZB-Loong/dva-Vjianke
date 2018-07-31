import React from "react";
import { Router, Route, Switch,IndexRoute } from "dva/router";
// import IndexPage from "./routes/IndexPage";
import Asset from "./components/coupon/Asset";
import Loading from './components/comment/Loading'

function RouterConfig({ history}) {  //Router 只能有一个子属性
 
  return (
    <Router history={history}>
      {/* <Switch> */}
        <Route path="/Asset" component={Asset}>
          
        </Route>

      {/* <Route path="/Asset" component={Loading}>
      <IndexRoute component={Asset} />
      </Route> */}

      {/* </Switch> */}
    </Router>
  );
}



export default RouterConfig;
