import { supabase } from './supabase'

const prefix = import.meta.env.VITE_SUPABASE_STORAGE_URL

export const uploadVideo = async ({ videoFile }) => {
  const filename = window.crypto.randomUUID()

  const { data, error } = await supabase.storage
    .from('videos')
    .upload(`uploads/${filename}.mp4`, videoFile)

  const file = data?.path ? `${prefix}${data.path}` : ''
  return [error, file]
}

export const publishVideo = async ({ videoSrc, description }) => {
  const defaultAlbum =
    '//p16-amd-va.tiktokcdn.com/img/tos-useast2a-v-2774/488ba59d88d74de49ed9ecc977caf79f~c5_200x200.jpeg'
  const defaultSong = 'La Kabra - The Farmlopez'
  const { data, error } = await supabase
    .from('videos')
    .insert([
      {
        user_id: '94099cea-7f30-4b35-8f6b-c4bbe3978cb1',
        description,
        src: videoSrc,
        albumCover: defaultAlbum,
        songTitle: defaultSong
      }
    ])
    .select()

  return [error, data]
}

export const getVideos = async () => {
  const { data, error } = await supabase
    .from('videos')
    .select(
      `
    *,
    user:user_id (
      avatar,
      username,
      id
    )
  `
    )
    .order('created_at', { ascending: false })

  return [error, data]
}
