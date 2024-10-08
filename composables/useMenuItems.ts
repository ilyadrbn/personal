export const useMenuItems = () => {
    const menuItems: TMenu = {
        name: "Illia Horbul",
        position: "Middle Frontend Developer",
        routes: [
            {
                href: "/",
                title: "Home",
                icon: "solar:home-2-outline",
            },
            {
                href: "/certificates",
                title: "Certificates",
                icon: "solar:ticker-star-broken",
            },
            {
                href: "/services",
                title: "Services",
                icon: "solar:keyboard-broken",
            },
            {
                href: "/contact",
                title: "Contact",
                icon: "solar:chat-round-broken",
            },
        ],
        resources: [
            {
                href: "/stack",
                title: "Stack",
                icon: "mingcute:vue-line",
            },
            {
                href: "https://t.me/ilyadrbn",
                title: "Telegram",
                icon: "ph:telegram-logo-light",
                blank: true,
            },
            {
                href: "https://github.com/ilyadrbn",
                title: "Github",
                icon: "mdi:github",
                blank: true,
            },
            {
                href: "https://gitlab.com/ilyadrbn",
                title: "Gitlab",
                icon: "ph:gitlab-logo-simple",
                blank: true,
            },
        ],
        CV: {
            title: "Download CV",
            icon: "solar:download-outline",
        },
    };

    return { menuItems };
};
