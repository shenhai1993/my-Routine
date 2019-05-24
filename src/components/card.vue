<template>
  <div>
    <p class="card">
      {{text}}
    </p>
  </div>
</template>

<script>
export default {
  props: ['text']
}
</script>

<style>
.card {
  font-size: 0.4rem;
  padding: 10px;
  color: #000000;
}
</style>
