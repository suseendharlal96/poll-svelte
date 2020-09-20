<script>
  import { polls } from "./store";
  import { onMount } from "svelte";
  import axios from "axios";

  import Tabs from "./components/shared/tabs.svelte";
  import PollForm from "./components/PollForm.svelte";
  import PollList from "./components/PollList.svelte";

  const items = ["Current Polls", "Add New Poll"];
  let activeItem = items[0];

  const createPoll = () => {
    activeItem = items[0];
  };

  onMount(async () => {
    const res = await axios.get("http://localhost:3000");
    console.log(res.data);
    polls.set(res.data.polls);
  });
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
    <PollList />
  {:else}
    <PollForm on:createPoll={createPoll} />
  {/if}
</main>
