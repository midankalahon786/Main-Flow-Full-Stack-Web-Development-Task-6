import React from 'react';
import { Link } from 'react-router-dom';

export default function Welcome() {
    return (
        <div className="flex min-h-screen flex-col justify-center bg-blue-300 py-12 px-4 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden bg-blue-100 py-16 px-4 rounded-2xl shadow-xl sm:py-24 sm:px-6 lg:px-8">
                
                <div>
                    <div>
                        <h2 className="text-3xl font-bold leading-8 text-gray-900 sm:text-4xl">
                            Welcome to Our App!
                        </h2>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            We are thrilled to have you here. To get started, please sign in or create an account.
                        </p>
                        <div className="mt-8 flex gap-x-4">
                            <Link
                                to="/signin"
                                className="inline-block rounded-lg bg-green-600 px-4 py-1.5 text-base font-semibold leading-6 text-white shadow-sm ring-1 ring-gray-900/10 hover:ring-gray-900/20 hover:bg-green-500"
                            >
                                Sign In
                                <span className="text-green-400" aria-hidden="true">
                                    &rarr;
                                </span>
                            </Link>
                            <Link
                                to="/signup"
                                className="inline-block rounded-lg bg-gray-900 px-4 py-1.5 text-base font-semibold leading-6 text-white ring-1 ring-gray-900/10 hover:ring-gray-900/20 hover:bg-gray-700"
                            >
                                Sign Up
                                <span className="text-gray-400" aria-hidden="true">
                                    &rarr;
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
