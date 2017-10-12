declare namespace ReactRouter {
    interface RouteComponentPropsWithRouter<P, R> {
        router?: RouterOnContext;
        location?: HistoryModule.Location;
        params?: P;
        route?: PlainRoute;
        routeParams?: R;
        routes?: PlainRoute[];
    }

    interface RouterProps {
        render?: Function;
    }

}

declare module "react-router" {
    export const withRouter: <T>(component: T) => T;
}