<script>
  export let type = "primary";
  export let flat = false;
  export let inverse = false;
</script>

<style>
  button {
    border: 0;
    cursor: pointer;
    padding: 8px 12px;
    border-radius: 6px;
    box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.3);
  }
  .primary {
    color: #fff;
    background-color: royalblue;
  }
  .secondary {
    color: #fff;
    background-color: red;
  }
  .flat {
    box-shadow: none;
  }
</style>

<button class={type} class:flat>
  <slot />
</button>
