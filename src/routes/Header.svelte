<script lang="ts">
  import Logo from './Logo.svelte';
  import Nav from './Nav.svelte';
  import NavLink from './NavLink.svelte';

  const links = [
    {
      text: 'Work',
      ref: '/work'
    }
  ];
</script>

<header>
  <Logo />
	<Nav>
    {#each links as link}
      <NavLink href={link.ref}>{link.text}</NavLink>
    {/each}
  </Nav>
</header>

<style lang="scss">
	header {
    padding-top: 3.75em;
    padding-bottom: 3em;
		display: flex;
		justify-content: space-between;
	}
</style>
