const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

menuButton.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
});

nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
}));

document.getElementById('year').textContent = new Date().getFullYear();

const dateInput = document.getElementById('appointmentDate');
const today = new Date();
const localToday = new Date(today.getTime() - today.getTimezoneOffset() * 60000).toISOString().split('T')[0];
dateInput.min = localToday;

document.querySelectorAll('[data-doctor]').forEach(link => {
  link.addEventListener('click', () => {
    const department = document.querySelector('select[name="department"]');
    department.value = link.dataset.doctor;
  });
});

document.getElementById('bookingForm').addEventListener('submit', event => {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.reportValidity()) return;

  const data = new FormData(form);
  const details = [
    'Appointment request',
    `Name: ${data.get('name')}`,
    `Phone: ${data.get('phone')}`,
    `Department: ${data.get('department')}`,
    `Preferred date: ${data.get('date')}`,
    `Note: ${data.get('message') || 'Not provided'}`
  ].join('\\n');

  // Demo flow: opens the visitor's email app. Replace this address before launch.
  const recipient = 'appointments@example.com';
  const subject = encodeURIComponent('New hospital appointment request');
  const body = encodeURIComponent(details);
  const result = document.getElementById('formResult');
  result.textContent = 'Your email app will open with the appointment details. Please send the email to complete your request.';
  window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
});
