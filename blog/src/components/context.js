import { createContext } from "react";
export const FirstContext = createContext({ Name: "Dorjsambuu" });
export const FirstContextProvider = ({ children }) => {
  // const [articles, setArticles] = useState([]);
  return (
    <FirstContext.Provider value={{ Name: "sambuu" }}>
      {children}
    </FirstContext.Provider>
  );
};
// import { createContext } from "react";
// import { useEffect, useState } from "react";
// export const FirstContext = createContext([]);
// export const FirstContextProvider = ({ children }) => {
//     const [articles, setArticles] = useState([]);
//     const fetchData = async () => {
//         try {
//           const arrayRes = await fetch(" https://dev.to/api/articles?per_page=9");
//           const trendRes = await fetch(" https://dev.to/api/articles?per_page=4");
//           const proRes = await fetch(" https://dev.to/api/articles?per_page=5]");
//           const arrayData = await arrayRes.json();
//           const trendData = await trendRes.json();
//           const proData = await proRes.json();
//           setArticles(arrayData);
//           setFilteredArray(arrayData);
//           setFilteredTrend(trendData);
//           setFilteredPro(proData);
//         } catch (error) {
//           console.log(error);
//         }
//       };

    
//   // const [articles, setArticles] = useState([]);
//   return (
//     <FirstContext.Provider value={articles}>
//       {children}
//     </FirstContext.Provider>
//   );
// };