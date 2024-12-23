import { writable } from "svelte/store";
import CryptoJS from "crypto-js";

export const dataStore = writable({});
export const view = writable("init");
export const questionNum = writable(0);
export const currentsolution = writable([]);
export const useranswers = writable([]);
export const confirmed = writable(false);

export async function loadData() {
  //var jsonPath = 'U2FsdGVkX19qPswWda4p3Pz5qYZQ1ELTHdX4XmhPxzkfrYdWNVnZrP0/TThEhDJ1oliKPbHQ1UJmRr277nw4NWbGcz6xBJQWohxbDFAkqRNcavGUogIR72yMm9PIxyevGr/e2bc8V+GAZaysEVCsWu587qD750TC+CHeuBG4Wg41Kvn4S1ELIbktBIWZCSEK/N77lfWHHGB9E8knPA0SDf/o2lToz+MkUT0Qk7gjqZR7NSV9LznhhnmxRKpdyVrSF9oq2e4JPn1/SB05tygqvHINDERqxeDNAwEYSyeX+apLx4t3oWoHFX7yas5dQ3nfcntWo8s5ubEYP4OZCq4s8mCW1TDUN488GFFqD5jrvyZMXLPVZuZl2H+xnnpLIkEXPa/t+nx7AA+mwt2SO6i2az+X1X6uMUl+G3YW0aKUXM9IVF4N4SgJA5RUkBykQi1X+Ty4hciMr9eYGmAzTyhjxYzOFbTvP3P8Fb622Ogr10+yg18P76R9ULpbZTNKCq/2D8puWj/gk9K86WfWPmevXL5/eS/BnL+8LhHyGQ8d56HZQkv+mEaZcu2SH86iK3rboMaNPMNqFndULxRYEtfX9RlzOB+/G6JqQHw6fcieVAHE5Hsx3syBcPC3HU0KDivY'

  var bytes = CryptoJS.AES.decrypt(window.jsonPath, "umllitquiz82");
  var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

  try {
    const data = decryptedData;
    data.allSolutionLetters = [];
    data.solution = "";
    data.solutioninput = [];
    data.isOutdatet = false;
    data.currentMonth = "";
    dataStore.set(data);

    const [day, month, year] = data.Date.deadline.split(".").map(Number);
    const dateToCheck = new Date(year, month - 1, day); // datestring as date
    const currentDate = new Date(); // current date

    if (dateToCheck < currentDate) {
      data.isOutdatet = true;
    } else {
      data.isOutdatet = false;
    }

    data.currentMonth = getMonthName(month);

    data.Quizitems.forEach((item, index) => {
      // get SolutionLetters from right answer

      const arrLetters = item.solutionletters.map((position) => {
        data.solution += item.answer[position - 1]; // get solution word
        return item.answer[position - 1];
      });
      item.userinput = new Array(item.answer.length); // array for userinput with so many items like answer-letters.
      data.allSolutionLetters[index] = arrLetters;
    });

    for (let i = 0; i < data.solution.length; i++) {
      data.solutioninput.push(" ");
    }
  } catch (error) {
    console.error("Error loading data:", error);
  }
}

function getMonthName(monthNumber) {
  const months = [
    "Januar",
    "Februar",
    "März",
    "April",
    "Mai",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "Dezember",
  ];

  if (monthNumber < 1 || monthNumber > 12) {
    return "aktuellen Monat";
  }

  return months[monthNumber - 1];
}
