<template>
  <div class="row p-0 m-0">
    <nav class="navbar navbar-expand-lg bg-dark">
      <div class="container-fluid">
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
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <router-link class="nav-link fs-6 text-warning" to="/home">
              Home
            </router-link>
            <router-link class="nav-link fs-6 text-warning" to="/favorites">
              Favorites
            </router-link>
          </ul>
        </div>
      </div>
    </nav>
    <router-view
      style="background-color: #161616; min-height: 100vh"
    ></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "LayoutPage",
  setup() {},
});
</script>
