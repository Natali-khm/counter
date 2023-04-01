import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import CounterWithSeperatedSettings from './counter_with_separated_settings/CounterWithSeperatedSettings';
import reportWebVitals from './reportWebVitals';
import CounterWithCombinedSettings from './counter_with_combined_settings/CounterWithCombinedSettings';
import CounterWithRedux from './counter_with_redux/CounterWithRedux';
import { Provider } from 'react-redux';
import { store } from './store/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <>
   {/* <React.StrictMode> */}
   <div>
      <h3 className = 'title'> Counter with separated settings</h3>
      <CounterWithSeperatedSettings />
   </div>
   <hr></hr>
   <div>
      <h3 className = 'title'>Counter with settings</h3>
      <CounterWithCombinedSettings />
   </div>
   <hr></hr>
   <div>
      <h3 className = 'title'>Counter with Redux</h3>
      <Provider store = {store}>
         <CounterWithRedux />
      </Provider>
   </div>
   {/* </React.StrictMode> */}
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
