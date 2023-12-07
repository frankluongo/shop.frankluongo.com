<script>
  import { PortableText } from "@portabletext/svelte";

  import { sanityImage } from "$lib/utilities";
  import Badge from "$lib/components/Badge.svelte";
  import Price from "$lib/components/Price.svelte";
  import Button from "$lib/components/Button.svelte";

  export let data;
  let activeSrc;
  let activeIndex;
  const product = data.product;
  const images = product.images.length - 1;

  function closeLightbox() {
    activeSrc = null;
    activeIndex = null;
  }

  function checkNext(index) {
    if (index > images) return 0;
    if (index < 0) return images;
    return index;
  }

  function goToNext() {
    const ctrls = document.querySelectorAll("[data-lightbox-control]");
    const next = checkNext(activeIndex + 1);
    activeSrc = ctrls[next].dataset.url;
    activeIndex = next;
  }

  function goToPrev() {
    const ctrls = document.querySelectorAll("[data-lightbox-control]");
    const next = checkNext(activeIndex - 1);
    activeSrc = ctrls[next].dataset.url;
    activeIndex = next;
  }

  function handleImageClick() {
    activeIndex = parseInt(this.dataset.index);
    activeSrc = this.dataset.url;
  }
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
          {#each product.images as image, index}
            <button
              class="lightbox-open"
              on:click={handleImageClick}
              data-lightbox-control
              data-url={sanityImage(image).width(800).height(1200).url()}
              data-index={index}
              title={`View a larger version of the photo ${product.title}`}
            >
              <img
                class="image"
                src={sanityImage(image).width(64).height(64).url()}
                alt="Image for {product.title}"
              />
            </button>
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

{#if activeSrc}
  <div class="lightbox">
    <button
      on:click={closeLightbox}
      class="lightbox-close"
      title="Close lightbox">❌</button
    >
    <img
      class="lightbox-image"
      src={activeSrc}
      alt="Hero image for {product.title}"
    />
    <button on:click={goToPrev} class="arrow arrow--previous">
      <span data-visually-hidden>Previous image</span>
      ⬅️
    </button>
    <button on:click={goToNext} class="arrow arrow--next">
      <span data-visually-hidden>Next image</span>
      ➡️
    </button>
  </div>
{/if}

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

  .arrow {
    bottom: 1rem;
    position: absolute;

    height: 2rem;
    width: 2rem;

    font-size: 0.75rem;

    appearance: none;
    background: white;
    border: none;
    border-radius: 50%;
    cursor: pointer;
  }

  .arrow--previous {
    left: 1rem;
  }

  .arrow--next {
    right: 1rem;
  }

  .lightbox {
    inset: 0;
    position: fixed;

    align-items: center;
    display: flex;
    height: 100%;
    width: 100%;

    background-color: rgba(0, 0, 0, 0.75);
  }

  .lightbox-close {
    position: absolute;
    right: 0.5rem;
    top: 0.5rem;

    height: 2rem;
    width: 2rem;

    font-size: 0.75rem;

    appearance: none;
    background: white;
    border: none;
    border-radius: 50%;
    cursor: pointer;
  }

  .lightbox-image {
    height: auto;
    max-height: 100vh;
    width: 100%;

    object-fit: contain;
  }

  .lightbox-open {
    margin: 0;
    padding: 0;

    appearance: none;
    background: transparent;
    border: none;
    cursor: pointer;
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
