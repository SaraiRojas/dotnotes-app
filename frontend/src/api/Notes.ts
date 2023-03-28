import axios from 'axios'

export const getNotes = (userId: string) =>
  axios({
    method: 'get',
    //url: `http://localhost:3000/users/search?usercode=${userId}`,
    url: `http://localhost:3000/users/search?usercode=32-861-5209`,
    responseType: 'json',
  }).then((data: any) => data.data.data.user[0].notes)

export const saveNewNote = (noteInfo: {
  user_id: string
  title: string
  content: string
}) => {
  const body = {
    ...noteInfo,
  }
  return axios.post('http://localhost:3000/notes/', body)
}

export const updateNote = (
  noteInfo: { user_id: string; title: string; content: string },
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
