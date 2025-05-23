
const links = document.querySelectorAll('nav ul li a');
links.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    
    window.scrollTo({
      top: targetSection.offsetTop - 50, 
      behavior: 'smooth'
    });
  });
});

const experienceItems = document.querySelectorAll('.experience-item');
experienceItems.forEach(item => {
  item.addEventListener('click', () => {
    const id = item.getAttribute('data-id');
    alert(`More details about ${id} coming soon!`);
  });
});

document.getElementById('contactForm').addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  if (name === "" || email === "" || message === "") {
    alert("Please fill out all fields.");
  } else {
    alert("Thank you for reaching out! I'll get back to you soon.");
  }
});
