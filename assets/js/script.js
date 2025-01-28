const resultContainer = document.getElementById("result");
const inputtedText = document.getElementById("input-text");
const checkButton = document.getElementById("check-btn");

const isWordPalindrome = (str) => {

    if (!str.trim()) {
        alert('Invalid value'); //input validation
        return;
    }

    const originalStr = str; //Store the string for display

    // clean the string by removing the special char and covert it tolowercase
    const cleanStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();

    // Check if it's a palindrome
    const isPalindrome = cleanStr === [...cleanStr].reverse().join('');

    // create result message
    const resultMessage = `<span class="highlight-text">"${originalStr}"</span>${isPalindrome ? 'is' : 'is not'} a palindrome.`;

    displayResult(resultMessage); //display the result
};

const displayResult = (message) => {

    // clear a previous results
    resultContainer.innerHTML = '';

    // create and append new result
    const resultElement = document.createElement('p');
    resultElement.className = 'user-input';
    resultElement.innerHTML = message;
    resultContainer.appendChild(resultElement);

    // show result container
    resultContainer.style.display = 'block';
};

checkButton.addEventListener('click', () => {
    isWordPalindrome(inputtedText.value);
    inputtedText.value = ''; //clear input bar after checking
});

inputtedText.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
      isWordPalindrome(inputtedText.value);
      inputtedText.value = '';
    }
  });