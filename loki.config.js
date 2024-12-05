module.exports = {
  configurations: {
    chrome: {
      target: "chrome.app",
      width: 800,
      height: 600,
      deviceScaleFactor: 1,
    },
  },
  storiesFilter: (storyPath) => !storyPath.includes("node_modules"),
};
