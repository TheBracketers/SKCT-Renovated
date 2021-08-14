import 'tailwindcss/tailwind.css';
import Layout from '../common/components/Layout';
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <div className="pt-40 w-full h-screen flex justify-center items-center  text-center">
        <Component {...pageProps} />
      </div>
    </Layout>
  );
}
export default MyApp;
