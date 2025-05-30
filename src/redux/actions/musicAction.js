export const SET_RESULTS = "SET_RESULTS";
export const SET_CURRENT_SONG = "SET_CURRENT_SONG";
export const SET_LIKE = "SET_LIKE";

export const setResults = (results) => ({ type: SET_RESULTS, payload: results });
export const setCurrentSong = (song) => ({ type: SET_CURRENT_SONG, payload: song });
export const setLike = (sectionNumber, id) => ({ type: SET_LIKE, payload: { sectionNumber, id } });
export const fetchMusic = (artistName, sectionNumber) => {
  return async (dispatch) => {
    try {
      let response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${artistName}`);
      if (response.ok) {
        let { data } = await response.json();
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
