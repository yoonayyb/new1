<template>
    <div class="home">
      <router-view v-if="$route.meta.active" :key="key"></router-view>
    </div>
</template>

<script>
export default {
  name: 'test',
  computed: {
    key() {
      return this.$route.name !== undefined ? this.$route.name + +new Date() : this.$route + +new Date();
    },
  },
  mounted() {
    this.key();
    console.log(this.key());
  },

};
</script>

<style scoped lang="scss">
.home{
  width: vw(800);
  height: vw(800);
  background: #1E9FFF;
  margin: vw(150) auto;
}
</style>
