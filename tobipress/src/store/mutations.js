export default {
  setUser: (state, payload) => {
    state.user = payload
  },
  setArticle: (state, payload) => {
    state.articles = payload
  },
  addNewArticle: (state, payload) => {
    state.articles.push(payload)
  }
}
