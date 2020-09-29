export const initialState = {
    term: null,
    term2: null,
};

export const actionTypes = {
    SET_SEARCH_TERM: "SET_SEARCH_TERM",
};

const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case actionTypes.SET_SEARCH_TERM:
            return {
                ...state,
                term: action.term,
                term2: action.term2,
            };

        default:
            return state;
    }
};

export default reducer;