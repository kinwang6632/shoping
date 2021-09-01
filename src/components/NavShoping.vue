<template>
  <div>
    <div class="container-fluid p-5">
      <div class="container-fluid">
        <div class="row">
          <div class="col-sm-1 d-flex justify-content-center"></div>
          <div class="col-sm-2 d-flex justify-content-center text-danger">
            型號
          </div>
          <div class="col-sm-4 d-flex justify-content-center text-danger">
            描述
          </div>
          <div class="col-sm-1 d-flex justify-content-center text-danger">
            價格
          </div>
          <div class="col-sm-2 d-flex justify-content-center text-danger">
            購買數量
          </div>
          <div class="col d-flex justify-content-center text-danger">庫存</div>
          <div class="col d-flex justify-content-center text-danger"></div>
        </div>
      </div>
      <div
        class="container-fluid border border-info mt-2"
        style="height: 90px"
        v-for="(data, index) in dataList"
        :key="index"
      >
        <div class="row">
          <div class="col-sm-1 d-flex justify-content-center">
            <img
              :src="require(`../jpg/${data.imgPath}`)"
              class="rounded zoom"
              style="height: 85px"
            />
          </div>
          <div
            class="
              col-sm-2
              text-primary
              d-flex
              align-items-center
              justify-content-center
            "
          >
            <div class="overflow-auto">{{ data.model }}</div>
          </div>
          <div
            class="
              col-sm-4
              text-primary
              d-flex
              justify-content-center
              align-items-center
              overflow-auto
            "
            style="height: 85px"
          >
            <div class="overflow-auto">
              {{ data.description }}
            </div>
          </div>
          <div
            class="
              col-sm-1
              text-danger
              d-flex
              align-items-center
              justify-content-center
            "
          >
            {{ data.price }}
          </div>
          <div
            class="col-sm-2 d-flex align-items-center text-center"
            style="text-align: right"
          >
            <div class="input-group">
              <button
                class="btn btn-outline-secondary"
                type="button"
                
              >
                -
              </button>
              <input
                class="form-control text-center bg-white"
                disabled="disabled"
                value="0"
              />
              <button
                class="btn btn-outline-secondary"
                type="button"
                @click="addQuantityh(0,data.maxQuantity)"
              >
                +
              </button>
            </div>
          </div>
          <div class="col d-flex justify-content-center align-items-center">
            <input
              type="number"
              class="form-control text-center bg-white"
              disabled="disabled"
              :value="data.maxQuantity"
            />
          </div>
          <div class="col d-flex justify-content-center align-items-center">
            <button type="button" class="btn btn-danger" style="width: 80px">
              訂購
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dtnumber: 1,
      dataList: this.$store.state.products.dataList,
      imgp: require("../jpg/images.jpg"),
    };
  },
  
  methods: {
    getImage(path) {
      return path;
    },
    addQuantityh(value,max) {
      if(value<max) {
        return value+=1
      }
    }
  },
  //   getImage(path) {
  //   return require(path)
  // },
  // methods: {
  //   getImg(path){
  //     return require(path)

  //   }
  // },
  mounted() {},
};
</script>

<style>
.zoom:hover {
  transform: scale(1.5); /* (150% zoom)*/
}
*::-webkit-scrollbar {
  width: 10px;
}

/* Track */
*::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
*::-webkit-scrollbar-thumb {
  background: rgb(147, 147, 245);
}

/* Handle on hover */
*::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>