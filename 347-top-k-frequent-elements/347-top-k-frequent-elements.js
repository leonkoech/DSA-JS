/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    //[2,3,4,5,5,3,2,2,1]
    // 4
    // resulting arr has a len of k
    // hashmap ={num:count}
    // find numbers with the highest count
    // create array with [key,counts]
    // loop through the first k values of that array adding them to the answwer
    
    const map={}, temp=[],res=[];
    for (let i=0;i<nums.length;i++){
        if(nums[i] in map){
            map[nums[i]] ++;
        }
        else{
            map[nums[i]] = 1;
        }
    }
    for(let entry of Object.entries(map)){
        temp.push(entry);
    }
    temp.sort((a,b)=>b[1]-a[1]);
  
    for(let item=0; item<k;item++){
        res.push(parseInt(temp[item][0]));
        
    }
    return res;
};