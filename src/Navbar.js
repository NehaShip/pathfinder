import './index.css'; 

const Navbar = () => {

    const A_algorithm = () => {
        return 0;
    }

    const Dijkstras_algorithm = () => {
        return 0;
    }

    return ( 
        <div className="navbar">
            <h1>PATHFINDING VISUALIZER</h1>
            <div className='controlPanel'>
                <div className='radiobutton'>
                    <input class="input_radiobuttons" type="radio" name="selectionMode" readonly value="start"></input>
                    <label className='radiobutton_labels' for='input_radiobuttons'>Start</label> 
                    <input class="input_radiobuttons" type="radio" name="selectionMode" readonly value="end"></input>
                    <label className='radiobutton_labels' for='input_radiobuttons'>End</label> 
                    <input class="input_radiobuttons" type="radio" name="selectionMode" readonly value="obstacles"></input>
                    <label className='radiobutton_labels' for='input_radiobuttons'>Obstacles</label>   
                </div>
                <div className='controlBar'>
                    <div className='dropDownList'>
                        <select>
                            <option value={A_algorithm}>A algorithm</option>
                            <option value={Dijkstras_algorithm}>Dijkstras algorithm</option>
                        </select>
                    </div>
                    <div className='visualizeButton'>
                        <button type='button'>Visualize</button>
                        <button type='button'>Clear screen</button>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Navbar;