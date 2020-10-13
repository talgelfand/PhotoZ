const signIn = (email, hashedPassword) => {
    console.log(email, hashedPassword);
};

const signUp = (username, email, password) => {
    console.log(username, email, password);
};

const getUserInfo = () => {
    console.log('This is user info');
};

export {
    signIn,
    signUp,
    getUserInfo
};