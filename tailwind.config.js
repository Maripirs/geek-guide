module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {
		extend: {},
		fontSize: {
			xs: ".6rem",
			sm: ".7rem",
			base: ".8rem",
			lg: "1rem",
			xl: "1.1rem",
			"2xl": "1.2rem",
			"3xl": "1.3rem",
			"4xl": "1.4rem",
			"5xl": "1.5rem",
		},
	},
	plugins: [require("daisyui")],
	daisyui: {
		styled: true,
		themes: [
			{
				geek: {
					primary: "#B6B2D3",

					secondary: "#60a5fa",

					accent: "#6ee7b7",

					neutral: "#d1d5db",

					"base-100": "#EDECF4",

					info: "#28A7E2",

					success: "#1BBB78",

					warning: "#EECD59",

					error: "#E31C41",
				},
				geek_dark: {
					primary: "#1e3a8a",

					secondary: "#60a5fa",

					accent: "#065f46",

					neutral: "#191D24",

					"base-100": "#1f2937",

					info: "#3ABFF8",

					success: "#36D399",

					warning: "#FBBD23",

					error: "#F87272",
				},
			},
		],
		base: true,
		utils: true,
		logs: true,
		rtl: false,
		prefix: "",
		darkTheme: "geek_dark",
	},
};
