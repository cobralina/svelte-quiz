<script>
  import { questionNum, dataStore, view } from "../store.js";
  import Button from "./Button.svelte";
  import Circles from "./Circles.svelte";
  let data;
  let i;
  let questionNumber;
  let inputString = "";
  let letterCount = inputString.length;
  let solutionLettersArray = [];
  let whitespacesArray = [];
  let answerArray = [];
  let showSolution = false;
  let showButtonText = "Lösung anzeigen";
  let inputs = [];

  $: dataStore.subscribe((value) => {
    data = value;
  });

  $: questionNum.subscribe((value) => {
    i = value;
    questionNumber = i + 1;
    resetFields();
    inputString = data.Quizitems[i].answer;
    answerArray = inputString.split("");
    letterCount = inputString.length;
    solutionLettersArray = data.Quizitems[i].solutionletters;
    whitespacesArray = getWhitespacePositions(data.Quizitems[i].answer);

    inputs = splitIntoArrays(letterCount, whitespacesArray);
  });

  function resetFields() {
    inputString = "";
    letterCount = 0;
    showSolution = false;
    showButtonText = "Lösung anzeigen";
  }

  function getWhitespacePositions(str) {
    let positions = [];
    for (let i = 0; i < str.length; i++) {
      if (str[i] === " ") {
        positions.push(i);
      }
    }
    return positions;
  }

  function handleInput(event, index) {
    if (event.target.value.length > 0) {
      data.Quizitems[i].userinput.splice(index, 1, event.target.value);

      let inputPos = 0;

      for (let k = 0; k < i; k++) {
        inputPos += data.Quizitems[k].solutionletters.length;
      }

      let nextInput = document.getElementById(index + 1);
      if (nextInput) {
        nextInput.focus(); //focus to next input field
      } else {
        nextInput = document.getElementById(index + 2); //if whitespace is in between
        if (nextInput) {
          nextInput.focus();
        }
      }
      if (solutionLettersArray.includes(index + 1)) {
        //if input is a solution letter
        //$currentsolution += event.target.value;
        inputPos += solutionLettersArray.indexOf(index + 1); // get Position in solutioninputArray for this letter
        data.solutioninput[inputPos] = event.target.value; // write input to solutioninputArray
      }
    }
  }

  function handleConfirm() {
    if (i != data.Quizitems.length - 1) {
      questionNum.set($questionNum + 1);
    } else {
      view.set("solution");
    }
  }

  function handleShowSolution() {
    showSolution = !showSolution;
    showButtonText = showSolution ? "Lösung ausblenden" : "Lösung anzeigen";
  }

  function handleEnter(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      handleConfirm();
    }
  }
  function handleBackspace(event, index) {
    if (event.key === "Backspace") {
      if (event.target.value === "" && index > 0) {
        event.preventDefault();
        let previousInput = document.getElementById((index - 1).toString());
        if (previousInput) {
          previousInput.focus();
        } else {
          //if whitespace is in between
          previousInput = document.getElementById((index - 2).toString());
          if (previousInput) {
            previousInput.focus();
          }
        }
      }
    }
  }

  function splitIntoArrays(letterCount, whitespacesArray) {
    // get an array with different arrays for every single words
    const result = [];
    let start = 0;
    whitespacesArray.push(letterCount);

    for (let i = 0; i < whitespacesArray.length; i++) {
      const end = whitespacesArray[i];
      const segment = Array.from(
        { length: end - start },
        (_, index) => start + index
      );
      result.push(segment);
      start = end + 1;
    }

    return result;
  }
</script>

<svelte:window on:keydown={handleEnter} />

<Circles></Circles>
<div class="question_container">
  <div class="question_number">{questionNumber}.</div>

  {data.Quizitems[i].explainer}
  <span class="question">{data.Quizitems[i].question}</span>
  <div id="input_container" class="letter-input">
    {#if !showSolution}
      <div class="inputs">
        {#each inputs as _, n}
          <div class="inputword">
            {#each inputs[n] as _, l}
              <input
                type="text"
                maxlength="1"
                class={solutionLettersArray.includes(inputs[n][l] + 1)
                  ? "active"
                  : "letter"}
                id={inputs[n][l]}
                on:input={(event) => handleInput(event, inputs[n][l])}
                on:focus={(event) => {
                  if (event.target.value) {
                    event.target.select();
                  }
                }}
                on:keydown={(event) => handleBackspace(event, inputs[n][l])}
                bind:value={data.Quizitems[i].userinput[inputs[n][l]]}
              />
            {/each}
            <input class="empty" />
          </div>
        {/each}
      </div>
    {/if}
    {#if showSolution}
      <div class="inputs">
        {#each answerArray as item, m}
          <input
            type="text"
            maxlength="1"
            class={whitespacesArray.includes(m)
              ? "empty"
              : solutionLettersArray.includes(m + 1)
                ? "active"
                : "sol-letter"}
            id={"sol_" + m}
            on:input={(event) => handleInput(event, m)}
            value={item}
          />
        {/each}
      </div>
    {/if}
  </div>
  <div class="button-container">
    {#if data.isOutdatet}
      <Button
        mode="show-solution"
        clickText={showButtonText}
        addfunc={handleShowSolution}
      ></Button>
    {/if}
    {#if !showSolution}
      <Button mode="confirm" clickText="Bestätigen" addfunc={handleConfirm}
      ></Button>
    {/if}
  </div>
</div>

<div class="flip_container">
  {#if i != 0}
    <Button mode="back" clickText="Zurück"></Button>
  {/if}
  {#if i != data.Quizitems.length - 1}
    <Button mode="forward" clickText="Nächste Frage"></Button>
  {:else}
    <Button mode="last" clickText="Zum Lösungswort" addfunc={handleConfirm}
    ></Button>
  {/if}
</div>
