document.addEventListener("DOMContentLoaded", bindButtons);

function bindButtons() {
  document
    .getElementById("postSubmit")
    .addEventListener("click", function (event) {
      let req = new XMLHttpRequest();
      let payload = { text: null };
      payload.text = document.getElementById("postSubmitInput").value;

      req.addEventListener("load", function () {
        let response = JSON.parse(req.responseText);
        console.log(response.json.text);
      });

      req.open("POST", "https://httpbin.org/post", true);
      req.setRequestHeader("Content-Type", "application/json");
      req.send(JSON.stringify(payload));
      event.preventDefault();
  });
}
