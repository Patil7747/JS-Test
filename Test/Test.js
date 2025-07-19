//Q1 Find the First Non-Repeating Element in an Array
function firstnonelement(arr)
{
    var freq={};
    for(var i=0;i<arr.length;i++)
    {
        var el=arr[i];
        if(freq[el])
        {
            freq[el]++;
        }
        else
        {
            freq[el]=1;
        }
    }
    for(var i=0;i<arr.length;i++)
    {
        if(freq[arr[i]]==1)
        {
            return arr[i];

        }
    }
    return null;

}
console.log(firstnonelement([4,5,1,2,0,4,1,0]))


// Q2 Check if Two Objects Have the Same Keys and Valuesfunc

function equalobject(obj1,obj2)
{
    var keys1=Object.keys(obj1);
    var keys2=Object.keys(obj2);
    if(keys1.length!==keys2.length)
        return false;
    for(var i=0; i<keys1.length;i++)
    {
        var key= keys1[i];
        if(obj1[key]!==obj2[key])
            return false;
    }
    return true;
        
}
console.log(equalobject({a:1,b:2},{b:2,a:1}))


//Q3. Merge Two Arrays and Remove Duplicates

function mergeremove(arr1, arr2)
{
    var result =[];
    for(var i=0; i<arr1.length;i++)
    {
        if(result.indexOf(arr1[i])==-1)
        {
            result.push(arr1[i]);
        }
        
    }
    for ( var i=0;i<arr2.length;i++)

        {
             if(result.indexOf(arr2[i])==-1)
        {
            result.push(arr2[i]);
        }
        }
        return result;
}
console.log(mergeremove( [1, 2, 3], [2, 3, 4]));

// Q4 Convert an Array of Objects into a Single Object

function arrtoobj(arr)
{
    var result={};
    for ( var i= 0;i<arr.length;i++)
    {
        result[arr[i].id]=arr[i].name;
    }
    return result;
}

console.log(arrtoobj([{ id: 1, name: "A" },{ id: 2, name: "B" }]));

// Q5. Find a Pair With Given Sum (Using Object Map)
function sumpair(arr, target)
{
    var seen={};
    for( var i=0;i<arr.length;i++)
    {
        var num=arr[i];
        var diff=target-num;
        if(seen[diff])
        {
            return true;
        }
        seen[num]=true;
    }
    return false;
}
console.log(sumpair([1,2,4,7],6));

// Q6. Find Missing Number in Sorted Array (Binary Search)

function miss(arr)
{
    var left=0;
    var right=arr.length-1;

    while (left<=right)
    {
        var mid = Math.floor((left+right)/2);
        if ( arr[mid]==mid+1)
        {
            left=mid+1;

        }
        else{
            right=mid-1;
        }
    }
    return left+1;


}

console.log(miss( [1, 2, 3, 5, 6]));


// Q7. Convert Object to Array of Key-Value Pairs

function objTOarr(obj)
{
    var result=[];
    for ( var key in obj)
    {
        result.push([key,obj[key]]);
    }
    return result;

}
console.log(objTOarr( { a: 1, b: 2 }))

// Q8. Bitwise Operation: Count Number of 1s in Binary

function countOne(n)
{
    var count=0;
    while(n>0)
    {
        if ((n & 1)==1)
        {
            count++;
        }
        n=n>>1;
    }
    return count;
}
console.log(countOne(9)); // not getting binary numbers

// Q9. Binary Search in Sorted Array

function binarysearch(arr,target)
{
    var left=0;
    var right= arr.length-1;
    while(left<=right)
    {
        var mid=Math.floor((left+right)/2)
        if ( arr[mid ]==target)
            return mid;
        else if( arr[mid]<target)
            left=mid+1;
        else
            right=mid-1;
    }
    return -1;
}
console.log(binarysearch( [1, 3, 5, 7, 9], 5))

//Q10. Group Elements by Frequency
 function freq(arr)
 {
    var result={};
    for ( var i=0;i<arr.length;i++)
    {
        var num =arr[i];
        if (result[num])
        {
            result[num]++;

        }
        else{
            result[num]=1;
        }
    }
    return result;
 }
 console.log(freq([1, 1, 2, 3, 3, 3]))