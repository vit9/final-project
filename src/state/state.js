
import { createStore, applyMiddleware} from "redux";

import thunk from "redux-thunk";
import reducers from "../reducer/";

export default createStore(
	reducers,
	applyMiddleware(thunk)
);