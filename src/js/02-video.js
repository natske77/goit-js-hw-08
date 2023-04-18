import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const currentTimeKey = 'videoplayer-current-time';

player.on('timeupdate', throttle(function(event) {
  localStorage.setItem(currentTimeKey, event.seconds);
}, 1000));

const savedTime = localStorage.getItem(currentTimeKey);
if (savedTime) {
  player.setCurrentTime(savedTime);
}