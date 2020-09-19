<script>
  import Tabs from "./components/shared/tabs.svelte";
  import PollForm from "./components/PollForm.svelte";
  import PollList from "./components/PollList.svelte";

  const items = ["Current Polls", "Add New Poll"];
  let activeItem = items[1];
  let polls = [
    {
      id: 1,
      ques: "React or Angular",
      ansA: "React",
      ansB: "Angular",
      voteA: 5,
      voteB: 5,
    },
  ];

  const createPoll = ({ detail: poll }) => {
    polls = [poll, ...polls];
    activeItem = items[0];
    console.log(polls);
  };
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
    <PollList {polls} />
  {:else}
    <PollForm on:createPoll={createPoll} />
  {/if}
</main>
