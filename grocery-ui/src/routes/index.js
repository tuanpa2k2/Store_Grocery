import HomePage from '~/pages/Home/HomePage';
import ProductPage from '~/pages/Product/ProductPage';
import OrderPage from '~/pages/Order/OrderPage';
import NotFound from '~/pages/NotFound/NotFound';
import TypeProductPage from '~/pages/TypeProductPage/TypeProductPage';
import ProductDetails from '~/pages/ProductDetails/ProductDetails';
import SignIn from '~/pages/Authen/SignIn';
import SignUp from '~/pages/Authen/SignUp';

export const routes = [
    {
        path: '/',
        page: HomePage,
        isShowHeader: true,
    },
    {
        path: '/product',
        page: ProductPage,
        isShowHeader: true,
    },
    {
        path: '/order',
        page: OrderPage,
        isShowHeader: true,
    },
    {
        path: '/type',
        page: TypeProductPage,
        isShowHeader: true,
    },
    {
        path: '/login',
        page: SignIn,
        isShowHeader: false,
    },
    {
        path: '/register',
        page: SignUp,
        isShowHeader: false,
    },
    {
        path: '/product-details',
        page: ProductDetails,
        isShowHeader: true,
    },
    {
        path: '*',
        page: NotFound,
    },
];
