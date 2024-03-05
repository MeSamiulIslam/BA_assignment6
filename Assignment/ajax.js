$.ajax({
    url: 'http://api.example.com/data',
    method: 'GET',
    dataType: 'json',
    success: function(response) {
        console.log('Data received: ', response);
    },
    error: function(xhr. status, error) {
        console.error('Error: ', error);
    }
});