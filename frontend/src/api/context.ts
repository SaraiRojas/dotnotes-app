import axios from 'axios'
import { Iuser } from '../model/interface'

export const createNewUser = (user: Iuser) => {
  const body = {
    user_code: user.sub,
    created_at: user.updated_at,
  }

  return axios
    .post('http://localhost:3000/users', body)
    .catch((err) => console.log(err))
}
