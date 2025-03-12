import HomePage from "../pages/HomePage/HomePage";
import ProductPage from "../pages/ProductPage/ProductPage";
import OrderPage from "../pages/OrderPage/OrderPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import SignInPage from "../pages/SignInPage/SignInPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";

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
        page: NotFoundPage,
    },
    // {
    //     path: 'signin',
    //     page: SignInPage,
    // },
    // {
    //     path: 'signup',
    //     page: SignUpPage,
    // },
];
