//Maimuna Ullah Cybersecurity Pd. 7/8 Odd

//This script has functions only used in the "Paulo Coelho" level

//This is an additional letter function used only in this level.
function returnB2() { 
    b2 = document.getElementById("b2").value;
    if (b2.toUpperCase() == "B") {
        document.getElementById("B2").innerHTML = b2.toUpperCase();
        document.getElementById("B2").style.color = "green";
        document.getElementById("b2").style.borderColor = "green";
    }
    else {
        document.getElementById("b2").style.borderColor = "red";
    }
}

//This is the function for the "Done" button for this level.
function isDone() {
    done = false;
    word = y.toUpperCase() + o.toUpperCase() + u.toUpperCase();
    if (word == "YOU") {
        word = a.toUpperCase() + r.toUpperCase() + e.toUpperCase();
        if (word == "ARE") {
            word = w.toUpperCase() + h.toUpperCase() + a2.toUpperCase() + t.toUpperCase();
            if (word == "WHAT") {
                word = y2.toUpperCase() + o2.toUpperCase() + u2.toUpperCase();
                if (word == "YOU") {
                    word = b.toUpperCase() + e2.toUpperCase() + l.toUpperCase() + i.toUpperCase() + e3.toUpperCase() + v.toUpperCase() + e4.toUpperCase();
                    if (word == "BELIEVE") {
                        word = y3.toUpperCase() + o3.toUpperCase() + u3.toUpperCase() + r2.toUpperCase() + s.toUpperCase() + e5.toUpperCase() + l2.toUpperCase() + f.toUpperCase();
                        if (word == "YOURSELF") {
                            word = t2.toUpperCase() + o4.toUpperCase();
                            if (word == "TO") {
                                word = b2.toUpperCase() + e6.toUpperCase();
                                if (word == "BE") {
                                    document.getElementById("done").style.color = "green";
                                    document.getElementById("done").innerHTML = "Message: 'YOU ARE WHAT YOU BELIEVE YOURSELF TO BE' - Paulo Coelho";
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

//This function displays the encrypted message by character for this level.
function display() {
    document.getElementById("Y").innerHTML = "R";
    document.getElementById("O").innerHTML = "H";
    document.getElementById("U").innerHTML = "N";
    
    document.getElementById("A").innerHTML = "T";
    document.getElementById("R").innerHTML = "K";
    document.getElementById("E").innerHTML = "X";

    document.getElementById("W").innerHTML = "P";
    document.getElementById("H").innerHTML = "A";
    document.getElementById("A2").innerHTML = "T";
    document.getElementById("T").innerHTML = "M";

    document.getElementById("Y2").innerHTML = "R";
    document.getElementById("O2").innerHTML = "H";
    document.getElementById("U2").innerHTML = "N";

    document.getElementById("B").innerHTML = "U";
    document.getElementById("E2").innerHTML = "X";
    document.getElementById("L").innerHTML = "E";
    document.getElementById("I").innerHTML = "B";
    document.getElementById("E3").innerHTML = "X";
    document.getElementById("V").innerHTML = "O";
    document.getElementById("E4").innerHTML = "X";

    document.getElementById("Y3").innerHTML = "R";
    document.getElementById("O3").innerHTML = "H";
    document.getElementById("U3").innerHTML = "N";
    document.getElementById("R2").innerHTML = "K";
    document.getElementById("S").innerHTML = "L";
    document.getElementById("E5").innerHTML = "X";
    document.getElementById("L2").innerHTML = "E";
    document.getElementById("F").innerHTML = "Y";

    document.getElementById("T2").innerHTML = "M";
    document.getElementById("O4").innerHTML = "H";
    
    document.getElementById("B2").innerHTML = "U";
    document.getElementById("E6").innerHTML = "X";
}