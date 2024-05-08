import Categorybar from '@/components/common/category/Categorybar';
import Layout from '@/components/common/Layout';
import NotFoundPage from '@/pages/NotFoundPage';
import BettingPage from '@/pages/community/BettingPage';
import ChattingPage from '@/pages/community/ChattingPage';
import RankingPage from '@/pages/community/RankingPage';
import SearchPage from '@/pages/community/SearchPage';
import HomePage from '@/pages/home/HomePage';
import ChangePasswordPage from '@/pages/mypage/ChangePasswordPage';
import DeleteAccountPage from '@/pages/mypage/DeleteAccountPage';
import MydataPage from '@/pages/mypage/MydataPage';
import UpdateProfilePage from '@/pages/mypage/UpdateProfilePage';
import InventoryItemPage from '@/pages/store/InventoryItemPage';
import InventoryCharacterPage from '@/pages/store/InventoryItemPage';
import ShopItemPage from '@/pages/store/ShopItemPage';
import ShopCharacterPage from '@/pages/store/ShopCharacterPage';
import { RouterProvider, createBrowserRouter, RouteObject, Navigate } from 'react-router-dom';

const Router = () => {
  const routes: RouteObject[] = [
    {
      path: '/auth',
      children: [
        { path: 'signin', element: <SignIn /> },
        { path: 'signup', element: <SignUp /> },
        { path: 'findpw', element: <FindPw /> },
      ],
    },
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
          element: <Categorybar category="store" />,
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
          element: <Categorybar category="community" />,
          children: [
            { path: '', element: <Navigate to="ranking" /> },
            { path: 'ranking', element: <RankingPage /> },
            { path: 'friends', element: <SearchPage /> },
            { path: 'chatting', element: <ChattingPage /> },
            { path: 'betting', element: <BettingPage /> },
          ],
        },
        {
          path: 'store',
          element: <Categorybar category="store" />,
          children: [
            { path: '', element: <Navigate to="shop/character" /> },
            { path: 'shop/character', element: <ShopCharacterPage /> },
            { path: 'shop/item', element: <ShopItemPage /> },
            { path: 'inventory/character', element: <InventoryCharacterPage /> },
            { path: 'inventory/item', element: <InventoryItemPage /> },
          ],
        },
        {
          path: 'mypage',
          element: <Categorybar category="mypage" />,
          children: [
            { path: '', element: <Navigate to="mydata" /> },
            { path: 'mydata', element: <MydataPage /> },
            { path: 'update-profile', element: <UpdateProfilePage /> },
            { path: 'change-password', element: <ChangePasswordPage /> },
            { path: 'delete-account', element: <DeleteAccountPage /> },
          ],
        },
      ],
    },
  ];
  const router = createBrowserRouter([...routes]);
  return <RouterProvider router={router} />;
};

export default Router;
