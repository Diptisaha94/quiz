import React from 'react';
import Header from './Header';

const Blog = () => {
    return (
        <div>
           <div className="px-16 py-16">
            <h3 className='text-3xl font-medium'>1. What is the purpose of react router?</h3>
            <p className='text-xl mb-6'>React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.</p>
            <h3 className='text-3xl font-medium'>2. How does context API work?</h3>
            <p className='text-xl mb-6'>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on.Context is primarily used when some data needs to be accessible by many components at different nesting levels. Apply it sparingly because it makes component reuse more difficult.</p>
            <h3 className='text-3xl font-medium'>3. Why we use useRef?</h3>
            <p className='text-xl mb-6'>The useRef Hook allows you to persist values between renders.It can be used to store a mutable value that does not cause a re-render when updated.It can be used to access a DOM element directly.If we tried to count how many times our application renders using the useState Hook, we would be caught in an infinite loop since this Hook itself causes a re-render.</p>
           </div>
        </div>
    );
};

export default Blog;