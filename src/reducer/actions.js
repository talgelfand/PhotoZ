const userLogged = () => {
    return {
        type: 'USER_LOGGED'
    }
}

const userRegistered = () => {
    return {
        type: 'USER_REGISTERED'
    }
}

export {
    userLogged,
    userRegistered
}