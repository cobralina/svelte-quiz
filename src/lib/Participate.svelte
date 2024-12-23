<script>
  import { dataStore, view } from "../store.js";
  import Button from "./Button.svelte";

  let data = {};
  let email = "";
  let alert = false;
  let newsletter = false;
  let usersolution = "";

  $: dataStore.subscribe((value) => {
    data = value;
    usersolution = data.solutioninput.join("");
  });

  function confirmForm() {
    if (email.includes("@") && email.includes(".")) {
      alert = false;

      const subject = encodeURIComponent("Teilnahme an Literatur-Rätsel");
      const body = encodeURIComponent(
        `E-Mail des Teilnehmers: ${email}\nLösungswort des Teilnehmers: ${usersolution} \n\nTeilnehmer hat ${newsletter ? 'Newsletter "Literatur" abonniert' : "Newsletter nicht abonniert"}`
      );
      const mailtoLink = `mailto:literatur-nl@faz.de?subject=${subject}&body=${body}`;

      window.location.href = mailtoLink;

      view.set("confirm");
    } else {
      alert = true;
    }
  }

  function handleNewsletterBox(event) {
    newsletter = event.target.checked;
  }

  function handleClose() {
    view.set("solution");
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
    <div class="layer-headline">Teilnahme am Gewinnspiel</div>
    Unter allen richtigen Einsendungen verlosen wir ein von Jürgen Kaube ausgewähltes
    Buch. Ihr Lösungswort:
    <div class="solution-word">
      {#each data.solutioninput as item}
        {item}
      {/each}
    </div>

    <input
      class="input-field"
      type="text"
      bind:value={email}
      placeholder="E-Mail"
      on:input={() => {}}
    />
    {#if alert}
      <p style="color: #c60000;">
        Bitte geben Sie eine gültige E-Mail-Adresse ein.
      </p>
    {/if}
    <label class="nl-checkbox">
      <input
        type="checkbox"
        bind:checked={newsletter}
        on:change={handleNewsletterBox}
      />
      <span class="checkmark"></span>
      Ja, ich möchte den Newsletter „Literatur” abonnieren und drei Tage früher mit
      dem Rätsel starten können.
    </label>

    <Button clickText="Teilnehmen" mode="newsolution" addfunc={confirmForm}
    ></Button>
    <br />
    Es gelten die
    <a href="https://agb.faz.net/agb" target="_blank"
      >Allgemeinen Nutzungsbedingungen</a
    >. Bitte beachten Sie unseren
    <a href="https://www.faz-datenschutz.de/faz" target="_blank"
      >Datenschutzhinweis</a
    >.
  </div>
</div>
