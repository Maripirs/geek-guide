module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {
		extend: {},
	},
	plugins: [require("daisyui")],
	daisyui: {
		styled: true,
		themes: [
			{
				geek: {
					primary: "#2563eb",

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
