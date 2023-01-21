bt = document.getElementsByClassName("btn1")
dateEl = document.getElementById("date")
copyEle = document.getElementById("copy")
markAbEle = document.getElementById("mark-ab")
markPrEle = document.getElementById("mark-pr")
subjectEle = document.getElementById("subject")
shareBtn = document.getElementById("share-a")
ShareA2 = document.getElementById("share-a2")

const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const abCountEle = document.getElementById("pr-Count")
const prCountEle = document.getElementById("ab-Count")

const d = new Date();
const month = months[d.getMonth()];
const day = d.getDate();
const year = d.getFullYear();
const currDate = day + ", " + month + " " + year
dateEl.textContent = currDate


for (var i = 0; i < bt.length; i++) {
  bt[i].onclick = function () {
    this.classList.toggle("btn-danger");
    this.classList.toggle("btn-success");
    confirm();
  }
}

markAbEle.onclick = function (){
 if(this.classList.contains("btn-light")){
    this.classList.toggle("btn-light");
    this.classList.toggle("btn-primary");
    markPrEle.classList.toggle("btn-light");
    markPrEle.classList.toggle("btn-primary");

    for(var i = 0;i<bt.length;i++){
      if(bt[i].classList.contains("btn-danger")){
        bt[i].classList.toggle("btn-success");
        bt[i].classList.toggle("btn-danger");
      }
    }
  }

}

markPrEle.onclick = function (){
  if(this.classList.contains("btn-light")){
  this.classList.toggle("btn-light");
  this.classList.toggle("btn-primary");
  markAbEle.classList.toggle("btn-light");
  markAbEle.classList.toggle("btn-primary");

  for(var i = 0;i<bt.length;i++){
    if(bt[i].classList.contains("btn-success")){
      bt[i].classList.toggle("btn-success");
      bt[i].classList.toggle("btn-danger");
    }
  }
  }
}


shareBtn.onclick = function(){
  subjectName = subjectEle.value;
}


function confirm(){
    let abCount = 0;
    let prCount = 0;

    absentees = ""
    presentees = ""

    absentees2 = ""
    presentees2 = ""

    var divPrEl = document.getElementById("present")
    var divAbEl = document.getElementById("absent")
    
    for (var i=0; i < bt.length; i++) {
        if(bt[i].classList.contains("btn-danger")) {
            absentees += bt[i].firstElementChild.innerText + ", "
            absentees2 += bt[i].firstElementChild.innerText + " - _" + bt[i].firstElementChild.nextElementSibling.innerText + "_%0a"
            abCount++;
        }
        else if(bt[i].classList.contains("btn-success")) {
            presentees += bt[i].firstElementChild.innerText + ", "
            // presentees2 += bt[i].firstElementChild.innerText + " - _" + bt[i].firstElementChild.nextElementSibling.innerText + "_%0a"
            prCount++;
        }
    }

    abCountEle.textContent = abCount;
    prCountEle.textContent = prCount;

    divPrEl.textContent=`${presentees}`
    divAbEl.textContent=`${absentees}`

    shareA = document.getElementById("share-a")

    shareA2.href = "whatsapp://send?text="+ "*"+currDate+"*%0a%0a" + "_*"+subjectName+" Class Attendance"+"*_%0a%0a" + `*Presentees: (${prCount} Members)*` + "%0a" + divPrEl.textContent + "%0a%0a" + `*Absentees: (${abCount} Members)*` + "%0a" +  absentees2;

    shareA.href="whatsapp://send?text="+ "*"+currDate+"*%0a%0a" + "_*"+subjectName+" Class Attendance"+"*_%0a%0a" + `*Presentees: (${prCount} Members)*` + "%0a" + divPrEl.textContent + "%0a%0a" + `*Absentees: (${abCount} Members)*` + "%0a" +  divAbEl.textContent;

    shareA.setAttribute("data-action","share/whatsapp/share");

}



copyEle.onclick = function copyToClipboard() {

  var copyText = document.getElementById("final-attendance");
  navigator.clipboard.writeText(copyText.innerText);
}

