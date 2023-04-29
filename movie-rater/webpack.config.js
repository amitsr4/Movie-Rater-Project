import { resolve } from "path";

module.exports = {
  resolve: {
    fallback: { console: require.resolve("console-browserify") },
  },
};
