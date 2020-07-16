const photoPlayer = gsap.timeline();
photoPlayer.from(".db-player__image-bg", 1, { 
	delay: .4,
	opacity: 0,
	ease: Expo.easeInOut
});
const namePlayerBg = TweenMax.from(".db-player__name", 1, { 
	delay: 1,
	x: -20,
	opacity: 0,
	ease: Expo.easeInOut
});
const teamPlayer = TweenMax.from(".db-player__name-team", 1, { 
	delay: 3,
	y: -20,
	opacity: 0,
	ease: Expo.easeInOut
});
const nameText = TweenMax.from("#name-text", 1, { 
	delay: 2,
	y: -10,
	opacity: 0,
	ease: Expo.easeInOut
});
const nameTeamText = TweenMax.from("#name-team-text", 1, { 
	delay: 4,
	x: -20,
	opacity: 0,
	ease: Expo.easeInOut
});