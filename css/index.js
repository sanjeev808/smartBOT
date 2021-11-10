function getFeedbacks() {
  var feedback = document.getElementById('all-feedback');
  fetch('https://60a28814745cd70017577508.mockapi.io/user')
    .then(response => response.json())
    .then(data => {
      console.log('🚀 ~ file: index.js ~ line 5 ~ data', data);
      //   for(var i = 0; i < data.length; i++){

      //   }

      data.forEach(element => {
        var feedbackData = document.createElement('div');
        feedbackData.innerHTML = `<h3>${element.name}<h3><h4>${element.email}</h4><p>${element.description}<p><br>`;

        feedback.appendChild(feedbackData);
      });
    });
}

function onSubmit() {
  event.preventDefault();
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var fb = document.getElementById('feedback').value;

  var response = {
    name: name,
    email: email,
    description: fb
  };
  console.log('🚀 ~ file: index.js ~ line 32 ~ onSubmit ~ response', response)

  fetch('https://5f1d0e7d39d95a0016953ae0.mockapi.io/api/v1/foodlvry', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(response)
  }).then(res => {
      console.log(res);
      getFeedbacks()
  });
}

document.onload(getFeedbacks());
