<script lang="ts">
  import type { RTTextNode } from '@prismicio/client';
  import type { ProjectDocument } from '../../prismicio-types';
  
  const { project }: { project: ProjectDocument<string>} = $props();
  const { data } = project;
  
  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);

    return date.toLocaleDateString('de', { year: 'numeric', month: 'short' });
  }

  const category = data.project_category[0] as RTTextNode;
  const title = data.project_title[0] as RTTextNode;
  const from = data.project_start_date as string;
  const to = data.project_end_date as string;
  const ongoing = data.project_ongoing;
  const description = data.project_preview_description[0] as RTTextNode;
  const thumbnail = data.project_preview_thumbnail;
</script>

<a class="card" href={`/work/${project.uid}`}>
  <div class="card__content">
    <span class="card__category">{category.text}</span>
    <h3 class="card__title">{title.text}</h3>
    <div class="card__dates">
      {formatDate(from)}
      &ndash;
      {ongoing ? "today" : formatDate(to)}
    </div>
    <div class="card__blurb">{description.text}</div>
    <span class="card__action">
      Details <span>&#8594;</span>
    </span>
  </div>
  <div class="card__image">
    <img src={thumbnail.url} alt={title.text} />
  </div>
</a>

<style lang="scss">
  @use '$lib/styles/colors.scss' as colors;

  .card {
    display: grid;
    grid-template-columns: 4fr 7fr;
    box-shadow: 0px 9px 24px rgba(0, 0, 0, 0.06);
    margin-bottom: 4em;
    transition: all 150ms ease-in-out;
    text-decoration: none;
    color: currentColor;

    @media (max-width: 950px) {
      grid-template-columns: 4.5fr 7fr;
    }

    @media (max-width: var(--maxwidthTablet)) {
      grid-template-columns: 1fr;
    }

    @media (max-width: var(--maxwidthMobile)) {
      margin-bottom: 2em;
    }

    &:hover {
      box-shadow: 0px 9px 24px rgba(0, 0, 0, 0.1);
      transition: all 150ms ease-in-out;

      .ProjectCardAction {
        color: colors.$blue-500;
        transition: all 150ms ease-in-out;

        span {
          transform: translateX(0px);
          opacity: 1;
          transition: transform 150ms ease-in-out;
        }
      }

      &__content::before {
        opacity: 0.02;
        transition: all 150ms ease-in-out;
      }

      &__image::before {
        opacity: 0.2;
        transition: all 150ms ease-in-out;
      }
    }

    &__content {
      background: white;
      padding: 4em 3em 2.25em 3em;
      position: relative;

      &:before {
        position: absolute;
        content: "";
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        background: colors.$blue-500;
        mix-blend-mode: multiply;
        opacity: 0;
        transition: all 150ms ease-in-out;
      }

      @media (max-width: 950px) {
        padding: 3.25em 2.5em 2em 2.5em;
      }

      @media (max-width: var(--maxwidthTablet)) {
        grid-row: 2;
      }
    }

    &__category {
      font-weight: 600;
      color: gray;
    }

    &__title {
      margin-bottom: 0.5em;
      margin-top: 0.5em;
    }

    &__dates {
      font-weight: 600;
      color: gray;
    }

    &__action {
      font-weight: 600;
      text-decoration: none;
      color: currentColor;
      transition: all 150ms ease-in-out;

      span {
        margin-left: 1em;
        transform: translateX(-8px);
        display: inline-block;
        transition: transform 400ms ease-in-out;
      }
    }

    &__blurb {
      margin-top: 0.5em;
      margin-bottom: 5em;

      @media (max-width: var(--maxwidthTablet)) {
        margin-bottom: 2.5em;
      }
    }

    &__image {
      background: #F2F2F2;
      display: flex;
      justify-content: center;
      align-items: flex-end;
      overflow: hidden;
      position: relative;
      padding-left: 2em;
      padding-right: 2em;

      @media (max-width: var(--maxwidthTablet)) {
        padding: 0;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
      }

      &:before {
        position: absolute;
        content: "";
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        background: colors.$blue-500;
        mix-blend-mode: multiply;
        opacity: 0;
        transition: all 150ms ease-in-out;
      }

      img {
        max-width: 400px;
        width: 100%;

        @media (max-width: var(--maxwidthTablet)) {
          max-width: unset;
        }
      }
    }

  }
</style>
