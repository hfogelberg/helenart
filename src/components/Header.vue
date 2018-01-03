<template lang="html">
  <header>
    <ul>
      <li><h1><router-link to='/'>Helena Fogelberg Art</router-link></h1><li>
      <li><router-link to='/admin'>Admin</router-link></li>
      <li><router-link to='/about'>About</router-link></li>
      <li><router-link to='/contact'>Contact</router-link></li>
    </ul>
  </header>
</template>



<style lang="scss" scoped>
  @import "../assets/styles/style";
  
  header {
    background-color: rgba(52, 56, 94, 0.6);
    color: rgba(236, 240, 241,1.0);
  }

  header h1 {
    font-size: 1.6em;
  }

  header ul {
    margin-left: 1em;
    margin-right: 1em;
    list-style: none;
    display: flex;
    line-height: 4em;
  }

  li {
    flex: 0 0 auto;
    margin: 0.2em;
  }

  li:nth-child(1) {
    margin-right: auto;
  }
</style>
