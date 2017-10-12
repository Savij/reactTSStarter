import { OKRequest } from './ReactStarter.Api.Engine';

const someApiUrl = '/someApi';

// someApiUrl - GET
export function getStuff(arg1: string, arg2: string) {
    const request = new OKRequest<string[]>(someApiUrl);
    return request.get(`/Stuff?userName=${encodeURI(arg1)}&password=${encodeURI(arg2)}`);
}

// someApiUrl - POST
export function insertStuff(foo: string, bar: string) {
    const request = new OKRequest<string>(someApiUrl);
    return request.post('/Stuff')
        .withJsonData(JSON.stringify({ Foo: foo, Bar: bar }));
}
// someApiUrl - PUT
export function updateStuff(thingToUpdate: any) {
    const request = new OKRequest<void>(someApiUrl);
    return request.put('/Stuff')
        .withJsonData(JSON.stringify({ ThingToUpdate: thingToUpdate }));
}

// someApiUrl - DELETE
export function deleteStuff(thingId: number) {
    const request = new OKRequest<void>(someApiUrl);
    return request.delete(`/Stuff?thingId=${encodeURI(thingId.toString())}`);
}