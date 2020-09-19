<script>
  import { polls } from "../store";
  import { fade, slide, scale } from "svelte/transition";
  import { flip } from "svelte/animate";
  import PollDetail from "./PollDetail.svelte";
</script>

<style>
  .poll-list {
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
    display: grid;
  }
</style>

<div class="poll-list">
  {#each $polls as poll (poll.id)}
    <div in:fade out:scale|local animate:flip={{ duration: 500 }}>
      <PollDetail {poll} />
    </div>
  {/each}
</div>
