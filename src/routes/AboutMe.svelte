<script lang="ts">
  import type { RichTextField } from '@prismicio/client';
  import { PrismicRichText } from '@prismicio/svelte';

  interface Props {
    bio: RichTextField;
    socialLinks: Array<{url: string; text: string}>;
  }
  const { bio, socialLinks }: Props = $props();
</script>

<section class="about" id="about-me">
  <div class="about__links">
    {#each socialLinks as link}
      <a
        class="about__link"
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        {link.text}
        <span>&#8594;</span>
      </a>
	  {/each}
  </div>
  <!-- <div class="about__bio">{bio}</div> -->
  <PrismicRichText field={bio}/>
</section>

<style lang="scss">
  .about {
    padding-top: 1em;
    display: grid;
    grid-template-columns: 8em 1fr;
    grid-gap: 3em;
    line-height: 1.9;

    @media (max-width: var(--maxwidthTablet)) {
      grid-template-columns: 1fr 3fr;
    }

    @media (max-width: var(--maxwidthMobile)) {
      grid-template-columns: 7em 1fr;
      column-gap: 2em;
      row-gap: 0;
    }

    &__links {
      padding-top: 1em;
      padding-bottom: 3em;
      display: flex;
      flex-direction: column;

      @media (max-width: var(--maxwidthMobile)) {
        grid-row: 2;
      }
    }

    &__link {
      margin-bottom: 1.5em;
      font-weight: 600;
      line-height: 1.9;
      text-decoration: none;
      color: currentColor;

      span {
        margin-left: 1em;
        transform: translateX(-8px);
        display: inline-block;
        opacity: 0;
        transition: all 400ms ease-in-out;
      }

      &:hover {
        span {
          transform: translateX(0px);
          opacity: 1;
          transition: all 150ms ease-in-out;
        }
      }
    }

    &__bio {
      padding-bottom: 3em;
      max-width: 70ch;

      @media (max-width: var(--maxwidthMobile)) {
        grid-row: 2;
      }
    }
  }
</style>
