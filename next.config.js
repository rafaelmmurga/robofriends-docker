/** @type {import('next').NextConfig} */
module.exports = {
  output: 'standalone',
  basePath: process.env.BASE_PATH,
  assetPrefix: `${process.env.BASE_PATH}/`,
}
