import Layout from '@/components/common/Layout';
import NotFoundPage from '@/pages/NotFoundPage';
import BettingPage from '@/pages/community/BettingPage';
import ChattingPage from '@/pages/community/ChattingPage';
import RankingPage from '@/pages/community/RankingPage';
import SearchPage from '@/pages/community/SearchPage';
import HomePage from '@/pages/home/HomePage';
import Mypage from '@/pages/mypage/Mypage';
import InventoryItemPage from '@/pages/store/InventoryItemPage';
import InventoryCharacterPage from '@/pages/store/InventoryItemPage';
import ShopItemPage from '@/pages/store/ShopItemPage';
import ShopCharacterPage from '@/pages/store/ShopCharacterPage';
import { RouterProvider, createBrowserRouter, RouteObject, Navigate } from 'react-router-dom';

const Router = () => {
  const routes: RouteObject[] = [
    {
      path: '/',
      element: <Layout />,
      errorElement: <NotFoundPage />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: 'store',
          children: [
            { path: '', element: <Navigate to="shop/character" /> },
            { path: 'shop/character', element: <ShopCharacterPage /> },
            { path: 'shop/item', element: <ShopItemPage /> },
            { path: 'inventory/character', element: <InventoryCharacterPage /> },
            { path: 'inventory/item', element: <InventoryItemPage /> },
          ],
        },
        {
          path: 'community',
          children: [
            { path: '', element: <Navigate to="ranking" /> },
            { path: 'ranking', element: <RankingPage /> },
            { path: 'search', element: <SearchPage /> },
            { path: 'chatting', element: <ChattingPage /> },
            { path: 'betting', element: <BettingPage /> },
          ],
        },
        {
          path: 'mypage',
          element: <Mypage />,
        },
      ],
    },
  ];
  const router = createBrowserRouter([...routes]);
  return <RouterProvider router={router} />;
};

export default Router;
