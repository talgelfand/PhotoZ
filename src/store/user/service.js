import * as userApi from '../../api/user'

const getLoggedUser = () => async (dispatch) => {
  const userInfo = await dispatch(userApi.getUserInfo())

  if (userInfo) {
    const { payload } = userInfo

    dispatch(actions.setLo)
  }
}
