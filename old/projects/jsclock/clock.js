

function rotate() {
    let hourHand = document.querySelector('#hour');
    let minuteHand = document.querySelector('#minute');
    let secondHand = document.querySelector('#second');
    let dayArea = document.querySelector('#day');

    

    const time = new Date();

    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const days = time.getDate();

    let s_deg = ((seconds / 60) * 360) + 180;
    let m_deg = ((minutes / 60) * 360) + 180;
    let h_deg = ((hours / 12) * 360) + 180;

    hourHand.style.transform = `rotate(${h_deg}deg)`;
    minuteHand.style.transform = `rotate(${m_deg}deg)`;
    secondHand.style.transform = `rotate(${s_deg}deg)`;
    dayArea.innerHTML = days;

console.log(``)

};

setInterval(rotate, 1000);