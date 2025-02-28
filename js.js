tinymce.init({ selector: '#summary', menubar: false });

let sectionCounter = 1;

function addSection(sectionId) {
    sectionCounter++;
    const section = document.getElementById(sectionId);
    const newSection = document.createElement('div');
    newSection.className = 'section-item';
    newSection.setAttribute('data-id', sectionCounter);
    newSection.innerHTML = `
        <textarea class="form-control" rows="2" placeholder="${sectionId === 'educationSection' ? 'Degree, Institution, Year' : sectionId === 'experienceSection' ? 'Job Title, Company, Duration' : 'Skill, Proficiency'}"></textarea>
        <button type="button" class="btn btn-danger btn-sm mt-2" onclick="removeSection(this)">Remove</button>
    `;
    section.appendChild(newSection);
    updatePreview();
}

function removeSection(button) {
    const sectionItem = button.closest('.section-item');
    sectionItem.remove();
    updatePreview();
}

function updatePreview() {
    document.getElementById('previewName').innerText = document.getElementById('name').value || 'Your Name';
    document.getElementById('previewEmail').innerText = document.getElementById('email').value || 'your.email@example.com';
    document.getElementById('previewPhone').innerText = document.getElementById('phone').value || '+91 XXXXXXXXXX';
    document.getElementById('previewLocation').innerText = document.getElementById('location').value || 'Your Location';
    document.getElementById('previewWebsite').innerText = document.getElementById('website').value || 'Your Website';
    document.getElementById('previewLinkedIn').innerText = document.getElementById('linkedin').value || 'Your LinkedIn';
    document.getElementById('previewGitHub').innerText = document.getElementById('github').value || 'Your GitHub';
    document.getElementById('previewSummary').innerText = document.getElementById('summary').value || 'Your summary will appear here.';

    updateSectionPreview('educationSection', 'previewEducation');
    updateSectionPreview('experienceSection', 'previewExperience');
    updateSectionPreview('skillsSection', 'previewSkills');
}

function updateSectionPreview(sectionId, previewId) {
    const section = document.getElementById(sectionId);
    const preview = document.getElementById(previewId);
    preview.innerHTML = '';
    section.querySelectorAll('.section-item').forEach(item => {
        const text = item.querySelector('textarea').value;
        if (text) {
            const p = document.createElement('p');
            p.innerText = text;
            preview.appendChild(p);
        }
    });
}

function changeTheme(theme) {
    const preview = document.getElementById('resumePreview');
    preview.className = `resume-preview ${theme}`;
}

function generateResume() {
    // Add logic to generate the resume
    alert('Resume generated!');
}

function downloadPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    doc.text(document.getElementById('resumePreview').innerText, 10, 10);
    doc.save('resume.pdf');
}

// Enable drag-and-drop reordering
Sortable.create(document.getElementById('educationSection'), { animation: 150 });
Sortable.create(document.getElementById('experienceSection'), { animation: 150 });
Sortable.create(document.getElementById('skillsSection'), { animation: 150 });


function changeTheme(color) {
document.documentElement.style.setProperty('--primary-color', color);
}

