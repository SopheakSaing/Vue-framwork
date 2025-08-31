<script setup>
import { defineProps } from 'vue';
 const props = defineProps({
   total: Number,
   required: true
 })
</script>

<template>
  <h4>Your Balance</h4>
  <h1>${{total}}</h1>
</template>

<style scoped>

</style>