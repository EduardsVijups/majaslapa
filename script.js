$(document).ready(function() {
    var num = 1
    document.getElementById("poga").onclick = function() {
        var str = "tx"+num.toString()
        if(document.getElementById(str) != null) {
            document.getElementById("load").style.display = "inline"
            //console.log(str)
            setTimeout(() => {
                document.getElementById(str).style.display = "inline";
                document.getElementById("load").style.display = "none";
            }, "1000")
            num +=1
        } else {
            document.getElementById("atsauce").style.display= "inline"
            document.getElementById("poga").style.display = "none"
        }
    }
})