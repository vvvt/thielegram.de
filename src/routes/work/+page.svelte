<script lang="ts">
  import ProjectCard from './ProjectCard.svelte';

  export let data;
</script>

<div>
  {#each data.projects as project}
    <ProjectCard project={project} />
  {/each}
</div>
