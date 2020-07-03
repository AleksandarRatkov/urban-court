<template>
  <footer
    class="footer"
    :class="{ [`footer-${type}`]: type }"
    :data-background-color="backgroundColor"
  >
    <div class="container">
      <nav>
        <ul>
          <li>
            <a href="https://opens2019.rs/">
              Opens
            </a>
          </li>
          <li>
            <a href="http://liman3x3.com/">
              Liman 3x3
            </a>
          </li>
        </ul>
      </nav>
      <div class="copyright">&copy; {{ year }}, All rights reserved</div>
    </div>
  </footer>
</template>
<script>
export default {
  props: {
    backgroundColor: String,
    type: String,
  },
  data() {
    return {
      year: new Date().getFullYear(),
    };
  },
};
</script>
<style></style>
