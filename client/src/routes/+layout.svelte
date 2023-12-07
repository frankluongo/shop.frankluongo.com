<script>
  import Container from "$lib/layouts/Container.svelte";
</script>

<header class="header">
  <Container>
    <a class="header__title" href="/" title="Return to main content">⬅️</a>
  </Container>
</header>
<main>
  <slot />
</main>

<style>
  header {
    position: sticky;
    top: 0;

    padding-block: 1rem;

    background-color: var(--black);
  }

  main {
    padding-top: 1rem;
  }

  @media (min-width: 1024px) {
    main {
      padding-top: 2rem;
    }
  }
</style>
