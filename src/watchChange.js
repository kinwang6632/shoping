
export let  inProducts = {}
    
/*
function getProducts(){
    // const store = useStore();
    // products = store.state.products;
} */
export function getChange(newValue, oldValue) {  
    console.log(newValue + oldValue);
    /*
    if (newValue.length === 0) {
        console.log('products' ,inProducts)
        oldValue.forEach((v) => {
            const index = inProducts.dataList.findIndex((element) => element.model === v.model)
            if (index >= 0) {
                inProducts.dataList[index].maxQuantity += v.orderNum;
            }
        })
    } */
}
export function setProducts(value) {
    inProducts = value
}
/*
module.exports = {
    getChange,
    setProducts,
    products
} */
