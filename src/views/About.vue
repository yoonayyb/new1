<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
<script>
export default {
  mounted() {
    console.log(this.$store.state.login);
    console.log(this.$store.state.pwd);
  },
};
</script>
