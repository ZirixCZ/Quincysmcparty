function myFunction() {
      var x = document.getElementById("myTopnav");
      if (x.className === "topnav") {
        x.className += " responsive";
      } else {
        x.className = "topnav";
      }
    }



    function textChange(){
        document.getElementById('title_p1-mserip').innerHTML = "---";
      }

      function VersionCheck() {
        window.open("https://minecraft.gamepedia.com/Java_Edition_1.16.3")
      }

      function DiscordInvite() {
        window.open("https://discord.gg/F2zFuaB")
      }
      function LivemapOpenFUNC() {
        window.open("http://193.121.28.29:4269/")
      }

      /*count down*/
      var countDownDate = new Date ("Nov 7, 2020 15:00:00").getTime();
      var x = setInterval(function() {
        var now = new Date().getTime();
        var distance = countDownDate - now;

        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 *24)) / (1000*60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("count_down-p").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

        if (distance < 0) {
          clearInterval(x);
          document.getElementById("count_down-p").innerHTML = "Enjoy!"
        }
      }, 1000);
