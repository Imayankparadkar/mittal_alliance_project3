import React from 'react';
import Header from '../Components/Core/Header/Header';
import Landing from '../Components/Landing';

const Home = () => {
    return (
        <div>
            <div className="relative bg-[url('/images/landing.png')] bg-cover bg-center min-h-screen">

                <div className="absolute inset-0 bg-black/81"></div>


                <header className="relative z-20">
                    <Header />
                </header>
                <section className='relative z-10'>
                    <Landing />
                </section>




            </div>
        </div>
    );
};

export default Home;
