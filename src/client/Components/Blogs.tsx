import * as React from 'react';
import { json } from '../utils/api';
import { useState, useEffect } from 'react';
import BlogCard from './BlogCard';
import Calendar from 'react-calendar';
import { RouteComponentProps } from 'react-router';
import { User } from '../utils/api';

export interface IBlogsProps extends RouteComponentProps {
    id: number,
    name: string,
    content: string,
    _created: Date
}

const Blogs: React.SFC<IBlogsProps> = props => {

    const [blogs, setBlogs] = useState<IBlogsProps[]>([]);
    const [content, setContent] = useState('');
    const [dateOfEvent, SetDateOfEvent] = useState(new Date());
    const [name, setName] = useState('');

    const getBlogs = async () => {
        let r = await fetch('/api/blogs');
        let blogs = await r.json();
        setBlogs(blogs)
        // let sessions = await json('/api/session', 'GET');
        // setSessions(sessions);
    }

    useEffect(() => {
        getBlogs();
    }, []);

    const eventChange = (dateOfEvent: Date) => {
        SetDateOfEvent(dateOfEvent);
    }

    const addBlog = async (e: React.MouseEvent) => {
        e.preventDefault();
        let newBlog = {
            content
        };
        try {
            let data = await json('/api/blogs', 'POST', newBlog)
            getBlogs();
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (!User || User.userid === null || User.role !== 'admin') {
            props.history.replace('/login');
        }
    }, []);

    return (
        <>
            <div className="container row d-flex">
                <div className="col-md-6 flex-column-reverse justify-content-end border-right border-dark">
                    <h3>Add a Blog!</h3>
                    <form>
                        <section className="form-group">
                            <textarea className="form-control" cols={10} rows={10} placeholder="Details" onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => setContent(event.target.value)} />
                        </section>
                        <button className="btn btn-primary" onClick={e => addBlog(e)}>Submit Blog</button>
                    </form>
                </div>
            </div>
            <div>
                <BlogCard blogs={blogs} />
            </div>
        </>
    );
}

export default Blogs;

