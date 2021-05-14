import { Information } from "../../components/Information/Information";
import { ItemComponent } from "../../components/Item/ItemComponent";
import { SearchBarComponent } from "../../components/SearchBar/SearchBarComponent";
import styles from "./id.module.scss";
import React, { useEffect, useState } from "react";
import mercadolibreService from "../../helpers/mercadolibreService";

export default function DynamicItem({ query }) {
  const { id } = query;

  const data = { data: [], loading: true };
  const [state, setState] = useState(data);

  useEffect(() => {
    mercadolibreService(id, false).then((data) =>
      setState({
        data: data.item,
        loading: false,
      })
    );
  }, [id]);

  return (
    <>
      <Information />
      <div className={styles.mainItem}>
        <SearchBarComponent />
        <ItemComponent queryId={state} />
      </div>
    </>
  );
}

DynamicItem.getInitialProps = ({ query }) => ({ query });
