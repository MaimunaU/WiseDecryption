//Maimuna Ullah Cybersecurity Pd. 7/8 Odd

//This script has functions only used in the "Arnold H. Glasow" level

//These are additional letter functions for letters that are used only in this level.
function returnN4() { 
    n4 = document.getElementById("n4").value;
    if (n4.toUpperCase() == "N") {
        document.getElementById("N4").innerHTML = n4.toUpperCase();
        document.getElementById("N4").style.color = "green";
        document.getElementById("n4").style.borderColor = "green";
    }
    else {
        document.getElementById("n4").style.borderColor = "red";
    }
}

function returnR4() { 
    r4 = document.getElementById("r4").value;
    if (r4.toUpperCase() == "R") {
        document.getElementById("R4").innerHTML = r4.toUpperCase();
        document.getElementById("R4").style.color = "green";
        document.getElementById("r4").style.borderColor = "green";
    }
    else {
        document.getElementById("r4").style.borderColor = "red";
    }
}

function returnS2() { 
    s2 = document.getElementById("s2").value;
    if (s2.toUpperCase() == "S") {
        document.getElementById("S2").innerHTML = s2.toUpperCase();
        document.getElementById("S2").style.color = "green";
        document.getElementById("s2").style.borderColor = "green";
    }
    else {
        document.getElementById("s2").style.borderColor = "red";
    }
}

function returnS3() { 
    s3 = document.getElementById("s3").value;
    if (s3.toUpperCase() == "S") {
        document.getElementById("S3").innerHTML = s3.toUpperCase();
        document.getElementById("S3").style.color = "green";
        document.getElementById("s3").style.borderColor = "green";
    }
    else {
        document.getElementById("s3").style.borderColor = "red";
    }
}

function returnV2() { 
    v2 = document.getElementById("v2").value;
    if (v2.toUpperCase() == "V") {
        document.getElementById("V2").innerHTML = v2.toUpperCase();
        document.getElementById("V2").style.color = "green";
        document.getElementById("v2").style.borderColor = "green";
    }
    else {
        document.getElementById("v2").style.borderColor = "red";
    }
}

//This is the function for the "Done" button for this level.
function isDone() {
    done = false;
    word = n.toUpperCase() + o.toUpperCase() + t.toUpperCase() + h.toUpperCase() + i.toUpperCase() + n2.toUpperCase() + g.toUpperCase();
    if (word == "NOTHING") {
        word = l.toUpperCase() + a.toUpperCase() + s.toUpperCase() + t2.toUpperCase() + s2.toUpperCase();
        if (word == "LASTS") {
            word = f.toUpperCase() + o2.toUpperCase() + r.toUpperCase() + e.toUpperCase() + v.toUpperCase() + e2.toUpperCase() + r2.toUpperCase();
            if (word == "FOREVER") {
                word = n3.toUpperCase() + o3.toUpperCase() + t3.toUpperCase();
                if (word == "NOT") {
                    word = e3.toUpperCase() + v2.toUpperCase() + e4.toUpperCase() + n4.toUpperCase();
                    if (word == "EVEN") {
                        word = y.toUpperCase() + o4.toUpperCase() + u.toUpperCase() + r3.toUpperCase();
                        if (word == "YOUR") {
                            word = t4.toUpperCase() + r4.toUpperCase() + o5.toUpperCase() + u2.toUpperCase() + b.toUpperCase() + l2.toUpperCase() + e5.toUpperCase() + s3.toUpperCase();
                            if (word == "TROUBLES") {
                                document.getElementById("done").style.color = "green";
                                document.getElementById("done").innerHTML = "Message: 'NOTHING LASTS FOREVER -- NOT EVEN YOUR TROUBLES' - Arnold H. Glasow";
                                done = true;
                            }
                        }
                    }
                }
            }
        }
    }
}
//This function displays the encrypted message by character for this level.
function display() { 
    document.getElementById("N").innerHTML = "N";
    document.getElementById("O").innerHTML = "O";
    document.getElementById("T").innerHTML = "W";
    document.getElementById("H").innerHTML = "H";
    document.getElementById("I").innerHTML = "B";
    document.getElementById("N2").innerHTML = "J";
    document.getElementById("G").innerHTML = "T";

    document.getElementById("L").innerHTML = "L";
    document.getElementById("A").innerHTML = "Y";
    document.getElementById("S").innerHTML = "V";
    document.getElementById("T2").innerHTML = "W";
    document.getElementById("S2").innerHTML = "V";

    document.getElementById("F").innerHTML = "F";
    document.getElementById("O2").innerHTML = "O";
    document.getElementById("R").innerHTML = "U";
    document.getElementById("E").innerHTML = "B";
    document.getElementById("V").innerHTML = "Z";
    document.getElementById("E2").innerHTML = "B";
    document.getElementById("R2").innerHTML = "U";

    document.getElementById("N3").innerHTML = "N";
    document.getElementById("O3").innerHTML = "O";
    document.getElementById("T3").innerHTML = "W";

    document.getElementById("E3").innerHTML = "B";
    document.getElementById("V2").innerHTML = "Z";
    document.getElementById("E4").innerHTML = "B";
    document.getElementById("N4").innerHTML = "N";

    document.getElementById("Y").innerHTML = "C";
    document.getElementById("O4").innerHTML = "O";
    document.getElementById("U").innerHTML = "X";
    document.getElementById("R3").innerHTML = "U";

    document.getElementById("T4").innerHTML = "W";
    document.getElementById("R4").innerHTML = "U";
    document.getElementById("O5").innerHTML = "O";
    document.getElementById("U2").innerHTML = "X";
    document.getElementById("B").innerHTML = "P";
    document.getElementById("L2").innerHTML = "L";
    document.getElementById("E5").innerHTML = "B";
    document.getElementById("S3").innerHTML = "V";
}