'use strict';

// write code here
const firstName = document.getElementById('sign-up-name');
const lastName = document.getElementById('sign-up-last-name');
const email = document.getElementById('sign-up-email');
const password = document.getElementById('sign-up-password');
const emailIn = document.getElementById('sign-in-email');
const passwordIn = document.getElementById('sign-in-password');

const firstNameLabel = document.createElement('label');
const lastNameLabel = document.createElement('label');
const emailLabel = document.createElement('label');
const passwordLabel = document.createElement('label');
const emailInLabel = document.createElement('label');
const passwordInLabel = document.createElement('label');

firstNameLabel.classList.add('field-label');
lastNameLabel.classList.add('field-label');
emailLabel.classList.add('field-label');
passwordLabel.classList.add('field-label');
emailInLabel.classList.add('field-label');
passwordInLabel.classList.add('field-label');

firstName.placeholder = 'FirstName';
lastName.placeholder = 'LastName';
email.placeholder = 'Email';
password.placeholder = 'Password';
emailIn.placeholder = 'Email';
passwordIn.placeholder = 'Password';

firstNameLabel.setAttribute('for', firstName.id);
lastNameLabel.setAttribute('for', lastName.id);
emailLabel.setAttribute('for', email.id);
passwordLabel.setAttribute('for', password.id);
emailInLabel.setAttribute('for', emailIn.id);
passwordInLabel.setAttribute('for', passwordIn.id);

firstNameLabel.textContent = 'FirstName:';
lastNameLabel.textContent = 'LastName:';
emailLabel.textContent = 'Email:';
passwordLabel.textContent = 'Password:';
emailInLabel.textContent = 'Email:';
passwordInLabel.textContent = 'Password:';

firstName.before(firstNameLabel);
lastName.before(lastNameLabel);
email.before(emailLabel);
password.before(passwordLabel);
emailIn.before(emailInLabel);
passwordIn.before(passwordInLabel);
