import { List } from "@/components/Props";
export default function Home() {
  const arr = [
    {
      imgUrl:
        "https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_1280.jpg",
      title: "Bi nere medehgui",
    },
    {
      imgUrl:
        "https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510_1280.jpg",
      title: "Bi nere meddegch baij magadgu",
    },
  ];
  return (
    <>
      <div>
        <List Array={arr}></List>
      </div>
    </>
  );
}
