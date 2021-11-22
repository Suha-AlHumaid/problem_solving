
function highestRank(arr){
    arr.sort();
    let max_count = 1; 
    let res = arr[0];
    let curr_count = 1;

       
    for (let i = 1; i < arr.length; i++)
    {
        if (arr[i] == arr[i - 1])
            curr_count++;
        else
        {
            if (curr_count > max_count)
            {
                max_count = curr_count;
                res = arr[i - 1];
            }
            curr_count = 1;
        }
    }
   
    // If last element is most frequent
    if (curr_count > max_count)
    {
        max_count = curr_count;
        res = arr[arr.length - 1];
    }
   return res
    }

console.log(highestRank([12,10,8,8,3,3,3,3,2,4,10,12,10]))