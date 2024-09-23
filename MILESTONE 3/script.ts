
const btn1 = document.getElementById('resume-builder') as HTMLFormElement; // html form
const div = document.getElementById('genereted-resume') as HTMLDivElement; // upcoming resume
const ImageInput = document.getElementById('User-Profile-pic') as HTMLInputElement;
btn1?.addEventListener('submit', (event: Event) => {
    if (div) {
        div.style.backgroundColor = 'white';
        event.preventDefault();
        // persnol information input selections
        const name1 = (document.getElementById('name') as HTMLInputElement).value;
        const web1 = (document.getElementById('web') as HTMLInputElement).value;
        const feild1 = (document.getElementById('Feild') as HTMLInputElement).value;
        const Email1 = (document.getElementById('Email') as HTMLInputElement).value;
        const Adress1 = (document.getElementById('Adress') as HTMLInputElement).value;
        const PhoneNumber1 = (document.getElementById('PhoneNumber') as HTMLInputElement).value;
        // Education information selection
        const Degree1 = (document.getElementById('Degree') as HTMLInputElement).value;
        const Institution1 = (document.getElementById('Institution') as HTMLInputElement).value;
        const Year1 = (document.getElementById('Year') as HTMLInputElement).value;
        //  education part 2
        const Degree2 = (document.getElementById('Degree-2') as HTMLInputElement).value;
        const Institution2 = (document.getElementById('Institution-2') as HTMLInputElement).value;
        const Year2 = (document.getElementById('Year-2') as HTMLInputElement).value;
        //skills
        const skill1 = (document.getElementById('skill-1') as HTMLInputElement).value;
        const skill2 = (document.getElementById('skill-2') as HTMLInputElement).value;
        const skill3 = (document.getElementById('skill-3') as HTMLInputElement).value;
        const skill4 = (document.getElementById('skill-4') as HTMLInputElement).value;
        const skill5 = (document.getElementById('skill-5') as HTMLInputElement).value;
        //Language-section
        const lang1 = (document.getElementById('language-1') as HTMLInputElement).value
        const lang2 = (document.getElementById('language-2') as HTMLInputElement).value
        //Hobbies-Section
        const hobby1 = (document.getElementById('hobby-1') as HTMLInputElement).value
        const hobby2 = (document.getElementById('hobby-2') as HTMLInputElement).value
        const hobby3 = (document.getElementById('hobby-3') as HTMLInputElement).value
        const hobby4 = (document.getElementById('hobby-4') as HTMLInputElement).value
        const hobby5 = (document.getElementById('hobby-5') as HTMLInputElement).value
        //about info
        const aboutinfo = (document.getElementById('about-area') as HTMLInputElement).value
        //about info
        const experience = (document.getElementById('experience-area') as HTMLInputElement).value
        const portfolioLinks1 = (document.getElementById('portfolio-link-1') as HTMLInputElement).value
        const portfolioLinks2 = (document.getElementById('portfolio-link-2') as HTMLInputElement).value
        // resume builder
        const divInnerHtml = `<div class="resume_container">
        <div class="upper-part">
            <div class="circle">
                <div class="image">
           <img src="" alt="profile Picture" id="profile-image-display">
           </div>
            </div>
            <div class="rectangle-head">
                <span class="name"> ${name1}</span>
                <span class="feild">${feild1} </span>
            </div>
        </div>
        <div class="lest-right-box-wrapper">
            <div class="left">
                <div class="persnol-information-section">
                    <div class="persnol-information-boxes" id="email"><i class="fa fa-envelope"
                            style="font-size:10px"></i>${Email1}
                    </div>
                    <div class="persnol-information-boxes" id="number"><i class="fa-solid fa-phone"></i>${PhoneNumber1}
                    </div>
                    <div class="persnol-information-boxes" id="adress"><i class="fa-solid fa-location-dot"></i>${Email1}</div>
                    <div class="persnol-information-boxes" id="wesite"><i class="fa-solid fa-globe"></i>${web1}</div>
                </div>
                <div class="education-section">
                    <span class="eduacation-heading">EDUCATION</span>
                    <hr>
                    <div id="education-part-1" class="education-parts">
                        <div class="degree-name">${Degree1}</div>
                        <div class="degree-institution">${Institution1}</div>
                        <div class="degree-year">${Year1}</div>
                    </div>
                    <div class="education-parts" id="education-part-2">
                        <div class="degree-name">${Degree2}</div>
                        <div class="degree-institution">${Institution2}</div>
                        <div class="degree-year">${Year2}</div>
                    </div>
                </div>
                <div class="skills-section" id="skills-sectionID">
                    <span class="skills-heading">SKILLS</span>
                    <hr>
                    <div class="skills-parts">
                        <ul class="skills-name">
                            <li>${skill1}L</li>
                            <li>${skill2}</li>
                            <li>${skill3}</li>
                            <li>${skill4}T</li>
                            <li>${skill5}</li>
                        </ul>
                    </div>
                </div>
                <div class="language-section">
                    <span class="language-heading"> LANGUAGE</span>
                    <hr>
                    <div class="language-parts">
                        <ul class="language-names">
                            <li>${lang1}</li>
                            <li>${lang2}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="right">
                <div class="about-me-section">
                    <span class="about-me-heading">About Me</span>
                    <hr>
                    <div class="about-me-information">${aboutinfo}</div>
                </div>
                <div class="Hobbies-section">
                    <span class="Hobbies-heading">Hobbies</span>
                    <hr>
                    <ul class="Hobbies-list">
                        <li>${hobby1}</li>
                        <li>${hobby2}</li>
                        <li>${hobby3}</li>
                        <li>${hobby4}</li>
                        <li>${hobby5}</li>
                    </ul>
                </div>
                <div class="Experience-section">
                    <span class="Experience-heading">Experience</span>
                    <hr>
                    <div class="Experience-information">${experience}
                        <br> linkedin: <a href="">${portfolioLinks1}</a> <br>
                        Instagram: <a href="">${portfolioLinks2}</a>
                    </div>
                </div>
                <button id="hideskills">Hide skills</button>
            </div>

        </div>
    </div>`;
        div.innerHTML = divInnerHtml;

            // ADDING IMAGE
    const file = ImageInput.files?.[0];
    if (file) {
        const fileReader = new FileReader();
        fileReader.onload = (e: ProgressEvent<FileReader>) => {
            const image = document.getElementById('profile-image-display') as HTMLImageElement;
            image.src = e.target?.result as string;

        }
        fileReader.readAsDataURL(file);
    };

    }

});

