export interface Iuser {
  email: string
  email_verified: boolean
  is_user_new: boolean
  name: string
  nickname: string
  picture: string
  sub: string
  updated_at: string
}

export interface INote {
  id: number
  title: string
  content: string
  user_id: string
  created_at: string
  updated_at: string
}
