import {useContext} from 'react';
import AuthContext from '../auth';

function useHooks() {
    const {setAuthStatus} = useContext(AuthContext);
    return setAuthStatus;
}
export default useHooks;