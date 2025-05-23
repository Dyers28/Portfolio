// 1. Smooth scrolling navigation
const links = document.querySelectorAll('nav ul li a');
links.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    
    window.scrollTo({
      top: targetSection.offsetTop - 50, // Offset to avoid covering by navbar
      behavior: 'smooth'
    });
  });
});

// 2. Interactive Experience Section
const experienceItems = document.querySelectorAll('.experience-item');
experienceItems.forEach(item => {
  item.addEventListener('click', () => {
    const id = item.getAttribute('data-id');
    alert(`More details about ${id} coming soon!`);
  });
});

// 3. Contact Form Validation
document.getElementById('contactForm').addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  if (name === "" || email === "" || message === "") {
    alert("Please fill out all fields.");
  } else {
    alert("Thank you for reaching out! I'll get back to you soon.");
    // You can add code here to send the form data to a server.
  }
});
