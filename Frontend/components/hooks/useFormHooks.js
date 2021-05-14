import Router from "next/router";
import { useState } from "react";

export const useForm = (initialState = {}) => {
  // Set the values
  const [search, setSearch] = useState(initialState);

  // Get the value of form and set new Values in input
  const handleInputChange = ({ target }) => setSearch({ actual: target.value });

  // when submit form
  const handleSubmit = (e) => {
    Router.push(
      {
        pathname: "/items",
        query: { search: search.actual },
      },
      undefined,
      { shallow: true }
    );

    e.preventDefault();
  };

  return { search, handleInputChange, handleSubmit };
};
