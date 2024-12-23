<script>
  export let clickText = "";
  export let mode = "teritary";
  export let addfunc = null;
  export let id = "";

  import { view, questionNum } from "../store.js";

  function handleStart() {
    if (addfunc) {
      addfunc();
    }
    //window.top.location.href = clickUrl;
    view.set("game");
  }

  function handleManual() {
    if (addfunc) {
      addfunc();
    }
    view.set("manual");
  }

  function handleInitManual() {
    if (addfunc) {
      addfunc();
    }
    view.set("init-manual");
  }

  function handleBack() {
    if (addfunc) {
      addfunc();
    }
    questionNum.set($questionNum - 1);
    window.scrollTo(0, 0);
  }

  function handleForward() {
    if (addfunc) {
      addfunc();
    }
    questionNum.set($questionNum + 1);
    window.scrollTo(0, 0);
  }

  function handleCorrect() {
    if (addfunc) {
      addfunc();
    }
    view.set("correct");
  }

  function handleQuestions() {
    if (addfunc) {
      addfunc();
    }
    view.set("questions");
  }

  function handleConfirm() {
    if (addfunc) {
      addfunc();
    }
    view.set("participate");
  }

  function handleEmpty() {
    if (addfunc) {
      addfunc();
    }
  }

  function handleInvite() {
    if (addfunc) {
      addfunc();
    }

    const inviteText =
      "Ich habe das F.A.Z.-Literaturrätsel gelöst!\n\nBeweise Dein Wissen und mach auch mit.\n\nJetzt Herausforderung annehmen:\nhttps://www.faz.net/aktuell/feuilleton/buecher/literatur-raetsel/";

    navigator.clipboard
      .writeText(inviteText)
      .then(() => {
        console.log(
          "Text erfolgreich in die Zwischenablage kopiert: ",
          inviteText
        );
      })
      .catch((err) => {
        console.error("Fehler beim Kopieren in die Zwischenablage: ", err);
      });
  }
</script>

{#if mode == "start"}
  <button type="button" class="btn_start" on:click={handleStart}
    >{clickText}</button
  >
{/if}
{#if mode == "end"}
  <button type="button" class="btn_start" on:click={handleEmpty}
    >{clickText}</button
  >
{/if}
{#if mode == "manual"}
  <button type="button" class="btn_manual" on:click={handleManual}
    >{clickText}</button
  >
{/if}
{#if mode == "invite"}
  <button type="button" class="btn_invite" on:click={handleInvite}
    >{clickText}</button
  >
{/if}
{#if mode == "checked"}
  <button type="button" class="btn_checked" on:click={handleEmpty}
    >{clickText}</button
  >
{/if}
{#if mode == "init-manual"}
  <button type="button" class="btn_manual" on:click={handleInitManual}
    >{clickText}</button
  >
{/if}
{#if mode == "questions"}
  <button type="button" class="btn_flip back" on:click={handleQuestions}
    >{clickText}</button
  >
{/if}
{#if mode == "back"}
  <button type="button" class="btn_flip back" on:click={handleBack}
    >{clickText}</button
  >
{/if}
{#if mode == "forward"}
  <button type="button" class="btn_flip forward" on:click={handleForward}
    >{clickText}</button
  >
{/if}
{#if mode == "last"}
  <button type="button" class="btn_flip forward" on:click={handleEmpty}
    >{clickText}</button
  >
{/if}
{#if mode == "confirm"}
  <button type="button" class="btn_confirm" on:click={handleEmpty}
    >{clickText}</button
  >
{/if}
{#if mode == "show-solution"}
  <button type="button" class="btn_show" on:click={handleEmpty}
    >{clickText}</button
  >
{/if}
{#if mode == "correct"}
  <button type="button" class="btn_underline" on:click={handleCorrect}
    >{clickText}</button
  >
{/if}
{#if mode == "newsolution"}
  <button type="button" class="btn_confirm layer_button" on:click={handleEmpty}
    >{clickText}</button
  >
{/if}
{#if mode == "clickarea"}
  <button
    {id}
    aria-label="gotoQuestion"
    type="button"
    class="clickarea"
    on:click={handleEmpty}>&nbsp;</button
  >
{/if}
