import './App.css'
import Card from './Card'

const events = [
  {
    title: "No-Gi Grappling Seminar",
    location: "Miami BJJ Club",
    date: "June 20, 2025",
    instructor: "Coach Mike",
    image: "/nogi.jpg",
    link: "https://example.com/event1"
  },
  {
    title: "Muay Thai Smoker",
    location: "Hard Knocks Gym",
    date: "July 5, 2025",
    instructor: "Samart Payakaroon",
    image: "/smoker.jpg",
    link: "https://example.com/event2"
  },
  {
    title: "Wrestling for MMA Workshop",
    location: "Gladiator Academy",
    date: "June 25, 2025",
    instructor: "Coach Alexander",
    image: "/wrestle.jpg",
    link: "https://example.com/event3"
  },
  {
    title: "Striking Defense Drills",
    location: "Fight Fit Hialeah",
    date: "July 10, 2025",
    instructor: "Sensei Luis",
    image: "/strikingd.jpg",
    link: "https://example.com/event4"
  },
  {
    title: "Open Mat: MMA Sparring",
    location: "305 MMA",
    date: "Every Saturday",
    instructor: "N/A",
    image: "/mmaspar.jpg",
    link: "https://example.com/event5"
  },
  {
    title: "Judo Takedowns for MMA",
    location: "Coral Gables Dojo",
    date: "June 29, 2025",
    instructor: "Coach Yasuhiro",
    image: "/judo.jpg",
    link: "https://example.com/event6"
  },
  {
    title: "Boxing Basics for Beginners",
    location: "Beast Boxing Gym",
    date: "July 1, 2025",
    instructor: "Coach Saul",
    image: "/boxing.jpg",
    link: "https://example.com/event7"
  },
  {
    title: "BJJ Kids Tournament",
    location: "Little Warriors BJJ",
    date: "July 15, 2025",
    instructor: "Prof. Roger",
    image: "bjj.png",
    link: "https://example.com/event8"
  },
  {
    title: "Kickboxing Cardio Camp",
    location: "Sweat Box MMA",
    date: "July 3, 2025",
    instructor: "Coach Max",
    image: "/kickb.jpg",
    link: "https://example.com/event9"
  },
  {
    title: "Fight IQ: Strategy Seminar",
    location: "Nova MMA Hall",
    date: "July 20, 2025",
    instructor: "Coach Jon",
    image: "/strat.jpg",
    link: "https://example.com/event10"
  },
]

function App() {
  return (
    <div className="container">
      <h1>MMA Community Board</h1>
      <div className="grid">
        {events.map((event, index) => (
          <Card key={index} {...event} />
        ))}
      </div>
    </div>
  )
}

export default App
