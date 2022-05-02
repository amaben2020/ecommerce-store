const path = require("path");

const nextConfig = {
  images: {
    domains: ["loremflickr.com"],
  },
};

const sassConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
    prependData: `@import "~@styles/config/variables.scss";`,
  },
};

// merging 2 configs into one
module.exports = () => {
  return {
    ...sassConfig,
    ...nextConfig,
  };
};
