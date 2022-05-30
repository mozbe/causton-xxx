module.exports = (api) => {
  api.cache.using(() => process.env.NODE_ENV);
  const plugins = ['@emotion'];

  if (!api.env('production')) {
    plugins.push('react-refresh/babel');
  }

  return {
    presets: [
      '@babel/preset-env',
      ['@babel/preset-react', { 'runtime': 'automatic' }],
      '@babel/preset-typescript',
    ],
    plugins,
  };
};
