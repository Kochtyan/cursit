var modal = document.getElementById("my_modal");
var btn = document.getElementById("btn_modal_window");
var span = document.getElementsByClassName("close_modal_window")[0];

btn.onclick = function () {
    modal.style.display = "block";
}

span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

var modal2 = document.getElementById("my_modal2");
var btn2 = document.getElementById("btn_modal_window2");
var span2 = document.getElementsByClassName("close_modal_window2")[0];

btn2.onclick = function () {
    modal2.style.display = "block";
}

span2.onclick = function () {
    modal2.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal2) {
        modal2.style.display = "none";
    }
}


var modalq = document.getElementById("my_modalq");
var btnq = document.getElementById("btn_modal_windowq");
var spanq = document.getElementsByClassName("close_modal_windowq")[0];

btnq.onclick = function () {
    modalq.style.display = "block";
}

spanq.onclick = function () {
    modalq.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modalq) {
        modalq.style.display = "none";
    }
}

function mes() {
    namereg = document.getElementById('regname').value;
    phonereg = document.getElementById('regphone').value;
    mailreg = document.getElementById('regmail').value;
    def = "";
    if (namereg != def && phonereg != def && mailreg != def ) {
        alert("Ваш запрос отправлен!")
    } 
    else {
        alert ("Заполните пустые поля")
    }
}



function anim(duration) {
    var temp;
    return function (sel) {
        cancelAnimationFrame(temp);
        var start = performance.now();
        var from = window.pageYOffset || document.documentElement.scrollTop,
            to = document.querySelector(sel).getBoundingClientRect().top;
        requestAnimationFrame(function step(timestamp) {
            var progress = (timestamp - start) / duration;
            1 <= progress && (progress = 1);
            window.scrollTo(0, from + to * progress | 0);
            1 > progress && (temp = requestAnimationFrame(step))
        })
    }
};

var scrollMenu = anim(200)