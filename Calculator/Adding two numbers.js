function calcSum() {
    const box1 = document.getElementById("box1").value;
    const box2 = document.getElementById("box2").value;
    const sum = Number(box1) + Number(box2);
    document.getElementById("result").value = sum;
}
