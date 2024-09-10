
import React from 'react';
import Counter from './counter';

const App = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500">
            <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full text-center">
                <h1 className="text-4xl font-bold text-gray-800 mb-6">Redux Counter App</h1>
                <div className="flex justify-center items-center space-x-4">
                    <Counter />
                </div>
            </div>
        </div>

    );
};

export default App;
