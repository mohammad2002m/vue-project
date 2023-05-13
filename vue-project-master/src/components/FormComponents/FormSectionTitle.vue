<template>
    <label> {{ title }} </label>
    <hr>
</template>

<script>
export default {
  name: 'FormSectionTitle',
  props: {
    title: String
  }
}
</script>

<style scoped>
  label {
    font-size: 20px;
    font-weight: 600;
  }
  hr {
    margin-top: 10px;
    margin-bottom: 40px;
  }
</style>