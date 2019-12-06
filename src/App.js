import React from 'react';
import { Provider } from 'react-redux';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { setCurrentUser } from './actions/auth';
import setAuthToken from './helpers/setAuthToken';
import Routes from './routes/routes';
import './assets/scss/main.scss';
import store from './store';

const REACT_APP_BACKEND_URL = 'https://questioner-python.herokuapp.com/api/v1';

if (localStorage.token) {
    setAuthToken(localStorage.token);
    const decoded = jwtDecode(localStorage.token);
    store.dispatch(setCurrentUser(decoded));
}

const App = () => {
    axios.defaults.baseURL = REACT_APP_BACKEND_URL;
    return (
        <Provider store={store}>
            <div className="app">
                <Routes />
            </div>
        </Provider>
    );
};

export default App;
