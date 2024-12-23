<script>
  import Button from "./Button.svelte";
  import { view, confirmed } from "../store.js";

  let invited = false;

  function getMoreGames() {
    window.location.href =
      "https://www.faz.net/aktuell/feuilleton/buecher/literatur-raetsel/";
  }

  function handleClose() {
    view.set("solution");
    confirmed.set(true);
  }
  function toggleInvite() {
    invited = true;
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
    <div class="layer-headline">Vielen Dank für Ihre Teilnahme!</div>
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
    <Button
      clickText="Weitere Spiele entdecken"
      mode="end"
      addfunc={getMoreGames}
    ></Button>
  </div>
</div>
