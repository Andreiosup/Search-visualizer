export function linearSearch(array,target){
    const animations=[]
    for (let i=0;i<=array.length-1;i++){
        // animations.push([i,"yellow"])
        if (array[i]===target){
            animations.push([i,"green"])
            return animations
        }else{
            animations.push([i,"red"])
        }
        animations.push([i,"gray"])
    }
    return animations
}

export function binarySearch(array,target){
    const animations=[]
    let left = 0
    let right=array.length-1
    let middle=Math.floor((left+right)/2)
    while (left<=right){
        middle=Math.floor((left+right)/2)

        if(array[middle]===target){
            animations.push([middle,"green"])
            return animations
        }
        else if (array[middle]<target){
            animations.push([middle,"red"])
            left=middle+1
        }
        else if (array[middle]>target){
            animations.push([middle,"red"])
            right=middle-1
        }
        animations.push([middle,"gray"])
    }
    return animations;
}