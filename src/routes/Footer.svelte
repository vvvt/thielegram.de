<script lang="ts">
</script>

<footer>
  <img
    class="logo"
    src="/src/lib/assets/icon.svg"
    alt="Logo of the Website"
  />
  <span class="line">© {new Date().getFullYear()} Vincent Thiele</span>
  <a
    href="https://prist.marguerite.io/"
    class="line"
  >
    Design based on "Prist" by Marguerite Roth
  </a>
</footer>

<style lang="scss">
  footer {
    padding-top: 3.75em;
    padding-bottom: 3em;
    display: flex;
    flex-direction: column;
    align-items: center;

    .logo {
      width: 50px;
      aspect-ratio: 1;
    }

    .line {
      font-size: 0.75em;
      color: #74767E;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 1.5em;
    }

    a {
      text-decoration: none;
      color: #74767E;

      &:hover {
        color: blue;
      }
    }
  }
</style>
