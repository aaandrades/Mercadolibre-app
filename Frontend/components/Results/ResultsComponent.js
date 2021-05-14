import React from "react";
import Lottie from "react-lottie";
import LoadingData from "../../assets/loading.json";
import NoResults from "../../assets/no-results.json";
import { IndividualResultComponent } from "./IndividualResult/IndividualResultComponent";
import styles from "./ResultsComponent.module.scss";

export const ResultsComponent = React.memo(({ results }) => {
  const { data, loading } = results;
  const { categories, items } = data;
  let fromDashboard = true;

  const loadingOptions = {
    loop: true,
    autoplay: true,
    animationData: LoadingData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const notFoundOptions = {
    loop: true,
    autoplay: true,
    animationData: NoResults,
  };

  // Execute only in the browser (client-side)
  // process.browser -> have been decrepated
  if (typeof window !== "undefined") {
    fromDashboard = window.location.href.includes("?search") ? false : true;
  }

  return (
    <div className={styles.mainResults}>
      {loading && fromDashboard && (
        <div>
          <Lottie options={loadingOptions} height={400} width={400} />
          <h1 className={styles.loading}>¡Inicia tu búsqueda!</h1>
        </div>
      )}

      {!items?.length && !loading && (
        <div>
          <Lottie options={notFoundOptions} height={400} width={400} />
          <h1 className={styles.loading}>
            No encontramos resultados para tu búsqueda
          </h1>
        </div>
      )}

      {!loading && items?.length > 0 && (
        <div className={styles.mainResults__generalContainer}>
          <div className={styles.mainResults__categories}>
            {categories?.map((category) => (
              <div key={category}>
                {">"} {category} {">"}
              </div>
            ))}
          </div>
          <div className={styles.mainResults__container}>
            <IndividualResultComponent items={items} />
          </div>
        </div>
      )}
    </div>
  );
});
