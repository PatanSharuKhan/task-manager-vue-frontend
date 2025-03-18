<script setup lang="ts">
import WelcomeItem from './WelcomeItem.vue'

const openReadmeInEditor = () => fetch('/__open-in-editor?file=README.md')
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>This is home page</template>

    <a>Go to Tasks</a>
  </WelcomeItem>
</template>
