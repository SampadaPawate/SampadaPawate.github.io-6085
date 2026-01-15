const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  basePath: isProd ? '/SampadaPawate.github.io-6085' : '',
  assetPrefix: isProd ? '/SampadaPawate.github.io-6085' : '',
  images: {
    unoptimized: true,
    domains: [
      'res.cloudinary.com',
      'avatars.githubusercontent.com',
      'imgur.com',
    ],
  },
  trailingSlash: true,
  output: 'export',
};
