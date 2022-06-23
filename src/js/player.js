class Player {
  constructor() {
    const thisPlayer = this;
    thisPlayer.initPlayer();
  }

  initPlayer() {
    // eslint-disable-next-line no-undef
    GreenAudioPlayer.init({
      selector: '.player',
      stopOthersOnPlay: true,
    });
  }
}

export default Player;
