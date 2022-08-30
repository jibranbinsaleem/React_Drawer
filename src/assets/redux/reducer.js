const INITIAL_STATE = {
    language: 'en',
};


export default (state = INITIAL_STATE, action) => {
    if (action.type === "TOGGLELANG") {

        return {
            ...state,
            language: action.value
        }
        // state.language = action.value


        // return state
    }
    console.log('ReducerState', state);

    return state;
}