// 9. Write a function that for a given departure and arrival time calculates the time the trip
// takes.
// Input: 8:22:13 11:43:22
// Output: 3 hours 21 minutes 9 seconds

function tripTime(startT,endT){
    var ar=startT.split(":");
    var ar2=endT.split(":");
   
    console.log(ar,ar2);

    var start=new Date( 0, 0, 0,ar[0], ar[1], ar[2]);
    var end=new Date(0,0,0,ar2[0],ar2[1],ar2[2]);

console.log(start,end);

    var diff=end.getTime()-start.getTime();
    
    var hours=Math.floor((diff% (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    console.log(hours);
    var min=Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    var sec=Math.floor((diff % (1000 * 60)) / 1000);

    return hours+" hours "+ min +" minutes "+ sec + " seconds ";


}


console.log(tripTime("8:43:13","10:43:22"));