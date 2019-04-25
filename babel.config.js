module.exports = api => {
  api.cache(false);
  const presets = [
    ["@babel/preset-env", { loose: true }],
    ["@babel/preset-react"]
  ];
  const plugins = [];

  return {
    presets,
    plugins,
    ignore: ["/node_modules/"]
  };
};
