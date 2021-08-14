import 'tailwindcss/tailwind.css';
import Layout from '../common/components/Layout';
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <div className="pt-32">
        <Component {...pageProps} />
      </div>
    </Layout>
  );
}
export default MyApp;
