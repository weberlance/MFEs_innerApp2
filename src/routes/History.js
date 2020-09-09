import { createHashHistory } from 'history';

// in common cases DO NOT USE IT anywhere except src/index.js
// if it necessary to use it you MUST make a check for the history prop for case when the app is used as a microfrontend
export default createHashHistory();
