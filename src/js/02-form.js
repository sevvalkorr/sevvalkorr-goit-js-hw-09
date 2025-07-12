const STATE_NAME = 'feedback-form-state';

const feedbackForm = document.querySelector('.feedback-form');
const emailInput = document.querySelector('.email-input');
const messageInput = document.querySelector('.message-input');

const prevState = localStorage.getItem(STATE_NAME);
if (prevState) {
  const oncedenKalanlar = JSON.parse(prevState);
  emailInput.value = oncedenKalanlar.email || '';
  messageInput.value = oncedenKalanlar.message || '';
}

emailInput.addEventListener('input', () => {
  const currentState = {
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem(STATE_NAME, JSON.stringify(currentState));
});

messageInput.addEventListener('input', () => {
  const currentState = {
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem(STATE_NAME, JSON.stringify(currentState));
});

feedbackForm.addEventListener('submit', event => {
  event.preventDefault();
  if (emailInput.value === '' || messageInput.value === '') {
    alert('⚠️ Boş form gönderilemez ⚠️');
  } else {
    console.log({
      email: emailInput.value,
      message: messageInput.value,
    });
    
    localStorage.removeItem(STATE_NAME);
    feedbackForm.reset();
  }
});