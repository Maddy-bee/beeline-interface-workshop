import styles from "./flowers.module.css"

interface Flower {
  readonly name: string
  scientificName: string
  floweringSeason: string[]
  colors: string[]
  nectarRating?: number
}

const flowers: Flower[] = [
  {
    name: "Lavender",
    scientificName: "Lavandula",
    floweringSeason: ["Summer"],
    colors: ["Purple", "Pink"],
    nectarRating: 4,
  },
  {
    name: "Foxglove",
    scientificName: "Digitalis",
    floweringSeason: ["Spring", "Summer"],
    colors: ["Purple", "Pink", "White"],
  },
  {
    name: "Daffodil",
    scientificName: "Narcissus",
    floweringSeason: ["Spring"],
    colors: ["Yellow", "White"],
    nectarRating: 3,
  },
]

export default function FlowersPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Flowers in British Gardens</h1>
      <p className={styles.description}>Discover the beautiful flowers that bloom in British gardens.</p>
      <div className={styles.flowerList}>
        {flowers.map((flower, index) => (
          <div key={index} className={styles.flowerCard}>
            <h2>{flower.name}</h2>
            <p>Scientific Name: {flower.scientificName}</p>
            <p>Flowering Season: {flower.floweringSeason.join(", ")}</p>
            <p>Colors: {flower.colors.join(", ")}</p>
            {flower.nectarRating && <p>Nectar Rating: {flower.nectarRating}/5</p>}
          </div>
        ))}
      </div>
    </div>
  )
}

