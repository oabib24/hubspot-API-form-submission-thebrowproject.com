$(".sie-contact-form_view-1_1").click(function () {
  var settings = {
    "url": "https://api.hsforms.com/submissions/v3/integration/submit/{account_id}/{form_id}",
    "method": "POST",
    "timeout": 0,
    "headers": {
      "Content-Type": "application/json",
      "Authorization": "Bearer pat-na1-67d5cb30-f8a6-4b40-a2be-fdad83244875"
    },
    "data": JSON.stringify({
      "fields": [
        {
          "name": "email",
          "value": $(".sie-contact-form_view-1_12-text").val()
        },
        {
          "name": "firstname",
          "value": $(".sie-contact-form_view-1_13-text").val()
        },
        {
          "name": "phone",
          "value": $(".sie-contact-form_view-1_11-text").val()
        },
        {
          "name": "subject",
          "value": $(".sie-contact-form_view-1_10-text").val()
        },
        {
          "name": "referred_by",
          "value": $(".sie-contact-form_view-1_9-text").val()
        },
        {
          "name": "message",
          "value": $(".sie-contact-form_view-1_8-text").val()
        }
      ]
    }),
  };

  $.ajax(settings).done(function (response) {
    console.log(response);
  });

})