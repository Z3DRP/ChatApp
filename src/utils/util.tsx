// const formatTime = (dtArg: Date) => {
//     let hours = dtArg.getHours();
//     let minutes = dtArg.getMinutes();
//     let timeSuffix = hours >= 12 ? 'pm' : 'am';
//     hours = hours % 12;
//     hours = hours ? hours : 12;
//     let mins = minutes < 10 ? `0${minutes}` : `${minutes}`;
//     return`${hours}:${mins} ${timeSuffix}`;
// }

const formatDay = (dtArg: Date) => {
    const formatOptions: Intl.DateTimeFormatOptions = {
        weekday: 'long',
        month: 'long',
        day: 'numeric'
    };

    return dtArg.toLocaleDateString('en-US', formatOptions);
}

const formatDateShort = (dtArg: Date) => {
    return`${dtArg.getMonth() + 1}/${dtArg.getDay()}/${dtArg.getFullYear()}`;
}

const formatDate = (dtArg: Date) => {
    const formatOptions: Intl.DateTimeFormatOptions = {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    };
    return dtArg.toLocaleDateString('en-US', formatOptions);
}

const formatTime = (dtArg: Date) => {
    const formatOptions: Intl.DateTimeFormatOptions = {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
    };
    return dtArg.toLocaleTimeString('en-US', formatOptions);
}

const formatDateTime = (dtArg: Date) => `${formatDate(dtArg)} ${formatTime(dtArg)}`;

export {formatDay, formatDate, formatDateShort, formatTime, formatDateTime}