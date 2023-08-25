import React from "react";
import Image from "next/image";
interface AuthorProps {
    name: string;
    bio: string;
    imageUrl: string;
    imageAlt?: string;
}

const AboutAuthor: React.FC<AuthorProps> = ({
                                                name,
                                                bio,
                                                imageUrl,
                                                imageAlt = "Author Image",
                                            }) => (
    <div className="about-author d-flex p-4 bg-dark">
        <div className="bio mr-5">
            <Image src={imageUrl} alt={imageAlt} className="img-fluid mb-4"/>
        </div>
        <div className="desc">
            <h3>{name}</h3>
            <p>{bio}</p>
        </div>
    </div>)
;
export default AboutAuthor