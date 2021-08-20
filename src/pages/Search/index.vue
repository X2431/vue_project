<template>
  <div>
      <!-- Search  {{$route.params.keyword}}  ---------{{keyword}}
              {{$route.query.keyword1}}-----------{{keyword1}} -->
      <TypeNav></TypeNav>
  </div>
</template>

<script>
  export default {
    name:'Search',
    props:['keyword','keyword1']
  }
</script>

<style>

</style>