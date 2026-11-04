// Estándar de construcción B-5 (semana 10): umbrales acordados por el equipo
module.exports = [
  {
    files: ["src/**/*.js"],
    languageOptions: { ecmaVersion: 2022, sourceType: "commonjs" },
    rules: {
      complexity: ["warn", 5],
      "max-depth": ["warn", 2],
      "max-params": ["warn", 3],
      "max-lines-per-function": ["warn", 20],
    },
  },
];