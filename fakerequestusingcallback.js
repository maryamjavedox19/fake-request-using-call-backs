const fakerequestcallbacks=(url, success, failure)=>{
const delay=Math.floor(Math.random()*4500)+500;
setTimeout(()=>{
    if(delay>4000){
        failure('connection timeout')
    }
    else{
        success(`here is your fake data from ${url}`)
    }
}, delay)
}



fakerequestcallbacks('books.com/page1',
    function(response){
      console.log("it worked")
      console.log(response)
      fakerequestcallbacks('books.com/page2',
      function(response){
        console.log("it worked again")
        console.log(response)},
        function(err){
            console.log("Error 2", err)
        })

    }, function(err){
        console.log("Error", err)
    })


