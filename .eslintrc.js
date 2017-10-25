module.exports = {
  extends: ["standard", "prettier"],
  plugins: ["react", "prettier"],
  env: {},
  rules: {
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": 2,
    "prettier/prettier": [
      "error",
      {
        semi: false
      }
    ]
  },
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  }
}
