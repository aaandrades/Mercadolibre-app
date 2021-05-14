import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useForm } from "../hooks/useFormHooks";
import styles from "./SearchBarComponent.module.scss";

export const SearchBarComponent = ({ setSearch }) => {
  const initialState = {
    actual: "",
  };

  const {
    search: { actual },
    handleInputChange,
    handleSubmit,
  } = useForm(initialState);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className={styles.searchBox}>
          <div className={styles.searchBox__contentSearchBar}>
            <Link href="/">
              <div className={styles.searchBox__contentSearchBar__img}>
                <Image src="/Logo_ML@2x.png" width={50} height={32} alt="Logo"/>
              </div>
            </Link>
            <input
              type="text"
              name="search"
              autoComplete="false"
              className={styles.searchBox__contentSearchBar__input}
              placeholder="Nunca dejes de buscar"
              value={actual}
              onChange={handleInputChange}
            />
            <button
              type="submit"
              className={styles.searchBox__contentSearchBar__search}
            >
              <Image src="/ic_Search.png" alt="buscar" width={15} height={15} />
            </button>
          </div>
        </div>
      </form>
    </>
  );
};
