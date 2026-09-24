<script setup lang="ts">
import Button from "../src/components/Button/Button.vue";
import Icon from "../src/components/Icons/Icon.vue";
</script>
<template>
  <div class="bg-gray-500 h-100 w-100">
    <Icon name="plus" size="xl"></Icon>
    <Icon name="plus" size="xs"></Icon>
    <Button size="xl">click me</Button>
    <Button size="lg">click me</Button>
    <Button size="md">click me</Button>
    <Button size="sm">click me</Button>
    <Button size="xs">click me</Button>
  </div>
</template>
