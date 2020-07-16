const photoPlayer = TweenMax.from(".db-player__image-bg", 1, { 
	delay: .4,
	opacity: 0,
	ease: Expo.easeInOut
});

const namePlayerBg = TweenMax.from(".db-player__name", 1, { 
	delay: .8,
	x: -200,
	opacity: 0,
	ease: Expo.easeInOut
});
const strip = TweenMax.from(".db-player__strip", 1, { 
	delay: .9,
	x: 250,
	opacity: 0,
	ease: Expo.easeInOut
});
const teamPlayer = TweenMax.from(".db-player__name-team", 1, { 
	delay: 1.5,
	y: -30,
	opacity: 0,
	ease: Expo.easeInOut
});
const nameText = TweenMax.from("#name-text", 1, { 
	delay: 1.4,
	opacity: 0,
	ease: Expo.easeInOut
});
const nameTeamText = TweenMax.from("#name-team-text", 1, { 
	delay: 1.9,
	x: -20,
	opacity: 0,
	ease: Expo.easeInOut
});