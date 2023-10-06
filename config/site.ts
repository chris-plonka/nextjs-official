export interface SiteConfig {
    siteName: string;
    description: string;
    currentlyAt: string;
    socialLinks: {
        twitter: string;
        youtube: string;
        github: string;
        linkedin: string;
        instagram: string;
    };
    emailLinks: {
        mail: string;
    }
}

const siteConfig: SiteConfig = {
    siteName: "explorer",
    description: "A minimal and lovely travel blog which shares experiences and mountains around the world!",
    currentlyAt: "Pisarzowice",
    socialLinks: {
        twitter: "",
        instagram: "https://www.instagram.com/chrisplonka76",
        github: "https://www.github.com/chris-plonka",
        youtube: "https://www.youtube.com/@chris-plonka",
        linkedin: "",
    },
    emailLinks: {
        mail: "mailto:info@krzysztofplonka.pl",
    },
};

export default siteConfig;
