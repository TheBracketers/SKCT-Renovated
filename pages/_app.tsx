import 'tailwindcss/tailwind.css';
import Layout from '../common/components/Layout';
import '../common/Styles/fade-in-out.css';
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <div className='pt-20 ipad-pro:pt-32 w-full flex justify-center items-center  text-center'>
        <Component {...pageProps} />
      </div>
    </Layout>
  );
}
export default MyApp;
