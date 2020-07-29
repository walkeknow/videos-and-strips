export const GET_VIDEOS = 'GET_VIDEOS'

export const receiveVideosFromAPI = (videos) => ({
  type: GET_VIDEOS,
  videos,
})
