<template>
  <h1>hello</h1>
  <img src="@/assets/logo.png">
  <p>{{ $store.state.count }}</p>
  <HelloWorld />
</template>

<script lang="ts" setup>
import HelloWorld from '@/components/HelloWorld.vue'
import { useStore } from '@/store'
import { getLoginInfo } from '@/api/user'
import { onMounted } from '@vue/runtime-core'
const store = useStore()
console.log(store.state.count)
onMounted(() => {
  getLoginInfo().then((res) => {
    console.log(res)
  })
})
</script>
<style lang="scss" scoped>
// @import url("@/styles/index.scss");
h1 {
  font-size: $fontSize;
  color: $fontColor;
}
</style>
