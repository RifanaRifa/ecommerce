import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "remixicon/fonts/remixicon.css";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter } from 'react-router-dom';
import store from "./redux/store";
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ToastContainer
          position="top-right"
          theme="dark"
          autoClose={3000}
          // hideProgressBar={false}
          // newestOnTop={false}
          closeOnClick
          // rtl={false}
          // pauseOnFocusLoss
          // draggable
          // pauseOnClick
          // pauseOnHover
          pauseOnHover={false}

        // theme="light"
        // theme="dark"
        />
        {/* Same as */}
        {/* <ToastContainer />//itha edutha tha dark sucess box varum*/}
        <App />
      </Provider>

    </BrowserRouter>


  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
