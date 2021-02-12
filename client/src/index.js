import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore,compose,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {ReactReduxFirebaseProvider,getFirebase} from 'react-redux-firebase';
import {createFirestoreInstance,getFirestore,reduxFirestore} from 'redux-firestore';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';
import * as Config from './config/config';
import rootReducer from './reducers/rootReducer';

// Initialize Firebase
firebase.initializeApp(Config.firebaseConfig);

const middleware = [
  thunk.withExtraArgument({ getFirebase,getFirestore })
];
const createStoreWithMiddleware  = compose(applyMiddleware(...middleware),reduxFirestore(firebase))(createStore);
const store =createStoreWithMiddleware(rootReducer);

const rrfProps = {
  firebase,
  config: Config.rfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance 
};

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <App />
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById('root')
);
