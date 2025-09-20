function submitFeedback() {

    //declare variable
    const username = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;
    const job = document.getElementById('job').value;
    const designation = document.getElementById('designation').value;
    const productType = document.getElementById('productType').value;
    const feedback = document.getElementById('feedbackText').value;


    //alert
    alert('Thank you for your valuable feedback');

    //feedback
    document.getElementById('userName').innerHTML = username;
    document.getElementById('userAge').innerHTML = age;
    document.getElementById('userEmail').innerHTML = email;
    document.getElementById('userJob').innerHTML = job;
    document.getElementById('userDesignation').innerHTML = designation;
    document.getElementById('userProductChoice').innerHTML = productType;
    document.getElementById('userFeedback').innerHTML = feedback;

    //display show div
    document.getElementById('userInfo').style.display = 'block';

}//end of fuction submitfeedback()

//button create
    const submitButton=document.getElementById('submitBtn');

// assign function to buttion
    submitButton.onclick = submitFeedback;

//event listener for page press
document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      submitFeedback();
    }
  });

