<template>
  <div>
    <div class="home">
      <NavShoping></NavShoping>
    </div>

    <!-- <div class="z-index-2 bg-danger position-absolute">.z-index-2</div> -->
  </div>
</template>

<script>
// @ is an alias to /src
//import Nav from '@/components/Nav.vue'
//import Nav from '../components/Nav.vue'
import NavShoping from "../components/NavShoping.vue";
export default {
  name: "Home",
  components: {
    NavShoping,
  },
  data() {
    return {
      msg: "ABC",
    };
  },
  mounted() {},
  unmounted() {},
};
</script>
