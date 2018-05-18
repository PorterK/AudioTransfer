const {desktopCapturer} = require('electron')

desktopCapturer.getSources({types: ['window', 'screen']}, (error, sources) => {
  if (error) throw error
    navigator.mediaDevices.getUserMedia({
      audio: {
        mandatory: {
          chromeMediaSource: 'desktop',
        }
      },
      video: {
        mandatory: {
          chromeMediaSource: 'desktop',
        }
      }
    })
    .then((stream) => handleStream(stream))
    .catch((e) => console.log(e))
    return
});

function handleStream(stream) {
  const video = document.querySelector('video')
  video.srcObject = stream;
  video.onloadedmetadata = (e) => video.play();
}
