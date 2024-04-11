module.exports = {
  "*.+(ts|tsx)": [() => "yarn tsc -p tsconfig.json --noEmit"],
  "packages/waggle-service/**/*.+(ts|tsx)": [
    () => "yarn tsc -p packages/waggle-service/tsconfig.json --noEmit",
  ],
  "packages/waggle-design-system/**/*.+(ts|tsx)": [
    () => "yarn tsc -p packages/waggle-design-system/tsconfig.json --noEmit",
  ],
  "**/*.+(ts|tsx|js|jsx)": ["eslint --fix --cache", "prettier --write"],
};
