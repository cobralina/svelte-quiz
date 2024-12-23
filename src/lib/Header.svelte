<script>
  import { dataStore } from "../store";

  let data = {};
  export let mode = "layer";

  $: dataStore.subscribe((value) => {
    data = value;
  });
</script>

<div class="header">
  <div class="headline">Literatur-Rätsel</div>
  Von Jürgen Kaube im {data.currentMonth}
</div>
{#if mode == "inline"}<div class="introtext">
    Beweisen Sie Ihr Wissen rund um Literatur und die Welt der Bücher. Finden
    Sie das Lösungswort, das sich aus den markierten Buchstaben ergibt{#if data.isOutdatet == true}.<br
      /><br />Am Gewinnspiel zu diesem Rätsel können Sie leider nicht mehr
      teilnehmen.
    {:else}
      , und gewinnen Sie mit etwas Glück ein Buch.
    {/if}
  </div>
{/if}

{#if mode == "layer"}
  Beweisen Sie Ihr Wissen rund um Literatur und die Welt der Bücher. Finden Sie
  das Lösungswort, das sich aus den markierten Buchstaben ergibt{#if data.isOutdatet == true}.
  {:else}, und gewinnen Sie mit etwas Glück ein Buch.
  {/if}
{/if}
