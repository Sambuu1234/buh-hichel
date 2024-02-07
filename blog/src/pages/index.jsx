import { useEffect, useState } from "react";
import {
  Header,
  BlogPost,
  Trending,
  Profile,
  Footer,
} from "@/components/layout";
export default function Home() {
  const [articles, setArticles] = useState([]);
  const [filteredArray, setFilteredArray] = useState(articles);
  const [filteredTrend, setFilteredTrend] = useState(articles);
  const [filteredPro, setFilteredPro] = useState(articles);

  const fetchData = async () => {
    try {
      const arrayRes = await fetch(" https://dev.to/api/articles?per_page=9");
      const trendRes = await fetch(" https://dev.to/api/articles?per_page=4");
      const proRes = await fetch(" https://dev.to/api/articles?per_page=5]");
      const arrayData = await arrayRes.json();
      const trendData = await trendRes.json();
      const proData = await proRes.json();
      setArticles(arrayData);
      setFilteredArray(arrayData);
      setFilteredTrend(trendData);
      setFilteredPro(proData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSearch = (event) => {
    const filteredArticles = articles.filter((article) =>
      article.title.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setFilteredArray(filteredArticles);
  };

  return (
    <div>
      <Header handleSearch={handleSearch}></Header>
      <Profile pro={filteredPro}></Profile>
      <Trending trend={filteredTrend}></Trending>
      <BlogPost blog={filteredArray}></BlogPost>
      <Footer></Footer>
    </div>
  );
}
