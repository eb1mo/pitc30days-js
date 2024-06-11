const clock = document.getElementById('clock');
const anotherClock = document.getElementById('second-clock');

setInterval ( ()=> {
    let date = new Date();
    clock.innerHTML = `<span>${date.toLocaleTimeString()}</span>`;
}, 1000);


    const form = document.querySelector('form');
    form.addEventListener('submit', (event)=>{
        event.preventDefault();
        const timezone = document.getElementById('timezone').value;
        
        setInterval( ()=> {
                const settings = {
                    timeZone: timezone,
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit",
                    hour12: true,
                  };
                  const formatter = new Intl.DateTimeFormat([], settings);
                  const date = new Date();
                  const formattedTime = formatter.format(date);
                //   console.log(formattedTime);
                  anotherClock.innerHTML=`Time of ${timezone} is ${formattedTime}.`;
        }, 1000);
    
       
    });



