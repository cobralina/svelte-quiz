<script>
  import { view, dataStore } from "../store.js";
  import Button from "./Button.svelte";
  import Manual from "./Manual.svelte";
  import Header from "./Header.svelte";

  export let finaldate = "";
  export let pricetext = "";
  export let pricelink = "";

  let data = {};

  function handleClose() {
    view.set("game");
  }

  $: dataStore.subscribe((value) => {
    data = value;
  });
</script>

<div class="modal"></div>
<div class="layer-container">
  <div class="layer">
    <button type="button" class="close" on:click={handleClose} aria-label="Close"></button>
    <Header mode="layer"></Header>
    <br /><br />
    {#if data.isOutdatet == true}Am Gewinnspiel zu diesem Rätsel können Sie leider nicht mehr teilnehmen.
    {:else}
      Am Gewinnspiel zu diesem Rätsel können Sie noch bis zum <span class="bold"> {finaldate} </span> teilnehmen.
    {/if}
    <br /><br />
    <Button clickText="Zum Spiel" mode="start"></Button>
    {#if $view == "init"}
      <Button clickText="Anleitung" mode="init-manual"></Button>
    {/if}
    {#if $view == "init-manual"}
      <Manual duedate={finaldate} {pricetext} {pricelink}></Manual>
    {/if}
  </div>
</div>
