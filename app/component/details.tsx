import React from "react";
export default function Details(){
    return(
        <div id="details" className="p-10 bg-orange-500 text-black-600 body-font bg-fixed bg-cover">
            <h1 className="font-bold italic text-4xl mb-6 text-center">Project Requirements and Details</h1>
            <h5 className="font-bold italic mt-4 text-2xl text-center">Requirements:</h5>
  <ul className="list-disc ml-5 mt-2">
    <li className="mt-4 italic justify-center">Knowledge of HTML, CSS, and JavaScript fundamentals.</li>
    <li className="mt-4 italic justify-center">Understanding of React.js and its component-based architecture.</li>
    <li className="mt-4 italic justify-center">Familiarity with Next.js framework for server-side rendering.</li>
    <li className="mt-4 italic justify-center">Experience with Tailwind CSS for styling and responsive design.</li>
  </ul>

  <h5 className="font-bold italic mt-6 text-2xl text-center">Technologies Used:</h5>
  <p className="mt-4 italic justify-center text-center">In this project, I utilized the following technologies:</p>
  <ul className="list-disc ml-5 mt-2">
    <li className="mt-4 italic justify-center">Next.js for building the web application.</li>
    <li className="mt-4 italic justify-center">Tailwind CSS for styling and layout.</li>
    <li className="mt-4 italic justify-center">React.js for creating interactive UI components.</li>
  </ul>

  <h5 className="font-bold italic mt-6 text-2xl text-center">Future Enhancements:</h5>
  <p className="mt-4 italic text-center">I plan to add more features in the future, such as:</p>
  <ul className="list-disc ml-5 mt-2">
    <li className="mt-4 italic justify-center">Integration of a blog section to share insights and tutorials.</li>
    <li className="mt-4 italic justify-center">Implementing animations for a more engaging user experience.</li>
    <li className="mt-4 italic justify-center">Adding a contact form to facilitate better communication.</li>
  </ul>
        </div>
    )
}