import purgecssModule from "@fullhuman/postcss-purgecss";

const purgecss = purgecssModule.default ?? purgecssModule;
const isBuild = process.env.NODE_ENV === "production";

export default {
  plugins: isBuild
    ? [
        purgecss({
          content: ["./index.html", "./src/**/*.js"],
          safelist: ["hidden", "open"],
        }),
      ]
    : [],
};