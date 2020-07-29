import { getData } from '../utils/api'
import { receiveVideosFromAPI } from './videos'

export const handleData = () => (dispatch) =>
  getData().then((videos) => {
    dispatch(receiveVideosFromAPI(videos))
  })