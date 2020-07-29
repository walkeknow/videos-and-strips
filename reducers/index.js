import { GET_VIDEOS } from '../actions/videos'

export default (state = null, action) => {
  switch (action.type) {
    case GET_VIDEOS:
      return action.videos
    default:
      return state
  }
}
