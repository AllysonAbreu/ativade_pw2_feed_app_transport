import styles from "./titleDriver.module.css";

export default function TitleDriver() {
  return (
    <div>
      <h1 className={styles.title}>
        Encontre <span>Carlos Almeida</span> no local de partida
      </h1>
      <p className={styles.subtitle}>Chega em 5 minutos (1000 metros)</p>
    </div>
  );
}
