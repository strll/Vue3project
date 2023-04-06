<template>

  <router-view/>

</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: #42b983;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  background: #42b983;
}

nav a.router-link-exact-active {
  color: #42b983;
}

body,html{
  padding:0;
  margin:0;
}
/* flex布局类名 */
.flex-float{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.flex{
  display: flex;
  align-items: center;
  background: #42b983;
}
.page_content{
  box-sizing: border-box;
  display: block;
  width: 100%;
  padding:20px;
  background: #fff;
  margin-top: 30px;
}
</style>
