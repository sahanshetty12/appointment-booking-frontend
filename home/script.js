function openPopup(event) {
    var popup = document.getElementById("popup");
    var helpBtn = event.currentTarget;
    var rect = helpBtn.getBoundingClientRect();
    popup.style.top = rect.bottom + "px";
    popup.style.left = rect.left + "px";
    popup.style.display = "block";
  
    
    document.addEventListener('click', closePopupOutside);
  }
  
  function closePopup() {
    var popup = document.getElementById("popup");
    popup.style.display = "none";
  
    // 
    document.removeEventListener('click', closePopupOutside);
  }
  
  function closePopupOutside(event) {
    var popup = document.getElementById("popup");
    var targetElement = event.target;
  
    if (!popup.contains(targetElement) && targetElement !== document.querySelector('.help-btn')) {
      closePopup();
    }
  }
  
  function openWhatsApp() {
   
    window.open('whatsapp://send?phone=123456789');
  }
  
  function callNumber() {
   
    window.open('tel:123456789');
  }
  
  function sendMail() {
    
    window.open('mailto:example@example.com');
  }
  
  document.querySelector('.help-btn').addEventListener('click', openPopup);
  
/*popup account */

  function openPopup1(event) {
    var popup1 = document.getElementById("popup1");
    var accbtn = event.currentTarget;
    var rect = accbtn.getBoundingClientRect();
    popup1.style.top = rect.bottom + "px";
    popup1.style.left = rect.left + "px";
    popup1.style.display = "block";
  
    
    document.addEventListener('click', closePopupOutside);
  }
  
  function closePopup1() {
    var popup1 = document.getElementById("popup1");
    popup1.style.display = "none";

    document.removeEventListener('click', closePopupOutside);
  }
  
  function closePopupOutside1(event) {
    var popup1 = document.getElementById("popup1");
    var targetElement = event.target;
  
    if (!popup1.contains(targetElement) && targetElement !== document.querySelector('.acc-btn')) {
      closePopup1();
    }
  }
  
  function openWhatsApp() {
    
    window.open('whatsapp://send?phone=123456789');
  }
  
  function callNumber() {
    
    window.open('tel:123456789');
  }
  
  function sendMail() {
    
    window.open('mailto:example@example.com');
  }
  
  document.querySelector('.acc-btn').addEventListener('click', openPopup1);




  
  