$(document).ready(function () {
  let button = $("#test");
  button.click(function () {
    let h3 = $("h3").toggle("3000");
    h3.addClass("border");
    h3.css(style);
  });

  let style = {
    color: "red",
    fontSize: "20px",
    background: "yellow",
  };

  // ajax take data from data.txt
      let ajax = $('#ajax')
        ajax.click(function(){
          $('#div1').load('data.txt')
        })


  // selector 
    $('#selector li:odd').parent().css(style); //will be yellow style
    $('#selector li').empty() //will be remove element in the selector
    $('#list').prepend('zero')  //add first element
  
  //?event dom from HTML
      let value = $('#value')
        value.click(function() {
          alert($('#val').val());
        })

        // change with html or text
        $('#changeBtn').click(function() {
          $('#change1').text('the word has been changed')
          $('#change1').html('<b>the word has been changed</b>')
        })

          // set the new atribute(link)
            $('#btnLink').click(function() {
              $('#w3s').attr('href','https://github.com/')
            })


        // remove element with jquery
            /*
            remove() - Removes the selected element (and its child elements)
            empty() - Removes the child elements from the selected element
            */

            $('p').remove('#removeP')

        // style css
            /*
            css() - Sets one or more CSS properties of the selected element(s)
            */

          $('#showBtn').dblclick(function(){
            $('#showUp').toggle(3000);
          })

        //event handler
          $('#mEnter').mouseenter(function(){
            alert('i like animal')
          })
            // will be remove if the mouse leave
          $('#removeM').mouseleave(function(){
            $('#hewan').remove();
            alert('i remove the  animal')
          })

          // add fruit with append
          $('#fruitBtn').click(function(){
            let addFruit = $('#fruits').val()
              $('#fruit').append('<li>'+ addFruit +'</li>') 
          })

});
