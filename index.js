function checkPalindrome() {
    var num = document.getElementById("numInput").value;
    var reversed = "";
    
    for (var i = num.length - 1; i >= 0; i--) {
        reversed = reversed + num[i];
    }

    if (num == reversed) {
        document.getElementById("output").innerHTML = "It's a palindrome!";
    } else {
        document.getElementById("output").innerHTML = "It's not a palindrome.";
    }
}