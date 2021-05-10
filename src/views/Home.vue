<template>
  <div class="home">
      <div @click='tuichu()'>退出</div>
  </div>
</template>

<script>

 import { SET_INFO } from '../store/mutation-type'

export default {
  name: 'Home',
  components: {
   
  },
  methods:{
    tuichu(){
      this.$store.state.username='',
      this.$store.state.token='',

        this.$router.push({
          name: 'login'
        })
    }
  }
  
}
</script>
