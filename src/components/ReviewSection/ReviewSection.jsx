import Image from 'next/image';
import React from 'react';

const ReviewSection = () => {

    const reviews = [
        {
            id: 1,
            name: "Cameron Williamson",
            date: "3 days",
            comment: "Very Nice!!",
            rating: 4,
            likes: 10,
        },
        {
            id: 2,
            name: "Cameron Williamson",
            date: "3 days",
            comment: "Very Nice!!",
            rating: 4,
            likes: 10,
        },
    ];

    return (
        <div className="p-4 lg:p-8 bg-white text-black">
            {/* Tabs */}
            <div className="flex space-x-4 text-center text-gray-600 mb-6">
                <button className="text-purple-600 font-semibold border-b-2 border-purple-600 pb-1">
                    Review & Rating
                </button>
                <button className="hover:text-purple-600">Details</button>
                <button className="hover:text-purple-600">Discussion</button>
            </div>

            <div className="flex flex-col lg:flex-row lg:gap-8">
                {/* Left Section (Reviews) */}
                <div className="flex-1">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-xl font-semibold">Product Review</h2>
                        <p className="text-sm text-gray-500">121 reviews</p>
                    </div>
                    <div className="space-y-6">
                        {reviews.map((review) => (
                            <div
                                key={review.id}
                                className="bg-white p-4 rounded-md shadow-md border"
                            >
                                <div className="flex items-center space-x-4">
                                    <div className="h-10 w-10 rounded-full bg-gray-200">
                                        <Image src={'https://i.ibb.co.com/ZBb8LbL/Madhab.png'} height={40} width={40} alt='profile' />
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-semibold">{review.name}</h3>
                                        <p className="text-xs text-gray-400">{review.date}</p>
                                    </div>
                                </div>
                                <div className="mt-3">
                                    <div className="flex items-center space-x-1">
                                        {Array(5)
                                            .fill(0)
                                            .map((_, i) => (
                                                <span
                                                    key={i}
                                                    className={`h-4 w-4 ${i < review.rating
                                                            ? "text-yellow-400"
                                                            : "text-gray-300"
                                                        }`}
                                                >
                                                    ★
                                                </span>
                                            ))}
                                    </div>
                                    <p className="text-sm text-gray-600 mt-2">{review.comment}</p>
                                    <div className="flex items-center space-x-2 text-gray-400 mt-3">
                                        <span className="text-sm">👍</span>
                                        <span>{review.likes}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Section (Summary) */}
                <div className="lg:w-1/3 mt-8 lg:mt-0">
                    <div className="bg-white p-6 rounded-md shadow-md border">
                        <div className="flex items-center space-x-2 mb-4">
                            <h3 className="text-xl font-semibold">4.0</h3>
                            <div className="flex items-center">
                                <div className="flex items-center">
                                    {Array(5)
                                        .fill(0)
                                        .map((_, i) => (
                                            <span
                                                key={i}
                                                className={`h-4 w-4 ${i < 4 ? "text-yellow-400" : "text-gray-300"
                                                    }`}
                                            >
                                                ★
                                            </span>
                                        ))}
                                </div>
                            </div>
                        </div>
                        <div className="space-y-2">
                            {[5, 4, 3, 2, 1].map((star, i) => (
                                <div className="flex items-center space-x-2" key={i}>
                                    <span className="text-sm">{star}</span>
                                    <div className="flex-1 h-2 bg-gray-200 rounded">
                                        <div
                                            className={`h-2 bg-yellow-400 rounded`}
                                            style={{
                                                width: `${star * 10}%`,
                                            }}
                                        ></div>
                                    </div>
                                    <span className="text-sm text-gray-500">{star * 10}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewSection;