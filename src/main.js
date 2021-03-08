let html = document.querySelector("#html-text");
let style = document.querySelector("#styleText");

let originalString = `先画花的茎
.stem {
    position: absolute;
    height: 0;
    width: 6px;
    background: var(--dark-green);
    bottom: 10%;
    left: 50%;
    margin-left: -3px;
    border-radius: 0 0 3px 3px;
    transition: height 1s;
}
.stem {
  height: 200px;
}
.thorns>div{
    width: 0;
    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent;
    position: absolute;
}
.thorns>div:first-child {
    border-right: 10px solid var(--dark-green);    
    position: absolute;
    left: 44%;
    top: 50%;
}
.thorns>div:nth-child(2) {
    border-left: 10px solid var(--dark-green);
    right: 44%;
    top: 60%;
}
.thorns>div:nth-child(3) {
    border-right: 10px solid var(--dark-green);
    left: 44%;
    top: 70%;
}
再画花的叶
.leaves>div{
    position: absolute;
    height: 60px;
    width: 35px;
}
.leaves>div:first-child {
    border-radius: 0 30px 0 30px;
    transform: rotate(-20deg);
    top: 55%;
    left: 28%;
    transition: background 1s, box-shadow 1s 1s;
    background: var(--dark-green);
    box-shadow: inset 5px 5px var(--light-green);
}
.leaves>div:nth-child(2) {
    border-radius: 30px 0 30px 0;
    transform: rotate(20deg);
    top: 45%;
    right: 28%;
    transition: background 1s, box-shadow 1s 1s;
    background: var(--dark-green);
    box-shadow: inset -5px 5px var(--light-green);
}
最后画花瓣
.petals>div:first-child {
    position: absolute;
    height: 100px;
    width: 50px;
    border-radius: 10px 10px 20px 20px;
    transition: background 1s;
    background: var(--light-pink);
    top: 15%;
    left: 50%;
    margin-left: -25px;
}
.petals>div:not(:first-child) {
    position: absolute;
    height: 100px;
    width: 40px;
}
.petals>div:nth-child(2) {
    transform-origin: bottom right;
    border-radius: 0 35px 0 35px;
    transition: background 1s, transform 1s 1s;
    background: var(--medium-pink);
    transform: rotate(-6deg);
    top: 15%;
    left: 30%;
}
.petals>div:nth-child(3) {
    transform-origin: bottom left;
    border-radius: 35px 0 35px 0;
    transition: background 1s, transform 1s 1s;
    background: var(--medium-pink);
    transform: rotate(6deg);
    top: 15%;
    right: 30%;
}
.petals>div:nth-child(4) {
    transform-origin: bottom right;
    border-radius: 0 35px 0 35px;
    transition: background 1s, transform 1s 1s;
    background: var(--dark-pink);
    transform: rotate(-18deg);
    top: 15%;
    left: 30%;
}
.petals>div:nth-child(5) {
    transform-origin: bottom left;
    border-radius: 35px 0 35px 0;
    transition: background 1s, transform 1s 1s;
    background: var(--dark-pink);
    transform: rotate(18deg);
    top: 15%;
    right: 30%;
}
.dead-petals>div:first-child {
    background: var(--medium-pink);
    left: 35%;
    transition: transform 8s, top 8s;
    transform: rotate(-45deg);
    top: 90%;
}
.dead-petals>div:nth-child(2) {
    background: var(--dark-pink);
    left: 50%;
    transition: transform 8s 2s, top 8s 2s;
    transform: rotate(-20deg);
    top: 90%;
}
.wishes>div:first-child {
    transform: translate(-80%);
}
.wishes>div:nth-child(2) {
    transform: translate(-35%);
}
.wishes>div:nth-child(3) {
    transform: translate(-95%);
}
.wishes>div:nth-child(4) {
    transform: translate(-45%);
}`;

let showString = "";
let styleString = "";
let tempString = "";

let writeIntoStyle = false;

let n = 0;
let step = () => {
    html.innerHTML = showString;
    style.innerHTML = styleString;
    setTimeout(() => {
        // 删去无用字符
        if (originalString[n] === "\n") {
            showString += "<br>";
        } else if (originalString[n] === " ") {
            showString += "&nbsp;";
        } else {
            showString += originalString[n];
        }

        // 判断何时输入到style中
        if (originalString[n] === "#" || originalString[n] === '.') {
            writeIntoStyle = true;
        } else if (originalString[n] === "}") {
            writeIntoStyle = false
            tempString += "}\n"
            styleString += tempString;
            console.log(tempString)
        }
        if (writeIntoStyle === true) {
            tempString += originalString[n];
        }

        // 没病滚一下
        window.scrollTo(0, 99999);
        html.scrollTo(0, 99999);
        // 判断到没到头
        if (n < originalString.length) {
            n += 1;
            step();
        }
    }, 1)

}

step();