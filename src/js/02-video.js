import Player from '@vimeo/player';

const player = new Player('vimeo-player');
const currentTime = localStorage.getItem("time");
console.log(currentTime);




    player.on('timeupdate', function(event) {
        localStorage.setItem("time", event.seconds);
    });