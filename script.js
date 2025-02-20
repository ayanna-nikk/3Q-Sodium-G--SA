const wordds = {"BRICK", "FLAME", "SHARP", "FROST", "BLACK", "CHARM" "GLOVE", "DRIFT", "SPENT", "CLIMB", "JUMPS", "PLANK", "SHOWN", "TREND", "SLICK", "VOTER", "BRISK", "COUNT", "DWARF", "GLINT", "CHOSE", "JOINT", "MIRTH", "SQUID", "HATCH", "FLYER", "BRUNT", "PLUMB", "STOCK", "VERGE", "TWIST", "CROWN", "GEARS", "HOUND", "NOVEL", "ORBIT", "QUEST", "ROAST", "EARTH", "ROACH", "SCAMP", "TONED", "VITAL", "WAXER", "ZEBRA", "QUICK"};
wordNum = (Math.random() * 50) + 1;
let word = wordds[wordNum];


document.getElementById('attempt-1').innerHTML = word
