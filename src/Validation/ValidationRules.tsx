import * as React from 'react';
import Validation from 'react-validation';
import { parse, isValidNumber } from 'libphonenumber-js';
import { css } from 'aphrodite';
import styles from './ValidationRules.styles';
import * as validator from 'validator';

Object.assign(Validation.rules, {
    required: {
        rule: value => {
            return value.toString().trim();
        },
        hint: value => {
            return <span className={css(styles.errorText)}>Required</span>;
        }
    },
    requiredInline: {
        rule: value => {
            return value.toString().trim();
        },
        hint: value => {
            return <span><br /><span className={css(styles.errorText)}>Required</span></span>;
        }
    },
    email: {
        rule: value => {
            return validator.isEmail(value);
        },
        hint: value => {
            return <span className={css(styles.errorText)}>{value} isnt an Email.</span>;
        }
    },
    phoneNumber: {
        rule: value => {
            return isValidNumber(parse(value, 'US'));
        },
        hint: value => {
            return <span className={css(styles.errorText)}>Phone Number is not valid.</span>;
        }
    },
    password: {
        rule: (value, components) => {
            const password = components.password.state;
            const passwordConfirm = components.passwordConfirm.state;
            const isBothUsed = password
                && passwordConfirm
                && password.isUsed
                && passwordConfirm.isUsed;
            const isBothChanged = isBothUsed && password.isChanged && passwordConfirm.isChanged;

            if (!isBothUsed || !isBothChanged) {
                return true;
            }
            return password.value === passwordConfirm.value;
        },
        hint: () => <span className='form-error is-visible'>Passwords should be equal.</span>
    }
});