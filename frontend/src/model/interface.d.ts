export interface Iuser {
  email: string
  email_verified: boolean
  name: string
  nickname: string
  picture: string
  sub: string
  updated_at: string
}

export interface Iuser {
  id: number
  user_code: string
  created_at: string
  updated_at: string
}

export interface INote {
  id: number
  title: string
  content: string
  user_id: number
  created_at: string
  updated_at: string
  user: Iuser
}
