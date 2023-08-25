import "./PageFooter.scss"
import React from "react";

interface SocialIconProps {
    icon: string;
}

const SocialIcon: React.FC<SocialIconProps> = ({ icon }) => (
    <li data-aos="fade-up">
        <a href="#"><span className={`icon-${icon}`}></span></a>
    </li>
);

interface ListItemProps {
    text: string;
    hash: string;
}
const ListItem: React.FC<ListItemProps> = ({ text, hash }) => (
    <li>
        <a href={`#${hash}`}>
            <span className={`icon-long-arrow-right mr-2`}></span>
            {text}
        </a>
    </li>
);

interface ColumnListProps {
    title: string;
    items: ListItemProps[];
}

const ColumnList: React.FC<ColumnListProps> = ({ title, items }) => (
    <div className="col-md">
        <div className="ftco-footer-widget mb-4">
            <h2 className="ftco-heading-2">{title}</h2>
            <ul className="list-unstyled">
                {items.map((item, index) => (
                    <ListItem key={index} {...item} />
                ))}
            </ul>
        </div>
    </div>
);

interface InfoItemProps {
    icon: string;
    text: string;
}

const InfoItem: React.FC<InfoItemProps> = ({ icon, text }) => (
    <li>
        <a href="#">
            <span className={`icon-${icon}`}></span>
            <span className="text">{text}</span>
        </a>
    </li>
);


const menuItems:ListItemProps[]  = [
    { text: "Home", hash: "home" },
    { text: "About", hash: "about" },
    { text: "Services", hash: "services" },
    { text: "Projects", hash: "projects" },
    { text: "Contact", hash: "contact" },
]

const serviceItems:ListItemProps[]=[
    { text: "Web Design", hash: "#" },
    { text: "Web Development", hash: "#" },
    { text: "Business Strategy", hash: "#" },
    { text: "Data Analysis", hash: "#" },
    { text: "Graphic Design", hash: "#" },
]

const PageFooter: React.FC = () => {
    return (
        <footer className="ftco-footer ftco-section">
            <div className="container">
                <div className="row mb-5">
                    <div className="col-md">
                        <div className="ftco-footer-widget mb-4">
                            <h2 className="ftco-heading-2">About</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                            </p>
                            <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
                                <SocialIcon icon="twitter" />
                                <SocialIcon icon="facebook" />
                                <SocialIcon icon="instagram" />
                            </ul>
                        </div>
                    </div>
                    <ColumnList
                        title="Links"
                        items={menuItems}
                    />
                    <ColumnList
                        title="Services"
                        items={serviceItems}
                    />
                    <div className="col-md">
                        <div className="ftco-footer-widget mb-4">
                            <h2 className="ftco-heading-2">Have a Questions?</h2>
                            <div className="block-23 mb-3">
                                <ul>
                                    <InfoItem icon="map-marker" text="203 Fake St. Mountain View, San Francisco, California, USA" />
                                    <InfoItem icon="phone" text="+2 392 3929 210" />
                                    <InfoItem icon="envelope" text="info@yourdomain.com" />
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 text-center"></div>
                </div>
            </div>
        </footer>
    )
}
export default PageFooter;

