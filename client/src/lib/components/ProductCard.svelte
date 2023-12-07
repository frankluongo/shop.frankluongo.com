<script>
  import { sanityImage } from "$lib/utilities";
  import Button from "./Button.svelte";
  import Badge from "./Badge.svelte";
  import Price from "./Price.svelte";

  export let product;
</script>

<a class="card" href={`/products/${product.slug.current}`}>
  <aside>
    {#if product.thumbnail}
      <img
        class="cover"
        src={sanityImage(product.thumbnail).width(600).height(800).url()}
        alt="Cover image for {product.title}"
      />
    {:else}
      <div class="card__cover--none" />
    {/if}
  </aside>
  <section>
    <Badge>{product.brand.name}</Badge>
    <h3 class="title">
      {product.title}
    </h3>
    <Price>
      <svelte:fragment slot="label">Price:&nbsp;</svelte:fragment>
      ${product.price}
    </Price>
    <Button>let me see it!</Button>
  </section>
</a>

<style>
  .card {
    display: grid;
    gap: 1rem;
    grid-template-columns: auto 1fr;

    text-decoration: none;

    border: 1px solid var(--gray-2);
    border-radius: 0.5rem;
    transition: box-shadow 150ms ease-in-out;
  }

  .card:is(:focus, :hover) {
    box-shadow: 0px 0px 8px 1px rgba(0, 0, 0, 0.15);
  }

  .cover {
    height: 12rem;
    width: 8rem;

    border-radius: 0.45rem;
    object-fit: cover;
    overflow: hidden;
  }

  aside {
    padding: 1rem 0 1rem 1rem;
  }

  section {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: center;
    padding: 1rem 1rem 1rem 0;
  }

  .title {
    color: var(--black);
    font-size: 1.125rem;
    font-weight: bold;
    line-height: 1.25;
  }

  @media (min-width: 1024px) {
    .title {
      font-size: 1.25rem;
    }
  }
</style>
