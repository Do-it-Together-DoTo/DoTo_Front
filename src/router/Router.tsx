import Categorybar from '@/components/common/category/Categorybar';
import Layout from '@/components/common/Layout';
import NotFoundPage from '@/pages/NotFoundPage';
import BettingPage from '@/pages/community/BettingPage';
import ChattingPage from '@/pages/community/ChattingPage';
import RankingPage from '@/pages/community/RankingPage';
import HomePage from '@/pages/home/HomePage';
import ChangePasswordPage from '@/pages/mypage/ChangePasswordPage';
import DeleteAccountPage from '@/pages/mypage/DeleteAccountPage';
import MydataPage from '@/pages/mypage/MydataPage';
import UpdateProfilePage from '@/pages/mypage/UpdateProfilePage';
import InventoryItemPage from '@/pages/store/InventoryItemPage';
import InventoryCharacterPage from '@/pages/store/InventoryCharacterPage';
import ShopItemPage from '@/pages/store/ShopItemPage';
import ShopCharacterPage from '@/pages/store/ShopCharacterPage';
import SignIn from '@pages/auth/SignIn';
import BlockAccountPage from '@pages/mypage/BlockAccountPage';
import { RouterProvider, createBrowserRouter, RouteObject, Navigate } from 'react-router-dom';
import ChattingRoomPage from '@/pages/community/ChattingRoomPage';
import FriendPage from '@/pages/community/FriendPage';

const Router = () => {
  const routes: RouteObject[] = [
    {
      path: '/auth',
      children: [{ path: 'signin', element: <SignIn /> }],
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
          path: 'community',
          element: <Categorybar category="community" />,
          children: [
            { path: '', element: <Navigate to="ranking" /> },
            { path: 'ranking', element: <RankingPage /> },
            { path: 'friends', element: <FriendPage /> },
            { path: 'chatting', element: <ChattingPage /> },
            { path: 'chatting/:roomId', element: <ChattingRoomPage /> },
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
            { path: 'block-list', element: <BlockAccountPage /> },
          ],
        },
      ],
    },
  ];
  const router = createBrowserRouter([...routes]);
  return <RouterProvider router={router} />;
};

export default Router;
