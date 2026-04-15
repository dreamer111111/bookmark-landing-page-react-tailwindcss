import Button from "./components/ui/Button"

function App() {

  return (
    <main>
      <h1 className="text-center">Bookmark Landing Page</h1>
      <Button children="Get it on Chrome" variant="primary" />
      <Button children="Get it on FireFox" variant="secondary" />
      <Button children="Log in" variant="danger" />

      
    </main>
  )
}

export default App
