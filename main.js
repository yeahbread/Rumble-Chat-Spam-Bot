javascript:(function() {
  var scriptElement = document.createElement('script');
  var sourceUrl = 'https://cdn.jsdelivr.net/gh/yeahbread/Rumble-Chat-Spam-Bot/bot.js';
  fetch(sourceUrl)
    .then(response => response.text())
    .then(sourceCode => {
      scriptElement.text = sourceCode;
      document.body.appendChild(scriptElement);
    })
    .catch(error => console.error('Error fetching script:', error));
})();
