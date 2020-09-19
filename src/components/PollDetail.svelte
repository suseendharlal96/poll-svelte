<script>
  export let poll;
  $: totalVote = poll.voteA + poll.voteB;
</script>

<style>
  h3 {
    margin: 0 auto;
    color: #555;
  }
  p {
    margin-top: 6px;
    font-size: 14px;
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
</style>

<div class="poll">
  <h3>{poll.ques}</h3>
  <p>TotalVotes:{totalVote}</p>
  <div class="answer">
    <div class="percent percent-a" />
    <span>{poll.ansA}({poll.voteA})</span>
  </div>
  <div class="answer">
    <div class="percent percent-b" />
    <span>{poll.ansB}({poll.voteB})</span>
  </div>
</div>
