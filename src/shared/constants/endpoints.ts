export const baseURL = 'https://api.themoviedb.org/3';

export const endPoints = {
  auth: {
    guestSession: `${baseURL}/authentication/guest_session/new`,
  },
  account: {
    details: (sessionId: string) =>
      `${baseURL}/account/null?session_id=${sessionId}`,
  },
  films: {
    search: `${baseURL}/search/movie`,
    nowPlaying: `${baseURL}/movie/now_playing`,
    upComing: `${baseURL}/movie/upcoming`,
    topRated: `${baseURL}/movie/top_rated`,
    watchList: (accountId: string) =>
      `${baseURL}/account/${accountId}/watchlist/movies`,
  },
};
