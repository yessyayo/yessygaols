function updateTime() {
    
    const now = new Date();
    
    
    const nigeriaOffset = 1; 

    
    const nigeriaTime = new Date(now.setHours(now.getUTCHours() + nigeriaOffset));

    
    const hours = nigeriaTime.getHours().toString().padStart(2, '0');
    const minutes = nigeriaTime.getMinutes().toString().padStart(2, '0');
    const seconds = nigeriaTime.getSeconds().toString().padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;

    
    const day = nigeriaTime.getDate().toString().padStart(2, '0');
    const month = (nigeriaTime.getMonth() + 1).toString().padStart(2, '0'); 
    const year = nigeriaTime.getFullYear();
    const dateString = `${day}/${month}/${year}`;

    
    const dateTimeString = `${dateString} ${timeString}`;

    
    document.querySelector('[data-testid="currentTimeUTC"]').textContent = dateTimeString;
}

function updateDay() {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
    
    const now = new Date();
    
    
    const nigeriaOffset = 1; 

    
    const nigeriaTime = new Date(now.setHours(now.getUTCHours() + nigeriaOffset));
    const currentDay = days[nigeriaTime.getDay()];

    
    document.querySelector('[data-testid="currentDay"]').textContent = currentDay;
}

window.onload = function() {
    updateTime();
    updateDay();
    setInterval(updateTime, 1000); 
};

function toggleReadMore() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("readMoreBtn");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
    }
}