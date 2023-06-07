function openModal(username, userid, usertype, createdby, lastaccessed, contactno, emailid) {
    document.getElementById("modal-username").textContent = username;
    document.getElementById("modal-userid").textContent = userid;
    document.getElementById("modal-usertype").textContent = usertype;
    document.getElementById("modal-createdby").textContent = createdby;
    document.getElementById("modal-lastaccessed").textContent = lastaccessed;
    document.getElementById("modal-contactno").textContent = contactno;
    document.getElementById("modal-emailid").textContent = emailid;
    document.getElementById("modal").style.display = "block";
}

var modal=document.getElementById("modal");
  modal.style.display="block";
  function closeModal() {
    document.getElementById("modal").style.display = "none";
  }
  

