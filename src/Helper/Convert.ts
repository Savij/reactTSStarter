export function toTimeZoneText(timeZone: number) {
    if (timeZone) {
        let timeZoneText = timeZone.toString();
        switch (timeZone) {
            case -5:
                timeZoneText = 'EST';
                break;
            case -6:
                timeZoneText = 'CT';
                break;
            case -7:
                timeZoneText = 'MNT';
                break;
            case -8:
                timeZoneText = 'PST';
                break;
            default:
                timeZoneText = timeZone.toString();
        }
        return timeZoneText;
    }
    return '';
}

export function toFullUrl(url: string) {
    if (url) {
        return url.startsWith('http') ? url : `http://${url}`;
    }
    return url;
}