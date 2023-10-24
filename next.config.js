/** @type {import('next').NextConfig} */
module.exports = {
  output: 'standalone',
  assetPrefix: process.env.SELF_PATH,
  publicRuntimeConfig: {
    SELF_PATH: process.env.SELF_PATH
  }
}
