import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import hardSet from 'redux-persist/lib/stateReconciler/hardSet';
import { PersistGate } from 'redux-persist/integration/react';
import redxuThunk from 'redux-thunk';

import App from './components/App';
import reducers from './reducers';

// const store = createStore(reducers, {}, applyMiddleware(redxuThunk));

const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: hardSet,
  whitelist: ['cart'],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = createStore(persistedReducer, {}, applyMiddleware(redxuThunk));
const persistor = persistStore(store);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.querySelector('#root'),
);
