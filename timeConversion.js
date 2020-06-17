//Complete the timeConversion function in the editor below. It should return a new string representing the input time in 24 hour format.

function timeConversion(s) {

    let newArr = s.split("")
    let banana = newArr.join('')
    let pineapple = banana.split(":")
    let corn = parseInt(pineapple[0])
    console.log(pineapple)
    let newAr = pineapple[pineapple.length - 1].split("")
    console.log(newAr)
    pineapple[2] = newAr
    console.log("this is new pineapple", pineapple)
    console.log("this is index", pineapple[2][2])
    if (corn == 12 && pineapple[2][2] == "A") {
        corn -= 12
        function zeroPad(corn, places) {
            var zero = places - corn.toString().length + 1;
            return Array(+(zero > 0 && zero)).join("0") + corn;
        }
        corn = zeroPad(corn, 2)
    } else if (corn < 12 && pineapple[2][2] == 'A') {
        corn += 0
        function zeroPad(corn, places) {
            var zero = places - corn.toString().length + 1;
            return Array(+(zero > 0 && zero)).join("0") + corn;
        }
        corn = zeroPad(corn, 2)
    } else if (corn == 12 && pineapple[2][2] == "P") {
        corn += 0
    }
    else {
        corn += 12
    }
    corn = corn.toString()
    console.log("this is corn", corn)
    pineapple[0] = corn
    pineapple = pineapple.join(":")
    let plum = pineapple.split("", 9)
    let something = plum.join("")
    console.log("this is something", something)
    something = something.replace(",", "");
    return something
}