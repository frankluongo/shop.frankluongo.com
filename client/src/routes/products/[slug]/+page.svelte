<script>
  import { PortableText } from "@portabletext/svelte";
  import Container from "$lib/layouts/Container.svelte";
  import { sanityImage } from "$lib/utilities";
  import Badge from "$lib/components/Badge.svelte";
  import Price from "../../../lib/components/Price.svelte";
  import Button from "../../../lib/components/Button.svelte";
  export let data;
  const product = data.product;
  console.log(product);
</script>

<div class="page">
  <div class="header block">
    <Badge>{product.brand.name}</Badge>
    <h1>{product.title}</h1>
  </div>
  <section class="hero-section">
    <h2 data-visually-hidden>Product images</h2>
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
    {#if product.images}
      <div class="images-wrapper--outer">
        <div class="images-wrapper--inner">
          {#each product.images as image}
            <img
              class="image"
              src={sanityImage(image).width(64).height(64).url()}
              alt="Image for {product.title}"
            />
          {/each}
        </div>
      </div>
    {/if}
  </section>
  <div class="blocks">
    <section class="block">
      <h2>Price</h2>
      <Price>
        ${product.price}
      </Price>
    </section>
    <section class="block">
      <h2>Sound good?</h2>
      <Button
        tag="a"
        type={null}
        href={`mailto:frank@frankluongo.com?subject=Can I get that ${product.title}`}
        rel="noopener noreferrer"
        target="_blank"
      >
        heck yeah, let me get itttt
      </Button>
    </section>
    <section class="block">
      <h2>I wanna see it on the brand's website!</h2>
      {#if product.url}
        <a href={product.url} rel="noopener noreferrer" target="_blank">
          Here ya go, check it out!
        </a>
      {:else}
        <p>Sorry, this product doesn't have a link to the brand's website.</p>
      {/if}
    </section>
    <section class="block">
      <h2>Description</h2>
      <div data-description>
        <PortableText value={product.description} />
      </div>
    </section>
  </div>
</div>

<style>
  a {
    color: var(--blue--on-light);
    font-weight: bold;
  }

  .block {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
    padding-inline: 1rem;
  }

  .blocks {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    grid-area: content;
  }

  .header {
    grid-area: header;
    margin-bottom: 1rem;
  }

  h1 {
    font-size: 1rem;
    font-weight: 900;
    line-height: 1.1;
  }

  h2 {
    color: var(--black);
    font-size: 0.875rem;
    font-weight: 900;
    letter-spacing: 1px;
    line-height: 1.2;
    text-transform: uppercase;
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
    padding-top: clamp(20rem, 50vw, 30rem);
    width: 100%;

    overflow: hidden;
  }

  .hero-section {
    grid-area: hero;
    margin-bottom: 2rem;
  }

  .images-wrapper--inner {
    display: flex;
    gap: 1rem;
  }

  .images-wrapper--outer {
    padding: 1rem;

    background: var(--gray-1);
  }

  .page {
    padding-bottom: 1rem;
    max-width: 76rem;
  }

  @media (min-width: 1024px) {
    .block {
      padding-inline: 0;
    }

    h1 {
      font-size: 2rem;
    }

    .hero-image {
      padding-top: clamp(30rem, 50vw, 40rem);
    }

    .hero-section {
      margin-bottom: 0;
    }

    .page {
      display: grid;
      grid-auto-flow: column dense;
      grid-template-columns: 32rem 1fr;
      grid-template-rows: auto 1fr;
      grid-template-areas:
        "header hero"
        "content hero";
      padding-inline: 2rem;
    }
  }
</style>
