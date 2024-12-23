<script>
  import { onMount } from "svelte";
  import { dataStore, loadData, view } from "./store.js";
  import Start from "./lib/Start.svelte";
  import Manual from "./lib/Manual.svelte";
  import Question from "./lib/Question.svelte";
  import Solution from "./lib/Solution.svelte";
  import Correct from "./lib/Correct.svelte";
  import Header from "./lib/Header.svelte";
  import Participate from "./lib/Participate.svelte";
  import Confirm from "./lib/Confirm.svelte";
  import Resolution from "./lib/Resolution.svelte";

  let data;

  function disableScroll() {
    document.body.style.overflow = "hidden";
  }

  function enableScroll() {
    document.body.style.overflow = "";
  }

  onMount(() => {
    loadData();
  });

  $: dataStore.subscribe((value) => {
    data = value;
  });

  $: if (
    $view === "init" ||
    $view === "init-manual" ||
    $view === "correct" ||
    $view === "participate" ||
    $view === "resolution" ||
    $view === "confirm"
  ) {
    disableScroll();
  } else {
    enableScroll();
  }
</script>

<main>
  {#if data.Quizitems}
    <Header mode="inline"></Header>
    {#if $view != "solution" && $view != "correct" && $view != "participate" && $view != "resolution" && $view != "confirm"}
      <div class="game-wrapper"><Question></Question></div>
    {/if}
    {#if $view == "init" || $view == "init-manual"}
      <Start finaldate={data.Date.deadline} pricetext={data.Price.pricetext} pricelink={data.Price.pricelink}></Start>
    {/if}
  {:else}
    <p>Lade Daten...</p>
  {/if}
  <div class="game-wrapper">
    {#if $view == "solution" || $view == "correct" || $view == "participate" || $view == "resolution" || $view == "confirm"}
      <Solution></Solution>
    {/if}
  </div>

  {#if $view == "correct"}
    <Correct></Correct>
  {/if}
  {#if $view == "participate"}
    <Participate></Participate>
  {/if}
  {#if $view == "resolution"}
    <Resolution></Resolution>
  {/if}
  {#if $view == "confirm"}
    <Confirm></Confirm>
  {/if}
  {#if $view != "init" && $view != "init-manual" && $view != "close"}
  <Manual duedate={data.Date.deadline} pricetext={data.Price.pricetext} pricelink={data.Price.pricelink}></Manual>
{/if}

 
  <div class="game-wrapper">
    <br /><br />
    <div class="seperator"><hr></div>
    <div class="cms-Socialmarker"></div>
  </div>
</main>
