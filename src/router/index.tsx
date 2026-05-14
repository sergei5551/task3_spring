import { createBrowserRouter } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { MainPage } from '../pages/MainPage';
import { AnalyticsPage } from '../pages/AnalyticsPage';
import { ProductsPage } from '../pages/ProductsPage';
import { TopProductsPage } from '../pages/TopProductsPage';
import { ProductDetailPage } from '../pages/ProductDetailPage';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            { index: true, element: <MainPage /> },
            { path: 'analytics', element: <AnalyticsPage /> },
            { path: 'products', element: <ProductsPage /> },
            { path: 'top', element: <TopProductsPage /> },
            { path: 'product/:id', element: <ProductDetailPage /> },
        ],
    },
]);