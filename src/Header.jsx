import { visualizeSearch } from "./Array"
import { binarySearch, linearSearch } from "./search"
export default function Header(props){
    return(
        <header>
            <div className="logo">Search visualizer</div>

            <input type="text" placeholder="Number" className="number-input" />
            <button onClick={()=>visualizeSearch(linearSearch)}>Linear search</button>
            <button onClick={()=>visualizeSearch(binarySearch)}>Binary Search</button>
            
        </header>
    )
}