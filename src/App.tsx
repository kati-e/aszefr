import AszefrImageCarousel from "./components/AszefrImageCarousel"
import "./globals.css"

function App() {

  const imgArray = [
    {
        url: "/assets/seal1.jpg",
        alt: "seal 1"
    },
    {
        url: "/assets/seal2.jpg",
        alt: "seal 2"
    },
    {
        url: "/assets/seal3.jpg",
        alt: "seal 3"
    }
]

  return (
    <main className="preview-page">
      <section className="component-preview-wrapper">
        <h2>Image Carousel</h2>
        <AszefrImageCarousel imgArray={imgArray}/>
      </section>
    </main>
  )
}

export default App
