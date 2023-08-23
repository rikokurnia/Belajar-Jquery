$(document).ready(function() {

    let button = $('button')
        button.click(function() {
          let h3 =  $('h3').toggle('3000')
             h3.addClass('border')
             h3.css(style)
             
        })

        let style = {
            color:'red',
            fontSize: '20px',
            background: 'yellow',
        }

        button.click(function() {
            $('p').css('background-color', 'blue').show('4000').hide('2000')
        })
         

        $('ul').prev().css('background-color',"green")

        // learn ajax
            let ajax = $('#ajax')
                ajax.click(function() {
                    $('#div1').load('data.txt')
                });

})