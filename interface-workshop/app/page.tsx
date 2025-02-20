import styles from "./page.module.css"

interface GardenStats {
  readonly totalSpecies: number
  endangeredSpecies: number
  conservationEfforts: string[]
  lastUpdated?: Date
}

const gardenStats: GardenStats = {
  totalSpecies: 1500,
  endangeredSpecies: 50,
  conservationEfforts: ["Habitat restoration", "Pollinator-friendly planting", "Pesticide reduction"],
  lastUpdated: new Date("2025-02-20"),
}

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome to British Garden Nature</h1>
      <p className={styles.description}>Explore the fascinating world of insects and flowers in British gardens.</p>
      <div className={styles.stats}>
        <h2>Garden Biodiversity Stats</h2>
        <ul>
          <li>Total Species: {gardenStats.totalSpecies}</li>
          <li>Endangered Species: {gardenStats.endangeredSpecies}</li>
          <li>
            Conservation Efforts:
            <ul>
              {gardenStats.conservationEfforts.map((effort, index) => (
                <li key={index}>{effort}</li>
              ))}
            </ul>
          </li>
          {gardenStats.lastUpdated && <li>Last Updated: {gardenStats.lastUpdated.toDateString()}</li>}
        </ul>
      </div>
      <div className={styles.imageContainer}>
      </div>
      
    </div>
  )
}

