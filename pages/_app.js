import "../styles/tailwind.css";
import "../styles/slick.css";

function MyApp({ Component, pageProps }) {
  // Adding the custom gradient background to the outermost div
  return (
    <div className="bg-gradient-to-tr min-h-screen">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
