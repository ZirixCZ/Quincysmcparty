function LivemapOpenFUNC() {
    window.open("http://193.121.128.145:4269/")
  }
  function DiscordInvite() {
    window.open("https://discord.gg/F2zFuaB")
  }
  function GithubOpen() {
    window.open("https://github.com/ZirixCZ/Quincysmcparty")
  }
  let play = function(){document.getElementById("audio").play()}

let a;
let hiddenElement = document.querySelector('#focus-a');
let filelocation = 'https://media.giphy.com/media/UzfeHWBs50fmAOhfg1/giphy.gif';
hiddenElement.addEventListener('click', show_hide);
function show_hide() {
    if(a==1) {
        return a=0;
    }
        else {
       
        document.getElementById('hidden').style.backgroundImage = `url(${filelocation})`;
        var i=0;
        var j=0;
        function divchange() {
          var divtag = document.getElementById("community-s");
          var bgcolor = ["#e666bc", "#be3fd0", "#8742b0", "#4e1897", "#101872"];
          divtag.style.backgroundColor=bgcolor[i];
          i=(i+1)%bgcolor.length;
        
        }
        setInterval(divchange,500);
        return a=1;
        
    }
}
