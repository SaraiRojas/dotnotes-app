import axios from 'axios'

export const getNotes = (userId: string) =>
  axios({
    method: 'get',
    url: `http://localhost:3000/users/search?usercode=${userId}`,
    responseType: 'json',
  }).then((data: any) => data.data.data.user[0].notes)

export const saveNewNote = (noteInfo: {
  userid: number
  title: string
  content: string
}) => {
  const body = {
    ...noteInfo,
  }
  return axios
    .post('http://localhost:3000/notes/', body)
    .then((data) => data.data.data.note)
}

export const updateNote = (
  noteInfo: { user_id: string | number; title: string; content: string },
  note_id: string
) => {
  const body = {
    ...noteInfo,
  }

  return axios.put(`http://localhost:3000/notes/${note_id}`, body)
}

export const deleteNote = (note_id: string) => {
  return axios.delete(`http://localhost:3000/notes/${note_id}`)
}

export const getUserCode = (user_id: string) =>
  axios
    .get(`http://localhost:3000/users/search?usercode=${user_id}`)
    .then((data) => data.data.data.user[0].id)
