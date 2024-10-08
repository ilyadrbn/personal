type TMenuRoutes = {
    href: string;
    title: string;
    icon: string;
};

type TMenuCV = Omit<TMenuRoutes, "href">;

type TMenuResources = TMenuRoutes & {
    blank?: boolean;
};

type TMenu = {
    name: string;
    position: string;
    routes: Array<TMenuRoutes>;
    resources: Array<TMenuResources>;
    CV: TMenuCV;
};
