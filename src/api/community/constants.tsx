export const BASE_URL = import.meta.env.VITE_APP_API_URL;

export const END_POINT = {
  MY_BETTING: `/betting`,
  BETTING: (bettingId: number) => `/betting/${bettingId}`,
  OPEN_BETTING: '/betting/open',

  MY_CHATTING: `/chatting`,
  CHATTING: (chatRoomId: number) => `/chatting/${chatRoomId}`,
  CHATTING_MESSAGE: (chatRoomId: number) => `/chatting/messages/${chatRoomId}`,

  MY_FRIEND: `/friends`,
  FRIEND: (friendId: number) => `/friends/${friendId}`,
  FRIEND_BLOCK: `/friends/block`,
  FRIEND_REQUEST: `/friends/request`,
  FRIEND_RESPONSE: `/friends/response`,
  FRIEND_DETAIL: `/members/friends`,
  FRIEND_SEARCH: `/members/search`,

  RANKING: `/members/ranking`,
};
