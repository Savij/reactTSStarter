export default class PhoneFormatter {

    public static Parse(phoneNumber: string) {
        if (!phoneNumber) { return ''; }

        const value = phoneNumber.toString().trim().replace(/^\+/, '');

        if (value.match(/[^0-9]/)) {
            return phoneNumber;
        }

        let country, areaCode, number;

        switch (value.length) {
            case 10: // +1PPP####### -> C (PPP) ###-####
                country = 1;
                areaCode = value.slice(0, 3);
                number = value.slice(3);
                break;

            case 11: // +CPPP####### -> CCC (PP) ###-####
                country = value[0];
                areaCode = value.slice(1, 4);
                number = value.slice(4);
                break;

            case 12: // +CCCPP####### -> CCC (PP) ###-####
                country = value.slice(0, 3);
                areaCode = value.slice(3, 5);
                number = value.slice(5);
                break;

            default:
                return phoneNumber;
        }

        if (country === 1) {
            country = '';
        }

        number = number.slice(0, 3) + '-' + number.slice(3);

        return (country + ' (' + areaCode + ') ' + number).trim();
    }
}