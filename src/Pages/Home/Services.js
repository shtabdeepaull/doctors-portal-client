import React from 'react';
import fluoride from '../../assets/images/fluoride.png';
import cavity from '../../assets/images/cavity.png';
import whitening from '../../assets/images/whitening.png';
import treatment from '../../assets/images/treatment.png';
import Service from './Service';

const Services = () => {
    const services = [
        {
            _id: 1,
            name: 'Fluoride Treatment',
            description: 'Fluoride is a natural mineral that builds strong teeth and prevents cavities.',
            img: fluoride
        },
        {
            _id: 2,
            name: 'cavity Filling',
            description: 'Fluoride is a natural mineral that builds strong teeth and prevents cavities.',
            img: cavity
        },
        {
            _id: 3,
            name: 'Teeth Whitening',
            description: 'Fluoride is a natural mineral that builds strong teeth and prevents cavities. ',
            img: whitening
        },
    ]
    return (
        <div className='my-28'>
            <div className='text-center'>
                <h3 className='text-primary text-xl font-bold uppercase'>Our Services</h3>
                <h1 className='text-3xl'>Services We Provide</h1>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
            <div class="card card-side mt-20 px-12 ">
                <figure>
                    <img style={{height:"376px", width:"400px"}} className="rounded" src={treatment}alt="Movie"/>

                </figure>
                <div class="card-body mt-10">
                    <h2 class="card-title font-bold text-2xl">Exceptional Dental Care, on Your Terms</h2>
                    <p>Exceptional Dental Care is a cheerful dental practice, offering high-quality dental care in the heart of Spearwood. We are wheelchair-accessible, caring and affordable. We use new technologies for the comfort of our patients.</p>
                    <div class="card-actions ">
                        <button class="btn btn-primary mb-7">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;