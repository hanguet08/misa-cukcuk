<template>
<TheHeader/>
<TheNavbar/>
<TheContent/>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue'
import TheNavbar from './components/layout/TheNavbar.vue'
import TheContent from './components/layout/TheContent.vue'

export default {
  name: 'App',
  components: {
   TheHeader, TheNavbar, TheContent
  }
}
</script>

<style>
@import url(css/main.css);
 @import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css);

</style>
