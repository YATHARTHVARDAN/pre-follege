$(document).ready(function() {
  $('input[type="checkbox"]').click(function() {
    if ($(this).prop("checked") == true) {
      vex.dialog.open({
        message: "Please enter your e-mail and college :",
        input:
          '<input name="email" type="email" placeholder="exa@follege.com" required />\n<input name="college" type="text" placeholder="Delhi Uni" required />',
        buttons: [
          $.extend({}, vex.dialog.buttons.YES, {
            text: "Add me!"
          })
        ],
        callback: function(data) {
          console.log(data);
          if (data) {
            $("#form-acc").prop("checked", false);
            pageclipwrapper(data);
          }
        }
      });
    }
  });
});

function pageclipwrapper(data) {
  Pageclip.send(
    "zqs4Uv8TFsNPIZHq9u86Lp3LgNXSUo3j",
    "mailing-form",
    data,
    function(error, response) {
      console.log("saved?", !!error, "; response:", error || response);
    }
  );
}

var first = document.getElementById('main');
var second = document.getElementById('main_sub');

first.style.height = screen.height + 'px';
first.style.width = screen.width + 'px';

second.style.height = screen.height + 'px';
second.style.width = screen.width + 'px';


var dev = document.getElementById('main_device');
dev.style.position = 'absolute';
if(screen.width > screen.height + 100)
{
  dev.style.width = '40%';
  var up = dev.style.height;

  dev.style.bottom = '-45%';
  dev.style.left = '40%';
}
if(screen.height > screen.width)
{
  dev.style.width = '80%';
  dev.style.left = '10%';
}


