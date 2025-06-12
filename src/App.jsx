import './App.css'
import Card from './Card'

const events = [
  {
    title: "No-Gi Grappling Seminar",
    location: "Gracie Barra Kendall",
    date: "June 20, 2025",
    instructor: "Coach Mike",
    image: "/nogi.jpg",
    link: "https://graciebarra.com/miami-fl-kendall/"
  },
  {
    title: "Muay Thai Smoker",
    location: "Bushido Muay Thai",
    date: "July 5, 2025",
    instructor: "Samart Payakaroon",
    image: "/smoker.jpg",
    link: "https://www.bushidomuaythai.com/"
  },
  {
    title: "Wrestling for MMA Workshop",
    location: "Evolution MMA",
    date: "June 25, 2025",
    instructor: "Coach Alexander",
    image: "/wrestle.jpg",
    link: "https://mmamiami.com/"
  },
  {
    title: "Striking Defense Drills",
    location: "Vice City Striking",
    date: "July 10, 2025",
    instructor: "Coach Ryan",
    image: "/strikingd.jpg",
    link: "https://vicecitystriking.com/"
  },
  {
    title: "Open Mat: MMA Sparring",
    location: "UFC Gym Kendall",
    date: "Every Saturday",
    instructor: "N/A",
    image: "/mmaspar.jpg",
    link: "https://www.instagram.com/ufcgymkendall/?hl=en"
  },
  {
    title: "Judo Takedowns for MMA",
    location: "A. Kolychkine Judo",
    date: "June 29, 2025",
    instructor: "Coach Yasuhiro",
    image: "/judo.jpg",
    link: "https://kolychkinejudo.com/"
  },
  {
    title: "Boxing Basics for Beginners",
    location: "Lion Heart Boxing",
    date: "July 1, 2025",
    instructor: "Coach Saul",
    image: "/boxing.jpg",
    link: "https://lhboxing.com/"
  },
  {
    title: "BJJ Kids Tournament",
    location: "Gama Filho Martial Arts",
    date: "July 15, 2025",
    instructor: "Prof. Roger",
    image: "bjj.png",
    link: "https://www.gamafilhomartialarts.com/"
  },
  {
    title: "Kickboxing Cardio Camp",
    location: "American Top Team",
    date: "July 3, 2025",
    instructor: "Coach Max",
    image: "/kickb.jpg",
    link: "https://www.attaventuranmb.com/"
  },
  {
    title: "Fight IQ: Strategy Seminar",
    location: "Kill Cliff FC",
    date: "July 20, 2025",
    instructor: "Coach Jon",
    image: "/strat.jpg",
    link: "https://www.killclifffc.com/"
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
