<script>
  import { polls } from "../store";
  import { tweened } from "svelte/motion";
  import axios from "axios";

  import { baseURL } from "../baseurl";
  import Card from "./shared/Card.svelte";
  import Button from "./shared/Button.svelte";

  export let poll;
  $: totalVote = poll.voteA + poll.voteB;
  $: percentA = (poll.voteA / totalVote) * 100 || 0;
  $: percentB = (poll.voteB / totalVote) * 100 || 0;
  const tweenA = tweened(0);
  const tweenB = tweened(0);
  $: tweenA.set(percentA);
  $: tweenB.set(percentB);

  const castVote = async (id, option) => {
    await axios({
      method: "patch",
      url: `${baseURL}/update`,
      data: { id, voteFor: option },
    });
    polls.update((currentPolls) => {
      const pollsCopy = [...currentPolls];
      const pollIndex = pollsCopy.findIndex((p) => p._id === id);
      if (option === "A") {
        pollsCopy[pollIndex].voteA++;
      } else {
        pollsCopy[pollIndex].voteB++;
      }
      return pollsCopy;
    });
  };

  const deletePoll = async (id) => {
    console.log(id);
    await axios({
      method: "delete",
      url: `${baseURL}/delete`,
      data: { id: id },
    });
    polls.update((currentPolls) => {
      let pollsCopy = [...currentPolls];
      console.log(pollsCopy);
      pollsCopy = pollsCopy.filter((p) => p._id !== id);
      console.log(pollsCopy);
      return pollsCopy;
    });
  };
</script>

<style>
  h3 {
    margin: 0 auto;
    color: #555;
  }
  p {
    margin-top: 6px;
    font-size: 14px;
    color: #aaa;
    margin-bottom: 30px;
  }
  .answer {
    background: #fafafa;
    cursor: pointer;
    margin: 10px auto;
    position: relative;
  }
  .answer:hover {
    opacity: 0.6;
  }
  span {
    display: inline-block;
    padding: 10px 20px;
  }
  .percent {
    height: 100%;
    position: absolute;
    box-sizing: border-box;
  }
  .percent-a {
    border-left: 2px solid green;
    background-color: lightgreen;
    /* transition: width 2s; */
  }
  .percent-b {
    border-left: 2px solid red;
    background-color: lightsalmon;
    /* transition: width 2s; */
  }
</style>

<Card>
  <div class="poll">
    <h3>{poll.ques}</h3>
    <p>TotalVotes:{totalVote}</p>
    <div class="answer" on:click={() => castVote(poll._id, 'A')}>
      <div style=" width: {$tweenA}%" class="percent percent-a" />
      <span>{poll.ansA}({poll.voteA})</span>
    </div>
    <div class="answer" on:click={() => castVote(poll._id, 'B')}>
      <div style=" width: {$tweenB}%" class="percent percent-b" />
      <span>{poll.ansB}({poll.voteB})</span>
    </div>
    <div>
      <Button type="secondary" on:click={() => deletePoll(poll._id)}>
        Delete
      </Button>
    </div>
  </div>
</Card>
