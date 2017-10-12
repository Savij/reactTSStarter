import * as React from 'react';

export function getValueFromEvent(event: React.FormEvent, isTrim = false) {
    const value = (event.target as HTMLInputElement).value;
    return (value && isTrim) ? value.trim() : value;
}

export function getNumberFromEvent(event: React.FormEvent) {
    return parseInt(getValueFromEvent(event), 10);
}

export function getCheckboxValue(event: React.FormEvent) {
    return (event.target as HTMLInputElement).checked;
}