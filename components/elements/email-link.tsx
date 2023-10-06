import {
    Mail,
} from "lucide-react";
import Link from "next/link";

const EmailLink = ({ platform, link, isShareURL = false }: { platform: string; link: string; isShareURL?: boolean; }) => {
    const getIcon = (platform: string) => {
        switch (platform) {
            case "mail":
                return <Mail size="18" />;

        }
    };



    return <Link href={link}>
        <div className={`${isShareURL ? "py-2 px-3 bg-neutral-200 rounded-md text-neutral-600 hover:bg-neutral-600 hover:text-neutral-100 duration-10 ease-in-out transition-colors"
            : ""}`}>{getIcon(platform)}
        </div>
    </Link>;
};

export default EmailLink;
