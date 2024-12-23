<script>
  import Button from "./Button.svelte";
  import { dataStore, view } from "../store.js";

  let data = {};
  let usersolution;
  let rightsolution;
  let solution = false;

  $: dataStore.subscribe((value) => {
    data = value;
    rightsolution = data.solution;
    usersolution = data.solutioninput.join("");
    if (rightsolution == usersolution) {
      solution = true;
    }
  });

  function getMoreGames() {
    window.location.href = "https://www.faz.net/aktuell/feuilleton/buecher/literatur-raetsel/";
  }

  function handleClose() {
    view.set("solution");
  }
</script>

<div class="modal"></div>
<div class="layer-container">
  <div class="layer">
    <button type="button" class="close" on:click={handleClose} aria-label="Close"></button>
    <div class="fraktur"></div>
    <div class="layer-headline">
      {#if solution}
        Herzlichen Glückwunsch
      {:else}
        Schade, leider nicht geschafft
      {/if}
    </div>
    {#if solution}
      Sie haben das Lösungswort erraten. Die Frist zur Teilnahme am Gewinnspiel ist leider abgelaufen, aber Übung macht
      den Meister. Ihr Lösungswort:{:else}
      Auch der klügste Kopf hat mal einen schlechten Tag. Leider ist das Lösungswort falsch. Die nächste Herausforderung
      wartet schon. Das richtige Lösungswort ist:
    {/if}<br /><br />
    <div class="solution-word">
      {rightsolution}
    </div>
    <Button clickText="Neues Spiel starten" mode="end" addfunc={getMoreGames}></Button>
  </div>
</div>
