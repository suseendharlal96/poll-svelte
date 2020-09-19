import { writable } from "svelte/store";

export const polls = writable([
  {
    id: 1,
    ques: "React or Angular",
    ansA: "React",
    ansB: "Angular",
    voteA: 0,
    voteB: 0,
  },
]);
