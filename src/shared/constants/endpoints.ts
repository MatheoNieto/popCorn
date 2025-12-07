export const baseURL = 'https://api.themoviedb.org/3';

export const endPoints = {
  auth: {
    guestSession: `${baseURL}/authentication/guest_session/new`,
  },
  films: {
    search: `${baseURL}/search/movie`,
    nowPlaying: `${baseURL}/movie/now_playing`,
    upComing: `${baseURL}/movie/upcoming`,
    topRated: `${baseURL}/movie/top_rated`,
  },
};
