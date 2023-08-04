window.addEventListener("DOMContentLoaded", function () {
document.querySelector("#fetchQuotesBtn").addEventListener("click", function () {
    
// Get values from drop-downs
const topicDropdown = document.querySelector("#topicSelection");
const selectedTopic = topicDropdown.options[topicDropdown.selectedIndex].value;
const countDropdown = document.querySelector("#countSelection");
const selectedCount = countDropdown.options[countDropdown.selectedIndex].value;

               // Get and display quotes
fetchQuotes(selectedTopic, selectedCount);
    });
});

function fetchQuotes(topic, count) {
    let xhr = new XMLHttpRequest();
    xhr.addEventListener("load", responseReceivedHandler);
    xhr.responseType = "json";
    xhr.open("GET", "https://wp.zybooks.com/quotes.php?topic=" + topic + "&count=" + count);
    xhr.send();
         }

function responseReceivedHandler(quotes) {
    let html = "<ol>";
    for (let i = 0; i < quotes.length; i++) {
        html += `<li>${quotes[i].quote} - ${quotes[i].source}</li>`;
            }
        html += "</ol>";

document.querySelector("#quotes").innerHTML = html;
    if (xhr.readyState === XMLHttpRequest.DONE) {
                  if (xhr.status === 200) {
                     responseReceivedHandler(xhr.response);
                  } else {
                     const errorMessage = "Topic '" + topic + "' not found";
                     document.querySelector("#quotes").innerText = errorMessage;
                  }
               }
         }