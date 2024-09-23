var btn1 = document.getElementById('resume-builder'); // html form
var div = document.getElementById('genereted-resume'); // upcoming resume
var ImageInput = document.getElementById('User-Profile-pic');
btn1 === null || btn1 === void 0 ? void 0 : btn1.addEventListener('submit', function (event) {
    var _a;
    if (div) {
        div.style.backgroundColor = 'white';
        event.preventDefault();
        // persnol information input selections
        var name1 = document.getElementById('name').value;
        var web1 = document.getElementById('web').value;
        var feild1 = document.getElementById('Feild').value;
        var Email1 = document.getElementById('Email').value;
        var Adress1 = document.getElementById('Adress').value;
        var PhoneNumber1 = document.getElementById('PhoneNumber').value;
        // Education information selection
        var Degree1 = document.getElementById('Degree').value;
        var Institution1 = document.getElementById('Institution').value;
        var Year1 = document.getElementById('Year').value;
        //  education part 2
        var Degree2 = document.getElementById('Degree-2').value;
        var Institution2 = document.getElementById('Institution-2').value;
        var Year2 = document.getElementById('Year-2').value;
        //skills
        var skill1 = document.getElementById('skill-1').value;
        var skill2 = document.getElementById('skill-2').value;
        var skill3 = document.getElementById('skill-3').value;
        var skill4 = document.getElementById('skill-4').value;
        var skill5 = document.getElementById('skill-5').value;
        //Language-section
        var lang1 = document.getElementById('language-1').value;
        var lang2 = document.getElementById('language-2').value;
        //Hobbies-Section
        var hobby1 = document.getElementById('hobby-1').value;
        var hobby2 = document.getElementById('hobby-2').value;
        var hobby3 = document.getElementById('hobby-3').value;
        var hobby4 = document.getElementById('hobby-4').value;
        var hobby5 = document.getElementById('hobby-5').value;
        //about info
        var aboutinfo = document.getElementById('about-area').value;
        //about info
        var experience = document.getElementById('experience-area').value;
        var portfolioLinks1 = document.getElementById('portfolio-link-1').value;
        var portfolioLinks2 = document.getElementById('portfolio-link-2').value;
        // resume builder
        var divInnerHtml = "<div class=\"resume_container\">\n        <div class=\"upper-part\">\n            <div class=\"circle\">\n                <div class=\"image\">\n           <img src=\"\" alt=\"profile Picture\" id=\"profile-image-display\">\n           </div>\n            </div>\n            <div class=\"rectangle-head\">\n                <span class=\"name\"> ".concat(name1, "</span>\n                <span class=\"feild\">").concat(feild1, " </span>\n            </div>\n        </div>\n        <div class=\"lest-right-box-wrapper\">\n            <div class=\"left\">\n                <div class=\"persnol-information-section\">\n                    <div class=\"persnol-information-boxes\" id=\"email\"><i class=\"fa fa-envelope\"\n                            style=\"font-size:10px\"></i>").concat(Email1, "\n                    </div>\n                    <div class=\"persnol-information-boxes\" id=\"number\"><i class=\"fa-solid fa-phone\"></i>").concat(PhoneNumber1, "\n                    </div>\n                    <div class=\"persnol-information-boxes\" id=\"adress\"><i class=\"fa-solid fa-location-dot\"></i>").concat(Email1, "</div>\n                    <div class=\"persnol-information-boxes\" id=\"wesite\"><i class=\"fa-solid fa-globe\"></i>").concat(web1, "</div>\n                </div>\n                <div class=\"education-section\">\n                    <span class=\"eduacation-heading\">EDUCATION</span>\n                    <hr>\n                    <div id=\"education-part-1\" class=\"education-parts\">\n                        <div class=\"degree-name\">").concat(Degree1, "</div>\n                        <div class=\"degree-institution\">").concat(Institution1, "</div>\n                        <div class=\"degree-year\">").concat(Year1, "</div>\n                    </div>\n                    <div class=\"education-parts\" id=\"education-part-2\">\n                        <div class=\"degree-name\">").concat(Degree2, "</div>\n                        <div class=\"degree-institution\">").concat(Institution2, "</div>\n                        <div class=\"degree-year\">").concat(Year2, "</div>\n                    </div>\n                </div>\n                <div class=\"skills-section\" id=\"skills-sectionID\">\n                    <span class=\"skills-heading\">SKILLS</span>\n                    <hr>\n                    <div class=\"skills-parts\">\n                        <ul class=\"skills-name\">\n                            <li>").concat(skill1, "L</li>\n                            <li>").concat(skill2, "</li>\n                            <li>").concat(skill3, "</li>\n                            <li>").concat(skill4, "T</li>\n                            <li>").concat(skill5, "</li>\n                        </ul>\n                    </div>\n                </div>\n                <div class=\"language-section\">\n                    <span class=\"language-heading\"> LANGUAGE</span>\n                    <hr>\n                    <div class=\"language-parts\">\n                        <ul class=\"language-names\">\n                            <li>").concat(lang1, "</li>\n                            <li>").concat(lang2, "</li>\n                        </ul>\n                    </div>\n                </div>\n            </div>\n            <div class=\"right\">\n                <div class=\"about-me-section\">\n                    <span class=\"about-me-heading\">About Me</span>\n                    <hr>\n                    <div class=\"about-me-information\">").concat(aboutinfo, "</div>\n                </div>\n                <div class=\"Hobbies-section\">\n                    <span class=\"Hobbies-heading\">Hobbies</span>\n                    <hr>\n                    <ul class=\"Hobbies-list\">\n                        <li>").concat(hobby1, "</li>\n                        <li>").concat(hobby2, "</li>\n                        <li>").concat(hobby3, "/li>\n                        <li>").concat(hobby4, "</li>\n                        <li>").concat(hobby5, "</li>\n                    </ul>\n                </div>\n                <div class=\"Experience-section\">\n                    <span class=\"Experience-heading\">Experience</span>\n                    <hr>\n                    <div class=\"Experience-information\">").concat(experience, "\n                        <br> linkedin: <a href=\"\">").concat(portfolioLinks1, "</a> <br>\n                        Instagram: <a href=\"\">").concat(portfolioLinks2, "</a>\n                    </div>\n                </div>\n                <button id=\"hideskills\">Hide skills</button>\n            </div>\n\n        </div>\n    </div>");
        div.innerHTML = divInnerHtml;
        // ADDING IMAGE
        var file = (_a = ImageInput.files) === null || _a === void 0 ? void 0 : _a[0];
        if (file) {
            var fileReader = new FileReader();
            fileReader.onload = function (e) {
                var _a;
                var image = document.getElementById('profile-image-display');
                image.src = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result;
            };
            fileReader.readAsDataURL(file);
        }
        ;
    }
});
