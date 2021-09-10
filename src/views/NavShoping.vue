<template>
  <div>
    <div class="container-fluid p-3">
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
          <div class="col d-flex justify-content-center text-danger">
            購買數量
          </div>
          <div class="col d-flex justify-content-center text-danger">庫存</div>
          <div class="col-sm-1 d-flex justify-content-center text-danger"></div>
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
              @click="imgClick($event,index)"
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
            <div class="overflow-auto">              
              <span v-on:click="modelClick(data.model)">
                {{ data.model }}
              </span>
              
            </div>
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
          <!-- price button -->
          <div
            class="col d-flex align-items-center text-center"
            style="text-align: right"
          >
            <div class="input-group">
              <button
                class="btn btn-danger"
                type="button"
                :disabled="dataQuantity[index] === 0 || !dataQuantity[index] || data.maxQuantity === 0"
                @click="calQuantity(index,0,'-')"
              >
                -
              </button>
              <input
                class="form-control text-center bg-white"
                disabled="disabled"
                :value="dataQuantity[index]? dataQuantity[index]:0"
              />
              <button
                class="btn  btn-primary text-white"
                type="button"
                :disabled="dataQuantity[index] >= data.maxQuantity || data.maxQuantity === 0 "
                @click="calQuantity(index,data.maxQuantity,'+')"
              >
                +
              </button>
            </div>
          </div>
          <!-- price button -->
          <div class="col d-flex justify-content-center align-items-center">
            <input
              type="number"
              class="form-control text-center bg-white"
              disabled="disabled"
              v-model="data.maxQuantity"
            />
          </div>
          <div class="col-sm-1 d-flex justify-content-center align-items-center">
            <button type="button" @click="orderClick(index)" class="btn btn-danger" :disabled="!dataQuantity[index] || dataQuantity[index] === 0" style="width: 80px">
              訂購
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>


//import { Store } from 'vuex';

export default {
  
  props:['sendDataToChild'],
  data() {
    return {
      dtnumber: 1,
      dataList: null,
      dataQuantity: [],
      name : null,
      getPropFromParent:this.sendDataToChild,

    };
  },
  
  methods: {
    getImage(path) {
      return path;
    },
    updToParent(e,val) {      
      this.$emit('updToParent',e,val)
    },
    calQuantity(index,max,flag) {
      if (!this.dataQuantity[index]) {this.dataQuantity[index] = 0}
      if (flag === '+') {        
        if(this.dataQuantity[index]<max) {
          this.dataQuantity[index] +=1
        }
      } else {
        if (this.dataQuantity[index] > max) {
          this.dataQuantity[index] -=1
        }
      }
    },
    modelClick(model) {
        alert(model);
    },
    orderClick(index) {
      
      let q = 0;
      q = this.dataList[index].maxQuantity - this.dataQuantity[index]
      this.dataList[index].maxQuantity = q
      
      let payload = {
        model: this.dataList[index].model,
        orderNum: this.dataQuantity[index]
      }
      this.dataQuantity[index] = 0
      
      this.$store.commit('setCurrentOrder',payload)
      console.log(this.$store.state.currentOrder)
    },
    imgClick(event,index){
      //alert(`imgclick = ${index}`)
      
      this.updToParent(event,index)
    }
  },
 
  mounted() {
    
    // this.$store.dispatch('getProductData')
    //   .then(
    //      () => {
    //        console.log('Action OK')
    //        this.dataList= this.$store.state.products.dataList
    //        }
    //   )
    var getData = async () => {
      try {
        await this.$store.dispatch('getProductData')
        this.dataList= this.$store.state.products.dataList
      } catch (error) {
         console.log(error)
      }
      
    }
    getData()
        
  },
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