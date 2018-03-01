import axios from 'axios'

export const getAllArticle = ({commit, state}, payload) => {
  axios.get('http://localhost:3000/articles')
    .then(articles => {
      commit('setArticle', articles.data.data)
    })
    .catch(err => {
      console.log(err)
    })
}

export const getInfo = ({commit, state}, payload) => {
  axios.get('http://localhost:3000/info', {
    headers: {
      token: localStorage.getItem('token')
    }
  })
    .then(userInfo => {
      commit('setUser', userInfo.data.data)
    })
    .catch(err => {
      console.log(err)
    })
}
