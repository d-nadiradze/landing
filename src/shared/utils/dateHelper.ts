import moment from "moment";

export function formatDate(dateString: string, format?: string): string {
    // Extract milliseconds and timezone offset from the string
    if (dateString.length <= 0) return dateString;

    const milliseconds: number = parseInt(dateString.match(/\d+/)![0]);

    // Create a moment object from milliseconds
    const date: moment.Moment = moment(milliseconds);

    // Set the timezone offset to GMT+4
    date.utcOffset(4 * 60);

    return date.format(format ? format : "DD MMMM, YYYY");
}

export function formatDateForBack(date: number | Date) {
    return `/Date(${date}+0400)/`;
}

export const filterToDatePickerFormat = (filterDate: string) => {
    // Check if the filterDate is in the correct format
    const regex = /^\/Date\((\d+)([+-]\d+)\)\/$/;
    const match = filterDate.match(regex);

    if (!match || match.length !== 3) {
        // Return null if the format is incorrect
        return filterDate;
    }
    // TODO deme handle this logic
    const timestamp = parseInt(match[1] ?? "0");
    const timezoneOffset = parseInt(match[2] ?? "0");
    // Create a new Date object with the timestamp and timezone offset
    return new Date(timestamp + timezoneOffset);
};
