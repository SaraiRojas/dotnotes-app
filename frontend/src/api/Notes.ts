import axios from 'axios'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContextProvider'

export const getNotes = (userId: string) =>
  axios({
    method: 'get',
    url: `http://localhost:3000/users/search?usercode=${userId}`,
    responseType: 'json',
  }).then((data: any) => data.data.data.user[0].notes)

export const saveNewNote = (noteInfo : {user_id: string, title: string, content: string}) => {
  const body = {
    ...noteInfo
  }
  return axios.put('http://localhost:3000/notes/', body)
}
