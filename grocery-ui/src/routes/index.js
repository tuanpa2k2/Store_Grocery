import HomePage from '~/pages/Home/HomePage';
import ProductPage from '~/pages/Product/ProductPage';
import OrderPage from '~/pages/Order/OrderPage';
import NotFound from '~/pages/NotFound/NotFound';

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
        path: '*',
        page: NotFound,
    },
];
