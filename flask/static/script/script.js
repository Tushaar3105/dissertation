function splitSentence(sentence) {
  // Split the sentence into words by space
  const words = sentence.split(' ');

  // Return the list of words
  return words;
}

function removeStartingPunctuations(s) {
  let i = 0;
  while (i < s.length && [',', '.', '?', '!', ':', ';'].includes(s[i])) {
    i++;
  }
  return s.slice(i);
}

function extractPunctuation(arr) {
  const new_arr = [];
  const punctuations = ['.', ',', ';', ':', '!', '?'];
  for (const s of arr) {
    // Split the string into sentences using regex
    const sentences = s.split(/(?<=[.!?])\s+/);

    for (const sentence of sentences) {
      // Split the sentence into words using whitespace
      const words = sentence.split(' ');

      for (let i = 0; i < words.length; i++) {
        const word = words[i];
        // Check if the last character of the word is punctuation
        if (punctuations.includes(word.slice(-1))) {
          // Add the word without its last character
          new_arr.push(word.slice(0, -1));
          // Add the punctuation character to the next position in the array
          new_arr.push(word.slice(-1));
        } else {
          // Add the word to the array without modification
          new_arr.push(word);
        }
      }
    }
  }
  return new_arr;
}
function splitWords(arr) {
  const words = [];
  for (const string of arr) {
    let current_word = "";
    for (const char of string) {
      if (/\s/.test(char) || /[.,?!]/.test(char)) {
        if (current_word) {
          words.push(current_word);
          current_word = "";
        }
        if (/[.,?!]/.test(char)) {
          words.push(char);
        }
      } else {
        current_word += char;
      }
    }
    if (current_word) {
      words.push(current_word);
    }
  }
  return words;
}
function arrayToString(arr) {
  let result = '';
  for (let i = 0; i < arr.length; i++) {
    const elem = arr[i];
    if (i === 0) {
      // add the first element without a space before it
      result += elem;
    } else if (elem === '?' || elem === '!' || elem === '.') {
      // add the question mark, exclamation mark, or period as a separate element without a space before it
      result += elem;
    } else if (elem.match(/[a-zA-Z0-9-]/) && !arr[i - 1].match(/[a-zA-Z0-9-]/)) {
      // add a space before the current element if the previous element is non-alphanumeric
      result += ' ' + elem;
    } else if (elem.match(/[a-zA-Z0-9-]/) && arr[i - 1].match(/[a-zA-Z0-9-]/) && elem !== '-') {
      // add a space before the current element if the previous element is alphanumeric and the current element is not a hyphen
      result += ' ' + elem;
    } else {
      // add the current element without a space before it if the current element is punctuation or a hyphen
      result += elem;
    }
  }
  return result;
}

function removeSpaceAfterHyphen(sentence) {
  return sentence.replace(/-\s/g, '-');
}


function findPositions(array1, array2) {
  const positions = [];
  for (let i = 0; i < array2.length; i++) {
    const element = array2[i];
    if (array1.includes(element.toLowerCase()) === false) {
      if (element.charAt(0) !== element.charAt(0).toUpperCase()) {
        positions.push(i);
      }

    }
  }
  return positions;
}
function underlineElements(array1, array2) {
  for (let i = 0; i < array2.length; i++) {
    if (array2[i] < array1.length) {
      if (isNaN(array1[array2[i]])) {
        array1[array2[i]] = "<span class='suggestclass' id='error" + i + "' style='text-decoration-line: underline; text-decoration-style: dashed; text-underline-position: under; text-decoration-color: red;'>" + array1[array2[i]] + "</span><span class='suggestclass'  id='suggestions" + i + "'></span>";
      }
    }
  }
  return array1;
}
function concatenateElementsWithHyphen(array) {
  var concatenatedArray = [];
  var currentElement = '';

  for (var i = 0; i < array.length; i++) {
    if (array[i].endsWith('-')) {
      currentElement += array[i];
    } else {
      currentElement += array[i];
      concatenatedArray.push(currentElement);
      currentElement = '';
    }
  }

  if (currentElement !== '') {
    concatenatedArray.push(currentElement);
  }

  return concatenatedArray;
}
function arrayToString(arr) {
  let result = '';
  for (let i = 0; i < arr.length; i++) {
    const elem = arr[i];
    if (i === 0) {
      // add the first element without a space before it
      result += elem;
    } else if (elem.match(/[a-zA-Z0-9]/) && !arr[i - 1].match(/[a-zA-Z0-9]/)) {
      // add a space before current element if previous element is non-alphanumeric
      result += ' ' + elem;
    } else if (elem.match(/[a-zA-Z0-9]/) && arr[i - 1].match(/[a-zA-Z0-9]/)) {
      // add a space before current element if previous element is alphanumeric
      result += ' ' + elem;
    } else {
      // add current element without a space before it if current element is punctuation
      result += elem;
    }
  }
  return result;
}
function removeAdjacentPunctuations(arr) {
  const cleanedArr = [];
  let prevPunct = false;  // flag to keep track of whether the previous element was a punctuation mark
  for (let i = 0; i < arr.length; i++) {
    if (['.', ',', '?', '!', ':', ';'].includes(arr[i])) {
      // if the previous element was not a punctuation mark, add the current punctuation mark
      if (!prevPunct) {
        cleanedArr.push(arr[i]);
      }
      prevPunct = true;
    } else {
      cleanedArr.push(arr[i]);
      prevPunct = false;
    }
  }
  return cleanedArr;
}

function findClosestWords(word, wordArray) {
  // Create an empty array to store the closest matching words
  let closestWords = [];

  // Calculate the Levenshtein distance between the given word and each word in the array
  for (let i = 0; i < wordArray.length; i++) {
    let candidateWord = wordArray[i];
    let distance = levenshteinDistance(word, candidateWord);

    // If the distance is less than or equal to 2 (meaning the words are relatively close), add the candidate word to the closestWords array
    if (distance <= 1) {
      closestWords.push(candidateWord);
    }
  }

  // Return the closest matching words
  return closestWords;
}

// Implementation of Levenshtein distance algorithm
function levenshteinDistance(word1, word2) {
  let m = word1.length;
  let n = word2.length;
  let distanceMatrix = [];

  // Initialize the distance matrix
  for (let i = 0; i <= m; i++) {
    distanceMatrix[i] = [i];
  }
  for (let j = 0; j <= n; j++) {
    distanceMatrix[0][j] = j;
  }

  // Fill in the rest of the distance matrix
  for (let j = 1; j <= n; j++) {
    for (let i = 1; i <= m; i++) {
      if (word1[i - 1] == word2[j - 1]) {
        distanceMatrix[i][j] = distanceMatrix[i - 1][j - 1];
      } else {
        distanceMatrix[i][j] = Math.min(
          distanceMatrix[i - 1][j] + 1, // deletion
          distanceMatrix[i][j - 1] + 1, // insertion
          distanceMatrix[i - 1][j - 1] + 1 // substitution
        );
      }
    }
  }

  // The Levenshtein distance is the value in the bottom-right corner of the distance matrix
  return distanceMatrix[m][n];
}
function replaceWord(word) {
  // Replace "ion" with "yon"
  if (word.includes("ion")) {
    word = word.replace(/ion/g, "yon");
  }

  // Replace "ou" with "u"
  if (word.includes("pu")) {
    word = word.replace(/pu/g, "ou");
  }

  // Replace "eur" with "er"
  if (word.includes("eur")) {
    word = word.replace(/eur/g, "er");
  }

  // Replace "iel" with "yel"
  if (word.includes("iel")) {
    word = word.replace(/iel/g, "yel");
  }
  // Replace "troi" with "trwa"
  if (word.includes("troi")) {
    word = word.replace(/troi/g, "trwa");
  }
  // Replace "moi" with "mwa"
  if (word.includes("moi")) {
    word = word.replace(/moi/g, "mwa");
  }
  // Replace "moi" with "mwa"
  if (word.includes("toi")) {
    word = word.replace(/toi/g, "twa");
  }
  // Replace "cy" with "si"
  if (word.includes("cy")) {
    word = word.replace(/cy/g, "si");
  }
  // Replace "clet" with "klet"
  if (word.includes("clet")) {
    word = word.replace(/clet/g, "klet");
  }
  // Replace "ett" with "et"
  if (word.includes("ett")) {
    word = word.replace(/ett/g, "et");
  }
  // Replace "uil" with "ey"
  if (word.includes("uil")) {
    word = word.replace(/uil/g, "y");
  }
  // Replace "ail" with "ay"
  if (word.includes("ail")) {
    word = word.replace(/ail/g, "ay");
  }

  // Replace "age" with "az"
  if (word.includes("age")) {
    word = word.replace(/age/g, "az");
  }
  // Replace "cul" with "kil"
  if (word.includes("cul")) {
    word = word.replace(/cul/g, "kil");
  }
  // Replace "cal" with "kal" 
  if (word.includes("cal")) {
    word = word.replace(/cal/g, "kal");
  }
  // Replace "elle" with "el"
  if (word.includes("elle")) {
    word = word.replace(/elle/g, "el");
  }
  // Replace "tent" with "tan"
  if (word.includes("tent")) {
    word = word.replace(/tent/g, "tan");
  }
  // Replace "zys" with "zis"
  if (word.includes("zys")) {
    word = word.replace(/zys/g, "zis");
  }
  // Replace "mau" with "mo"
  if (word.includes("mau")) {
    word = word.replace(/mau/g, "mo");
  }
  // Replace "que" with "k"
  if (word.includes("que")) {
    word = word.replace(/que/g, "k");
  }
  // Replace "his" with "zis"
  if (word.includes("his")) {
    word = word.replace(/his/g, "zis");
  }
  // Replace "cir" with "sir"
  if (word.includes("cir")) {
    word = word.replace(/cir/g, "sir");
  }
  // Replace "ance" with "ans"
  if (word.includes("ance")) {
    word = word.replace(/ance/g, "ans");
  }
  // Replace "plu" with "pli"
  if (word.includes("plu")) {
    word = word.replace(/plu/g, "pli");
  }
  // Replace "phy" with "fi"
  if (word.includes("phy")) {
    word = word.replace(/phy/g, "fi");
  }
  // Replace "ment" with "man"
  if (word.includes("ment")) {
    word = word.replace(/ment/g, "ma");
  }
  // Replace "mme" with "m"
  if (word.includes("mme")) {
    word = word.replace(/mme/g, "m");
  }
  // Replace "ace" with "as"
  if (word.includes("ace")) {
    word = word.replace(/ace/g, "as");
  }
  // Replace "rge" with "rz"
  if (word.includes("rge")) {
    word = word.replace(/rge/g, "rz");
  }
  // Replace "oir" with "war"
  if (word.includes("oir")) {
    word = word.replace(/oir/g, "war");
  }
  // Return the modified word
  return word;
}

function extractDigits(str) {
  // Use a regular expression to match the digits in the string
  let matches = str.match(/\d+/);

  if (matches) {
    // If there is a match, parse the matched string as an integer
    return parseInt(matches[0]);
  } else {
    // If there is no match, return null or some other default value
    return null;
  }
}

function phoenix(str1, str2) {
  const n = str1.length;
  const m = str2.length;
  const d = Array.from(Array(n + 1), () => new Array(m + 1).fill(0));

  // initialize the first row and column of the distance matrix
  for (let i = 0; i <= n; i++) {
    d[i][0] = i;
  }
  for (let j = 0; j <= m; j++) {
    d[0][j] = j;
  }

  // fill in the rest of the distance matrix
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      const cost = str1[i - 1] === str2[j - 1] ? 0 : 1;
      d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + cost);
    }
  }

  // calculate the similarity score
  const sim = 1 - (d[n][m] / Math.max(n, m));

  return sim;
}

function indexOfMax(arr) {
  if (arr.length === 0) {
    return -1; // return -1 for an empty array
  }
  let max = arr[0];
  let maxIndex = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
      maxIndex = i;
    }
  }

  return maxIndex;
}

function capAfterDot(str) {
  const punctuation = ['.', ',', ';', ':', '!', '?', '-', '—', '(', ')', '[', ']'];
  let result = '';
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (punctuation.includes(char) && char !== '.') {
      result += char + ' ';
    } else {
      result += char;
    }
  }
  result = result.replace(/\.(\w)/g, (match, p1) => '. ' + p1.toUpperCase()); // add space after period and capitalize next letter
  return result;
}



