import * as a from "@makeswift/runtime/next"

import { strict } from "assert"

strict(process.env.MAKESWIFT_SITE_API_KEY, "MAKESWIFT_SITE_API_KEY is required")

export default a.MakeswiftApiHandler(process.env.MAKESWIFT_SITE_API_KEY, {
  apiOrigin: process.env.MAKESWIFT_API_ORIGIN,
  appOrigin: process.env.MAKESWIFT_APP_ORIGIN,
})
