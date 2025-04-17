"use client";

import React, { useState } from "react";

const Person = () => {
  const [person, setPerson] = useState({
    name: "Shine Bo Bo",
    age: 22,
    email: "shinebobo@gmail.com",
    salary: 1000,
  });

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;

    setPerson((prev) => ({
      ...prev,
      [name]: name === "age" ? Number(value) : value,
    }));
  }

  return (
    <div className="max-w-sm mx-auto my-5 border p-5 rounded-lg shadow-lg">
      <div className="flex flex-col my-5 bg-gray-300 p-5 rounded-lg gap-3">
        <div>Name: {person.name}</div>
        <div>Age: {person.age}</div>
        <div>Email: {person.email}</div>
        <div>Salary: {person.salary}</div>
      </div>
      <label className="text-2xl font-bold" htmlFor="name">
        Name
      </label>
      <input
        name="name"
        className="border p-2 w-full rounded-2xl my-2"
        type="text"
        value={person.name}
        onChange={handleInputChange}
      />
      <label className="text-2xl font-bold" htmlFor="age">
        Age
      </label>
      <input
        name="age"
        className="border p-2 w-full rounded-2xl my-2"
        type="number"
        value={person.age}
        onChange={handleInputChange}
      />
      <label className="text-2xl font-bold" htmlFor="email">
        Email
      </label>
      <input
        name="email"
        className="border p-2 w-full rounded-2xl my-2"
        type="email"
        value={person.email}
        onChange={handleInputChange}
      />
      <label className="text-2xl font-bold" htmlFor="salary">
        Salary
      </label>
      <input
        name="salary"
        className="border p-2 w-full rounded-2xl my-2"
        type="number"
        value={person.salary}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default Person;
