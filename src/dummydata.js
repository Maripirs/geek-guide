const games = [
	{
		name: "welcome-to",
		image:
			"https://cf.geekdo-images.com/g4XmxyKhNVdhC3QPd1purQ__itemrep/img/QKJwfdV3Qrv9w2TX_ML5T3z5G9E=/fit-in/246x300/filters:strip_icc()/pic3761012.jpg",
	},
	{
		name: "sagrada",
		image:
			"https://cf.geekdo-images.com/PZt3EAAGV3dFIVuwMR0AEw__itemrep/img/fLGFtsAiZgj3VwTDvgCn2yBIDYw=/fit-in/246x300/filters:strip_icc()/pic3525224.jpg",
	},
];

const game = [
	{
		name: "welcome-to",
		sections: ["turn-order", "icon-legend"],
		image:
			"https://cf.geekdo-images.com/g4XmxyKhNVdhC3QPd1purQ__itemrep/img/QKJwfdV3Qrv9w2TX_ML5T3z5G9E=/fit-in/246x300/filters:strip_icc()/pic3761012.jpg",
		year: "2016",
		players: "1-100",
		playingTime: "25 Min",
		bgg: "https://boardgamegeek.com/boardgame/233867/welcome",
	},
	{
		name: "sagrada",
		sections: ["turn-order", "icon-legend"],
		image:
			"https://cf.geekdo-images.com/PZt3EAAGV3dFIVuwMR0AEw__itemrep/img/fLGFtsAiZgj3VwTDvgCn2yBIDYw=/fit-in/246x300/filters:strip_icc()/pic3525224.jpg",
		year: "2017",
		players: "1-4",
		playingTime: "30-45 Min",
		bgg: "https://boardgamegeek.com/boardgame/199561/sagrada",
	},
];

const welcome_to_sections = [
	{
		type: "Icon Legend",
		content: [
			{
				name: "Real State",
				icon: "http://localhost:8000/media/images/Screen_Shot_2023-01-27_at_12.49.19_PM_L9bEEAO.png",
				description:
					"Promotes and increases the value of completed housing estates. To use the Real Estate Agent, choose a Real Estate column and cross off the top-most, lowestnumbered space. At the end of the game, each completed estate (size 2, 3, 4, etc...) scores as many points as the smallest, unchecked number from its corresponding column.",
			},
			{
				name: "Landscaper",
				icon: "http://localhost:8000/media/images/legend-welcome-to-landscaper.png",
				description:
					"Allows the player to build a park. The player crosses off one of the trees at the end of the street. Parks must be crossed off on the same street that the house number is written. Parks are crossed off, leftto-right in ascending order.",
			},
		],
	},
	{
		type: "Turn Order",
		content:
			"-Flip Over the top card of each deck -Choose one of the three available combinations  - Write the number from the chosen combination on one of the three streets on your sheet",
	},
];
const sagrada_sections = [];

export { game, games, sagrada_sections, welcome_to_sections };
