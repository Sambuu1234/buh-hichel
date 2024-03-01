import { useEffect, useState } from "react";
import { Header, Footer, BlogList } from "@/components/layout";
export default function Home() {
  const [articles, setArticles] = useState([]);
  const [filteredList, setFilteredList] = useState(articles);
  const [number, setNumber] = useState(12);
  const Loadmore = () => {
    setNumber(number + 3);
  };

  const fetchList = async () => {
    try {
      const res = await fetch(
        ` https://dev.to/api/articles?per_page=${number}`
      );
      const data = await res.json();
      setArticles(data);
      setFilteredList(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchList();
  }, [number]);

  const handleSearch = (event) => {
    const filteredArticles = articles.filter((article) =>
      article.title.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setFilteredList(filteredArticles);
  };

  return (
    <div>
      <Header handleSearch={handleSearch}></Header>
      <BlogList list={filteredList} load={Loadmore}></BlogList>
      {/* <BlogPost></BlogPost> */}
      <Footer></Footer>
    </div>
  );
}
