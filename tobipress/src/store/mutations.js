export default {
  setUser: (state, payload) => {
    console.log('INI PAYLOAD', payload)
    // state.user = payload
  }
  // getQuestions: (state, payload) => {
  //   state.questions = payload
  // },
  // setLogin: (state, payload) => {
  //   state.user = payload
  // },
  // addPost: (state, payload) => {
  //   state.questions.push(payload)
  // },
  // deletePost: (state, payload) => {
  //   let index = state.questions.findIndex(e => {
  //     return e._id === payload
  //   })
  //   state.questions.splice(index, 1)
  // },
  // addAnswer: (state, payload) => {
  //   let index = state.questions.findIndex(e => {
  //     return e._id === payload._id
  //   })
  //   state.questions.splice(index, 1, payload)
  // }
}
