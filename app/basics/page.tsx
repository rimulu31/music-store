import React from "react";

const Basics = async () => {
  const objA = {
    surname: "Doe",
  };

  const person = {
    name: "John",
    age: 30,
    myObject: objA,
    myArray: [1, 2, 3],
  };

  const sum = (a: number) => (b: number) => (c: number) => {
    return a + b + c;
  };

  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello");
    }, 5000);
  });

  promise
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });

  const wait = (ms: number) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Waited");
      }, ms);
    });
  };

  const data = await wait(5000);
  console.log("Waited", data);

  return (
    <div>
      {person.name}
      {person.age}
      {person.myObject.surname}
      {person.myArray[0]}
    </div>
  );
};

export default Basics;