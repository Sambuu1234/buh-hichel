import "@/styles/globals.css";
import { FirstContextProvider } from "../components/context";
export default function App({ Component, pageProps }) {
  return (
    <FirstContextProvider>
      <Component {...pageProps} />;
    </FirstContextProvider>
  );
}
// import { FirstContextProvider } from "./context";
// export default function App({ Component, pageprops }) {
//   return (
//     <FirstContextProvider>
//       <Component {...pageprops} />
//     </FirstContextProvider>
//   );
// }
