<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-yellow">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img :src="logo" style="width: 100px" />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" href="#">Find a Locker</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" href="#">Size Guide</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" href="#">Locations</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" href="#">Help Center</a>
          </li>
        </ul>
        <ul class="d-flex navbar-nav">
          <li class="nav-item">
            <a href="" class="nav-link active">My Account</a>
          </li>
          <li class="nav-item">
            <a href="" class="nav-link active">080-188-0872</a>
          </li>
          <li class="nav-item">
            <button
              class="btn text-white"
              style="border-radius: 50px; background-color: #ad9e4b"
              type="submit"
            >
              Pay your bill
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import logo from "../assets/logo.png";

export default {
  data() {
    return {
      logo: logo,
    };
  },
};
</script>

<style scoped>
a {
  font-weight: 600;
}
</style>
