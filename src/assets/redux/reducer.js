const INITIAL_STATE = {
    language: 'en',
};


export default (state = INITIAL_STATE, action) => {
    if (action.type == "TOGGLELANG") {
        state.language = action.value
        console.log('state', state);
        return state
    }

    return state;
}