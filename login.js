const loginText = document.querySelector(".title-text .login");
const loginForm = document.querySelector("form.login");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector("form .signup-link a");
signupBtn.onclick = () => {
  loginForm.style.marginLeft = "-50%";
  loginText.style.marginLeft = "-50%";
};
loginBtn.onclick = () => {
  loginForm.style.marginLeft = "0%";
  loginText.style.marginLeft = "0%";
};
signupLink.onclick = () => {
  signupBtn.click();
  return false;
};


        document.getElementById('hh').addEventListener('submit', function(event) {
            event.preventDefault(); 
            alert('Login successfully');
            
            window.close();
          return false; 
        });


        
        document.getElementById('nn').addEventListener('submit', function(event) {
          event.preventDefault(); 
          alert('Sign Up successfully');
          
          window.close();
          return false; 
      });
    