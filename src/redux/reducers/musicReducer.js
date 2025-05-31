import { SET_CURRENT_SONG, SET_RESULTS, SET_LIKE, SET_SEARCH_RESULTS } from "../actions/musicAction";

const initialState = {
  results: {
    section1: [],
    section2: [],
    section3: []
  },
  searchResults: [],
  isLoading: false,
  currentSong: null
};

const musicReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_RESULTS:
      console.log(action.payload);
      return {
        ...state,
        results: {
          ...state.results,
          [action.payload.sectionNumber]: action.payload.data
        }
      };
    case SET_CURRENT_SONG:
      // console.log("Reducer SET_CURRENT_SONG, payload:", action.payload);
      return {
        ...state,
        currentSong: action.payload.song,
        currentSection: action.payload.sectionNumber
      };
    case SET_LIKE:
      // Search results Section
      if (action.payload.sectionNumber === "search") {
        return {
          ...state,
          searchResults: state.searchResults.map((music) => (music.id === action.payload.id ? { ...music, like: !music.like } : music))
        };
      }
      // Default Section
      return {
        ...state,
        results: {
          ...state.results,
          [action.payload.sectionNumber]: state.results[action.payload.sectionNumber].map((music) =>
            music.id === action.payload.id ? { ...music, like: !music.like } : music
          )
        }
      };
    case SET_SEARCH_RESULTS:
      return {
        ...state,
        searchResults: action.payload
      };

    default:
      return state;
  }
};

export default musicReducer;
