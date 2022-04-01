function checkDate(timestamp) {
    // Проверяем тип аргумента, нам нужно число 

    if (typeof (timestamp) === 'number') {
        // const вместо var, var устаревшее ключевое слово, с глобальной областью видимости, которая нам не нужна
        // Находим сразу дату
        // Убираем умножение на 1000, так как в качестве аргумента рациональнее передавать сразу милисекунды, а не дробные секунды

        const date = new Date(timestamp)
        const hour = date.getHours();
        const matchingDate = date.toLocaleDateString()

        const current_Date = new Date(Date.now());
        const matchingCurrentDate = current_Date.toLocaleDateString()

        return {
            isSameDate: matchingDate === matchingCurrentDate ? true : false,
            dayPeriod: hour > 11 ? 'pm' : 'am'
        }
    } else {
        return 'Аргумент не является числом'
    }

    // Убираем нахождение дня/месяца/года за ненадобностью, дату получаем через toLocaleDateString

    // const day = date.getDate();
    // const month = date.getMonth();
    // const year = date.getFullYear();
    // const current_day = current_Date.getDate();
    // const current_month = current_Date.getMonth();
    // const currentYear = current_Date.getFullYear();

    // Вместо сравнения if, использую тернарное сравнение непосредственно в return 

    // if (year == currentYear) {
    //     if (month == current_month) {
    //         if (day == current_day) {
    //             isSameDate = true;
    //         } else {
    //             isSameDate = false;
    //         }
    //     }
    // }

}

