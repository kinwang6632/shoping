<template>
  <div class="mx-auto w-75 h-75 p-5">
    <div v-if="false" class="w-100 h-100">無任何資料</div>
    <div v-if="true" class="overflow: auto">
      <table class="table w-100 mx-auto table-hover">
        <thead>
          <tr>
            <th
              scope="col"
              class="text-center text-secondary"
              style="width: 50px"
            >
              #
            </th>
            <th scope="col" style="width: 120px" class="text-secondary"></th>
            <th scope="col" style="widht: 250px" class="text-secondary">
              型號
            </th>
            <th scope="col" style="widht: 150px" class="text-secondary">
              價格
            </th>
            <th
              scope="col"
              style="width: 250px"
              class="text-center text-secondary"
            >
              訂購數量
            </th>
            <th
              scope="col"
              class="text-center text-secondary"
              style="width: 200px"
            >
              取消訂購
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(data, index) in showOrdProducts" :key="index">
            <th
              role="row"
              class="
                text-center
                justify-content-center
                aligh-items-center
                align-middle
                text-primary
              "
            >
              {{ index + 1 }}
            </th>
            <td>
              <div
                class="
                  d-flex
                  justify-content-center
                  align-items-center
                  w-100
                  h-100
                  align-middle
                "
              >
                <img
                  :src="require(`../jpg/${data.imgPath}`)"
                  class="rounded zoom"
                  style="height: 85px"
                />
              </div>
            </td>
            <td class="align-middle">{{ data.model }}</td>
            <td class="align-middle">{{ data.price }}</td>
            <td class="align-middle">
              <div
                class="col d-flex align-items-center text-center"
                style="text-align: right"
              >
                <div class="input-group">
                  <button
                    class="btn btn-danger"
                    type="button"
                    @click="change(data.model, '-')"
                    :disabled="data.ordNum === 1"
                  >
                    -
                  </button>
                  <input
                    class="form-control text-center bg-white"
                    v-model="data.ordNum"
                  />
                  <button
                    class="btn btn-primary text-white"
                    type="button"
                    :disabled="data.maxQuantity === 0"
                    @click="change(data.model, '+')"
                  >
                    +
                  </button>
                </div>
              </div>
              <div
                v-if="data.maxQuantity === 0"
                class="text-danger text-center pt-2"
              >
                *已達庫存量
              </div>
            </td>
            <td class="align-middle">
              <div
                class="
                  d-flex
                  justify-content-center
                  align-items-center
                  w-100
                  h-100
                "
              >
                <button
                  type="button"
                  class="btn-close btn-outline-light"
                  aria-label="Close"
                  @click="deleteItem(data.model)"
                ></button>
              </div>
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colspan="2" class="text-secondary" style="width: 50px"></td>
            <td style="widht: 250px" class="text-secondary"></td>
            <td scope="col" style="widht: 150px" class="text-danger">
              {{ totalProduct.price }}
            </td>
            <td
              scope="col"
              style="width: 250px"
              class="text-center text-danger"
            >
              {{ totalProduct.number }}
            </td>
            <td
              scope="col"
              class="text-center text-secondary"
              style="width: 200px"
            >
              <div class="w-100 h-100">
                <button type="button" class="btn btn-outline-success w-100">
                  確認訂單
                </button>
              </div>
              <div class="w-100 h-100 mt-2">
                <button type="button" class="btn btn-outline-danger w-100">
                  取消訂單
                </button>
              </div>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  </div>
</template>

<script>
import { onMounted, inject, computed, watch, reactive,  } from "vue";
import { useStore } from "vuex";
import  {getChange}  from '../watchChange'
export default {
  //inject: ["currentOrder"],
  setup() {
    const store = useStore();
    const origineProducts = inject("currentOrder");
    let ordProducts = reactive(origineProducts);
    // inProducts = ordProducts;
    
    let products = store.state.products;
    //inProducts = reactive(products);
    //inProducts = reactive( products);
    //chgDataFromJs.setProducts(products)    
    
    const totalProduct = reactive({
      price: 0,
      number: 0,
    });
    const showOrdProducts = computed(() => {
      let o = [];
      if (!ordProducts) {
        return o;
      }
      if (products.dataList) {
        products.dataList.forEach((element) => {
          let index = ordProducts.findIndex((value) => {
            return value.model === element.model;
          });
          if (index >= 0) {
            o.push({
              model: element.model,
              price: element.price,
              ordNum: ordProducts[index].orderNum,
              imgPath: element.imgPath,
              maxQuantity: element.maxQuantity,
            });
          }
        });
      }
      return o;
    });
    const change = function (model, flag) {
      const index = ordProducts.findIndex((element) => element.model === model);
      if (index >= 0) {
        if (flag === "+") {
          ordProducts[index].orderNum += 1;
        } else {
          ordProducts[index].orderNum -= 1;
          
        }
      }
    };
    const getTotal = async function () {
      totalProduct.price = 0;
      totalProduct.number = 0;
      if (products.dataList) {
        await products.dataList.forEach((value) => {
          let index = ordProducts.findIndex(
            (element) => element.model == value.model
          );
          if (index >= 0) {
            totalProduct.number += ordProducts[index].orderNum;
            totalProduct.price += value.price * ordProducts[index].orderNum;
          }
        });
      }
    };

    

    watch(() => [...ordProducts],(newValue,oldValue) => {  
      //console.log('my o' ,chgDataFromJs)      
       getChange(newValue,oldValue)                   
    }); 
    watch(getTotal);

    function deleteItem(model) {
      const findDeleteItem  = ordProducts.find((e) => e.model === model);
      const findIndex = products.dataList.findIndex((e) => e.model === model);
      if(findIndex >= 0) {
        products.dataList[findIndex].maxQuantity += findDeleteItem.orderNum;
      }

      let newProducts = ordProducts.filter((element) => element.model != model);

      

      ordProducts.length = 0;
      ordProducts.push(...newProducts);

      
      
    }

    onMounted(() => {
      store.commit("setLoadDataOK", true);
      
    });

    return {
      ordProducts,
      showOrdProducts,
      totalProduct,
      deleteItem,
      getTotal,
      change,
    };
  },

  beforeRouteEnter(to, from, next) {
    next((vm) => {
      console.log(vm);
    });
  },
};
</script>

<style>
</style>