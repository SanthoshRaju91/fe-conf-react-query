const kebabCase = require("lodash/kebabCase");

const purgeFromTsx = (content) => {
  const matches = content.match(/[A-Za-z0-9-_:/]+/g) || [];
  const kebab = matches.map((m) => kebabCase(m));
  return matches.concat(kebab).filter((value, index, self) => {
    return self.indexOf(value) === index;
  });
};

module.exports = {
  plugins: [
    require("tailwindcss"),
    process.env.NODE_ENV === "production" &&
      require("@fullhuman/postcss-purgecss")({
        content: ["./src/**/*.tsx", "./public/index.html"],
        extractors: [
          {
            extractor: purgeFromTsx,
            extensions: ["html", "tsx"],
          },
        ],
      }),
  ],
};
