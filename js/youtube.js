// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement("script");

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
function onYouTubeIframeAPIReady() {
  // 아래의 player는 <div id="player"></div>
  new YT.Player("player", {
    // 유튜브 아이디 값: 유튜브 주소창에서 찾기(js로 제어하려고 한다면)
    videoId: "An6LvWQuj_8",
    playerVars: {
      autoplay: true,
      loop: true,
      playList: "An6LvWQuj_8", // 반복 재생할 유튜브 영상 아이디 목록
    },
    events: {
      onReady: function (event) {
        event.target.mute();
      },
      // 동영상이 플레이 되는 상황 자체를 event라고 하는 매개변수로 넘겨줌.
    },
    // 영상을 재생하기 위한 여러 변수들
  });
}
