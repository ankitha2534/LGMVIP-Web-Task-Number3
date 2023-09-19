document.addEventListener("DOMContentLoaded", function () {
    const enrollmentForm = document.getElementById("enrollment-form");
    const studentList = document.getElementById("student-list");

    enrollmentForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const website = document.getElementById("website").value;
        const image = document.getElementById("image").value;
        const gender = document.querySelector('input[name="gender"]:checked').value;
        const skills = Array.from(document.querySelectorAll('input[name="skills"]:checked')).map(skills => skills.value);
        

        // Create a new student object
        const student = {
            name,
            email,
            website,
            image,
            gender,
            skills
        };

        // Add the student to the list
        const listItem = document.createElement("li");
        listItem.innerHTML = `
        <div class="complete">
            <img src="${student.image}" alt="Student Image"><br>
            <div class="hori">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Website:</strong> <a href="${website}" target="_blank">${website}</a></p>
           <p><strong>Gender:</strong> ${gender}</p>
           <p><strong>Skills:</strong> ${skills.join(", ")}</p>
            </div>
        </div>
            
        `;
        studentList.appendChild(listItem);

        // Clear the form
        enrollmentForm.reset();
    });
});
