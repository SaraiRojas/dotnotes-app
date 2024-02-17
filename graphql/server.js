import { ApolloError, UserInputError, ApolloServer, gql } from 'apollo-server'
import axios from 'axios'

const typeDefs = gql`
  type note {
    id: Int
    created_at: String
    title: String
    content: String
    updated_at: String
    user_id: String
  }
  type user {
    id: Int
    user_code: String
    created_at: String
    updated_at: String
    notes: [note]
    findBy: String
  }
  input newNoteInfo {
    userid: Int
    title: String
    content: String
  }
  input note_Info {
    user_id: Int
    title: String
    content: String
  }
  type Query {
    allUsers: [user]!
    userNotes(userId: String!): [note]!
    getUserCode(user_id: String!): Int!
  }

  type Mutation {
    saveNewNote(
      noteInfo: newNoteInfo!
    ): note
    updateNote(
      noteInfo: note_Info
      note_id: Int
    ): note
    deleteNote(
      note_id: Int
    ): note
  }
`

const resolvers = {
  Query: {
    allUsers: async (root) => {
      const users = await axios.get("http://localhost:3000/users")
      return users.data.data.users
    },
    userNotes: async (root, args) => {
      const { userId } = args
      const notes = await axios.get(`http://localhost:3000/users/search?usercode=${userId}`)
      return notes.data.data.user[0].notes
    },
    getUserCode: async (root, args) => {
      const { user_id } = args
      const code = await axios.get(`http://localhost:3000/users/search?usercode=${user_id}`)
      return code.data.data.user[0].id
    }
  },
  Mutation: {
    saveNewNote: async (root, args) => {
      const { noteInfo } = args
      const body = {
        ...noteInfo,
      }
      const newNote = await axios.post('http://localhost:3000/notes/', body)
      return newNote
    },
    updateNote: async (root, args) => {
      const { noteInfo, note_id } = args
      const body = {
        ...noteInfo,
      }
      const note = await axios.put(`http://localhost:3000/notes/${note_id}`, body)
      return note
    },
    deleteNote: async (root, args) => {
      const { note_id } = args
      const delete_note = await axios.delete(`http://localhost:3000/notes/${note_id}`)
      return delete_note
    }
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers
})

server.listen().then((url) => {
  console.log(url)
})
