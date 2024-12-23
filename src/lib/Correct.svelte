<script>
  import { dataStore, view } from "../store.js";
  import Button from "./Button.svelte";

  let data = {};
  let wordlength = 0;
  let newinput = "";
  let alert = false;

  $: dataStore.subscribe((value) => {
    data = value;
    wordlength = data.solution.length;
  });

  function confirmNewSolution() {
    if (newinput.length > wordlength || newinput.length < wordlength) {
      alert = true;
    } else {
      //data.solutioninput = newinput.split("");
      dataStore.update((currentData) => ({
        ...currentData,
        solutioninput: newinput.split(""),
      }));

      alert = false;
      if (data.isOutdatet == true) {
        view.set("resolution");
      } else {
        view.set("participate");
      }
    }
  }

  function handleClose() {
    view.set("solution");
    data.solutioninput.set(newinput.split(""));
  }
</script>

<div class="modal"></div>
<div class="layer-container">
  <div class="layer">
    <button
      type="button"
      class="close"
      on:click={handleClose}
      aria-label="Close"
    ></button>
    <div class="fraktur"></div>
    <div class="layer-headline">Wir meißeln nichts in Stein.</div>
    Korrigieren Sie an dieser Stelle ihr Lösungswort. Gesucht wird ein Wort mit {wordlength}
    Buchstaben. Ihr bisheriges Lösungswort:
    <div class="solution-word">
      {#each data.solutioninput as item}
        {item}
      {/each}
    </div>

    <input
      class="input-field"
      type="text"
      bind:value={newinput}
      placeholder="Neues Lösungswort"
      on:input={() => {}}
    />
    {#if alert}
      <p style="color: #c60000;">
        Das gesuchte Lösungswort hat {wordlength} Buchstaben. Bitte überprüfen Sie
        Ihre Eingabe.
      </p>
    {/if}
    <Button
      clickText="Lösungswort bestätigen"
      mode="newsolution"
      addfunc={confirmNewSolution}
    ></Button>
  </div>
</div>
