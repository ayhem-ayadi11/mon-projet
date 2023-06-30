$(document).ready(function(){
  $("#myForm").submit(function(event) {
    event.preventDefault()
    var mdp=$("#motdepasse").val()
    var cnf=$("#confirmation").val()
    if(mdp===cnf && mdp.length>=8 && cnf.length>=8){
      window.location.href = "showroom.html";
    }else{
      alert("les deux mots de passes ne sont pas identiques")
    }
  })
 })
 
 $(document).ready(function(){
    $('.list').click(function(){
        var  value = $(this).attr('data');
        if (value == 'all') {
            $('.luxe').show('1000');
        }else{
            $(".luxe").not('.'+value).hide('1000');
            $('.luxe').filter('.'+value).show('1000');
        }
    })
})


  


