<script>
  import Tabs from "./components/shared/tabs.svelte";
  import PollForm from "./components/PollForm.svelte";
  import PollList from "./components/PollList.svelte";

  const items = ["Current Polls", "Add New Poll"];
  let activeItem = items[0];
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

  const castVote = ({ detail }) => {
    console.log(detail);
    const pollsCopy = [...polls];
    const pollIndex = pollsCopy.findIndex((p) => p.id === detail.id);
    if (detail.voteFor === "A") {
      pollsCopy[pollIndex].voteA++;
    } else {
      pollsCopy[pollIndex].voteB++;
    }
    polls = pollsCopy;
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
    <PollList {polls} on:castVote={castVote} />
  {:else}
    <PollForm on:createPoll={createPoll} />
  {/if}
</main>
