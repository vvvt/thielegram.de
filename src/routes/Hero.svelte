<div class="hero">
  <h1>My name is <a href="#about-me">Vincent</a>. I'm a Frontend Software Developer at <a href="https://visualistik.de">Technische Visualistik</a></h1>
</div>

<style lang="scss">
  @use '$lib/styles/colors.scss' as colors;

  .hero {
    padding-top: 2.5em;
    padding-bottom: 3em;
    margin-bottom: 6em;
    max-width: 830px;

    @media (max-width: var(--maxwidthMobile)) {
      margin-bottom: 3em;
    }

    h1 {
      margin-bottom: 1em;

      a {
        text-decoration: none;
        transition: all 100ms ease-in-out;

        &:nth-of-type(1) {
          color: colors.$blue-500;
        }
        &:nth-of-type(2) {
          color: colors.$orange-500;
        }
        &:nth-of-type(3) {
          color: colors.$purple-500;
        }
        &:nth-of-type(4) {
          color: colors.$green-500;
        }
        &:nth-of-type(5) {
          color: colors.$teal-500;
        }

        &:hover {
          cursor: pointer;
          transition: all 100ms ease-in-out;

          &:nth-of-type(1) {
            color: colors.$blue-600;
            background-color: colors.$blue-200;
          }
          &:nth-of-type(2) {
            color: colors.$orange-600;
            background-color: colors.$orange-200;
          }
          &:nth-of-type(3) {
            color: colors.$purple-600;
            background-color: colors.$purple-200;
          }
          &:nth-of-type(4) {
            color: colors.$green-600;
            background-color: colors.$green-200;
          }
          &:nth-of-type(5) {
            color: colors.$teal-600;
            background-color: colors.$teal-200;
          }
        }
      }
    }
  }
</style>
