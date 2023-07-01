import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { routes } from './routes';
import Default from './components/Default/Default';
import AppContext from './untils/context';
import { isJsonString } from './untils/jsonString';
import jwt_decode from 'jwt-decode';
import { useDispatch } from 'react-redux';
import { updateUser } from './redux/slides/useSlide';
import * as UserService from '~/services/UserService';

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        const { storageData, decoded } = handleDecoded();

        if (decoded?.id) {
            handleGetDetailsUser(decoded?.id, storageData);
        }
    }, []);

    const handleDecoded = () => {
        let storageData = localStorage.getItem('access_token');
        let decoded = {};

        if (storageData && isJsonString(storageData)) {
            storageData = JSON.parse(storageData);

            decoded = jwt_decode(storageData);
        }
        return { decoded, storageData };
    };

    UserService.axiosJWT.interceptors.request.use(
        async (config) => {
            const { decoded } = handleDecoded();
            const currentTime = new Date();

            if (decoded?.exp < currentTime.getTime() / 1000) {
                const data = await UserService.refreshToken();
                config.headers['token'] = `Bearer ${data?.access_token}`;
            }

            return config;
        },
        function (err) {
            return Promise.reject(err);
        },
    );

    const handleGetDetailsUser = async (id, token) => {
        const res = await UserService.getDetailsUser(id, token);
        dispatch(updateUser({ ...res?.data, access_token: token }));
    };

    return (
        <div>
            <Router>
                <AppContext>
                    <Routes>
                        {routes.map((route) => {
                            const Page = route.page;
                            const Layout = route.isShowHeader ? Default : Fragment;

                            return (
                                <Route
                                    key={route.path}
                                    path={route.path}
                                    element={
                                        <Layout>
                                            <Page />
                                        </Layout>
                                    }
                                />
                            );
                        })}
                    </Routes>
                </AppContext>
            </Router>
        </div>
    );
}

export default App;
