export const SingleList = ({ single }) => {
  console.log(single);
  return (
    <div>
      <div>
        {single.map((el) => {
          return (
            <div>
              <div>{el.description}</div>
              <img src={el.cover_image} alt="" />
              <div>{el.title}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
