import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store/index";
import App from "./components/App";
import localHistory from './routes/History';
import { initializeApi } from 'common/src/network/apis/index';
import { BASE_URL } from './utils/Constants';

const appName = 'InnerApp2';

initializeApi({ baseURL: BASE_URL });

window[`render${appName}`] = (containerId, history) => {
  ReactDOM.render(
    <Provider store={store}>
      <App history={history || localHistory} />
    </Provider>
  , document.getElementById(containerId));
};

window[`unmount${appName}`] = containerId => {
  ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
};
