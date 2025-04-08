let hr = document.querySelector('#hr');
let mn = document.querySelector('#mn');
let sc = document.querySelector('#sc');


function updateclock(){
  setInterval(() => {
    
      let day = new Date();
      let hh = day.getHours() * 30;
      let mm = day.getMinutes() * 6;
      let ss = day.getSeconds() * 6;
      
      hr.style.transform = `rotateZ(${hh + mm / 12}deg)`;
      mn.style.transform = `rotateZ(${mm}deg)`;
      sc.style.transform = `rotateZ(${ss}deg)`;
      
      // digital clock
      let hour = document.getElementById('hour');
      let minutes = document.getElementById('minutes');
      let seconds = document.getElementById('seconds');
      let ampm = document.getElementById('ampm');
   
      
      
      let h = new Date().getHours();
      let m = new Date().getMinutes();
      let s  = new Date().getSeconds();
      
      let am = h >= 12 ? "PM" : "AM";
      
      h = h % 12;
      h = h === 0 ? 12 : h;



      // add zero before single digit
      h = (h<10) ? "0" + h : h
      m = (h<10) ? "0" + m : m
      s = (h<10) ? "0" + s : s

      hour.innerHTML = h;
      minutes.innerHTML = m;
      seconds.innerHTML = s;
      ampm.innerHTML = am;




  }, 1000);
   


}

updateclock();








