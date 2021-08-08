window.onload = function () {

    var totalPedido = 0.0;

    console.log('cargado!');
    const xhttp = new XMLHttpRequest();
    xhttp.open('GET', '../data/carrito.json', true);
    xhttp.send();

    xhttp.onreadystatechange = function () {
        if(this.readyState == 4 && this.status == 200){
            //console.log(this.responseText);
            //parseamos los datos a json
            let productos = JSON.parse(this.responseText);
            //console.log(productos);

            cargarProductos(productos);
            var total = document.getElementById("total");
            total.innerHTML = "Total: $" + totalPedido.toFixed(2);
        }
    }

    
    function cargarProductos(productos){
        var tb = document.getElementById("t_body");
        for(let item of productos){
            console.log(item);
            var tr = document.createElement("tr");

            var td_id = document.createElement("td");
            td_id.className = "fs-4 fw-bold";
            td_id.innerHTML = item.id;

            var td_des = document.createElement("td");
            td_des.className = "table__productos";
            var img = document.createElement("img");
            img.setAttribute("src", item.imagen);
            var h6 = document.createElement("h6");
            h6.className = "title fw-bold fs-4";
            h6.innerHTML = item.titulo;
            td_des.appendChild(img);
            td_des.appendChild(h6);

            var td_precio = document.createElement("td");
            td_precio.className = "table__precio fw-bold fs-4";
            var p_precio = document.createElement("p");
            p_precio.innerHTML = item.precio;
            td_precio.appendChild(p_precio);

            var td_cantidad = document.createElement("td");
            td_precio.className = "table__cantidad fw-bold fs-4";
            var p_precio = document.createElement("p");
            p_precio.innerHTML = item.cantidad;
            td_cantidad.appendChild(p_precio);

            var td_boton = document.createElement("td");
            var boton = document.createElement("button");
            boton.className = "delete btn btn-danger text-center";
            boton.innerHTML = "x";
            td_boton.appendChild(boton);


            tr.appendChild(td_id);
            tr.appendChild(td_des);
            tr.appendChild(td_precio);
            tr.appendChild(td_cantidad);
            tr.appendChild(td_boton);
            tb.appendChild(tr);

            totalPedido += item.precio;
            console.log(totalPedido);
        }
    }
}