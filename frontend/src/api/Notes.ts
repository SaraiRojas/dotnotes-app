import axios from 'axios'
import Notes from '../views/Notes/Notes'

export const getNotes = () =>
  axios({
    method: 'get',
    url: 'http://localhost:3000/notes/',
    responseType: 'json',
  }).then((data: any) => data.data.data)
