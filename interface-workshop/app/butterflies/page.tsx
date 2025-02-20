import styles from "./butterflies.module.css"


interface Butterfly {
}

const butterflies: Butterfly[] = [
  {
    name: "Peacock",
    wingspanCm: 6.3,
    colors: ["Red", "Blue", "Yellow"],
  },
  {
    name: "Red Admiral",
    wingspanCm: 6.7,
    colors: ["Red", "Black", "White"],
    migratoryPattern: "Long-distance migrant",
  },
  {
    name: "Small Tortoiseshell",
    wingspanCm: 5.0,
    colors: ["Orange", "Black", "Blue"],
  },
]

export default function ButterfliesPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Butterflies in British Gardens</h1>
      <p className={styles.description}>Explore the colorful world of garden butterflies.</p>
      <div className={styles.butterflyList}>
        {butterflies.map((butterfly, index) => (
          <div key={index} className={styles.butterflyCard}>
            <h2>{butterfly.name}</h2>
            <p>Wingspan: {butterfly.wingspanCm} cm</p>
            <p>Colors: {butterfly.colors.join(", ")}</p>
            {butterfly.migratoryPattern && <p>Migration: {butterfly.migratoryPattern}</p>}
          </div>
        ))}
      </div>
    </div>
  )
}

