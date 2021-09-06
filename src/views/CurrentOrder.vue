<template>
  <div>
      1111
  </div>
</template>

<script>
export default {
inject: ['currentOrder'],
beforeRouteEnter(to,from,next) {
    console.log(to,from)
    next((vm) => {
        console.log(vm)
    })
  },
}
</script>

<style>

</style>