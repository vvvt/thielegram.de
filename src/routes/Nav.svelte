<script lang="ts">
	let { children } = $props();
</script>

<nav>
  <ul>
    {@render children()}
  </ul>
</nav>

<style lang="scss">
  nav {
		display: flex;
		justify-content: center;
		--background: rgba(255, 255, 255, 0.7);
	}

  ul {
    list-style-type: none;
    display: grid;
    grid-template-columns: repeat(2, auto);
    grid-gap: 7em;
    justify-content: flex-end;
    width: 100%;
    max-width: 200px;

    @media (max-width: var(--maxwidthTablet)) {
      grid-gap: 5.5em;
    }

    @media (max-width: var(--maxwidthMobile)) {
      grid-gap: 2.5em;
    }
	}
</style>
