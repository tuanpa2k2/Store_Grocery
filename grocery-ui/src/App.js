import React, { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { routes } from './routes';
import Default from './components/Default/Default';
import Newsletter from './components/Newsletter/Newsletter';
import Footer from './components/Footer/Footer';
import AppContext from './untils/context';

function App() {
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
