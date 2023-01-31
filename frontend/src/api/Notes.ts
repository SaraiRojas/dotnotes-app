import axios from 'axios'

export const getNotes = (userId: string) =>
  axios({
    method: 'get',
    url: `http://localhost:3000/users/search?usercode=${userId}`,
    responseType: 'json',
  }).then((data: any) => data.data.data.user[0].notes)
