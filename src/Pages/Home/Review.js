import React from 'react';

const Review = ({ review }) => {
    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-xl">
            <div class="card-body">
                <p> {review.review}</p>
                <div class="flex items-center">
                    <div class="avatar">
                        <div class="w-16 h-16 rounded-full ring ring-primary ring-offset-base-100 mt-3 mr-5">
                            <img src={review.img} alt=''/>
                        </div>
                        <div className='mt-3'>
                            <h4 className="text-xl">{review.name}</h4>
                            <p>{review.location}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;