var settings = {
  "url": "https://api.hsforms.com/submissions/v3/integration/submit/{account_id}/{form_id}",
  "method": "POST",
  "timeout": 0,
  "headers": {
    "Content-Type": "application/json",
    "Authorization": "Bearer_token"
  },
  "data": JSON.stringify({
    "fields": [
      {
        "name": "email",
        "value": "test@gmail.com"
      },
      {
        "name": "firstname",
        "value": "First"
      },
      {
        "name": "subject",
        "value": "Subject"
      },
      {
        "name": "referred_by",
        "value": "Referred by"
      },
      {
        "name": "message",
        "value": "Message"
      }
    ]
  }),
};

$.ajax(settings).done(function (response) {
  console.log(response);
});