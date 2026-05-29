//Funktion för att formatera datum
export const parseDate = (date: string) => {
    const year = Number(date.substring(0,4));
    const month = Number(date.substring(4,6)) - 1;
    const day = Number(date.substring(6,8));


    const result = new Date(year, month, day);
    return result;
    
}

//Funktion för att formatera start och slutdatum
export const formatEventDate = (startDate: string, endDate: string) => {
    const start = parseDate(startDate);
    const end = parseDate(endDate);

    //Ta ut dagen från datumet
    const startDay = start.getDate();
    const endDay = end.getDate();

    //Ta ut månad från datumet
    const startMonth = start.toLocaleDateString('sv-SE', {month: 'short'});
    const endMonth = end.toLocaleDateString('sv-SE', {month: 'short'});

    //Om start-och slutdatum är samma
    if (startDate === endDate) {
        return `${startDay} ${startMonth}`
    }

    //Om start- och slutdatum är på samma månad
    if (startMonth === endMonth) {
        return `${startDay} - ${endDay} ${startMonth}`
    }

    //Om start och slutdatum är på olika månader
    return `${startDay} ${startMonth} - ${endDay} ${endMonth}`
}

