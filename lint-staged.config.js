// lint-staged.config.js
export default {
  "**/*.ts?(x)": () => ["tsc -p tsconfig.json --noEmit", "yarn lint"],
};
