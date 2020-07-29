export const getData = async () => {
  const response = await fetch(
    'https://private-c31a5-task27.apiary-mock.com/videos'
  )
  try {
    const videoData = await response.json()
    return videoData
  } catch (error) {
    throw error
  }
}
