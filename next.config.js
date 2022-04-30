module.exports = (_, { defaultConfig }) => {
  if ("sassOptions" in defaultConfig) {
    defaultConfig["sassOptions"] = {
      includePaths: ["./src"],
      prependData: `@import "~@styles/config/variables.scss";`,
    };
  }
  return defaultConfig;
};

// https://tr.horecapolis.info/286573-next-js-using-sass-variables-LXTTMV
