import { useState } from "react"

function App() {
  const [color, setcolor] = useState("black")

  return (
    <>
      <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl" >
            <button onClick={() => setcolor("red")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"red"}}>Red</button>
            <button onClick={() => setcolor("blue")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"blue"}}>blue</button>
            <button onClick={() => setcolor("pink")} className="outline-none px-4 py-1 rounded-full shadow-lg text-black" style={{backgroundColor:"pink"}}>Pink</button>
            <button onClick={() => setcolor("gray")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"gray"}}>Gray</button>
            <button onClick={() => setcolor("yellow")} className="outline-none px-4 py-1 rounded-full shadow-lg text-black" style={{backgroundColor:"yellow"}}>Yellow</button>
            <button onClick={() => setcolor("purple")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"purple"}}>Purple</button>
            <button onClick={() => setcolor("lavender")} className="outline-none px-4 py-1 rounded-full shadow-lg text-black" style={{backgroundColor:"lavender"}}>Lavender</button>
            <button onClick={() => setcolor("white")} className="outline-none px-4 py-1 rounded-full shadow-lg text-black" style={{backgroundColor:"white"}}>White</button>
            <button onClick={() => setcolor("green")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"green"}}>Green</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
