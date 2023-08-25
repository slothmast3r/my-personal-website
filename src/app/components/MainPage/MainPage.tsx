import "./MainPage.scss";

import { Home } from "../Sections/Home";
import { About } from "../Sections/About";
import { Resume } from "../Sections/Resume";
import { Services } from "../Sections/Services";
import { Skills } from "../Sections/Skills";
import { Projects } from "../Sections/Projects";
import { Blog } from "../Sections/Blog";
import { Counter } from "../Sections/Counter";
import { HireMe } from "../Sections/HireMe";
import { Contact } from "../Sections/Contact";

export default function MainPage() {

    const components = [
        Home,
        About,
        Resume,
        Services,
        Skills,
        Projects,
        Blog,
        Counter,
        HireMe,
        Contact
    ];

    return (
        <>
            {components.map((Component, index) => <Component key={index} />)}
        </>
    );
}
