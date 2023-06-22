import axios from 'axios';
import React, { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import { routes } from './routes';
import Default from './components/Default/Default';
import Newsletter from './components/Newsletter/Newsletter';
import Footer from './components/Footer/Footer';
import AppContext from './untils/context';

function App() {
    // useEffect(() => {
    //     fetchApi();
    // }, []);

    const fetchApi = async () => {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/product/get-all`);
        return res.data;
    };

    const query = useQuery({ queryKey: ['todos'], queryFn: fetchApi });
    console.log('query', query);

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
                    <Newsletter />
                    <Footer />
                </AppContext>
            </Router>
        </div>
    );
}

export default App;
