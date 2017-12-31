const ResumeView = function() {
  this.jobs = [];
}

ResumeView.prototype.addJob = function(job) {
  this.jobs.push(job);
  console.log(this.jobs);
}

// ResumeView.prototype.populateDropDown = function(job) {
//   const select = document.querySelector('#job-title');
//     jobs.forEach(function(job) {
//       const option = document.createElement('option');
//       option.innerText = job.role;
//       select.appendChild(option);
//     });
// }

module.exports = ResumeView;
