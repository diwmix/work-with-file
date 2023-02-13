document.getElementById('button').addEventListener('click', function() {
    let file = document.getElementById('file').files[0];

    let reader = new FileReader();

    reader.readAsText(file); 
    reader.onload = function() {
        document.write(reader.result)
    }
    reader.onerror = function() {
        document.write(reader.error)
    }
})  
    