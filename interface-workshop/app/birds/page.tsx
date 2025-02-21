import styles from "./birds.module.css"

// Main Bird interface
export interface Bird {
}

// Interface for demonstrating duck typing
interface Displayable {
  name: string
  getDescription: () => string
}

const birds: Bird[] = [
  {
    species: "Robin",
    habitat: ["Gardens", "Woodlands"],
    wingspan: 20,
    diet: ["Insects", "Berries"],
  },
  {
    species: "Blue Tit",
    habitat: ["Gardens", "Deciduous forests"],
    wingspan: 18,
    diet: ["Insects", "Seeds"],
  },
  {
    species: "Blackbird",
    habitat: ["Gardens", "Parks", "Woodlands"],
    wingspan: 34,
    diet: ["Worms", "Insects", "Berries"],
  },
]

// Function to adapt Bird to Displayable
function adaptBirdToDisplayable(bird: Bird): Displayable {
  return {
    name: bird.species,
    getDescription: () => `Habitat: ${bird.habitat.join(", ")} - Wingspan: ${bird.wingspan}cm`,
  }
}

// Add a bird feeder 
const birdFeeder: Displayable = {
  name: "Wooden Bird Feeder",
  getDescription: () => "A handcrafted wooden bird feeder for garden birds",
  
}

// Function that can display any Displayable object
function DisplayItem(item: Displayable) {
  return (
    <div className={styles.displayItem}>
      <h3>{item.name}</h3>
      <p>{item.getDescription()}</p>
    </div>
  )
}

export default function BirdsPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Birds in British Gardens</h1>
      <p className={styles.description}>Discover the beautiful birds that visit British gardens.</p>

      <div className={styles.birdList}>
        {birds.map((bird, index) => (
          <div key={index} className={styles.birdCard}>
            <h2>{bird.species}</h2>
            <p>Habitat: {bird.habitat.join(", ")}</p>
            <p>Wingspan: {bird.wingspan}cm</p>
            <p>Diet: {bird.diet.join(", ")}</p>
          </div>
        ))}
      </div>

      <h2 className={styles.subtitle}>Quacks like a Duck Typing Demo</h2>
      <div className={styles.duckTypingDemo}>
        {DisplayItem(adaptBirdToDisplayable(birds[0]))}
        {DisplayItem(birdFeeder)}
      </div>
    </div>
  )
}
