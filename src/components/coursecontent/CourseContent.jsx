import './coursecontent.css'

export default function CourseContent() {
  return (
    <div className="mainContainer">
      <div className="contentHeader">
        <h2>Complete Python Course for the Beginners</h2>
        <span>Learn python from the basic and build your own projects.</span>
        <div className="creator"><i className="fa-solid fa-user-secret"></i>Created by:Name of creator</div>
        <span><i className="fa-solid fa-cloud-arrow-up"></i>last updated on:30 January 2023</span>
        <span><i className="fa-solid fa-globe"></i>Language:English</span>
      </div>

      <div className="contentBody">
        <div className="learning">
          <h3>What you will learn in this course:</h3>
          <div className="learn">
            <div className="left">
              <ul>
                <li>
                    <i className="fa-solid fa-check"></i>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id,
                  accusantium?
                </li>
                <li>
                <i className="fa-solid fa-check"></i>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id,
                  accusantium?
                </li>
                <li>
                <i className="fa-solid fa-check"></i>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id,
                  accusantium?
                </li>
                <li>
                <i className="fa-solid fa-check"></i>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id,
                  accusantium?
                </li>

              </ul>
            </div>
          </div>
          <h3>This Course includes:</h3>
          <div className="inclusions">
            <div className="videos"><i className="fa-solid fa-video"></i>on demand-videos</div>
            <div className="assignments"><i className="fa-solid fa-bullseye"></i>Assignments</div>
            <div className="notes"><i className="fa-solid fa-pen"></i>Chapterwise Notes</div>
            <div className="projects"><i className="fa-solid fa-code"></i>Projects with source code</div>
            <div className="certificate"><i className="fa-solid fa-trophy"></i>Certificate of completion</div>
          </div>
        </div>

        <div className="courseDesc">
          <div className="image">
            <img src="./images/pythondev.png" alt="" />
            <div className="desc">
              <div> Course Price:Rs.5999/-</div>
              <div> Discount:Rs.2000/-</div>
              <div> Course amount:Rs.3999/-</div>
              <div> Course Duration: 3 Months</div>
              <div>
                <button>BUY NOW</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
