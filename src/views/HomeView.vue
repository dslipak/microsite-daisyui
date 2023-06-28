<script setup>
	import Hero from '../components/Hero.vue'
</script>

<template>
	<Hero />
</template>

<script>
import api from '../services/api'

export default {
	beforeMount () {
		api.ping()
			.then(response => {
				console.log(response)
			})
			.catch(error => {
        console.log(error)
      })
	}
}
</script>
