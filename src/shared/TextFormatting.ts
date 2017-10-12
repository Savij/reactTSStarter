export default class TextFormatting {
    public static formatPhone(phone: string): string {
        let tempPhone = phone;
        const numbers = phone.replace(/\D/g, ''),
            char = { 0: '(', 3: ') ', 6: ' - ' };
        tempPhone = '';
        for (let i = 0; i < numbers.length; i++) {
            tempPhone += (char[i] || '') + numbers[i];
        }
        return tempPhone;
    }
}