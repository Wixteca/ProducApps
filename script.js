class Product{
    constructor(name, price, quantity, date){
        this.name=name;
        this.price=price;
        this.quantity=quantity;
        this.date=date;
    }
}

class UI{
    showMessage(message,cssClass){
        const element=document.createElement('div');
        element.className= `alert alert-${cssClass}`;
        element.appendChild(document.createTextNode(message));
        const container =document.querySelector('.container');
        const app=document.querySelector('#app');
        container.insertBefore(element, app);

        //Callback
        setTimeout(function(){
            document.querySelector('.alert').remove();
        }, 3000);
    }
}

document.getElementById("product-form").addEventListener('submit',function(e){
    e.preventDefault();
    const ui =new UI();
    ui.showMessage('Product adde successfully','succes');
});

//Recibir los datos de inmput e imprimirlos en consolas,
//Al dar click en save debe dar verde

//pero si el usuario no ingresa nada
//Pero da save
//Debe salir en rojo