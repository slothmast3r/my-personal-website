import React from "react";

interface CommentProps {
    imgSrc: string;
    imgAlt?: string;
    author: string;
    date: string;
    content: string;
    className?: string;
    children?: React.ReactNode;
}

const Comment: React.FC<CommentProps> = ({
                                             imgSrc,
                                             imgAlt = "Comment author image",
                                             author,
                                             date,
                                             content,
                                             className,
                                             children,
                                         }) => (
    <li className={`comment ${className ?? ''}`}>
        <div className="vcard bio">
            <img src={imgSrc} alt={imgAlt} />
        </div>
        <div className="comment-body">
            <h3>{author}</h3>
            <div className="meta">{date}</div>
            <p>{content}</p>
            <p><a href="#" className="reply">Reply</a></p>
        </div>
        {children && <ul className="children">{children}</ul>}
    </li>
);

const CommentForm: React.FC = () => (
    <div className="comment-form-wrap pt-5">
        <h3 className="mb-5">Leave a comment</h3>
        <form action="#" className="p-5 bg-dark">
            <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input type="text" className="form-control" id="name"/>
            </div>
            <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input type="email" className="form-control" id="email"/>
            </div>
            <div className="form-group">
                <label htmlFor="website">Website</label>
                <input type="url" className="form-control" id="website"/>
            </div>
            <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea name="" id="message" cols={30} rows={10} className="form-control"></textarea>
            </div>
            <div className="form-group">
                <input type="submit" value="Post Comment" className="btn py-3 px-4 btn-primary"/>
            </div>
        </form>
    </div>
);

function countComments(children: React.ReactNode): number {
    let count = 0;
    React.Children.forEach(children, child => {
        if (React.isValidElement(child) && child.type === Comment) {
            count += 1;
            if (child.props.children) {
                count += countComments(child.props.children);
            }
        }
    });
    return count;
}

const CommentSection: React.FC = () => {
    const comments = [
        <Comment
            imgSrc="images/person_1.jpg"
            author="John Doe"
            date="June 20, 2019 at 2:21pm"
            content="Lorem ipsum..."
        />,
        <Comment
            imgSrc="images/person_2.jpg"
            author="Jane Doe"
            date="June 21, 2019 at 1:11pm"
            content="Another comment..."
        >
            <Comment
                imgSrc="images/person_3.jpg"
                author="James Doe"
                date="June 22, 2019 at 12:15pm"
                content="A nested comment..."
            />
        </Comment>
    ];

    return (
        <div className="pt-5 mt-5">
            <h3 className="mb-5">{`${countComments(comments)} Comments`}</h3>
            <ul className="comment-list">
                {comments}
            </ul>
            <CommentForm />
        </div>
    );
};

export default CommentSection;
