import axios from "axios"

export const getNotes = () => axios({
  method: 'get',
  url: 'http://localhost:3000/notes',
  responseType: 'json'
})
  .then((data: any) => console.log(JSON.stringify(data)))