import axios from 'axios'

export const getAllArticle = ({commit, state}, payload) => {
  axios.get('http://localhost:3000/articles')
    .then(posts => {
      console.log('ini action', posts.data.data)
    })
    .catch(err => {
      console.log(err)
    })
}
