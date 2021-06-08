<template>
  <header class="header">
    <!--<Container class="header-inner">-->
    <router-link to="/" class="logo"> Diren News </router-link>

    <nav id="category">
      <ul>
        <li>
          <router-link to="/news">
            <h3>News</h3>
          </router-link>
        </li>

        <li>
          <router-link to="/sport">
            <h3>Sport</h3>
          </router-link>
        </li>

        <li>
          <router-link to="/economy">
            <h3>Economy</h3>
          </router-link>
        </li>
      </ul>

    </nav>
    <!-- </Container>-->
  </header>
</template>

<script>
//import Container from "@/components/Container.vue";

export default {
  name: "Navbar",
  components: {
    //Container,
  },
};
</script>

<style scoped>
.header {
  background-color: #42b983;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
}
.logo {
  color: #2c3e50 !important;
    width: 100%;
    height: 100%;
    max-width: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;    
    font-size: 30px;
}

nav > ul {
  width: 25vw;
  margin-top: 25px;
  margin-left: 700px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  font-size: 20px;
}
</style>
