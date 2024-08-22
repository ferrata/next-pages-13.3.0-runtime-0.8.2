const createWithMakeswift = require("@makeswift/runtime/next/plugin")

const withMakeswift = createWithMakeswift()

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

// module.exports = nextConfig
module.exports = withMakeswift(nextConfig)
