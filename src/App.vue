<template>
  <div>
    <div
      id="nav"
      class="float-start position-absolute w-100 h-100"
      style="z-index: 1"
    >
      <nav class="navbar navbar-expand-sm bg-secondary navbar-dark">
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav mr-auto">
            <router-link
              v-for="(page, index) in pages"
              :to="page.path"
              :key="index"
            >
              <li class="nav-item">
                <a
                  class="btn btn-default mx-1"
                  role="button"
                  href="#"
                  style="width: 120px; color: white"
                  >{{ page.name }}</a
                >
              </li>
            </router-link>
          </ul>
          <button
            type="button"
            @click="jump()"
            class="btn btn-info position-relative"
            style="width: 100px"
          >
            購物車

            <span 
              class="
                position-absolute
                top-0
                start-100
                translate-middle
                badge
                rounded-pill
                bg-danger
                visible
              "
              v-if="getOrderNum > 0"
            >
              {{getOrderNum}}
              <span class="visually-hidden">unread messages</span>
            </span>
          </button>
        </div>
      </nav>
      <!-- <nav class="navbar navbar-expand-sm bg-secondary navbar-dark">
      
        <router-link v-for="(page, index) in pages" :to="page.path" :key="index">
          <button class="btn btn-primary shadow-none">{{page.name}}</button>
        </router-link>
      
    </nav> -->

      <router-view />
    </div>
    <div
      v-if="!isLoadDataOK"
      @update="chgDataOK"
      class="
        shadow-lg
        p-3
        mb-5
        rounded
        float-start
        position-absolute
        h-100
        w-100
        bg-secondary
        opacity-50
        d-flex
        align-items-center
        justify-content-center
      "
      style="z-index: 200"
    >
      <div
        class="spinner-border text-dark"
        role="status"
        style="width: 5rem; height: 5rem"
      >
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  </div>
</template>
<script>
import { getCurrentInstance,computed,ref } from "vue";
import {useStore} from "vuex";
export default {
  props:{
    title:String
  },
  
  setup(props) {
    const pages = ref([])
    const isOK = ref(true);
    const store = useStore();
    let title1 = ref(props);
    title1.value = "my title"
    pages.value.push({
        path: "/",
        name: "產品資料",
      },
      {
        path: "/about",
        name: "About",
      })
    
    const instance = getCurrentInstance()
    let isLoadDataOK = computed(()=>{
      return store.state.isLoadDataOK
    })
    let getOrderNum = computed(()=>{
      let n = 0;
      store.state.currentOrder.forEach(element => {
        n+=element.orderNum
      });
      return n
    })
    //console.log('isOK:'+ instance.appContext.app.config.globalProperties.isOK)
    
    
    return { pages,instance,isLoadDataOK,title1,isOK,getOrderNum };
  },
  methods: {
    jump() {
      this.$router.push({ path: "/about" });
    },
    chgDataOK(b) {
      console.log("b=" + b)
    
    }
  },
  mounted() {
    //console.log(`this user = ${this.isOK}`);
    //this.OK = this.isOK;
  },
  
};
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
