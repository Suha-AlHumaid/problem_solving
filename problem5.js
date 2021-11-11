
function highestRank(arr){
    let num=0;
    let num2= 0;
    for (let i =0 ; i <arr.length ; i++)
    {
        let curr = 1

        for (let j=1 ; j<arr.length; j++)
        {
           
            if (arr[i]==arr[j]){
                num++
                if(num>curr){
                    num2=arr[i]
                   }
                   else if (num2 == curr)
                   num2 = Math.min(num2, arr[i])
            } 
        }
    }
    return num2
    }

console.log(highestRank([12,10,8,8,3,3,3,3,2,4,10,12,10]))