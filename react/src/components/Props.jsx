export const List = (props) => {
  const { Array } = props;
  return (
    <>
      {Array.map((element) => (
        <div>
          img:{element.imgUrl}, name:{element.title}
        </div>
      ))}
    </>
  );
};
