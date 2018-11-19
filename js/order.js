const localStorage = this.localStorage;

const calendar = document.getElementById("bday");

calendar.addEventListener("change", event => {

    const reservationInfo = [
        {
            tableId: 1,
            time: 333,
        },
        {
            tableId: 2,
            time: 43444,
        }
    ];
    localStorage.setItem(calendar.value, JSON.stringify(reservationInfo));

    console.log(JSON.parse(localStorage.getItem(calendar.value)));
});