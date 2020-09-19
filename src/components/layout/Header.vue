<template>
  <header class="header">
    <ul class="list">
      <li :class="{ item: true, selected: $route.path === '/' }">
        <router-link to="/">Movies</router-link>
      </li>
      <li :class="{ item: true, selected: $route.path === '/tv' }">
        <router-link to="/tv">TV</router-link>
      </li>
      <li :class="{ item: true, selected: $route.path === '/search' }">
        <router-link to="/search">Search</router-link>
      </li>
    </ul>
  </header>
</template>

<script>
export default {
  name: "Header"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  background: rgba(20, 20, 20, 0.8);
  box-shadow: 0 1px 5px 2px rgba(0, 0, 0, 0.8);
}
.list {
  display: flex;
}
.item {
  width: 80px;
  height: 50px;
  text-align: center;
}
.selected {
  border-bottom: 3px solid #3498db;
  transition: border-bottom 0.5s ease-in-out;
}
.item a {
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
