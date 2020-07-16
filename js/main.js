const photoPlayer = gsap.timeline();

photoPlayer.from(".db-player__image-bg", {x: 1000, duration: 1});
const namePlayer = TweenMax.from(".db-player__name", {y: 1000, x: -1000, duration: 1});
const teamPlayer = TweenMax.from(".db-player__name-team", {y:1000, x: 1000, duration: 1});