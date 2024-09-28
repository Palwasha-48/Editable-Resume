

const form : HTMLFormElement = document.querySelector('.RB') as HTMLFormElement;
const resume_display : HTMLElement = document.querySelector('resume_display');

interface ResumeData {
    name: string;
    fatherName: string;
    phoneNumber: string;
    nic: string;
    email: string;
    nationality: string;
    city: string;
    motherTongue: string;
    religion: string;
    education: string;
    institute: string;
    experience: string;
    skills: string;
  }

  function generateResume (data: ResumeData): void {
    const resumeHtml = `
      <section>
        <h1><u>RESUME</u></h1>
        <h2><u>Personal Details</u></h2>
        <p style="font-size: 24px;">Name: ${data.name}</p>
        <p>Father Name: ${data.fatherName}</p>
        <p>Phone Number: ${data.phoneNumber}</p>
        <p>NIC: ${data.nic}</p>
        <p>Email: ${data.email}</p>
        <p>Nationality: ${data.nationality}</p>
        <p>City: ${data.city}</p>
        <p>Mother Tongue: ${data.motherTongue}</p>
        <p>Religion: ${data.religion}</p>
      </section>
      <section>
        <h2><u>Education</u></h2>
        <p>Qualification: ${data.education}</p>
        <p>Institute: ${data.institute}</p>
      </section>
      <section>
        <h2><u>Experience and Skills</u></h2>
        <p>Experience: ${data.experience}</p>
        <p>Skills: ${data.skills}</p>
      </section>
    `;
    resume_display.innerHTML = resumeHtml;
  }

  form.addEventListener('submit', (e: Event) => {
    e.preventDefault();
    const formData = new FormData(form);
    const resumeData: ResumeData = {
      name: formData.get('name') as string,
      fatherName: formData.get('fathername') as string,
      phoneNumber: formData.get('phone') as string,
      nic: formData.get('NIC') as string,
      email: formData.get('mail') as string,
      nationality: formData.get('nationality') as string,
      city: formData.get('city') as string,
      motherTongue: formData.get('mother tongue') as string,
      religion: formData.get('religion') as string,
      education: formData.get('edu') as string,
      institute: formData.get('institute') as string,
      experience: formData.get('exp') as string,
      skills: formData.get('skills') as string,
    };
    generateResume(resumeData);
  }); 