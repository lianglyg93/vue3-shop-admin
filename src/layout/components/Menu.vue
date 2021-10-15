<template>
  <el-menu
    :unique-opened="true"
    default-active="2"
    class="el-menu-vertical-demo"
    background-color="#304156"
    text-color="#bcc0c5"
    active-text-color="#2d8cf0"
    router
  >
    <el-menu-item index="/">
      <i class="el-icon-menu" />
      <template #title>
        主页
      </template>
    </el-menu-item>
    <el-sub-menu index="1">
      <template #title>
        <i class="el-icon-location" />
        <span>商品</span>
      </template>
      <el-menu-item index="1-1">
        商品管理
      </el-menu-item>
      <el-menu-item index="1-2">
        商品分类
      </el-menu-item>
      <el-menu-item index="1-3">
        商品规格
      </el-menu-item>
      <el-menu-item index="1-4">
        商品评论
      </el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.el-menu {
  border-right: none;
}
</style>
