import { PreviewModeScript, Document } from "@makeswift/runtime/next";
import { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <PreviewModeScript
            isPreview={this.props.__NEXT_DATA__.isPreview}
            appOrigin={process.env.MAKESWIFT_APP_ORIGIN}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
