import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { SingleList, Footer, Header } from "@/components/layout";

export default function Home() {
  const [singleArray, setSingleArray] = useState([]);
  const router = useRouter();
  const id = router.query.id;

  const fetchData = async () => {
    try {
      const singleRes = await fetch(`https://dev.to/api/articles/${id}`);
      const singleData = await singleRes.json();
      setSingleArray(singleData);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (id) {
      fetchData();
    }
  }, [id]);
  console.log();

  return (
    <div>
      <Header></Header>
      {/* <SingleList single={singleArray}></SingleList> */}
      <div className="flex justify-center">
        <div className="container px-[160px]">
          <div>{singleArray.description}</div>
          <div>
            <img src={singleArray.cover_image} alt="" />
          </div>
          <div>{singleArray.title}</div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
}
