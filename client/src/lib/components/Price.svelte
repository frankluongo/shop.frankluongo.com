<p class="price">
  {#if $$slots.label}
    <strong>
      <slot name="label" />
    </strong>
  {/if}
  <slot />
</p>

<style>
  .price {
    align-items: center;
    display: inline-flex;

    color: var(--green--on-light);
    font-size: 1.5rem;
    font-weight: bold;
  }

  .price strong {
    color: var(--gray-4);
    font-size: 0.5em;
    text-transform: uppercase;
  }

  @media (min-width: 1024px) {
    .price {
      font-size: 2.5rem;
    }
  }
</style>
