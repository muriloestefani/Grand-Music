function cadastrar(){
    var nomescad = document.getElementById('nomescad').value
    var senhacad = document.getElementById('senhacad').value

console.log(JSON.stringify({
    nomescad:nomescad,
    senhacad:senhacad
}));

    fetch("/cadastro",{
        method:'POST',
        body: JSON.stringify({
            nomescad:nomescad,
            senhacad:senhacad
        }) , 
        headers: { "Content-Type" : "application/json" }
        
        
    },

    )

    alert('usuario cadastrado')
    
   

    .then(async (resp) => {
        var status = await resp.text();
       alert('erro')
        
    });

  
}
