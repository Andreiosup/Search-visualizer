import './styles.css'
import Item from './item';
import { linearSearch,binarySearch } from './search';

const LIST=generateSortedList()
function Array() {
    return (
      <div className="array">
        {
            LIST.map((num,numKey)=>{
                    return <Item key={numKey} num={num}></Item>
            })
        }
      </div>
    );
}

export function visualizeSearch(callback){
    let array=document.querySelectorAll('.item')
    let numberInput=parseInt(document.querySelector('.number-input').value)
    let animations=callback(LIST,numberInput)

    for(let i=0;i<=array.length-1;i++){
        array[i].style.backgroundColor="white"
        
    }

    for(let i=0;i<=animations.length-1;i++){
        const [index,color]=animations[i]
        console.log(index)
        setTimeout(()=>{
            array[index].style.backgroundColor=color
        },i * 1000)
    }
}
function generateSortedList(){
    const list=[]
    let num=1
    for(let i=1;i<=10;i++){
        list.push(num)
        num+=randomNumber(1,15)
    }
    return list
}
function randomNumber(min, max) {  
    return Math.floor(Math.random() * (max - min) + min); 
}  
  
export default Array;