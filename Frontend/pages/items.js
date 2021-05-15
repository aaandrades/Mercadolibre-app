import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Information } from "../components/Information/Information";
import { ResultsComponent } from "../components/Results/ResultsComponent";
import { SearchBarComponent } from "../components/SearchBar/SearchBarComponent";
import mercadolibreService from "../helpers/mercadolibreService";
import styles from "./styles/items.module.scss";

export default function items () {
  const router = useRouter();
  const search  = router?.query?.search;

  const initialState = {
    data: [],
    loading: true,
  };
  const [state, setState] = useState(initialState);

  useEffect(() => {
    if (search) {
      mercadolibreService(search, true).then((data) => {
        setState({
          data,
          loading: false,
        });
      });
    }
  }, [search]);

  return (
    <>
      <Information />
      <div className={styles.body_main}>
        <SearchBarComponent setSearch={search} />
        <ResultsComponent results={state} />
      </div>
    </>
  );
};
