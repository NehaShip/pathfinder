import './index.css';
import { useState } from 'react'; 

const Pathfinder = () => {
    
    const [toof, setToof] = useState(false);

    const handleClick = () => {
        setToof(toof => !toof);
    }
    
    //A template for each node
    const Node = () => {
        return (
            <div className="node" style={{backgroundColor: toof ? 'salmon' : '',color: toof ? 'white' : '',}} onClick={handleClick}>
            </div>
        )
    }

    //Creating the grid
    const grid = [];
    for (let row = 0; row<20; row++){
        const currentrow = []
        for (let column = 0; column<47; column++){
            let newNode = Node();
            currentrow.push(newNode);
        }
        grid.push(currentrow);
    }

    //Displaying the grid
    return (                                             
        <div className="Grid">
            {grid.map((row, rowId) =>{
                return(
                    <div key={rowId} className="rows">
                        {row.map((node, nodeId) => {
                            return(
                                <Node />
                            );
                        })}
                    </div>
                );
            })}    
        </div>
    );

}
 
export default Pathfinder;
