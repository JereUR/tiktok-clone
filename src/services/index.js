import { supabase } from './supabase'

export const uploadVideo = async ({ videoFile }) => {
  const { data, error } = await supabase.storage
    .from('videos')
    .upload('videos/', videoFile)
}

export const getVideos = async () => {
  const { data, error } = await supabase.from('videos').select(`
    *,
    user:user_id (
      avatar,
      username,
      id
    )
  `)

  return [error, data]
}
