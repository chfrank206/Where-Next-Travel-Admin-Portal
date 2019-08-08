import * as React from 'react';

export interface HomeProps {

}

const Home: React.SFC<HomeProps> = () => {
    return (
        <>
            <section className="row">
                <article className="col-md-12">
                    <h1 className="text-center">Add carousel here.</h1>
                    {/* Katie wants a carousel here. Include controls and captions. */}
                </article>
            </section>
        </>
    );
}

export default Home;