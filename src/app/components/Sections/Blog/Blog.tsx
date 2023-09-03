import React from 'react';
import "./Blog.scss"
import Link from "next/link";
interface BlogEntryData {
    image: string;
    date: string;
    author: string;
    comments: number;
    title: string;
    description: string;
    link: string;
    id: string
}

const blogEntries: BlogEntryData[] = [
    {
        image: '/assets/images/image_1.jpg',
        date: 'January 21, 2023',
        author: 'Admin',
        comments: 3,
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        link: 'blog',
        id: '1'
    },
    {
        image: '/assets/images/image_2.jpg',
        date:  'January 21, 2023',
        author: 'Admin',
        comments: 3,
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        link: 'blog',
        id: '2'
    },
    {
        image: '/assets/images/image_3.jpg',
        date:  'January 21, 2023',
        author: 'Admin',
        comments: 3,
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        link: "blog",
        id: '3'
    }
];


const BlogEntry: React.FC<BlogEntryData> = ({ image, date, author, comments, title, description, link,id }) => {
    return (
        <div className="col-md-4 d-flex" data-aos="fade-up">
            <div className="blog-entry justify-content-end">
                <a href={link} className="block-20" style={{ backgroundImage: `url(${image})` }}></a>
                <div className="text mt-3 float-right d-block">
                    <div className="d-flex align-items-center mb-3 meta">
                        <p className="mb-0">
                            <span className="mr-2">{date}</span>
                            <a href="#" className="mr-2">{author}</a>
                            <a href="#" className="meta-chat">
                                <span className="icon-chat"></span> {comments}
                            </a>
                        </p>
                    </div>
                    <h3 className="heading">
                        <Link href={
                            {pathname: `/${link}`,query: {id} }}> {title}</Link>
                    </h3>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
}

export default function Blog() {
    return (
        <section className="ftco-section" id="blog">
            <div className="container">
                <div className="row justify-content-center mb-5 pb-5">
                    <div className="col-md-7 heading-section text-center" data-aos="fade-up">
                        <h1 className="big big-2">Blog</h1>
                        <h2 className="mb-4">My Blog</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        </p>
                    </div>
                </div>
                <div className="row d-flex">
                    {blogEntries.map((entry, index) => (
                        <BlogEntry key={index} {...entry} />
                    ))}
                </div>
            </div>
        </section>
    );
}
