import './App.css';
import { useEffect ,useState } from 'react';
import X from "./components/x"
import O from "./components/o"
import {evaluateWinner} from "./lib/utils"

function App() {
  const board = Array(9).fill(0).map((item ,idx) => idx + 1)
  
  const [activePlayer,setActivePlayer] = useState(1)
  const [player1Cells,setPlayer1Cells] = useState([])
  const [player2Cells,setPlayer2Cells] = useState([])

  const handleClick = (e) =>{
    const gridItem = e.target.dataset.id

    if(player2Cells.includes(gridItem) || player1Cells.includes(gridItem) ){
      alert("Spot already marked")
    }
    else if(activePlayer === 1 ){
      if(!gridItem){
        alert("Spot already marked")
        return 
      }
      const newCells = [...player1Cells,gridItem]
      setPlayer1Cells(newCells)
      setActivePlayer(2)
    }else if(activePlayer === 2){
      if(!gridItem){
        alert("Spot already marked")
        return 
      }
      const newCells = [...player2Cells,gridItem]
      setPlayer2Cells(newCells)
      setActivePlayer(1)
    }
  }

  useEffect(() =>{

    const is1Winner = evaluateWinner(player1Cells)
    if (is1Winner) {
       alert("Player 1 won") 
       window.location.reload()
      }

    const is2Winner = evaluateWinner(player2Cells)
    if (is2Winner) {
       alert("Player 2 won") 
       window.location.reload()
      }

    if(player1Cells.length + player2Cells.length === 9){
      alert("Match is draw")
      window.location.reload()
      }

  },[player1Cells,player2Cells])

  return (
    <div className="board">
     
      {board.map((item) =>{

        if(player1Cells.find(i => parseInt(i) === item) ){
          return <div key={item} data-id={item} onClick={handleClick}><X /></div>
        }else if(player2Cells.find( i => parseInt(i) === item )){
          return <div key={item} data-id={item} onClick={handleClick}><O /></div>
        }else{
          return <div key={item} data-id={item} onClick={handleClick}></div>
        } 
      })}

    </div>
  );
}

export default App;
