<template>
  <h1>hello</h1>
  <p>{{ $store.state.count }}</p>
  <HelloWorld />
</template>

<script lang="ts" setup>
import HelloWorld from '../../components/HelloWorld.vue'
import { useStore } from '../../store'
const store = useStore()
console.log(store.state.count)
</script>
