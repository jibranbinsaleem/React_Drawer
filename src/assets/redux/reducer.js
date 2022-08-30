const INITIAL_STATE = {
    language: 'en',
};


export default (state = INITIAL_STATE, action) => {
    if (action.type == "TOGGLELANG") {
        console.log(action.value)

        return {
            ...state,
            language: action.value
        
        }


    }

    return state;
}