/** @type {import('next').NextConfig} */
module.exports = {
  output: 'standalone',
  basePath: process.env.BASE_PATH,
  assetPrefix: process.env.NODE_ENV === "production" ? `${process.env.BASE_PATH}/` : undefined,
}
