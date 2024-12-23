<script>
  import { questionNum, dataStore } from "../store.js";

  let data = {};
  let arrNums = [];
  let arrLetters = [];

  $: dataStore.subscribe((value) => {
    data = value;
    for (let i = 0; i < data.Quizitems.length; i++) {
      for (let j = 0; j < data.Quizitems[i].solutionletters.length; j++) {
        arrNums.push(i + 1);
      }
      arrLetters = data.solutioninput;
    }
  });

  function handleClick(event) {
    const idParts = event.target.id.split("_");
    const pos = parseInt(idParts[0], 10);
    questionNum.set(pos - 1);
    window.scrollTo(0, 0);
  }
</script>

<div class="circles_container">
  {#each arrNums as item, i}
    {#if arrNums[i] == $questionNum + 1}
      {#if arrLetters[i] != " "}
        <div class="small_circle_container">
          <div class="small_circle">{arrNums[i]}</div>
          <div class="current_circle">{arrLetters[i]}</div>
        </div>
      {:else}
        <div class="current_circle">{arrNums[i]}</div>
      {/if}
    {:else if arrLetters[i] != " "}
      <div class="violet_circle">
        {arrLetters[i]}
        <div class="small_circle">{arrNums[i]}</div>
      </div>
    {:else}
      <div class="default_circle">{arrNums[i]}</div>
    {/if}
  {/each}
  <div class="clickarea_wrapper">
    {#each arrNums as item, i}
      <button
        id="{item}_{arrLetters[i]}"
        aria-label="gotoQuestion"
        type="button"
        class="clickarea"
        on:click={handleClick}>&nbsp;</button
      >
    {/each}
  </div>
</div>
<div></div>
