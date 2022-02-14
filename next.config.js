/** @type {import('next').NextConfig} */
module.exports = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://yapi.valsn.com/mock/11/api/:path*',
        // destination: 'https://dev-api.olicharity.org/api/:path*',
        // destination: 'https://e5f4-183-14-212-239.ngrok.io/api/:path*',
        // destination: 'http://127.0.0.1/api/:path*',
      },
    ]
  },
}
