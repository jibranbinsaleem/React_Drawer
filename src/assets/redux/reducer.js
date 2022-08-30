const INITIAL_STATE = {
    language: 'en',
};


export default (state = INITIAL_STATE, action) => {
    if (action.type == "TOGGLELANG") {
<<<<<<< HEAD
        state.language = action.value
        console.log('state', state);
        return state
=======

        return {
            ...state,
            language: action.value
        }
        // state.language = action.value
        // console.log('ReducerState', state);


        // return state
>>>>>>> 8372cf607deef61d989233297f8e46fd234c90cb
    }

    return state;
}