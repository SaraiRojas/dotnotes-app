import gql from 'graphql-tag';

export default gql`
  mutation($noteInfo: note_Info, $note_Id: Int){
    updateNote(noteInfo: $noteInfo, note_id: $note_Id) {
      id
    }
  }
`