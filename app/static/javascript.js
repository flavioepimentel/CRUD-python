(function(win,doc){
    'user strict';
    //Verify if user wants delete the data
    if (doc.querySelector('.btnDel')){
        let btnDel = doc.querySelectorAll('.btnDel');
        for(let i=0; i < btnDel.length; i++){
            btnDel[i].addEventListener('click', function(event){
                if(confirm('Atenção! O dado será excluido. Deseja continuar?')){
                return true;

            }else{
                event.preventDefault();
            }
            });
        }
    }
    // if(doc.querySelector('#form')){
    //     let form=doc.querySelector('#form');
    //     function sendForm(event)
    //     {
    //         event.preventDefault();
    //         let data = new FormData(form);
    //         const ajax = new XMLHttpRequest();
    //         let token = new doc.querySelectorAll('input')[0].value;
    //         ajax.open('POST', form.action);
    //         ajax.setRequestHeader('X-CSRF-TOKEN', token);        
    //         ajax.onreadystatechange = function()
    //         {
    //             if(ajax.status === 200 && ajax.readyState === 4){
    //                 console.log('Cadastrado')
    //             }
    //         }
    //         ajax.send(data)
    //     }
    //     form.addEventListener('submit', sendForm, false);

    // }
})(window,document) 