import HomePage from "../pages/HomePage/HomePage";
import ProductPage from "../pages/ProductPage/ProductPage";
import OrderPage from "../pages/OrderPage/OrderPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import SignInPage from "../pages/SignInPage/SignInPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import TypeProductPage from "../pages/TypeProductPage/TypeProductPage";
import ProductDetailsPageProductDetailsPage from "../pages/ProductDetailsPage/ProductDetailsPage";

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
        path: '/type',
        page: TypeProductPage,
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
    {
        path: '/sign-in',
        page: SignInPage,
        isShowHeader: true,
    },
    {
        path: '/sign-up',
        page: SignUpPage,
        isShowHeader: true,
    },
    {
        path: '/product-detailsdetails',
        page: ProductDetailsPageProductDetailsPage,
        isShowHeader: true,
    },
];
