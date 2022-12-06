<template>
  <div class="container">
    <select class="form-select" aria-label="Default select example">
      <option selected>Select your filter</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </select>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.container {
  margin-top: 50px;
  padding-left:20px;

  .form-select{
    width: 200px;
    margin-bottom: 50px;
  }
}
</style>
