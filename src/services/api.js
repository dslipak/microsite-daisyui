import axios from 'axios'

export default {
  ping () {
    return axios
      .get('/api/ping')
      .then(response => { return response })
      .catch(error => { return error.response })
  }
}
