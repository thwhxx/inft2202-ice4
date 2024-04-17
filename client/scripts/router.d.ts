declare namespace core {
    class Router {
        private _activeLink;
        private _routingTable;
        private _linkData;
        constructor();
        get LinkData(): string;
        set LinkData(link: string);
        get ActiveLink(): string;
        set ActiveLink(link: string);
        Add(route: string): void;
        AddTable(routingTable: string[]): void;
        Find(route: string): number;
        Remove(route: string): boolean;
        toString(): string;
    }
}
declare let router: core.Router;
declare let route: string;
