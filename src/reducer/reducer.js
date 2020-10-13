const initialState = {
    loading: true
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'USER_LOGGED':
            console.log('User has logged in');
            return {
                ...state,
                loading: false
            };
        case 'USER_REGISTERED':
            console.log('New user is registered');
            return {
                ...state,
                loading: false
            }
        default:
            return initialState;
    }
}

export default reducer;