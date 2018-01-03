<template>
  <div class="index">
    <div class="text-box">
      <h1 class="primary">
        <span class="primary-main">Helena Fogelberg</span>
        <span class="primary-sub">Art</span>
      </h1>
      <router-link :to="/artworks">Welcome</router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/styles/style";

  .index {
    height: 100%;
    width: 100vw;
    background-image: linear-gradient(to right bottom, #edcdc2, #898e8c);
    display:flex;
    align-items: center;
    justify-content: center;
  }

  .text-box {
    padding: 0.5rem;
    text-align: center;
    background-image: linear-gradient( to left top, rgba(137, 142, 140, 0.8), rgba(237, 205, 194, 0.8)), url("../assets/images/palette.jpg");
    display:flex;
    align-items: center;
    justify-content: center;
    clip-path: polygon(0 0, 100% 0, 100% 75%, 0 100%);
  }

  h1.primary {
    font-family: "La Belle Aurore", cursive;
    color: #34385E;

    .primary-main {
      display: block;
      font-size: 4.5rem;
      letter-spacing: 0.1rem;
      text-transform: uppercase;
    }

    .primary-sub {
      display: block;
      font-size: 6rem;
      letter-spacing: 0.2rem;
      margin-bottom: 4rem;
    }

  }





</style>