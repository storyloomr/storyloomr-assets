const StyleDictionary = require("style-dictionary");

module.exports = {
	source: ["tokens/tokens.json", "tokens/tokens.light.json"],
	platforms: {
		css: {
			transformGroup: "css",
			buildPath: "tokens/build/css/",
			files: [
				{
					destination: "variables.css",
					format: "css/variables",
				},
				{
					destination: "tokens.json",
					format: "json/flat",
				},
			],
		},
		ios: {
			transformGroup: "ios",
			buildPath: "tokens/build/ios/",
			files: [
				{
					destination: "colors.swift",
					format: "ios-swift/class.swift",
					className: "StoryLoomrColors",
				},
			],
		},
		android: {
			transformGroup: "android",
			buildPath: "tokens/build/android/",
			files: [
				{
					destination: "colors.xml",
					format: "android/colors",
				},
			],
		},
	},
};
