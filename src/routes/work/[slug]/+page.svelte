<script lang="ts">
    import type { RTTextNode } from '@prismicio/client';

  export let data;
  
  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);

    return date.toLocaleDateString('de', { year: 'numeric', month: 'short' });
  }

  const category = data.project.project_category[0] as RTTextNode;
  const title = data.project.project_title[0] as RTTextNode;
  const from = data.project.project_start_date as string;
  const to = data.project.project_end_date as string;
  const ongoing = data.project.project_ongoing;
  const description = data.project.project_preview_description[0] as RTTextNode;
  const image = data.project.project_hero_image;
</script>

<h1 class="project__title">{title.text}</h1>
{#if image}
  <div class="project__image">
    <img src={image.url} alt={image.alt} />
  </div>
{/if}
<div class="project__body">
  {description.text}
</div>

<style lang="scss">
  .project {
    &__title {
      max-width: 550px;
      margin: 0 auto;
      text-align: center;
    }

    &__image {
      background: #f2f2f2;
      display: flex;
      justify-content: center;
      align-items: flex-end;
      overflow: hidden;
      position: relative;
      padding-top: 2.25em;
      margin-bottom: 3.5em;

      img {
        max-width: 600px;
      }
    }

    &__body {
      max-width: 550px;
      margin: 0 auto;

      .block-img {
        margin-top: 3.5em;
        margin-bottom: 0.5em;

        img {
          width: 100%;
        }
      }
    }
  }
</style>
