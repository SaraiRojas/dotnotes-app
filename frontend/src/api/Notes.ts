import axios from 'axios'

const data = [
  {
    title: 'title1',
    date: new Date(),
    note_text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pellentesque maximus libero, porttitor scelerisque nulla elementum ac.',
  },
  {
    title: 'title2',
    date: new Date(),
    note_text:
      'Duis risus nunc, tincidunt id volutpat in, lacinia molestie magna. Suspendisse bibendum, quam et ultricies pretium, magna sem vestibulum lacus, vitae malesuada dolor orci sed augue.',
  },
]

// export const getNotes = () =>
//   axios({
//     method: 'get',
//     url: 'http://localhost:3000/notes',
//     responseType: 'json',
//   }).then((data: any) => console.log(JSON.stringify(data)))

export const getNotes = (): Promise<any> =>
  new Promise((resolve) => {
    resolve(data)
  })
