<template>
  <h1>hello</h1>
  <img src="@/assets/logo.png">
  <p>{{ $store.state.count }}</p>
  <el-button type="primary">
    Primary
  </el-button>
  <el-date-picker
    v-model="value1"
    type="date"
    placeholder="选择日期"
  />
  <HelloWorld />
</template>

<script lang="ts" setup>
import HelloWorld from '@/components/HelloWorld.vue'
// import { useStore } from '@/store'
import { getLoginInfo } from '@/api/user'
import { onMounted, ref } from '@vue/runtime-core'
import type { ILoginInfo } from '@/api/types/user'

const list = ref<ILoginInfo['slide']>([])
const value1 = ref('')
// const store = useStore()
// console.log(store.state.count)
onMounted(() => {
  getLoginInfo().then((res) => {
    // console.log(res)
    list.value = res.slide
    console.log(list.value)
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
