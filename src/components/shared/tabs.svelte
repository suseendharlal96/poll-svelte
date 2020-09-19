<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  export let items;
  export let activeItem;

</script>

<style>
  .active {
    color: royalblue;
    border-bottom: 2px solid royalblue;
    padding-bottom: 8px;
  }
  ul {
    display: flex;
    justify-content: center;
    padding: 0;
    list-style-type: none;
  }
  .tabs {
    margin-bottom: 40px;
  }
  li {
    margin: 0 20px;
    cursor: pointer;
  }
</style>

<div class="tabs">
  <ul>
    {#each items as item, i}
      <li>
        <div
          class:active={item === activeItem}
          on:click={() => dispatch('setActiveItem', i)}>
          {item}
        </div>
      </li>
    {/each}
  </ul>
</div>
