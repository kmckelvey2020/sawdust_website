import Layout from "@/src/features/layout";
import "./_app.css"

export default function App({ Component, pageProps }) {
  return (
      <Layout>
          <Component {...pageProps} />
      </Layout>
    )
}
