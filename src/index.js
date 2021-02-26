import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';


import {Provider} from 'react-redux'
import store from './redux/store'

import {UserRef,ChatRef} from './firebase/firebase'

ChatRef.get().then((docs)=>{
 
  docs.forEach(doc => {
    console.log(doc.data().timestamp.toDate())
  });
})


ReactDOM.render(
  <React.StrictMode>
    
    <Provider store={store}>
    <App />
    </Provider>

  </React.StrictMode>,
  document.getElementById('root')
);

