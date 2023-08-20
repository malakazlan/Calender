currentDate = document.querySelector(".current-date");
DayTags = document.querySelector(".days");
iconTags = document.querySelectorAll(".icons span")

let date = new Date();
currYear = date.getFullYear();
currMonth = date.getMonth();

const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
];

const renderCalender = () => {
    let liTags = '';

    let firstDayOfMonth = new Date(currYear, currMonth, 1).getDate();
    let lastDateOfMonth = new Date(currYear, currMonth + 1, 0).getDate();
    let lastDateOfLastMonth = new Date(currYear, currMonth, 0).getDate();

    for (let i = firstDayOfMonth; i > 0; i--) {
        liTags += `<li class="inactive">${lastDateOfLastMonth - i + 1}</li>`;

    }

    for (let i = 0; i < lastDateOfMonth; i++) {
        let todayDate = i === date.getDate() && currMonth === new Date().getMonth() && currYear === new Date().getFullYear() ? "active" : ""
        liTags += `<li class="${todayDate}">${i}</li>`

    }

    currentDate.innerText = `${months[currMonth]} ${currYear} `;
    DayTags.innerHTML = liTags;

}
renderCalender();

iconTags.forEach(icon => {
    icon.addEventListener("click", () => {
        currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;
        if(currMonth<0||currMonth>11){
            date = new Date(currYear,currMonth);
            currYear = date.getFullYear();
            currMonth = date.getMonth();
        }
        else{
            date = new Date();
        }
        renderCalender();

    });

});

