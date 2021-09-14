
import  {useStore}   from "vuex";
var products = {}
void function getProducts(){
    const store = useStore();
    products = store.state.products;
}()
function getChange(newValue, oldValue) {    
    if (newValue.length === 0) {
        console.log(products.dataList)
        oldValue.forEach((v) => {
            const index = products.dataList.findIndex((element) => element.model === v.model)
            if (index >= 0) {
                products.dataList[index].maxQuantity += v.orderNum;
            }
        })
    }
}
function setProducts(value) {
    products = value
}

module.exports = {
    getChange,
    setProducts
}
