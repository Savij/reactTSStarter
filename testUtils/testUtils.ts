import { OKRequest } from '../Api/ReactStarter.Api.Engine';

export function mockQuery(apiCall: any, response: Promise<any>) {
    const query = new OKRequest<any>();
    query.execute = () => response;
    (apiCall as jest.Mock<{}>).mockReturnValue(query);
    return response.then;
}

export function waitForPromises() {
    return new Promise(resolve => setImmediate(resolve));
}