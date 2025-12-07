import {Login} from '@features/auth/entities/login';
import {Account} from '@shared/entities/account';

export const baseURL = 'https://api.themoviedb.org/3';

export const endPoints = {
  auth: {
    guestSession: `${baseURL}/authentication/guest_session/new`,
  },
  account: {
    details: (sessionId: Login['session_id']) =>
      `${baseURL}/account/null?session_id=${sessionId}`,
  },
  films: {
    search: `${baseURL}/search/movie`,
    nowPlaying: `${baseURL}/movie/now_playing`,
    upComing: `${baseURL}/movie/upcoming`,
    topRated: `${baseURL}/movie/top_rated`,
    watchList: (accountId: Account['id']) =>
      `${baseURL}/account/${accountId}/watchlist/movies`,
  },
};
