const Request = require('./services/request.js');
const ResumeView = require('./views/resume_view.js');

const resumeView = new ResumeView();
const requestResume = new Request("http://localhost:3000/api/resume");


const app = function() {
  const select = document.querySelector('#job-title');

  requestResume.get(function(jobs) {
    jobs.forEach(function(job) {
      const option = document.createElement('option');
      option.innerText = job.employer;
      // option.value = index;
      select.appendChild(option);
      // requestResume.post(createResumeRequestCompleted, job);
    });
  });

  const createResumeRequestCompleted = function(job) {
    resumeView.addJob(job);
  }


  console.log("Last line in app.js");
}
document.addEventListener('DOMContentLoaded', app);
