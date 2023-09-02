import React from 'react';

interface BlogPostProps {
    imageUrl: string;
    title: string;
    date: string;
    author: string;
    commentsCount: number;
}

interface CategoryProps {
    name: string;
    count: number;
}

const SearchBox: React.FC = () => (
    <div className="sidebar-box">
        <form action="#" className="search-form">
            <div className="form-group">
                <span className="icon icon-search"></span>
                <input type="text" className="form-control" placeholder="Type a keyword and hit enter" />
            </div>
        </form>
    </div>
);

const CategoriesBox: React.FC<{ categories: CategoryProps[] }> = ({ categories }) => (
    <div className="sidebar-box" data-aos="fade-up">
        <h3 className="heading-sidebar">Categories</h3>
        <ul className="categories">
            {categories.map(category => (
                <li key={category.name}>
                    <a href="#">{category.name} <span>({category.count})</span></a>
                </li>
            ))}
        </ul>
    </div>
);

const RecentBlogBox: React.FC<{ posts: BlogPostProps[] }> = ({ posts }) => (
    <div className="sidebar-box" data-aos="fade-up">
        <h3 className="heading-sidebar">Recent Blog</h3>
        {posts.map(post => (
            <div className="block-21 mb-4 d-flex" key={post.title}>
                <a className="blog-img mr-4" style={{ backgroundImage: `url(${post.imageUrl})` }}></a>
                <div className="text">
                    <h3 className="heading"><a href="#">{post.title}</a></h3>
                    <div className="meta">
                        <div><a href="#"><span className="icon-calendar"></span> {post.date}</a></div>
                        <div><a href="#"><span className="icon-person"></span> {post.author}</a></div>
                        <div><a href="#"><span className="icon-chat"></span> {post.commentsCount}</a></div>
                    </div>
                </div>
            </div>
        ))}
    </div>
);

const TagCloudBox: React.FC<{ tags: string[] }> = ({ tags }) => (
    <div className="sidebar-box" data-aos="fade-up">
        <h3 className="heading-sidebar">Tag Cloud</h3>
        <div className="tagcloud">
            {tags.map(tag => (
                <a href="#" className="tag-cloud-link" key={tag}>{tag}</a>
            ))}
        </div>
    </div>
);

const ParagraphBox: React.FC<{ content: string }> = ({ content }) => (
    <div className="sidebar-box" data-aos="fade-up">
        <h3 className="heading-sidebar">Paragraph</h3>
        <p>{content}</p>
    </div>
);

export default function SideBar(){
    // Add the data for your categories, blog posts, and tags here.
    // This is just sample data, replace it with your actual data.
    const categoriesSample: CategoryProps[] = [
        { name: "Interior Design", count: 12 },
        // ... other categories
    ];

    const blogPostsSample: BlogPostProps[] = [
        { imageUrl: "/assets/images/image_1.jpg", title: "Why Lead Generation is Key", date: "March 12, 2019", author: "Admin", commentsCount: 19 },
        // ... other blog posts
    ];

    const tagsSample = ["house", "office", "building"];  // ... and so on

    const paragraphContent = "Lorem ipsum..."; // Replace with your actual content

    return (
        <div className="col-lg-4 sidebar" data-aos="fade-up">
            <SearchBox />
            <CategoriesBox categories={categoriesSample} />
            <RecentBlogBox posts={blogPostsSample} />
            <TagCloudBox tags={tagsSample} />
            <ParagraphBox content={paragraphContent} />
        </div>
    );
}
