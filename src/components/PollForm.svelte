<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  import Button from "./shared/Button.svelte";
  let form = {
    ques: "",
    ansA: "",
    ansB: "",
  };
  let errors = {
    ques: "",
    ansA: "",
    ansB: "",
  };
  let valid = true;
  const createPoll = () => {
    console.log(form);
    valid = true;
    if (form.ques.trim() === "") {
      errors.ques = "Required Field";
      valid = false;
    } else {
      errors.ques = "";
    }
    if (form.ansA.trim() === "") {
      errors.ansA = "Required Field";
      valid = false;
    } else {
      errors.ansA = "";
    }
    if (form.ansB.trim() === "") {
      errors.ansB = "Required Field";
      valid = false;
    } else {
      errors.ansB = "";
    }
    if (valid) {
      console.log("valid");
      const polls = {
        id: Math.random(),
        ques: form.ques,
        ansA: form.ansA,
        ansB: form.ansB,
        voteA: 0,
        voteB: 0,
      };
      dispatch("createPoll", polls);
    }
  };
</script>

<style>
  form {
    width: 400px;
    margin: 0 auto;
    text-align: center;
  }
  .form-field {
    margin: 18px auto;
  }
  input {
    width: 100%;
    border-radius: 6px;
  }
  label {
    margin: 10px auto;
    text-align: left;
  }
  .error {
    color: red;
  }
</style>

<form on:submit|preventDefault={createPoll}>
  {#if !valid}
    <p class="error">Form is invalid</p>
  {/if}
  <div class="form-field">
    <label for="question">Poll Ques</label>
    <input type="text" name="" bind:value={form.ques} id="question" />
    <div class="error">{errors.ques}</div>
  </div>
  <div class="form-field">
    <label for="ans-a">Ans A</label>
    <input type="text" name="" bind:value={form.ansA} id="ans-a" />
    <div class="error">{errors.ansA}</div>
  </div>
  <div class="form-field">
    <label for="ans-b">Ans B</label>
    <input type="text" name="" bind:value={form.ansB} id="ans-b" />
    <div class="error">{errors.ansB}</div>
  </div>
  <Button>Add Poll</Button>
</form>
