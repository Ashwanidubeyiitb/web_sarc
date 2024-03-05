// import React from 'react';

// function Homepage() {
//   return (
//     <div>
//       <>
//         <main role="main" style={{ marginTop: 50 }}>
//           {/* Main jumbotron for a primary marketing message or call to action */}
//           <div className="jumbotron">
//             <div className="container">
//               <h1 className="display-3">Importance of Making Events To-Do</h1>
//               <p>
//                 Organizing events efficiently requires careful planning and execution. Creating a to-do list for events helps in managing various aspects such as name, date, location, and whether it's completed or not.
//               </p>
//               <p>
//                 <a className="btn btn-primary btn-lg" href="#" role="button">
//                   Learn more »
//                 </a>
//               </p>
//             </div>
//           </div>
//           <div className="container">
//             {/* Example row of columns */}
//             <div className="row">
//               <div className="col-md-4">
//                 <h2>Event Name</h2>
//                 <p>
//                   Assign a descriptive name to each event to easily identify it and communicate its purpose to others.
//                 </p>
//                 <p>
//                   {/* <a className="btn btn-secondary" href="#" role="button">
//                     View details »
//                   </a> */}
//                 </p>
//               </div>
//               <div className="col-md-4">
//                 <h2>Date</h2>
//                 <p>
//                   Set a specific date for the event to ensure proper planning and coordination among participants.
//                 </p>
//                 <p>
//                   {/* <a className="btn btn-secondary" href="#" role="button">
//                     View details »
//                   </a> */}
//                 </p>
//               </div>
//               <div className="col-md-4">
//                 <h2>Location</h2>
//                 <p>
//                   Choose an appropriate location for the event based on factors such as accessibility, capacity, and relevance to the event theme.
//                 </p>
//                 <p>
//                   {/* <a className="btn btn-secondary" href="#" role="button">
//                     View details »
//                   </a> */}
//                 </p>
//               </div>
//             </div>
//             <hr />
//           </div>{" "}
//           {/* /container */}
//         </main>
//         <footer className="container">
//           <p>©Kai Salo se</p>
//         </footer>
//       </>
//     </div>
//   );
// }

// export default Homepage;




import React from 'react';
import './Homepage.css'; // Import your CSS file for styling

function Homepage() {
  return (
    <div className="homepage-container">
      {/* Background video */}
      <video autoPlay loop muted className="background-video">
      <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />

        Your browser does not support the video tag.
      </video>

      <main role="main">
        <div className="container content-container">
          {/* Main content */}
          <div className="jumbotron">
            <h1 className="display-3">Importance of Event Planning</h1>
            <div className="card">
              <div className="card-body">
                <p>
                  Organizing events efficiently requires careful planning and execution. Creating a to-do list for events helps in managing various aspects such as name, date, location, and whether it's completed or not.
                </p>
                <p>
                  <a className="btn btn-primary btn-lg" href="#" role="button">
                    Explore Events »
                  </a>
                </p>
              </div>
            </div>
          </div>
          {/* Example row of columns */}
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <h2>Event Name</h2>
                  <p>
                    Assign a descriptive name to each event to easily identify it and communicate its purpose to others.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <h2>Date</h2>
                  <p>
                    Set a specific date for the event to ensure proper planning and coordination among participants.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <h2>Location</h2>
                  <p>
                    Choose an appropriate location for the event based on factors such as accessibility, capacity, and relevance to the event theme.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <hr />
        </div>
        
      </main>
     
    </div>
  );
}

export default Homepage;
