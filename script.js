   
function filterSelection(category) {
    let items = document.querySelectorAll('.porto');
    if (category === 'all') {
        items.forEach(item => {
            item.style.display = 'block';
        });
    } else {
        items.forEach(item => {
            if (item.classList.contains(category)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    }
}

 /*what i do */

const tabs = document.querySelectorAll('.item ');
tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        tabs.forEach((tab) => tab.classList.remove('active'));
        tab.classList.add('active');
    });
});



/*sending emai */

function sendMail() {
    var params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    };
  
    const serviceID = "service_7hx56ka";
    const templateID = "template_tppy2d4";
  
      emailjs.send(serviceID, templateID, params)
      .then(res=>{
          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("message").value = "";
          console.log(res);
          alert("Your message sent successfully!!")
  
      })
      .catch(err=>console.log(err));
  
  }