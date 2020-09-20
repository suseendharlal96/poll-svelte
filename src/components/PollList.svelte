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
  {#if $polls && $polls.length > 0}
    {#each $polls as poll (poll._id)}
      <div in:fade out:scale|local animate:flip={{ duration: 500 }}>
        <PollDetail {poll} />
      </div>
    {/each}
  {:else if $polls && $polls.length === 0}
    <p>Create a poll</p>
  {:else}
    <p>Loading...</p>
  {/if}
</div>
