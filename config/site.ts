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
}

const siteConfig: SiteConfig = {
    siteName: "explorer",
    description: "A minimal and lovely travel blog which shares experiences and mountains around the world!",
    currentlyAt: "Pisarzowice",
    socialLinks: {
        twitter: "",
        instagram: "",
        github: "https://www.github.com/chris-plonka",
        youtube: "",
        linkedin: "",
    },
};

export default siteConfig;
