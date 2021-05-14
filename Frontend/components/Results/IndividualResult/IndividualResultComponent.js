import React from "react";
import Link from "next/link";
import styles from "./IndividualResultComponent.module.scss";
import { currencyPipe } from "../../../helpers/pipes";

export const IndividualResultComponent = ({ items }) => {
  return (
    <div className={styles.mainCard}>
      {items.map((item) => (
        <Link href={`/items/${encodeURIComponent(item.id)}`} key={item.id}>
          <div className={styles.mainCard__card} key={item.id}>
            <img
              className={styles.mainCard__card__img}
              src={item.picture}
              alt={item.id}
            />
            <div className={styles.mainCard__card__description}>
              <div className={styles.mainCard__card__description__superior}>
                <div
                  className={
                    styles.mainCard__card__description__superior__currency
                  }
                >
                  {currencyPipe(item.price.amount, item.price.currency).integer}
                  <div>
                    {currencyPipe(item.price.amount, item.price.currency)
                      ?.decimals && (
                      <sup className={styles.super}>
                        {
                          currencyPipe(item.price.amount, item.price.currency)
                            ?.decimals
                        }
                      </sup>
                    )}
                  </div>

                  {item.free_shipping && (
                    <img
                      src="/ic_shipping@2x.png"
                      alt="shipping"
                      className={
                        styles.mainCard__card__description__superior__currency__img
                      }
                    />
                  )}
                </div>
                <div
                  className={
                    styles.mainCard__card__description__superior__location
                  }
                >
                  <p>{item.location}</p>
                </div>
              </div>
              <div className={styles.mainCard__card__description__body}>
                {item.title}
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};
