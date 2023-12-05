<script>
  import { formatMoney, sanityImage } from "$lib/utilities";

  export let product;
</script>

<article class="card">
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
    <h3 class="title">
      <a class="card__link" href={`/products/${product.slug.current}`}>
        {product.title}
      </a>
    </h3>
    <p>{formatMoney(product.price)}</p>
  </section>
</article>

<style>
  .card {
    display: grid;
    gap: 1rem;
    grid-template-columns: auto 1fr;

    border: 1px solid var(--gray-2);
    border-radius: 0.5rem;
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
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: center;
    padding: 1rem 1rem 1rem 0;
  }

  .title {
    font-size: 1.125rem;
  }

  @media (min-width: 1024px) {
    .title {
      font-size: 1.25rem;
    }
  }
</style>
