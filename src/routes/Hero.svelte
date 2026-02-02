<div class="hero">
  <h1>My name is <a href="#about-me">Vincent</a>. I'm a Frontend Software Developer at <a href="https://visualistik.de">Technische Visualistik</a></h1>
</div>

<style lang="scss">
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
          color: blue; // blue500
        }
        &:nth-of-type(2) {
          color: orange; // orange500
        }
        &:nth-of-type(3) {
          color: purple; // purple500
        }
        &:nth-of-type(4) {
          color: green; // green500
        }
        &:nth-of-type(5) {
          color: teal; // teal500
        }

        &:hover {
          cursor: pointer;
          transition: all 100ms ease-in-out;

          &:nth-of-type(1) {
            color: blue; // blue600
            background-color: blue; // blue200
          }
          &:nth-of-type(2) {
            color: orange; // orange600
            background-color: orange; // orange200
          }
          &:nth-of-type(3) {
            color: purple; // purple600
            background-color: purple; // purple200
          }
          &:nth-of-type(4) {
            color: green; // green600
            background-color: green; // green200
          }
          &:nth-of-type(5) {
            color: teal; // teal600
            background-color: teal; // teal200
          }
        }
      }
    }
  }
</style>
