import * as React from 'react';
import { IBlogsProps } from "./Blogs"
import moment from 'moment';


export interface IBlogCardProps { blogs: IBlogsProps[] }

const SeshCard: React.SFC<IBlogCardProps> = props => {

    return (
        <>
            <main className="col-md-12">
                {props.blogs.map(blog => (
                    <div key={blog.id} className="card m-2 shadow border border-light">
                        <div className="card-body">
                            <p className="card-text">Blog Details: {blog.content}</p>
                            <p>Created: {moment(blog._created).format('MMMM Do, YYYY')}</p>
                            {/* <Link className="btn btn-success my-2" to={`/blog/${blog.id}`}>View Full Blog</Link> */}
                        </div>
                    </div>
                ))}
            </main>
        </>
    );
}

export default SeshCard;