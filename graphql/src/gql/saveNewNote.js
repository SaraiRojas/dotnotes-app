import gql from 'graphql-tag';

export default gql`
  mutation($noteInfo: newNoteInfo!){
    saveNewNote(noteInfo: $noteInfo) {
      id
      title
      content
    }
  }
`