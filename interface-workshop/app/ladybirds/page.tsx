import styles from "./ladybirds.module.css"

interface Ladybird {
  readonly species: string
  spotCount: number
  primaryColor: string
  beneficialPrey: string[]
  invasiveStatus?: boolean
}

const ladybirds: Ladybird[] = [
  {
    species: "Seven-spot Ladybird",
    spotCount: 7,
    primaryColor: "Red",
    beneficialPrey: ["Aphids", "Scale insects"],
  },
  {
    species: "Two-spot Ladybird",
    spotCount: 2,
    primaryColor: "Red",
    beneficialPrey: ["Aphids", "Mites"],
  },
  {
    species: "Harlequin Ladybird",
    spotCount: 15,
    primaryColor: "Orange",
    beneficialPrey: ["Aphids", "Psyllids"],
    invasiveStatus: true,
  },
]

export default function LadybirdsPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Ladybirds in British Gardens</h1>
      <p className={styles.description}>Learn about these beneficial garden insects.</p>
      <div className={styles.ladybirdList}>
        {ladybirds.map((ladybird, index) => (
          <div key={index} className={styles.ladybirdCard}>
            <h2>{ladybird.species}</h2>
            <p>Spots: {ladybird.spotCount}</p>
            <p>Color: {ladybird.primaryColor}</p>
            <p>Preys on: {ladybird.beneficialPrey.join(", ")}</p>
            {ladybird.invasiveStatus && <p>Invasive Species</p>}
          </div>
        ))}
      </div>
    </div>
  )
}

