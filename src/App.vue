<script>
import api from './services/api'

export default {
  data: () => ({
    error: false,
    message: ''
  }),

  beforeMount () {
    const self = this
    api.ping()
      .then(response => {
        if (response.status != 200) {
          // console.log(response)
          self.message = 'can\'t connect to backend'
          self.error = true
        }
      })
      .catch(error => {
        console.log(error)
      })
  }
}
</script>

<template>
  <router-view></router-view>
</template>
