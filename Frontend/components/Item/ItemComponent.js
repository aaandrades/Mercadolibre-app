import React from "react";
import { conditionPipe, currencyPipe } from "../../helpers/pipes";
import styles from "./ItemComponent.module.scss";
import Lottie from "react-lottie";
import NotFound from "../../assets/not-found.json"

export const ItemComponent = ({ queryId }) => {
  const { data, loading } = queryId;

  const NotFoundOptions = {
    loop: true,
    autoplay: true,
    animationData: NotFound,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className={styles.container}>
      {data === undefined && (
        <div>
          <Lottie options={NotFoundOptions} height={400} width={400} />
          <h1 className={styles.loading}>Página no encontrada</h1>
        </div>
      )}
      {!!!loading && data && (
        <div className={styles.container__item}>
          <section className={styles.container__item__description}>
            <img
              src={data.picture}
              alt={data.id}
              className={styles.container__item__description__img}
            />
            <div className={styles.container__item__description__body}>
              <h1>Descripción del producto</h1>
              <p className={styles.container__item__description__body__text}>
                {data.description}
              </p>
            </div>
          </section>
          <section className={styles.container__item__info}>
            <div className={styles.container__item__info__state}>
              <span>{conditionPipe(data.condition)} </span>
              <span className={styles.container__item__info__state__quantity}>
                {data.sold_quantity} vendidos
              </span>
            </div>
            <div className={styles.container__item__info__title}>
              {data.title}
            </div>
            <div className={styles.container__item__info__price}>
              {currencyPipe(data.price.amount, data.price.currency).integer}
              <sup>
                {currencyPipe(data.price.amount, data.price.currency)?.decimals}
              </sup>
            </div>
            <button className={styles.container__item__info__button}>
              Comprar
            </button>
          </section>
        </div>
      )}
    </div>
  );
};
