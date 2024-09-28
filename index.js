var form = document.querySelector('.RB');
var resumeDisplay = document.querySelector('resume_display');
function generateResume(data) {
    var resumeHtml = "\n      <section>\n        <h1><u>RESUME</u></h1>\n        <h2><u>Personal Details</u></h2>\n        <p style=\"font-size: 24px;\">Name: ".concat(data.name, "</p>\n        <p>Father Name: ").concat(data.fatherName, "</p>\n        <p>Phone Number: ").concat(data.phoneNumber, "</p>\n        <p>NIC: ").concat(data.nic, "</p>\n        <p>Email: ").concat(data.email, "</p>\n        <p>Nationality: ").concat(data.nationality, "</p>\n        <p>City: ").concat(data.city, "</p>\n        <p>Mother Tongue: ").concat(data.motherTongue, "</p>\n        <p>Religion: ").concat(data.religion, "</p>\n      </section>\n      <section>\n        <h2><u>Education</u></h2>\n        <p>Qualification: ").concat(data.education, "</p>\n        <p>Institute: ").concat(data.institute, "</p>\n      </section>\n      <section>\n        <h2><u>Experience and Skills</u></h2>\n        <p>Experience: ").concat(data.experience, "</p>\n        <p>Skills: ").concat(data.skills, "</p>\n      </section>\n    ");
    resume_display.innerHTML = resumeHtml;
}
form.addEventListener('submit', function (e) {
    e.preventDefault();
    var formData = new FormData(form);
    var resumeData = {
        name: formData.get('name'),
        fatherName: formData.get('fathername'),
        phoneNumber: formData.get('phone'),
        nic: formData.get('NIC'),
        email: formData.get('mail'),
        nationality: formData.get('nationality'),
        city: formData.get('city'),
        motherTongue: formData.get('mother tongue'),
        religion: formData.get('religion'),
        education: formData.get('edu'),
        institute: formData.get('institute'),
        experience: formData.get('exp'),
        skills: formData.get('skills'),
    };
    generateResume(resumeData);
});
