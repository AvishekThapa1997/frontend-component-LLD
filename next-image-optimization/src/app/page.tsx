import styles from "./page.module.css";
import ProductSection from "./ProductSection";

export default function Home() {
  return (
    <div className={styles.page}>
      <ProductSection />
    </div>
  );
}
