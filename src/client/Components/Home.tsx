import * as React from 'react';

export interface HomeProps {

}

const Home: React.SFC<HomeProps> = () => {
    return (
        <>
            <section className="row">
                <article className="col-md-12">
                    <p className="text-center">Hello, my love! I hope you have a wonderful day!</p>
                </article>
            </section>
        </>
    );
}

export default Home;