![xxdebounce](https://user-images.githubusercontent.com/16269962/106759772-e48f3600-6611-11eb-97e2-dcc3b87f0744.png)
# TecnicaDebounce

Aplicação da técnica de DEBOUNCE sendo que ela retorna uma função que pode ser chamada qualquer número de vezes (possivelmente em sucessões rápidas), mas só invocará o retorno de chamada depois de esperar por x ms da última chamada.
 

> Função Debounce
```Javascript
    // Função Debounce que executará a função passada apos um determinado tempo
    const debounceEvent = (fn, wait = 1000, time) => (...args) =>
    clearTimeout(time, (time = setTimeout(() => fn(...args), wait)));
```

> HTML

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Debounce</title>
  
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
</head>
<body>
    
    <div class="wrap">
        <h1>Técnica debounce</h1>
        <div class="search">
           <input type="text"
                  placeholder="Pesquisa">
           <button type="submit">
             <i class="fa fa-search"></i>
          </button>
        </div>
        <div id="result" name="result" class="result"></div>
     </div>

    <script src="scripts.js"></script>
</body>
</html>
```

