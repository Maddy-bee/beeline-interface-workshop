import styles from "./bees.module.css"
import Image from "next/image"

interface Bee {
  readonly species: string
  description: string
  pollinationEfficiency: number
  endangeredStatus?: string
  imageUrl: string
}

const bees: Bee[] = [
  {
    species: "Honey Bee",
    description: "The most common bee in British gardens",
    pollinationEfficiency: 0.8,
    imageUrl: "/placeholder.svg?height=100&width=100",
  },
  {
    species: "Bumblebee",
    description: "Large, fuzzy bees with a distinctive buzz",
    pollinationEfficiency: 0.9,
    endangeredStatus: "Vulnerable",
    imageUrl: "/placeholder.svg?height=100&width=100",
  },
  {
    species: "Mason Bee",
    description: "Solitary bees that nest in hollow stems",
    pollinationEfficiency: 0.95,
    imageUrl: "/placeholder.svg?height=100&width=100",
  },
]

export default function BeesPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Bees in British Gardens</h1>
      <p className={styles.description}>Discover the important pollinators in your garden.</p>
      <div className={styles.beeList}>
        {bees.map((bee, index) => (
          <div key={index} className={styles.beeCard}>
            <h2>{bee.species}</h2>
            <Image
              src={bee.imageUrl || "/placeholder.svg"}
              alt={bee.species}
              width={100}
              height={100}
              className={styles.beeImage}
            />
            <p>{bee.description}</p>
            <p>Pollination Efficiency: {(bee.pollinationEfficiency * 100).toFixed(0)}%</p>
            {bee.endangeredStatus && <p>Status: {bee.endangeredStatus}</p>}
          </div>
        ))}
      </div>
    </div>
  )
}

