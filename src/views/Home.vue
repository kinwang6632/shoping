<template>
  <div>
    <div class="h-100 w-100 container-fluid">
      <NavShoping :sendDataToChild="true" @updToParent="updateSelf"></NavShoping>
    </div>

    <!-- <div class="z-index-2 bg-danger position-absolute">.z-index-2</div> -->
  </div>
</template>

<script>
// @ is an alias to /src
//import Nav from '@/components/Nav.vue'
//import Nav from '../components/Nav.vue'
import NavShoping from "./NavShoping.vue";
export default {
  name: "Home",
  components: {
    NavShoping,
  },
  inject: ['user'],  
  data() {
    return {
      msg : true,
      whichIndex:0
    };
  },
  methods:{
    updateSelf(event,index){
      console.log('updateSelf', event)
      this.whichIndex = index      
    } 
  },
  mounted() {
    
    
  },
  unmounted() {},
};
</script>
