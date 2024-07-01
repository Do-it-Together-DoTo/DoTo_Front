export const BASE_URL = import.meta.env.VITE_APP_API_URL;

export const END_POINT = {
  MY_BETTING: `/betting`,
  BETTING: (bettingId: string | null) => `/betting/${bettingId}`,
  OPEN_BETTING: '/betting/open',
};
