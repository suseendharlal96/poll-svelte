<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  import Card from "./shared/Card.svelte";
  export let poll;
  $: totalVote = poll.voteA + poll.voteB;
  $: percentA = (poll.voteA / totalVote) * 100 + "%";
  $: percentB = (poll.voteB / totalVote) * 100 + "%";
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
  }
  .percent-b {
    border-left: 2px solid red;
    background-color: lightsalmon;
  }
</style>

<Card>
  <div class="poll">
    <h3>{poll.ques}</h3>
    <p>TotalVotes:{totalVote}</p>
    <div
      class="answer"
      on:click={() => dispatch('castVote', { id: poll.id, voteFor: 'A' })}>
      <div style=" width: {percentA}" class="percent percent-a" />
      <span>{poll.ansA}({poll.voteA})</span>
    </div>
    <div
      class="answer"
      on:click={() => dispatch('castVote', { id: poll.id, voteFor: 'B' })}>
      <div style=" width: {percentB}" class="percent percent-b" />
      <span>{poll.ansB}({poll.voteB})</span>
    </div>
  </div>
</Card>
