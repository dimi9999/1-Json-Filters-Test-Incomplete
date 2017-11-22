$(document).ready(function() {  
    var products = $('.products');

    //$('#get').click(function () {

        $.ajax({    
            type: 'GET',
            url: 'data/products.json',    
            dataType : 'json',
            success: function (data) {
                var products_data = '';
                $.each(data, function (key, value) {
                        products_data += '<div class="product col-sm-6 col-md-4">';
                        products_data += '<div class="inner">';
                        products_data += '<a href="#" class="product-photo">';
                        products_data += '<img src ="' + value.image.small + '" />';
                        products_data += '</a>';
                        products_data += '<h2><a href="#"> ' + value.name + ' </a></h2>';
                        products_data += '<div class="product-description">';
                        products_data += '<div class="product-manu"><span>Manufacturer:</span>' + value.specs.manufacturer + '</div>';
                        products_data += '<div class="product-storage"><span>Storage:</span>' + value.specs.storage + '</div>';
                        products_data += '<div class="product-os"><span>Os:</span>' + value.specs.os + '</div>';
                        products_data += '<div class="product-camera"><span>Camera:</span>' + value.specs.camera + '</div>';
                        products_data += '<div class="product-desc"><span>Description</span>' + value.description + '</div>';
                        products_data += '</div>';
                        products_data += '<p class="product-price">' + value.price + '</p>';
                        products_data += '</div>';
                        products_data += '</div>';
                    });
                    $('.products').append(products_data);
               
            }
            //});
            // POPULATE CONTENT VIA FILTERS
  
             
        })
        
        $('#show').click(function (e) {
            e.preventDefault();
           var result = $('input[type="checkbox"]:checked');
           if(result.length>0)
           {
               var resultString = "<div><h4>" + result.length + " products found</h4></div>";
               result.each(function () {
                    resultString += '<div class="product col-sm-6 col-md-4">';
                    resultString += '<div class="inner">';
                    resultString += '<a href="#" class="product-photo">image from json?</a>';
                    resultString += '<h2><a href="#">name from json?</a></h2>';
                    resultString += '<div class="product-description">';
                    resultString += '<div>Attribute selected:' + $(this).val() + "</div>";
                    resultString += '<div class="product-manu"><span>Manufacturer:</span>manufacturer from json>?</div>';
                    resultString += '<div class="product-storage"><span>Storage:</span>storage from json?</div>';
                    resultString += '<div class="product-os"><span>Os:</span>specs from json?></div>';
                    resultString += '<div class="product-camera"><span>Camera:</span>camera from json?</div>';
                    resultString += '<div class="product-desc"><span>Description</span>description from json?</div>';
                    resultString += '</div>';
                    resultString += '<p class="product-price">price from json?</p>';
                    resultString += '</div>';
                    resultString += '</div>';
               });
               $('.products').html(resultString);
           } else {
               $('.products').append(products_data);
           }
        });
})