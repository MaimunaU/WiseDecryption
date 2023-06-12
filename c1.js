//Maimuna Ullah Cybersecurity Pd. 7/8 Odd

//This script has functions only used in the "Mark Twain" level

//These are additional letter functions for letters that are used only in this level.
function returnH2() { 
    h2 = document.getElementById("h2").value;
    if (h2.toUpperCase() == "H") {
        document.getElementById("H2").innerHTML = h2.toUpperCase();
        document.getElementById("H2").style.color = "green";
        document.getElementById("h2").style.borderColor = "green";
    }
    else {
        document.getElementById("h2").style.borderColor = "red";
    }
}

function returnH3() { 
    h3 = document.getElementById("h3").value;
    if (h3.toUpperCase() == "H") {
        document.getElementById("H3").innerHTML = h3.toUpperCase();
        document.getElementById("H3").style.color = "green";
        document.getElementById("h3").style.borderColor = "green";
    }
    else {
        document.getElementById("h3").style.borderColor = "red";
    }
}

function returnH4() { 
    h4 = document.getElementById("h4").value;
    if (h4.toUpperCase() == "H") {
        document.getElementById("H4").innerHTML = h4.toUpperCase();
        document.getElementById("H4").style.color = "green";
        document.getElementById("h4").style.borderColor = "green";
    }
    else {
        document.getElementById("h4").style.borderColor = "red";
    }
}

function returnI2() { 
    i2 = document.getElementById("i2").value;
    if (i2.toUpperCase() == "I") {
        document.getElementById("I2").innerHTML = i2.toUpperCase();
        document.getElementById("I2").style.color = "green";
        document.getElementById("i2").style.borderColor = "green";
    }
    else {
        document.getElementById("i2").style.borderColor = "red";
    }
}

function returnM2() { 
    m2 = document.getElementById("m2").value;
    if (m2.toUpperCase() == "M") {
        document.getElementById("M2").innerHTML = m2.toUpperCase();
        document.getElementById("M2").style.color = "green";
        document.getElementById("m2").style.borderColor = "green";
    }
    else {
        document.getElementById("m2").style.borderColor = "red";
    }
}

function returnT5() { 
    t5 = document.getElementById("t5").value;
    if (t5.toUpperCase() == "T") {
        document.getElementById("T5").innerHTML = t5.toUpperCase();
        document.getElementById("T5").style.color = "green";
        document.getElementById("t5").style.borderColor = "green";
    }
    else {
        document.getElementById("t5").style.borderColor = "red";
    }
}

function returnT6() { 
    t6 = document.getElementById("t6").value;
    if (t6.toUpperCase() == "T") {
        document.getElementById("T6").innerHTML = t6.toUpperCase();
        document.getElementById("T6").style.color = "green";
        document.getElementById("t6").style.borderColor = "green";
    }
    else {
        document.getElementById("t6").style.borderColor = "red";
    }
}

function returnT7() { 
    t7 = document.getElementById("t7").value;
    if (t7.toUpperCase() == "T") {
        document.getElementById("T7").innerHTML = t7.toUpperCase();
        document.getElementById("T7").style.color = "green";
        document.getElementById("t7").style.borderColor = "green";
    }
    else {
        document.getElementById("t7").style.borderColor = "red";
    }
}

//This is the function for the "Done" button for this level.
function isDone() {
    done = false;
    word = i.toUpperCase() + f.toUpperCase();
    if (word == "IF") {
        word = y.toUpperCase() + o.toUpperCase() + u.toUpperCase();
        if (word == "YOU") {
            word = t.toUpperCase() + e.toUpperCase() + l.toUpperCase() + l2.toUpperCase();
            if (word == "TELL") {
                word = t2.toUpperCase() + h.toUpperCase() + e2.toUpperCase();
                if (word == "THE") {
                    word = t3.toUpperCase() + r.toUpperCase() + u2.toUpperCase() + t4.toUpperCase() + h2.toUpperCase();
                    if (word == "TRUTH") {
                        word = y2.toUpperCase() + o2.toUpperCase() + u3.toUpperCase();
                        if (word == "YOU") {
                            word = d.toUpperCase() + o3.toUpperCase();
                            if (word == "DO") {
                                word = n.toUpperCase() + o4.toUpperCase() + t5.toUpperCase();
                                if (word == "NOT") {
                                    word = h3.toUpperCase() + a.toUpperCase() + v.toUpperCase() + e3.toUpperCase();
                                    if (word == "HAVE") {
                                        word = t6.toUpperCase() + o5.toUpperCase();
                                        if (word == "TO") {
                                            word = r2.toUpperCase() + e4.toUpperCase() + m.toUpperCase() + e5.toUpperCase() + m2.toUpperCase() + b.toUpperCase() + e6.toUpperCase() + r3.toUpperCase();
                                            if (word == "REMEMBER") {
                                                word = a2.toUpperCase() + n2.toUpperCase() + y3.toUpperCase() + t7.toUpperCase() + h4.toUpperCase() + i2.toUpperCase() + n3.toUpperCase() + g.toUpperCase();
                                                if (word == "ANYTHING") {
                                                    document.getElementById("done").style.color = "green";
                                                    document.getElementById("done").innerHTML = "Message: 'IF YOU TELL THE TRUTH, YOU DO NOT HAVE TO REMEMBER ANYTHING' - Mark Twain";
                                                    done = true;
                                                }
                                            }
                                        }
                                    }
                                }
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
    document.getElementById("I").innerHTML = "L";
    document.getElementById("F").innerHTML = "I";

    document.getElementById("Y").innerHTML = "B";
    document.getElementById("O").innerHTML = "R";
    document.getElementById("U").innerHTML = "X";

    document.getElementById("T").innerHTML = "W";
    document.getElementById("E").innerHTML = "H";
    document.getElementById("L").innerHTML = "O";
    document.getElementById("L2").innerHTML = "O";

    document.getElementById("T2").innerHTML = "W";
    document.getElementById("H").innerHTML = "K";
    document.getElementById("E2").innerHTML = "H";

    document.getElementById("T3").innerHTML = "W";
    document.getElementById("R").innerHTML = "U";
    document.getElementById("U2").innerHTML = "X";
    document.getElementById("T4").innerHTML = "W";
    document.getElementById("H2").innerHTML = "K";

    document.getElementById("Y2").innerHTML = "B";
    document.getElementById("O2").innerHTML = "R";
    document.getElementById("U3").innerHTML = "X";

    document.getElementById("D").innerHTML = "G";
    document.getElementById("O3").innerHTML = "R";

    document.getElementById("N").innerHTML = "Q";
    document.getElementById("O4").innerHTML = "R";
    document.getElementById("T5").innerHTML = "W";

    document.getElementById("H3").innerHTML = "K";
    document.getElementById("A").innerHTML = "D";
    document.getElementById("V").innerHTML = "Y";
    document.getElementById("E3").innerHTML = "H";

    document.getElementById("T6").innerHTML = "W";
    document.getElementById("O5").innerHTML = "R";

    document.getElementById("R2").innerHTML = "U";
    document.getElementById("E4").innerHTML = "H";
    document.getElementById("M").innerHTML = "P";
    document.getElementById("E5").innerHTML = "H";
    document.getElementById("M2").innerHTML = "P";
    document.getElementById("B").innerHTML = "E";
    document.getElementById("E6").innerHTML = "H";
    document.getElementById("R3").innerHTML = "U";

    document.getElementById("A2").innerHTML = "D";
    document.getElementById("N2").innerHTML = "Q";
    document.getElementById("Y3").innerHTML = "B";
    document.getElementById("T7").innerHTML = "W";
    document.getElementById("H4").innerHTML = "K";
    document.getElementById("I2").innerHTML = "L";
    document.getElementById("N3").innerHTML = "Q";
    document.getElementById("G").innerHTML = "J";

}
