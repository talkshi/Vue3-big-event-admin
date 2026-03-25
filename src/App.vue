<script setup>
import { useUserStore } from '@/stores/modules/user'
const userStore = useUserStore()
</script>

<template>
  <div>
    <el-button @click="userStore.setToken('myname')">Click me</el-button>
    <el-button @click="userStore.removeToken()">Click me</el-button>
    {{ userStore }}
  </div>
</template>

<style scoped></style>
