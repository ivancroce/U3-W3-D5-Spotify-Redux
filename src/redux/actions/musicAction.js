export const SET_RESULTS = "SET_RESULTS";
export const SET_CURRENT_SONG = "SET_CURRENT_SONG";
export const SET_LIKE = "SET_LIKE";
export const SET_SEARCH_RESULTS = "SET_SEARCH_RESULTS";

export const setResults = (results) => ({ type: SET_RESULTS, payload: results });
export const setCurrentSong = (song, sectionNumber) => ({ type: SET_CURRENT_SONG, payload: { song, sectionNumber } });
export const setLike = (sectionNumber, id) => ({ type: SET_LIKE, payload: { sectionNumber, id } });
export const setSearchResults = (results) => ({ type: SET_SEARCH_RESULTS, payload: results });

export const fetchMusic = (artistName, sectionNumber) => {
  return async (dispatch) => {
    try {
      const resp = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${artistName}`);
      if (resp.ok) {
        const { data } = await resp.json();
        const musicList = data.map((music) => ({
          ...music,
          like: false
        }));
        dispatch(setResults({ sectionNumber, data: musicList.slice(0, 4) }));
      } else {
        throw new Error("Error in fetching songs");
      }
    } catch (err) {
      console.log("error", err);
    }
  };
};

export const fetchSearchResults = (query) => {
  return async (dispatch) => {
    try {
      const resp = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${query}`);
      if (resp.ok) {
        const { data } = await resp.json();
        const musicList = data.map((music) => ({
          ...music,
          like: false
        }));
        dispatch(setSearchResults(musicList));
      } else {
        throw new Error("Error in fetching search results");
      }
    } catch (err) {
      console.log("Search error", err);
    }
  };
};
