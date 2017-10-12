const amexImage = require('../../assets/images/creditcards/cc_amex.png');
const masterCardImage = require('../../assets/images/creditcards/cc_mc.png');
const visaImage = require('../../assets/images/creditcards/cc_visa.png');
const blankCardImage = require('../../assets/images/creditcards/cc_blank.png');

export enum CardType {
    AmEx,
    Discover,
    MasterCard,
    Unknown,
    Visa
}

interface ICardTypeValidator {
    type: CardType;
    validate(value: string): boolean;
}

/****** Define all credit card validators ******/
class AmExValidator implements ICardTypeValidator {
    public type = CardType.AmEx;

    public validate(value: string): boolean {
        if (value.length >= 2) {
            const newVal = parseInt(value.replace(/\s/g, '').substr(0, 2));
            if (newVal === 34 || newVal === 37) {
                return true;
            }
        }
        return false;
    }
}

class DiscoverValidator implements ICardTypeValidator {
    public type = CardType.Discover;

    public validate(value: string): boolean {
        if (value.length >= 2) {
            const newVal = parseInt(value.substr(0, 2));
            if (newVal === 65) {
                return true;
            }
        }
        if (value.length >= 3) {
            const newVal = parseInt(value.substr(0, 3));
            if (newVal >= 644 && newVal <= 649) {
                return true;
            }
        }
        if (value.length >= 4) {
            const newVal = parseInt(value.substr(0, 4));
            if (newVal === 6011) {
                return true;
            }
        }
        if (value.length >= 6) {
            const newVal = parseInt(value.substr(0, 6));
            if (newVal >= 622126 && newVal <= 622925) {
                return true;
            }
        }
        return false;
    }
}

class MasterCardValidator implements ICardTypeValidator {
    public type = CardType.MasterCard;

    public validate(value: string): boolean {
        if (value.length >= 2) {
            const newVal = parseInt(value.substr(0, 2));
            if (newVal >= 50 && newVal <= 55) {
                return true;
            }
        }
        return false;
    }
}

class VisaValidator implements ICardTypeValidator {
    public type = CardType.Visa;

    public validate(value: string): boolean {
        if (value.length >= 1) {
            const newVal = parseInt(value.substr(0, 1));
            if (newVal === 4) {
                return true;
            }
        }
        return false;
    }
}
/***********************************************/

/**************** Register card validators ****************/
const AllValidators: ICardTypeValidator[] = new Array();
AllValidators.push(new AmExValidator());
AllValidators.push(new DiscoverValidator());
AllValidators.push(new MasterCardValidator());
AllValidators.push(new VisaValidator());
/*********************************************************/

export function getCardType(value: string) {

    if (!value) {
        return CardType.Unknown;
    }

    for (let validator of AllValidators) {
        if (validator.validate(value)) {
            return validator.type;
        }
    }

    return CardType.Unknown;
}

export function getCardImageSrc(creditCardNumber) {
    switch (getCardType(creditCardNumber)) {
        case CardType.AmEx: return amexImage;
        case CardType.MasterCard: return masterCardImage;
        case CardType.Visa: return visaImage;
        default: return blankCardImage;
    }
}

export function isCreditCardTypeValid(ccNum: string) {
    return getCardType(ccNum) !== CardType.Unknown ;
}
