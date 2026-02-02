<script lang="ts">
  const { children } = $props();
</script>

<main>{@render children()}</main>

<style lang="scss">
  main {
    flex: 1;
    padding-bottom: 5em;
  }
</style>
