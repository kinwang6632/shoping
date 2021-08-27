<template>
  <div id="nav">
    <!-- <nav class="navbar navbar-expand-sm bg-secondary navbar-dark">
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav mr-auto">
          <router-link
            v-for="(page, index) in pages"
            :to="page.path"
            :key="index"
          >
            <li class="nav-item">
              <a class="nav-link" href="#">{{ page.name }}</a>
            </li>
          </router-link>
        </ul>
      </div>
    </nav> -->
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
                class="btn btn-default  mx-1"
                role="button"
                href="#"
                style="width: 120px;color:white"
                >{{ page.name }}</a
              >
            </li>
          </router-link>
        </ul>
      </div>
    </nav>
    <!-- <nav class="navbar navbar-expand-sm bg-secondary navbar-dark">
      
        <router-link v-for="(page, index) in pages" :to="page.path" :key="index">
          <button class="btn btn-primary shadow-none">{{page.name}}</button>
        </router-link>
      
    </nav> -->

    <router-view />
  </div>
</template>
<script>
export default {
  setup() {
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
    return { pages };
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
