// 3. Initialize two arrays. The first one should contain student names, the second one the
// number of points for each student. Display students&#39; names with their corresponding
// grade. Use the following ranges:
// 51-60 -&gt; 6,
// 61-70 -&gt; 7,
// 71-80 -&gt; 8,
// 81-90 -&gt; 9,
// 91-100 -&gt; 10.
// Input:
// [ &quot;Micahel&quot;, &quot;Anne&quot;, &quot;Frank&quot;, &quot;Joe&quot;, &quot;John&quot;, &quot;David&quot;, &quot;Mark&quot;, &quot;Bill&quot; ], [ 50, 39, 63, 72, 99,
// 51, 83, 59 ]
// Output:
// Bill acquired 59 points and earned 6. Micahel acquired 50 points and failed to complete
// the exam.

function studentsGrades(students,grades,nameOfstudent){
    var result=""
    
    for(var i=0; i<students.length; i++){
       if(grades[i]<51){
           result+=students[i]+" acquired " + grades[i] +" points and failed to complete the exam"+"\n";
       }
       if(grades[i]>51&&grades[i]<=60){
           result+=students[i]+" acquired" + grades[i]+ " and earned 6"+"\n";
       }
       if(grades[i]>61&&grades[i]<=70){
        result+=students[i]+" acquired " + grades[i] + " and earned 7"+"\n";
       }
       if(grades[i]>71&&grades[i]<=80){
        result+=students[i]+" acquired " + grades[i]+ " and earned 8"+"\n";
       }
       if(grades[i]>81&&grades[i]<=90){
        result+=students[i]+" acquired " + grades[i]+ " and earned 9"+"\n";
       }
       if(grades[i]>91&&grades[i]<=100){
        result+=students[i] +" acquired  " + grades[i]+ " and earned 10"+ "\n";
    }
    }
    return result;
}
console.log(studentsGrades(["Michael", "Anne", "Frank", "Joe", "John", "David", "Mark", "Bill"],[ 50, 39, 63, 72, 99, 51, 83, 59 ]));