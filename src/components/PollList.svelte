<script>
  import PollDetail from "./PollDetail.svelte";
  export let polls = [];
</script>

<style>
  .poll-list {
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
    display: grid;
  }
</style>

<div class="poll-list">
  {#each polls as poll (poll.id)}
    <PollDetail {poll} />
  {/each}
</div>
