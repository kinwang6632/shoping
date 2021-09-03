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
            >
              0
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
      v-if="!props.loadDataOK"
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
export default {
  props: {
    loadDataOK: {
      type: Boolean,
      require: true,
      default: false,
    },
  },
  
  setup(props) {
    let pages = [
      {
        path: "/",
        name: "產品資料",
      },
      {
        path: "/about",
        name: "About",
      },
    ];

    return { pages, props };
  },
  methods: {
    jump() {
      this.$router.push({ path: "/about" });
    },
  },
  mounted() {
    console.log(`this user = ${this.user}`);
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
