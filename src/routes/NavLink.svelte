<script lang="ts">
  import type { Snippet } from 'svelte';

  interface Props {
    children: Snippet;
    href: string;
  }

	let { children, href }: Props= $props();
</script>

<li>
  <a class="pos-relative" href={href}>
    {@render children()}
  </a>
</li>

<style lang="scss">
  li {
		position: relative;
		height: 100%;
	}

	a {
		color: currentColor;
    text-decoration: none;
    border-bottom: 3px solid transparent;
    font-weight: 600;
    font-size: 0.95em;
    height: 100%;
    display: block;
    position: relative;

    &:after {
      position: absolute;
      content: "";
      bottom: 0;
      width: 5px;
      height: 5px;
      background: transparent;
      bottom: -14px;
      right: 50%;
      margin-right: -3px;
      transition: 100ms ease-in-out background;
      border-radius: 4px;
    }
	}

  li[aria-current='page'] a::after,
  a:hover::after {
    background: blue;
    transition: 100ms ease-in-out background;
  }
</style>
