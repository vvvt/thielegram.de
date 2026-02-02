<script lang="ts">
  import type { RTTextNode } from '@prismicio/client';
  import AboutMe from './AboutMe.svelte';
  import Hero from './Hero.svelte';
  import ProjectCard from './work/ProjectCard.svelte';

  export let data;
  const { about_bio, about_links, about_title } = data.homepage[0].data
  const bio = about_bio;
  const links = about_links.map((link) => ({
    text: (link.about_link[0] as any).text,
    url: (link.about_link[0] as any).spans[0].data.url
  }));
  console.log('links:', links);
  const title = about_title[0] as RTTextNode;
</script>

<Hero />

<section id="recent">
  <h2>Recent Stuff</h2>
  <div class="projects">
    {#each data.projects as project}
      <ProjectCard project={project} />
    {/each}
  </div>
</section>

<h3>{title.text}</h3>

<AboutMe
  bio={bio}
  socialLinks={links}
/>
