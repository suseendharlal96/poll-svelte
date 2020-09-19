<script>
  import Tabs from "./components/shared/tabs.svelte";
  import PollForm from "./components/PollForm.svelte";

  const items = ["Current Polls", "Add New Poll"];
  let activeItem = items[1];

  // const setActiveItem = (i) => {
  //   console.log(i);
  //   activeItem = items[i];
  // };
</script>

<style>
  main {
    max-width: 960px;
    margin: 40px auto;
  }
</style>

<main>
  <Tabs
    {items}
    {activeItem}
    on:setActiveItem={({ detail }) => (activeItem = items[detail])} />
  {#if activeItem === items[0]}
    <p>list component</p>
  {:else}
    <PollForm />
  {/if}
</main>
