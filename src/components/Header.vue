<template>
  <header class="header">
    <h1>Newsletter</h1>
    <div id="nav">
      <div class="right">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </div>
    </div>
  </header>
<!--  <md-toolbar class="md-info">
    <div class="md-toolbar-row">
      <div class="md-toolbar-section-start">
        <h3 class="md-title">Info Color</h3>
      </div>
      <div class="md-toolbar-section-end">
        <md-button
            class="md-just-icon md-simple md-white md-toolbar-toggle"
        >
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </md-button>

        <div class="md-collapse">
          <md-list>
            <md-list-item href="#/">
              <p>Discover</p>
            </md-list-item>

            <md-list-item href="javascript:void(0)">
              <p>Profile</p>
            </md-list-item>

            <md-list-item href="javascript:void(0)">
              <p>Settings</p>
            </md-list-item>
          </md-list>
        </div>
      </div>
    </div>
  </md-toolbar>-->
</template>

<script>
export default {
  name: "Header",
}
</script>

<style scoped>
  .header {
    background: #2c3e50;
    color: white;
    text-align: center;
    padding: 10px;
  }

  h1 {
    float: left;
  }

  .right {
    float: right;
  }

  #nav {
    padding: 30px;
    /*float: right;*/
  }

  #nav a {
    font-weight: bold;
    color: #ecf0f3;
  }

  #nav a.router-link-exact-active {
    color: #42b983;
  }

</style>