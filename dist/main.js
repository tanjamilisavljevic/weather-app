(()=>{"use strict";function e(e){let t,n=0;for(let t=0;t<e.length;t++)n+=e[t];return t=n/e.length,t}function t(t){let n=t.map((e=>e.main.temp_min)),c=t.map((e=>e.main.temp_max)),a=Math.min(...n),o=Math.max(...c);const m=e(t.map((e=>e.main.temp))),l=e(t.map((e=>e.main.humidity)));let r=document.getElementById("forecastTemplate").content.cloneNode(!0);r.querySelector(".averageTemp").textContent=Math.round(m)+"°C",r.querySelector(".minTemp").textContent=Math.round(a)+"°C",r.querySelector(".maxTemp").textContent=Math.round(o)+"°C",r.querySelector(".humidity").textContent=Math.round(l)+"%",document.getElementById("forecastTarget").appendChild(r)}const n=document.getElementById("rememberMe"),c=document.getElementById("cityName");function a(){document.getElementById("forecastTarget").innerHTML="";const e=document.getElementById("cityName").value;n.checked&&""!==c.value?(localStorage.city=c.value,localStorage.checkbox=n.value):(localStorage.city="",localStorage.checkbox=""),fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${e}&appid=d558391af4161e2ee2e747ad0ce49859&units=metric`).then((e=>e.json())).then((e=>{for(let n=0;n<5;n++){const c=8*n,a=c+8;t(e.list.slice(c,a))}}))}localStorage.checkbox&&""!==localStorage.checkbox?(n.setAttribute("checked","checked"),c.value=localStorage.city):(n.removeAttribute("checked"),c.value=""),document.getElementById("run").addEventListener("click",a),document.getElementById("cityName").addEventListener("keypress",(function(e){"Enter"===e.key&&a()}))})();