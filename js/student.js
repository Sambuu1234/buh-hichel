let students = [
    {
      name: "Сэд-Эрдэнэ",
      age: 19,
      gender: "male",
    },
    {
      name: "Индра",
      age: 19,
      gender: "female",
    },
    {
      name: "Хатнаа ",
      age: 21,
      gender: "male",
    },
    {
      name: "Тэмүүлэн",
      age: 24,
      gender: "male",
    },
    {
      name: "Намуун",
      age: 23,
      gender: "female",
    },
  ];
  //// er eminiin too gargana
  // const countGender = (Array) => {
  //   let male = 0;
  //   let female = 0;
  //   for (let i = 0; i < Array.length; i++) {
  //     if (Array[i].gender == "female") {
  //       female++;
  //     } else {
  //       male++;
  //     }
  //   }
  //   return { male, female };
  // };
  //console.log(countGender(students));
  function countGender=(students)=> {
    const obj = {};
    Array.array.forEach((element) => {
      if (obj[element.geder]) {
        obj[element.gender]++;
      } else {
        obj[element.gender] = 1;
      }
    });
    return obj;
  }
  console.log(countGender(students));
  // // nasni dundaj olno
  // const averageAge = (Array) => {
  //   let sum = 0;
  //   for (let i = 0; i < Array.length; i++) {
  //     sum += Array[i].age;
  //   }
  //   return sum / Array.length;
  // };
  // console.log(averageAge(students));
  ////surgachdin owgiig nemne
  
  
  
  
  