<script>
  import Container from "$lib/layouts/Container.svelte";
  import { sanityImage } from "$lib/utilities";
  export let data;
  const product = data.product;
</script>

<div class="page">
  <Container>
    <h1>{product.title}</h1>
  </Container>
  {#if product.thumbnail}
    <div class="hero-image">
      <img
        class="hero"
        src={sanityImage(product.thumbnail).width(800).height(1200).url()}
        alt="Hero image for {product.title}"
      />
    </div>
  {:else}
    <div class="card__cover--none" />
  {/if}
</div>

<style>
  h1 {
    font-size: 1rem;
    font-weight: 900;
    line-height: 1.1;
  }

  .hero {
    inset: 0;
    position: absolute;

    height: 100%;
    width: 100%;

    object-fit: cover;
  }

  .hero-image {
    position: relative;
    padding-top: 20rem;
    width: 100%;

    overflow: hidden;
  }

  .page {
    display: grid;
    gap: 1rem;
    padding-block: 1rem;
  }

  @media (min-width: 1024px) {
    h1 {
      font-size: 2.5rem;
    }
  }
</style>
