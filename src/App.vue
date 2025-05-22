<template>
  <div class="bg-center bg-cover loan-bg">
    <router-view />
  </div>
</template>

<style scoped>
.loan-bg {
  background-image: url('@/assets/loan_chart.jpg');
  background-size: cover;
  background-position: center;
  min-height: 100vh;
}

</style>
