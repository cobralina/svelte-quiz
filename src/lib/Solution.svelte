<script>
  import { dataStore, view, questionNum, confirmed } from "../store.js";
  import Button from "./Button.svelte";
  let data;
  let notComplete = true;
  let isConfirmed = false;
  let invited = false;

  $: dataStore.subscribe((value) => {
    data = value;
    console.log("solutioninput: ", data.solutioninput);
    notComplete = data.solutioninput.some((item) => item === " ");
  });

  $: confirmed.subscribe((value) => {
    isConfirmed = value;
  });

  function backToQuestion() {
    questionNum.set(0);
    view.set("game");
  }

  function handleConfirm() {
    if (data.isOutdatet == true) {
      view.set("resolution");
    } else {
      view.set("participate");
    }
  }

  function getMoreGames() {
    window.location.href =
      "https://www.faz.net/aktuell/feuilleton/buecher/literatur-raetsel/";
  }

  function toggleInvite() {
    invited = true;
  }
</script>

<div class="solution_container">
  <div class="headline">Lösungswort</div>
  Ihre Antworten auf die Teilfragen ergeben dieses Lösungswort.
  {#if notComplete && !isConfirmed}
    Ihr Lösungswort ist noch nicht vollständig. Springen Sie zurück zu den
    Fragen, um Ihre Antworten zu ergänzen.
  {:else if !isConfirmed}
    Springen Sie zurück zu den Fragen, um Ihre Antworten zu korrigieren oder
    bestätigen Sie Ihr Ergebnis.
    <br /><br />
  {/if}

  <div class="solution_circles">
    {#each data.solutioninput as item, i}
      <div class="violet_circle">{item}</div>
    {/each}
  </div>
  {#if !notComplete && !isConfirmed}
    <Button
      mode="confirm"
      clickText="Lösungswort bestätigen"
      addfunc={handleConfirm}
    ></Button>

    <Button mode="correct" clickText="Korrigieren"></Button>
  {:else if !isConfirmed}
    <Button
      mode="confirm"
      clickText="zurück zu den Fragen"
      addfunc={backToQuestion}
    ></Button>
  {/if}
</div>
{#if isConfirmed}
  <div class="layer-headline"><br>Vielen Dank für Ihre Teilnahme!</div>
  Sie haben Ihr Lösungswort erfolgreich abgeschickt. Die Gewinner werden nach Einsendeschluss
  über die von ihnen angegebene E-Mail-Adresse informiert.<br /><br />
  {#if invited}
    <Button clickText="In die Zwischenablage kopiert!" mode="checked"
    ></Button>{/if}
  {#if !invited}<Button
      clickText="Freunde herausfordern"
      mode="invite"
      addfunc={toggleInvite}
    ></Button>{/if}
    <div class="solution_button">
  <Button clickText="Weitere Spiele entdecken" mode="end" addfunc={getMoreGames}
  ></Button>
</div>
<br><br>
{/if}
{#if !isConfirmed}
  <div class="flip_container">
    <Button mode="questions" clickText="Zurück"></Button>
  </div>
{/if}
