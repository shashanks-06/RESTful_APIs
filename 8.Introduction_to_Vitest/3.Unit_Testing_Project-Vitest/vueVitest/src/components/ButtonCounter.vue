<script>
export default {
  data() {
    return {
      count: 0,
    };
  },
};
</script>

<template>
  <button @click="count++">You Clicked me {{ count }} times.</button>
  <p><slot></slot></p>
</template>
