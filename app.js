var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
var alphabet = "abcdefghijklmnopqrstuvwxyz"

function forception(people, alphabet){
    var combined =[];
    for(var names of people){
        combined.push(names);
        for(letter of alphabet){
            combined.push(letter);
        }
    }
    // your code here
    return combined;
}
console.log(forception(people,alphabet));