function footToMeter(foot){
    let meter = 0.305 * foot;
    return meter;
}
function meterToFoot(meter){
    let foot = 3.279 * meter;
    return foot;
}
let foot = prompt("Nhập foot; ");
document.write (foot + " foot " + "= " + footToMeter(foot) + " metter")
document.write ("<br>")
        let meter = prompt("Nhập meter: ");
        document.write(meter + " meter " + "= " + meterToFoot(meter) + " foot");