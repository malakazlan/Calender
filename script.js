const currnetDate = document.querySelector(".current-date");
const dayTags = document.querySelector(".days");
const iconsTags = document.querySelectorAll(".icons span");



let date = new Date();
currYear = date.getFullYear();
currMonth = date.getMonth();

const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
];


const renderCalendar = () => {
    let firstDayofMonth = new Date(currYear, currMonth, 1).getDate();//getting first day of month
    let lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate();//getting last date of month
    let lastDayoftMonth = new Date(currYear, currMonth, lastDateofMonth).getDate();//getting last day of month
    let lastDatesofLastMonth = new Date(currYear, currMonth, 0).getDate();  //getting last date of previose month




    let liTags = '';

    for (let i = firstDayofMonth; i > 0; i--) {//creating li of previous month last days

        liTags += `<li class="inactive">${lastDatesofLastMonth - i + 1}</i>`;
    }

    for (let i = 1; i <= lastDateofMonth; i++) {//creating li of all days of current month

        let todaysdate = i === date.getDate() && currMonth === new Date().getMonth() && currYear === new Date().getFullYear() ? "active" : "";

        liTags += `<li class="${todaysdate}">${i}</i>`;

    }

    for (let i = lastDayoftMonth; i <= 6; i++) {
        liTags += `<li class="inactive">${i - lastDayoftMonth + 1}</i>`;


    }



    currnetDate.innerText = `${months[currMonth]} ${currYear} `;
    dayTags.innerHTML = liTags;
}
renderCalendar();

iconsTags.forEach(icon => {
    icon.addEventListener("click", () => {

        currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;

        if (currMonth < 0 || currMonth > 11) {
            date = new Date(currYear, currMonth);
            currYear = date.getFullYear();
            currMonth = date.getMonth();
        }
        else {
            date = new Date();
        }
        renderCalendar();


    });
});