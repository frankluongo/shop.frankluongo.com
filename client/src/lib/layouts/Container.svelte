<div class="container">
  <slot />
</div>

<style>
  .container {
    margin-inline: auto;
    padding-inline: 1rem;
    width: 100%;
  }

  @media (min-width: 1024px) {
    .container {
      padding-inline: 2rem;
    }
  }
</style>
