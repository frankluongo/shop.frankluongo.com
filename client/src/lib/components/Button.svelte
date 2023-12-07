<script>
  export let href = null;
  export let rel = null;
  export let target = null;
  export let tag = "button";
  export let type = "button";
</script>

<svelte:element this={tag} {href} {rel} {target} {type} class="button">
  <slot />
</svelte:element>

<style>
  .button {
    padding: 0.5rem 1rem;

    color: var(--white);
    font-size: 0.875rem;
    font-weight: 700;
    letter-spacing: 1px;
    text-decoration: none;
    text-transform: uppercase;

    appearance: none;
    background-color: var(--blue--on-light);
    border: 1px solid var(--blue--on-dark);
    border-radius: 0.25rem;
    cursor: pointer;

    transition:
      border 150ms ease-in-out,
      box-shadow 150ms ease-in-out;
  }

  .button:is(:focus, :hover) {
    border: 1px solid var(--white);
    box-shadow: 0px 0px 8px 1px rgba(0, 0, 0, 0.15);
  }
</style>
