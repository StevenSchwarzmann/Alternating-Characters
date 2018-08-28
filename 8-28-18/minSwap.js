function minimumSwaps(arr) {
    var count = 0;
    let temp;
        for(let i = 0; i < arr.length - 1; i++){
            if(arr[i] != (i + 1)){
                for(let j = i + 1; j < arr.length; j++){
                    if((i+1) == arr[j]){
                        temp = arr[i];
                        arr[i]=arr[j];
                        arr[j]=temp;
                        count++;
                        break;
                    }
                }
            }
        }
   return count
}