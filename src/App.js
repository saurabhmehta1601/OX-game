import './App.css';
import { useEffect ,useState } from 'react';
import X from "./components/x"
import O from "./components/o"

function App() {
  const board = Array(9).fill(0).map((item ,idx) => idx + 1)
  
  const [activePlayer,setActivePlayer] = useState(1)
  const [player1Cells,setPlayer1Cells] = useState([])
  const [player2Cells,setPlayer2Cells] = useState([])
  

  const handleClick = (e) =>{
    const gridItem = e.target.dataset.id

    if(player2Cells.includes(gridItem) || player1Cells.includes(gridItem) ){
      alert("Spot reserved")
    }
    else if(activePlayer==1 ){
      if(!gridItem){
        alert("Spot reserved")
        return 
      }
      const newCells = [...player1Cells,gridItem]
      setPlayer1Cells(newCells)
      setActivePlayer(2)
    }else if(activePlayer==2){
      if(!gridItem){
        alert("Spot reserved")
        return 
      }
      const newCells = [...player2Cells,gridItem]
      setPlayer2Cells(newCells)
      setActivePlayer(1)
    }
  }

  return (
    <div className="board">
     
      {board.map((item) =>{

        if(player1Cells.find(i => i==item) ){
          return <div key={item} data-id={item} onClick={handleClick}><X /></div>
        }else if(player2Cells.find( i => i==item )){
          return <div key={item} data-id={item} onClick={handleClick}><O /></div>
        }else{
          return <div key={item} data-id={item} onClick={handleClick}></div>
        } 
      })}


      {/* {board.map((item,idx) => {
        if(item % 2 ===0) return <div><X /></div>
        else return <div><O /></div>
      })} */}

    </div>
  );
}

export default App;
