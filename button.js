function OnClick()
{
    var input = document.getElementById("textinput").value;
    var result;

    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://r6irmiu26k.execute-api.us-east-1.amazonaws.com/Production/bgc-to-json",
        "method": "POST",
        "headers": {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          "file": "work!!!",
          "Cache-Control": "no-cache",
          "Postman-Token": "42823dfd-c7d5-f035-1f20-6fb37402c7e8"
        },
      
        "processData": false,
        "data": "{\n  \"body\": {\"bgc\": \"{\\\"game_name\\\":\\\"Poly Rules\\\",\\\"version\\\":\\\"0.0.3\\\",\\\"user_name\\\":\\\"colan\\\",\\\"device_id\\\":\\\"94cc6ab99c15d019e7cd9b446684059fbba37bf2\\\",\\\"session_number\\\":\\\"0\\\",\\\"run_number\\\":\\\"0\\\",\\\"delimiter\\\":\\\"|\\\",\\\"column_mapping\\\":{\\\"default\\\":[\\\"level\\\",\\\"trial\\\",\\\"stimulus_id\\\",\\\"shape\\\"]},\\\"value_mapping\\\":{}}\\n0|0|0|{\\\"Color\\\":\\\"Blue\\\",\\\"Shape\\\":\\\"Square\\\",\\\"Size\\\":\\\"Medium\\\",\\\"Texture\\\":\\\"Empty\\\",\\\"Children\\\":[]}\\n0|1|0|{\\\"Color\\\":\\\"Blue\\\",\\\"Shape\\\":\\\"Square\\\",\\\"Size\\\":\\\"Medium\\\",\\\"Texture\\\":\\\"Empty\\\",\\\"Children\\\":[]}\\n0|2|0|{\\\"Color\\\":\\\"Green\\\",\\\"Shape\\\":\\\"Triangle\\\",\\\"Size\\\":\\\"Medium\\\",\\\"Texture\\\":\\\"Empty\\\",\\\"Children\\\":[]}\\n0|3|0|{\\\"Color\\\":\\\"Green\\\",\\\"Shape\\\":\\\"Triangle\\\",\\\"Size\\\":\\\"Medium\\\",\\\"Texture\\\":\\\"Empty\\\",\\\"Children\\\":[]}\\n0|4|0|{\\\"Color\\\":\\\"Green\\\",\\\"Shape\\\":\\\"Triangle\\\",\\\"Size\\\":\\\"Medium\\\",\\\"Texture\\\":\\\"Empty\\\",\\\"Children\\\":[]}\\n0|5|0|{\\\"Color\\\":\\\"Green\\\",\\\"Shape\\\":\\\"Triangle\\\",\\\"Size\\\":\\\"Medium\\\",\\\"Texture\\\":\\\"Empty\\\",\\\"Children\\\":[]}\\n0|6|0|{\\\"Color\\\":\\\"Blue\\\",\\\"Shape\\\":\\\"Square\\\",\\\"Size\\\":\\\"Medium\\\",\\\"Texture\\\":\\\"Empty\\\",\\\"Children\\\":[]}\\n0|7|0|{\\\"Color\\\":\\\"Green\\\",\\\"Shape\\\":\\\"Triangle\\\",\\\"Size\\\":\\\"Medium\\\",\\\"Texture\\\":\\\"Empty\\\",\\\"Children\\\":[]}\\n0|8|0|{\\\"Color\\\":\\\"Blue\\\",\\\"Shape\\\":\\\"Square\\\",\\\"Size\\\":\\\"Medium\\\",\\\"Texture\\\":\\\"Empty\\\",\\\"Children\\\":[]}\\n0|9|0|{\\\"Color\\\":\\\"Green\\\",\\\"Shape\\\":\\\"Triangle\\\",\\\"Size\\\":\\\"Medium\\\",\\\"Texture\\\":\\\"Empty\\\",\\\"Children\\\":[]}\\n0|10|0|{\\\"Color\\\":\\\"Green\\\",\\\"Shape\\\":\\\"Triangle\\\",\\\"Size\\\":\\\"Medium\\\",\\\"Texture\\\":\\\"Empty\\\",\\\"Children\\\":[]}\\n0|11|0|{\\\"Color\\\":\\\"Blue\\\",\\\"Shape\\\":\\\"Square\\\",\\\"Size\\\":\\\"Medium\\\",\\\"Texture\\\":\\\"Empty\\\",\\\"Children\\\":[]}\\n0|12|0|{\\\"Color\\\":\\\"Green\\\",\\\"Shape\\\":\\\"Triangle\\\",\\\"Size\\\":\\\"Medium\\\",\\\"Texture\\\":\\\"Empty\\\",\\\"Children\\\":[]}\\n0|13|0|{\\\"Color\\\":\\\"Green\\\",\\\"Shape\\\":\\\"Triangle\\\",\\\"Size\\\":\\\"Medium\\\",\\\"Texture\\\":\\\"Empty\\\",\\\"Children\\\":[]}\\n0|14|0|{\\\"Color\\\":\\\"Green\\\",\\\"Shape\\\":\\\"Triangle\\\",\\\"Size\\\":\\\"Medium\\\",\\\"Texture\\\":\\\"Empty\\\",\\\"Children\\\":[]}\\n0|15|0|{\\\"Color\\\":\\\"Blue\\\",\\\"Shape\\\":\\\"Square\\\",\\\"Size\\\":\\\"Medium\\\",\\\"Texture\\\":\\\"Empty\\\",\\\"Children\\\":[]}\\n0|16|0|{\\\"Color\\\":\\\"Green\\\",\\\"Shape\\\":\\\"Triangle\\\",\\\"Size\\\":\\\"Medium\\\",\\\"Texture\\\":\\\"Empty\\\",\\\"Children\\\":[]}\\n0|17|0|{\\\"Color\\\":\\\"Blue\\\",\\\"Shape\\\":\\\"Square\\\",\\\"Size\\\":\\\"Medium\\\",\\\"Texture\\\":\\\"Empty\\\",\\\"Children\\\":[]}\\n0|18|0|{\\\"Color\\\":\\\"Blue\\\",\\\"Shape\\\":\\\"Square\\\",\\\"Size\\\":\\\"Medium\\\",\\\"Texture\\\":\\\"Empty\\\",\\\"Children\\\":[]}\\n0|19|0|{\\\"Color\\\":\\\"Blue\\\",\\\"Shape\\\":\\\"Square\\\",\\\"Size\\\":\\\"Medium\\\",\\\"Texture\\\":\\\"Empty\\\",\\\"Children\\\":[]}\\n0|20|0|{\\\"Color\\\":\\\"Blue\\\",\\\"Shape\\\":\\\"Square\\\",\\\"Size\\\":\\\"Medium\\\",\\\"Texture\\\":\\\"Empty\\\",\\\"Children\\\":[]}\\n0|21|0|{\\\"Color\\\":\\\"Green\\\",\\\"Shape\\\":\\\"Triangle\\\",\\\"Size\\\":\\\"Medium\\\",\\\"Texture\\\":\\\"Empty\\\",\\\"Children\\\":[]}\\n0|22|0|{\\\"Color\\\":\\\"Blue\\\",\\\"Shape\\\":\\\"Square\\\",\\\"Size\\\":\\\"Medium\\\",\\\"Texture\\\":\\\"Empty\\\",\\\"Children\\\":[]}\\n0|23|0|{\\\"Color\\\":\\\"Blue\\\",\\\"Shape\\\":\\\"Square\\\",\\\"Size\\\":\\\"Medium\\\",\\\"Texture\\\":\\\"Empty\\\",\\\"Children\\\":[]}\\n0|24|0|{\\\"Color\\\":\\\"Green\\\",\\\"Shape\\\":\\\"Triangle\\\",\\\"Size\\\":\\\"Medium\\\",\\\"Texture\\\":\\\"Empty\\\",\\\"Children\\\":[]}\\n0|25|0|{\\\"Color\\\":\\\"Blue\\\",\\\"Shape\\\":\\\"Square\\\",\\\"Size\\\":\\\"Medium\\\",\\\"Texture\\\":\\\"Empty\\\",\\\"Children\\\":[]}\\n0|26|0|{\\\"Color\\\":\\\"Green\\\",\\\"Shape\\\":\\\"Triangle\\\",\\\"Size\\\":\\\"Medium\\\",\\\"Texture\\\":\\\"Empty\\\",\\\"Children\\\":[]}\\n0|27|0|{\\\"Color\\\":\\\"Blue\\\",\\\"Shape\\\":\\\"Square\\\",\\\"Size\\\":\\\"Medium\\\",\\\"Texture\\\":\\\"Empty\\\",\\\"Children\\\":[]}\\n0|28|0|{\\\"Color\\\":\\\"Blue\\\",\\\"Shape\\\":\\\"Square\\\",\\\"Size\\\":\\\"Medium\\\",\\\"Texture\\\":\\\"Empty\\\",\\\"Children\\\":[]}\\n0|29|0|{\\\"Color\\\":\\\"Green\\\",\\\"Shape\\\":\\\"Triangle\\\",\\\"Size\\\":\\\"Medium\\\",\\\"Texture\\\":\\\"Empty\\\",\\\"Children\\\":[]}\\n0|30|0|{\\\"Color\\\":\\\"Green\\\",\\\"Shape\\\":\\\"Triangle\\\",\\\"Size\\\":\\\"Medium\\\",\\\"Texture\\\":\\\"Empty\\\",\\\"Children\\\":[]}\\n0|31|0|{\\\"Color\\\":\\\"Blue\\\",\\\"Shape\\\":\\\"Square\\\",\\\"Size\\\":\\\"Medium\\\",\\\"Texture\\\":\\\"Empty\\\",\\\"Children\\\":[]}\\n0|32|0|{\\\"Color\\\":\\\"Blue\\\",\\\"Shape\\\":\\\"Square\\\",\\\"Size\\\":\\\"Medium\\\",\\\"Texture\\\":\\\"Empty\\\",\\\"Children\\\":[]}\\n0|33|0|{\\\"Color\\\":\\\"Blue\\\",\\\"Shape\\\":\\\"Square\\\",\\\"Size\\\":\\\"Medium\\\",\\\"Texture\\\":\\\"Empty\\\",\\\"Children\\\":[]}\\n0|34|0|{\\\"Color\\\":\\\"Green\\\",\\\"Shape\\\":\\\"Triangle\\\",\\\"Size\\\":\\\"Medium\\\",\\\"Texture\\\":\\\"Empty\\\",\\\"Children\\\":[]}\\n0|35|0|{\\\"Color\\\":\\\"Green\\\",\\\"Shape\\\":\\\"Triangle\\\",\\\"Size\\\":\\\"Medium\\\",\\\"Texture\\\":\\\"Empty\\\",\\\"Children\\\":[]}\\n0|36|0|{\\\"Color\\\":\\\"Blue\\\",\\\"Shape\\\":\\\"Square\\\",\\\"Size\\\":\\\"Medium\\\",\\\"Texture\\\":\\\"Empty\\\",\\\"Children\\\":[]}\\n0|37|0|{\\\"Color\\\":\\\"Blue\\\",\\\"Shape\\\":\\\"Square\\\",\\\"Size\\\":\\\"Medium\\\",\\\"Texture\\\":\\\"Empty\\\",\\\"Children\\\":[]}\\n0|38|0|{\\\"Color\\\":\\\"Blue\\\",\\\"Shape\\\":\\\"Square\\\",\\\"Size\\\":\\\"Medium\\\",\\\"Texture\\\":\\\"Empty\\\",\\\"Children\\\":[]}\\n0|39|0|{\\\"Color\\\":\\\"Blue\\\",\\\"Shape\\\":\\\"Square\\\",\\\"Size\\\":\\\"Medium\\\",\\\"Texture\\\":\\\"Empty\\\",\\\"Children\\\":[]}\"\n}}"

    }
    
    
    
    $.ajax(settings).done(function (response) {
    
      console.log(response);

      result = response;
      
      if(result != null)
      {
          var dialog = bootbox.dialog({
              message: '<center><h5 style="color: #77B300">Parsing was a success</h5></center>' +
              '<textarea readonly class="form-control" id="output" rows="8">' + result + '</textarea>',
              buttons: {
                  copyToClipboard: {
                      label: "Copy to Clipboard",
                      className: 'btn-info',
                      callback: function()
                      {
                          const output = document.getElementById("output");
                          output.select();
                          document.execCommand("copy");
                        }
                        
                    }
                }
            });
        }
        
        else
        {
            var dialog = bootbox.dialog({
                message: '<center><h5 style="color: #CC0000">Parsing failed</h5></center>',
                className: 'bg-danger',
                backdrop: true,
                onEscape: true
            });
        }
    });
}