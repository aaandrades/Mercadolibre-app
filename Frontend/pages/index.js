import Image from "next/image";
import Link from "next/link";
import { Information } from "../components/Information/Information";
import styles from "./styles/index.module.scss";

export default function Index() {

  return (
    <>
      <Information />
      <div className={styles.body_main}>
        <div className={styles.background}>
          <div>
            <Image
              src="/general-logo.png"
              width={350}
              height={90}
              alt="MercadoLibre-Logo"
            />
          </div>
          <Link href="/items">
            <div className={styles.background__button}>
              ¡Encuentra lo que necesites!
            </div>
          </Link>
        </div>
      </div>
      <a href="https://dribbble.com/aaandrades">
        <div className={styles.button__dribble}>
          <Image src="/dribble.png" width={39} height={39} alt="dribble-logo" />
        </div>
      </a>
      <a href="https://github.com/aaandrades">
        <div className={styles.button__github} href="youtube.com">
          <Image src="/github.png" width={45} height={45} alt="github-logo" />
        </div>
      </a>
      <a href="https://www.linkedin.com/in/andr%C3%A9s-andrade-51962b105/">
        <div className={styles.button__linkedin}>
          <Image
            src="/linkedin.png"
            width={40}
            height={40}
            alt="Linkedin-logo"
          />
        </div>
      </a>
    </>
  );
}
