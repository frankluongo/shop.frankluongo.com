<script>
  import ProductCard from "$lib/components/ProductCard.svelte";
  import Grid from "$lib/layouts/Grid.svelte";
  import Container from "$lib/layouts/Container.svelte";
  export let data;
</script>

<Container>
  {#if data.products.length}
    <Grid>
      {#each data.products as product}
        <ProductCard {product} />
      {/each}
    </Grid>
  {:else}
    Nothing to see here
  {/if}
</Container>
