<template>
  <BoardPage />
</template>

<script>
import BoardPage from '@/pages/BoardPage'

export default {
  name: 'App',
  components: {
    BoardPage
  }
}
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background: teal;
  }
</style>
