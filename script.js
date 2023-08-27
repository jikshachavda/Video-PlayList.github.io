var playlist = document.querySelectorAll(".playlist-container .playlist");

playlist.forEach((play) => {
  play.onclick = () => {
    console.log(play);
    playlist.forEach((remove) => {
      remove.classList.remove("active");
    });
    play.classList.add("active");
    let playsrc = play.querySelector(".list-video").src;
    document.querySelector(".play-video").src = playsrc;
    document.querySelector(".play-video").play();
  };
});
