// -----------------top slider code is here-----------------
$(document).ready(function () {
    function detect_active() {
      // get active
      var get_active = $("#dp-slider .dp_item:first-child").data("class");
      $("#dp-dots li").removeClass("active");
      $("#dp-dots li[data-class=" + get_active + "]").addClass("active");
    }
    $("#dp-next").click(function () {
      var total = $(".dp_item").length;
      $("#dp-slider .dp_item:first-child").hide().appendTo("#dp-slider").fadeIn();
      $.each($(".dp_item"), function (index, dp_item) {
        $(dp_item).attr("data-position", index + 1);
      });
      detect_active();
    });
  
    $("#dp-prev").click(function () {
      var total = $(".dp_item").length;
      $("#dp-slider .dp_item:last-child").hide().prependTo("#dp-slider").fadeIn();
      $.each($(".dp_item"), function (index, dp_item) {
        $(dp_item).attr("data-position", index + 1);
      });
  
      detect_active();
    });
  
    $("#dp-dots li").click(function () {
      $("#dp-dots li").removeClass("active");
      $(this).addClass("active");
      var get_slide = $(this).attr("data-class");
      console.log(get_slide);
      $("#dp-slider .dp_item[data-class=" + get_slide + "]")
        .hide()
        .prependTo("#dp-slider")
        .fadeIn();
      $.each($(".dp_item"), function (index, dp_item) {
        $(dp_item).attr("data-position", index + 1);
      });
    });
  
    $("body").on("click", "#dp-slider .dp_item:not(:first-child)", function () {
      var get_slide = $(this).attr("data-class");
      console.log(get_slide);
      $("#dp-slider .dp_item[data-class=" + get_slide + "]")
        .hide()
        .prependTo("#dp-slider")
        .fadeIn();
      $.each($(".dp_item"), function (index, dp_item) {
        $(dp_item).attr("data-position", index + 1);
      });
  
      detect_active();
    });
  });
  

//   ---------------------slider code is over now ------------------






//new api code is here
let searchcounts=[]
fetch("https://dummyjson.com/products?offset=0&limit=100")
.then((value)=>value.json())
.then((value2)=>value2.products)
.then((value2)=>{
  searchcounts =value2

  
  let percentagevalue= Number.parseInt(value2.price/value2.discountPercentage);
  percentagevalue = Number.parseInt(value2.price-percentagevalue);
    ihtml = ""
    for (item in value2) {   
      
      
    ihtml += `
    <div class="product-card">
    <a class="aaa" target="_blank"">
      <div class="product-front-image">
        <div class="front-image">
          <img alt="" class="img-fluid" src="${value2[item].thumbnail}" onclick="singleproductdetail()>
        </div>
        <div class="owl-slider">
          <div id="carousel3" class="owl-carousel product-slider">
            <div class="product-image">
              <img alt="" src="${value2[item].images[0]}">
            </div>
            <div class="product-image">
              <img alt="" src="${value2[item].images[1]}">
            </div>
          </div>
        </div>
       <div class="row">
        <div class=" col-12">
                  <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                      <div class="carousel-inner">
                        <div class="carousel-item active">
                          <img src="${value2[item].images[2]}" class="d-block w-100 carosal_images" alt="No Api Images">
                        </div>
                        <div class="carousel-item">
                          <img src="${value2[item].images[0]}" class="d-block w-100" alt="...">
                        </div>
                        <div class="carousel-item">
                          <img src="${value2[item].images[1]}" class="d-block w-100" alt="...">
                        </div>   
                      </div>
                    </div>
              </div>
        </div>
        <div class="product-like">
          <svg xmlns="http://www.w3.org/2000/svg" class="_2oLiqr" width="28" height="28" viewBox="0 0 20 16">
            <path
              d="M8.695 16.682C4.06 12.382 1 9.536 1 6.065 1 3.219 3.178 1 5.95 1c1.566 0 3.069.746 4.05 1.915C10.981 1.745 12.484 1 14.05 1 16.822 1 19 3.22 19 6.065c0 3.471-3.06 6.316-7.695 10.617L10 17.897l-1.305-1.215z"
              class="_35Y7Yo" stroke="#FFF" fill-rule="evenodd" opacity=".9"></path>
          </svg>
        </div>
      </div>
    </a>
    <div class="product-details">
      <div class="brand-name">${value2[item].brand}</div>
      <a class="brand-desc" title="" >${value2[item].title} (Grey)</a>
      <div class="color-details">Grey</div>
      
      <a class="text-decoration-none" target="_blank" href="#">
        <div class="price-info-sec">
          <div class="price">$${Number.parseInt(value2[item].price-(value2[item].price/value2[item].discountPercentage))} </div>
          <div class="cut-off">$${value2[item].price}</div>
          <div class="discount-percent"><span>${Math.ceil(value2[item].discountPercentage)}% off</span></div>
          </div>
          </a>
          </div>
          <div class="pb-3 "><button type="button" class="btn sign_buy"><a class="text-decoration-none" title="" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onclick="singleiddescription(${value2[item].id})">Buy Now</a></button></div>
          </div>`;
}

document.getElementById("allproduct").addEventListener("click", function(){

  let allprodct = ""
   for(let item in value2){
    allprodct += `
    <div class="product-card">
    <a class="aaa" target="_blank"">
      <div class="product-front-image">
        <div class="front-image">
          <img alt="" class="img-fluid" src="${value2[item].thumbnail}" onclick="singleproductdetail()>
        </div>
        <div class="owl-slider">
          <div id="carousel3" class="owl-carousel product-slider">
            <div class="product-image">
              <img alt="" src="${value2[item].images[0]}">
            </div>
            <div class="product-image">
              <img alt="" src="${value2[item].images[1]}">
            </div>
          </div>
        </div>
       <div class="row">
        <div class=" col-12">
                  <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                      <div class="carousel-inner">
                        <div class="carousel-item active">
                          <img src="${value2[item].images[2]}" class="d-block w-100 carosal_images" alt="No Api Images">
                        </div>
                        <div class="carousel-item">
                          <img src="${value2[item].images[0]}" class="d-block w-100" alt="...">
                        </div>
                        <div class="carousel-item">
                          <img src="${value2[item].images[1]}" class="d-block w-100" alt="...">
                        </div>   
                      </div>
                    </div>
              </div>
        </div>
        <div class="product-like">
          <svg xmlns="http://www.w3.org/2000/svg" class="_2oLiqr" width="28" height="28" viewBox="0 0 20 16">
            <path
              d="M8.695 16.682C4.06 12.382 1 9.536 1 6.065 1 3.219 3.178 1 5.95 1c1.566 0 3.069.746 4.05 1.915C10.981 1.745 12.484 1 14.05 1 16.822 1 19 3.22 19 6.065c0 3.471-3.06 6.316-7.695 10.617L10 17.897l-1.305-1.215z"
              class="_35Y7Yo" stroke="#FFF" fill-rule="evenodd" opacity=".9"></path>
          </svg>
        </div>
      </div>
    </a>
    <div class="product-details">
      <div class="brand-name">${value2[item].brand}</div>
      <a class="brand-desc" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onclick="singleiddescription(${value2[item].id})">${value2[item].title}</a>
      <div class="color-details">Grey</div>
      
      <a class="" target="_blank" href="#">
        <div class="price-info-sec">
          <div class="price">₹${Number.parseInt(value2[item].price-(value2[item].price/value2[item].discountPercentage))} </div>
          <div class="cut-off">₹${value2[item].price}</div>
          <div class="discount-percent"><span>${Math.ceil(value2[item].discountPercentage)}% off</span></div>
        </div>
      </a>
    </div>
  </div>`;
   }
  
   allcard.innerHTML = allprodct;
})
 // filtering data using category name Others
    let smrtphonevalue =value2.filter(obj=> obj.category == "smartphones");
    console.log(smrtphonevalue)
    document.getElementById("smartphn").addEventListener("click", function(){

     let sphtml='';
    for(let item in smrtphonevalue){
        sphtml += `
        <div class="product-card">
        <a class="aaa" target="_blank"">
          <div class="product-front-image">
            <div class="front-image">
              <img alt="" class="img-fluid" src="${smrtphonevalue[item].thumbnail}" onclick="singleproductdetail()>
            </div>
            <div class="owl-slider">
              <div id="carousel3" class="owl-carousel product-slider">
                <div class="product-image">
                  <img alt="" src="${smrtphonevalue[item].images[0]}">
                </div>
                <div class="product-image">
                  <img alt="" src="${smrtphonevalue[item].images[1]}">
                </div>
              </div>
            </div>
           <div class="row">
            <div class=" col-12">
                      <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                          <div class="carousel-inner">
                            <div class="carousel-item active">
                              <img src="${smrtphonevalue[item].images[2]}" class="d-block w-100 carosal_images" alt="No Api Images">
                            </div>
                            <div class="carousel-item">
                              <img src="${smrtphonevalue[item].images[0]}" class="d-block w-100" alt="...">
                            </div>
                            <div class="carousel-item">
                              <img src="${smrtphonevalue[item].images[1]}" class="d-block w-100" alt="...">
                            </div>   
                          </div>
                        </div>
                  </div>
            </div>
            <div class="product-like">
              <svg xmlns="http://www.w3.org/2000/svg" class="_2oLiqr" width="28" height="28" viewBox="0 0 20 16">
                <path
                  d="M8.695 16.682C4.06 12.382 1 9.536 1 6.065 1 3.219 3.178 1 5.95 1c1.566 0 3.069.746 4.05 1.915C10.981 1.745 12.484 1 14.05 1 16.822 1 19 3.22 19 6.065c0 3.471-3.06 6.316-7.695 10.617L10 17.897l-1.305-1.215z"
                  class="_35Y7Yo" stroke="#FFF" fill-rule="evenodd" opacity=".9"></path>
              </svg>
            </div>
          </div>
        </a>
        <div class="product-details">
          <div class="brand-name">${smrtphonevalue[item].brand}</div>
          <a class="brand-desc" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onclick="singleiddescription(${smrtphonevalue[item].id})">${smrtphonevalue[item].title}</a>
          <div class="color-details">Grey</div>
          
          <a class="" target="_blank" href="#">
            <div class="price-info-sec">
              <div class="price">₹${Number.parseInt(smrtphonevalue[item].price-(smrtphonevalue[item].price/smrtphonevalue[item].discountPercentage))} </div>
              <div class="cut-off">₹${smrtphonevalue[item].price}</div>
              <div class="discount-percent"><span>${Math.ceil(smrtphonevalue[item].discountPercentage)}% off</span></div>
            </div>
          </a>
        </div>
      </div>`;
    }
   
    allcard.innerHTML = sphtml;
 })
 let motorcyclevalue =value2.filter(obj=> obj.category == "motorcycle");
   
    document.getElementById("motorcycle").addEventListener("click", function(){

     let mthtml='';
    for(let item in motorcyclevalue){
        mthtml += `
        <div class="product-card">
        <a class="aaa" target="_blank"">
          <div class="product-front-image">
            <div class="front-image">
              <img alt="" class="img-fluid" src="${motorcyclevalue[item].thumbnail}" onclick="singleproductdetail()>
            </div>
            <div class="owl-slider">
              <div id="carousel3" class="owl-carousel product-slider">
                <div class="product-image">
                  <img alt="" src="${motorcyclevalue[item].images[0]}">
                </div>
                <div class="product-image">
                  <img alt="" src="${motorcyclevalue[item].images[1]}">
                </div>
              </div>
            </div>
           <div class="row">
            <div class=" col-12">
                      <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                          <div class="carousel-inner">
                            <div class="carousel-item active">
                              <img src="${motorcyclevalue[item].images[2]}" class="d-block w-100 carosal_images" alt="No Api Images">
                            </div>
                            <div class="carousel-item">
                              <img src="${motorcyclevalue[item].images[0]}" class="d-block w-100" alt="...">
                            </div>
                            <div class="carousel-item">
                              <img src="${motorcyclevalue[item].images[1]}" class="d-block w-100" alt="...">
                            </div>   
                          </div>
                        </div>
                  </div>
            </div>
            <div class="product-like">
              <svg xmlns="http://www.w3.org/2000/svg" class="_2oLiqr" width="28" height="28" viewBox="0 0 20 16">
                <path
                  d="M8.695 16.682C4.06 12.382 1 9.536 1 6.065 1 3.219 3.178 1 5.95 1c1.566 0 3.069.746 4.05 1.915C10.981 1.745 12.484 1 14.05 1 16.822 1 19 3.22 19 6.065c0 3.471-3.06 6.316-7.695 10.617L10 17.897l-1.305-1.215z"
                  class="_35Y7Yo" stroke="#FFF" fill-rule="evenodd" opacity=".9"></path>
              </svg>
            </div>
          </div>
        </a>
        <div class="product-details">
          <div class="brand-name">${motorcyclevalue[item].brand}</div>
          <a class="brand-desc" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onclick="singleiddescription(${motorcyclevalue[item].id})">${motorcyclevalue[item].title}</a>
          <div class="color-details">Grey</div>
          
          <a class="" target="_blank" href="#">
            <div class="price-info-sec">
              <div class="price">₹${Number.parseInt(motorcyclevalue[item].price-(motorcyclevalue[item].price/motorcyclevalue[item].discountPercentage))} </div>
              <div class="cut-off">₹${motorcyclevalue[item].price}</div>
              <div class="discount-percent"><span>${Math.ceil(motorcyclevalue[item].discountPercentage)}% off</span></div>
            </div>
          </a>
        </div>
      </div>`;
    }
   
    allcard.innerHTML = mthtml;
 })
 let frangrancevalue =value2.filter(obj=> obj.category == "fragrances");
   
    document.getElementById("fragrances").addEventListener("click", function(){

     let fraghtml='';
    for(let item in frangrancevalue){
      fraghtml += `
      <div class="product-card">
      <a class="aaa" target="_blank"">
        <div class="product-front-image">
          <div class="front-image">
            <img alt="" class="img-fluid" src="${frangrancevalue[item].thumbnail}" onclick="singleproductdetail()>
          </div>
          <div class="owl-slider">
            <div id="carousel3" class="owl-carousel product-slider">
              <div class="product-image">
                <img alt="" src="${frangrancevalue[item].images[0]}">
              </div>
              <div class="product-image">
                <img alt="" src="${frangrancevalue[item].images[1]}">
              </div>
            </div>
          </div>
         <div class="row">
          <div class=" col-12">
                    <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                          <div class="carousel-item active">
                            <img src="${frangrancevalue[item].images[2]}" class="d-block w-100 carosal_images" alt="No Api Images">
                          </div>
                          <div class="carousel-item">
                            <img src="${frangrancevalue[item].images[0]}" class="d-block w-100" alt="...">
                          </div>
                          <div class="carousel-item">
                            <img src="${frangrancevalue[item].images[1]}" class="d-block w-100" alt="...">
                          </div>   
                        </div>
                      </div>
                </div>
          </div>
          <div class="product-like">
            <svg xmlns="http://www.w3.org/2000/svg" class="_2oLiqr" width="28" height="28" viewBox="0 0 20 16">
              <path
                d="M8.695 16.682C4.06 12.382 1 9.536 1 6.065 1 3.219 3.178 1 5.95 1c1.566 0 3.069.746 4.05 1.915C10.981 1.745 12.484 1 14.05 1 16.822 1 19 3.22 19 6.065c0 3.471-3.06 6.316-7.695 10.617L10 17.897l-1.305-1.215z"
                class="_35Y7Yo" stroke="#FFF" fill-rule="evenodd" opacity=".9"></path>
            </svg>
          </div>
        </div>
      </a>
      <div class="product-details">
        <div class="brand-name">${frangrancevalue[item].brand}</div>
        <a class="brand-desc" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onclick="singleiddescription(${frangrancevalue[item].id})">${frangrancevalue[item].title}</a>
        <div class="color-details">Grey</div>
        
        <a class="" target="_blank" href="#">
          <div class="price-info-sec">
            <div class="price">₹${Number.parseInt(frangrancevalue[item].price-(frangrancevalue[item].price/frangrancevalue[item].discountPercentage))} </div>
            <div class="cut-off">₹${frangrancevalue[item].price}</div>
            <div class="discount-percent"><span>${Math.ceil(frangrancevalue[item].discountPercentage)}% off</span></div>
          </div>
        </a>
      </div>
    </div>`;
    }
   
    allcard.innerHTML = fraghtml;
 })
 let groceriesvalue =value2.filter(obj=> obj.category == "groceries");
   
    document.getElementById("groceries").addEventListener("click", function(){

     let groceriesvaluehtml='';
    for(let item in groceriesvalue){
      groceriesvaluehtml += `
      <div class="product-card">
      <a class="aaa" target="_blank"">
        <div class="product-front-image">
          <div class="front-image">
            <img alt="" class="img-fluid" src="${groceriesvalue[item].thumbnail}" onclick="singleproductdetail()>
          </div>
          <div class="owl-slider">
            <div id="carousel3" class="owl-carousel product-slider">
              <div class="product-image">
                <img alt="" src="${groceriesvalue[item].images[0]}">
              </div>
              <div class="product-image">
                <img alt="" src="${groceriesvalue[item].images[1]}">
              </div>
            </div>
          </div>
         <div class="row">
          <div class=" col-12">
                    <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                          <div class="carousel-item active">
                            <img src="${groceriesvalue[item].images[2]}" class="d-block w-100 carosal_images" alt="No Api Images">
                          </div>
                          <div class="carousel-item">
                            <img src="${groceriesvalue[item].images[0]}" class="d-block w-100" alt="...">
                          </div>
                          <div class="carousel-item">
                            <img src="${groceriesvalue[item].images[1]}" class="d-block w-100" alt="...">
                          </div>   
                        </div>
                      </div>
                </div>
          </div>
          <div class="product-like">
            <svg xmlns="http://www.w3.org/2000/svg" class="_2oLiqr" width="28" height="28" viewBox="0 0 20 16">
              <path
                d="M8.695 16.682C4.06 12.382 1 9.536 1 6.065 1 3.219 3.178 1 5.95 1c1.566 0 3.069.746 4.05 1.915C10.981 1.745 12.484 1 14.05 1 16.822 1 19 3.22 19 6.065c0 3.471-3.06 6.316-7.695 10.617L10 17.897l-1.305-1.215z"
                class="_35Y7Yo" stroke="#FFF" fill-rule="evenodd" opacity=".9"></path>
            </svg>
          </div>
        </div>
      </a>
      <div class="product-details">
        <div class="brand-name">${groceriesvalue[item].brand}</div>
        <a class="brand-desc" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onclick="singleiddescription(${groceriesvalue[item].id})">${groceriesvalue[item].title}</a>
        <div class="color-details">Grey</div>
        
        <a class="" target="_blank" href="#">
          <div class="price-info-sec">
            <div class="price">₹${Number.parseInt(groceriesvalue[item].price-(groceriesvalue[item].price/groceriesvalue[item].discountPercentage))} </div>
            <div class="cut-off">₹${groceriesvalue[item].price}</div>
            <div class="discount-percent"><span>${Math.ceil(groceriesvalue[item].discountPercentage)}% off</span></div>
          </div>
        </a>
      </div>
    </div>`;
    }
   
    allcard.innerHTML = groceriesvaluehtml;
 })
 let furniturevalue =value2.filter(obj=> obj.category == "furniture");
   
    document.getElementById("furniture").addEventListener("click", function(){

     let furniturevaluehtml='';
    for(let item in furniturevalue){
      furniturevaluehtml += `
      <div class="product-card">
      <a class="aaa" target="_blank"">
        <div class="product-front-image">
          <div class="front-image">
            <img alt="" class="img-fluid" src="${furniturevalue[item].thumbnail}" onclick="singleproductdetail()>
          </div>
          <div class="owl-slider">
            <div id="carousel3" class="owl-carousel product-slider">
              <div class="product-image">
                <img alt="" src="${furniturevalue[item].images[0]}">
              </div>
              <div class="product-image">
                <img alt="" src="${furniturevalue[item].images[1]}">
              </div>
            </div>
          </div>
         <div class="row">
          <div class=" col-12">
                    <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                          <div class="carousel-item active">
                            <img src="${furniturevalue[item].images[2]}" class="d-block w-100 carosal_images" alt="No Api Images">
                          </div>
                          <div class="carousel-item">
                            <img src="${furniturevalue[item].images[0]}" class="d-block w-100" alt="...">
                          </div>
                          <div class="carousel-item">
                            <img src="${furniturevalue[item].images[1]}" class="d-block w-100" alt="...">
                          </div>   
                        </div>
                      </div>
                </div>
          </div>
          <div class="product-like">
            <svg xmlns="http://www.w3.org/2000/svg" class="_2oLiqr" width="28" height="28" viewBox="0 0 20 16">
              <path
                d="M8.695 16.682C4.06 12.382 1 9.536 1 6.065 1 3.219 3.178 1 5.95 1c1.566 0 3.069.746 4.05 1.915C10.981 1.745 12.484 1 14.05 1 16.822 1 19 3.22 19 6.065c0 3.471-3.06 6.316-7.695 10.617L10 17.897l-1.305-1.215z"
                class="_35Y7Yo" stroke="#FFF" fill-rule="evenodd" opacity=".9"></path>
            </svg>
          </div>
        </div>
      </a>
      <div class="product-details">
        <div class="brand-name">${furniturevalue[item].brand}</div>
        <a class="brand-desc" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onclick="singleiddescription(${furniturevalue[item].id})">${furniturevalue[item].title}</a>
        <div class="color-details">Grey</div>
        
        <a class="" target="_blank" href="#">
          <div class="price-info-sec">
            <div class="price">₹${Number.parseInt(furniturevalue[item].price-(furniturevalue[item].price/furniturevalue[item].discountPercentage))} </div>
            <div class="cut-off">₹${furniturevalue[item].price}</div>
            <div class="discount-percent"><span>${Math.ceil(furniturevalue[item].discountPercentage)}% off</span></div>
          </div>
        </a>
      </div>
    </div>`;
    }
   
    allcard.innerHTML = furniturevaluehtml;
 })
 let Menvalue =value2.filter(obj=> obj.category == "mens-shirts");

    document.getElementById("Men").addEventListener("click", function(){

     let Menvaluehtml='';
    for(let item in Menvalue){
      Menvaluehtml += `
      <div class="product-card">
      <a class="aaa" target="_blank"">
        <div class="product-front-image">
          <div class="front-image">
            <img alt="" class="img-fluid" src="${Menvalue[item].thumbnail}" onclick="singleproductdetail()>
          </div>
          <div class="owl-slider">
            <div id="carousel3" class="owl-carousel product-slider">
              <div class="product-image">
                <img alt="" src="${Menvalue[item].images[0]}">
              </div>
              <div class="product-image">
                <img alt="" src="${Menvalue[item].images[1]}">
              </div>
            </div>
          </div>
         <div class="row">
          <div class=" col-12">
                    <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                          <div class="carousel-item active">
                            <img src="${Menvalue[item].images[2]}" class="d-block w-100 carosal_images" alt="No Api Images">
                          </div>
                          <div class="carousel-item">
                            <img src="${Menvalue[item].images[0]}" class="d-block w-100" alt="...">
                          </div>
                          <div class="carousel-item">
                            <img src="${Menvalue[item].images[1]}" class="d-block w-100" alt="...">
                          </div>   
                        </div>
                      </div>
                </div>
          </div>
          <div class="product-like">
            <svg xmlns="http://www.w3.org/2000/svg" class="_2oLiqr" width="28" height="28" viewBox="0 0 20 16">
              <path
                d="M8.695 16.682C4.06 12.382 1 9.536 1 6.065 1 3.219 3.178 1 5.95 1c1.566 0 3.069.746 4.05 1.915C10.981 1.745 12.484 1 14.05 1 16.822 1 19 3.22 19 6.065c0 3.471-3.06 6.316-7.695 10.617L10 17.897l-1.305-1.215z"
                class="_35Y7Yo" stroke="#FFF" fill-rule="evenodd" opacity=".9"></path>
            </svg>
          </div>
        </div>
      </a>
      <div class="product-details">
        <div class="brand-name">${Menvalue[item].brand}</div>
        <a class="brand-desc" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onclick="singleiddescription(${Menvalue[item].id})">${Menvalue[item].title}</a>
        <div class="color-details">Grey</div>
        
        <a class="" target="_blank" href="#">
          <div class="price-info-sec">
            <div class="price">₹${Number.parseInt(Menvalue[item].price-(Menvalue[item].price/Menvalue[item].discountPercentage))} </div>
            <div class="cut-off">₹${Menvalue[item].price}</div>
            <div class="discount-percent"><span>${Math.ceil(Menvalue[item].discountPercentage)}% off</span></div>
          </div>
        </a>
      </div>
    </div>`;
    }
   
    allcard.innerHTML = Menvaluehtml;
 })
 let Womanvalue =value2.filter(obj=> obj.category == "womens-dresses");

    document.getElementById("Woman").addEventListener("click", function(){

     let Womanvaluehtml='';
    for(let item in Womanvalue){
      Womanvaluehtml += `
      <div class="product-card">
      <a class="aaa" target="_blank"">
        <div class="product-front-image">
          <div class="front-image">
            <img alt="" class="img-fluid" src="${Womanvalue[item].thumbnail}" onclick="singleproductdetail()>
          </div>
          <div class="owl-slider">
            <div id="carousel3" class="owl-carousel product-slider">
              <div class="product-image">
                <img alt="" src="${Womanvalue[item].images[0]}">
              </div>
              <div class="product-image">
                <img alt="" src="${Womanvalue[item].images[1]}">
              </div>
            </div>
          </div>
         <div class="row">
          <div class=" col-12">
                    <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                          <div class="carousel-item active">
                            <img src="${Womanvalue[item].images[2]}" class="d-block w-100 carosal_images" alt="No Api Images">
                          </div>
                          <div class="carousel-item">
                            <img src="${Womanvalue[item].images[0]}" class="d-block w-100" alt="...">
                          </div>
                          <div class="carousel-item">
                            <img src="${Womanvalue[item].images[1]}" class="d-block w-100" alt="...">
                          </div>   
                        </div>
                      </div>
                </div>
          </div>
          <div class="product-like">
            <svg xmlns="http://www.w3.org/2000/svg" class="_2oLiqr" width="28" height="28" viewBox="0 0 20 16">
              <path
                d="M8.695 16.682C4.06 12.382 1 9.536 1 6.065 1 3.219 3.178 1 5.95 1c1.566 0 3.069.746 4.05 1.915C10.981 1.745 12.484 1 14.05 1 16.822 1 19 3.22 19 6.065c0 3.471-3.06 6.316-7.695 10.617L10 17.897l-1.305-1.215z"
                class="_35Y7Yo" stroke="#FFF" fill-rule="evenodd" opacity=".9"></path>
            </svg>
          </div>
        </div>
      </a>
      <div class="product-details">
        <div class="brand-name">${Womanvalue[item].brand}</div>
        <a class="brand-desc" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onclick="singleiddescription(${Womanvalue[item].id})">${Womanvalue[item].title}</a>
        <div class="color-details">Grey</div>
        
        <a class="" target="_blank" href="#">
          <div class="price-info-sec">
            <div class="price">₹${Number.parseInt(Womanvalue[item].price-(Womanvalue[item].price/Womanvalue[item].discountPercentage))} </div>
            <div class="cut-off">₹${Womanvalue[item].price}</div>
            <div class="discount-percent"><span>${Math.ceil(Womanvalue[item].discountPercentage)}% off</span></div>
          </div>
        </a>
      </div>
    </div>`;
    }
   
    allcard.innerHTML = Womanvaluehtml;
 })
 

allcard.innerHTML = ihtml;
})
function navSearchFunction() {
  // Storing value in "searchKeyword" variable with help of name attribute
  var searchKeyword = document.getElementById("navSearch").value.toUpperCase();

  // Fetching Result and Display Data accordingly
  var searchResult =   searchcounts.filter((searchItem) =>
    searchItem.title.toUpperCase().includes(searchKeyword)
  );

  
  let searchvaluehtml='';
    for(let item in searchResult){
      searchvaluehtml += `
      <div class="product-card">
      <a class="aaa" target="_blank"">
        <div class="product-front-image">
          <div class="front-image">
            <img alt="" class="img-fluid" src="${searchResult[item].thumbnail}" onclick="singleproductdetail()>
          </div>
          <div class="owl-slider">
            <div id="carousel3" class="owl-carousel product-slider">
              <div class="product-image">
                <img alt="" src="${searchResult[item].images[0]}">
              </div>
              <div class="product-image">
                <img alt="" src="${searchResult[item].images[1]}">
              </div>
            </div>
          </div>
         <div class="row">
          <div class=" col-12">
                    <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                          <div class="carousel-item active">
                            <img src="${searchResult[item].images[2]}" class="d-block w-100 carosal_images" alt="No Api Images">
                          </div>
                          <div class="carousel-item">
                            <img src="${searchResult[item].images[0]}" class="d-block w-100" alt="...">
                          </div>
                          <div class="carousel-item">
                            <img src="${searchResult[item].images[1]}" class="d-block w-100" alt="...">
                          </div>   
                        </div>
                      </div>
                </div>
          </div>
          <div class="product-like">
            <svg xmlns="http://www.w3.org/2000/svg" class="_2oLiqr" width="28" height="28" viewBox="0 0 20 16">
              <path
                d="M8.695 16.682C4.06 12.382 1 9.536 1 6.065 1 3.219 3.178 1 5.95 1c1.566 0 3.069.746 4.05 1.915C10.981 1.745 12.484 1 14.05 1 16.822 1 19 3.22 19 6.065c0 3.471-3.06 6.316-7.695 10.617L10 17.897l-1.305-1.215z"
                class="_35Y7Yo" stroke="#FFF" fill-rule="evenodd" opacity=".9"></path>
            </svg>
          </div>
        </div>
      </a>
      <div class="product-details">
        <div class="brand-name">${searchResult[item].brand}</div>
        <a class="brand-desc" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onclick="singleiddescription(${searchResult[item].id})">${searchResult[item].title}</a>
        <div class="color-details">Grey</div>
        
        <a class="" target="_blank" href="#">
          <div class="price-info-sec">
            <div class="price">₹${Number.parseInt(searchResult[item].price-(searchResult[item].price/searchResult[item].discountPercentage))} </div>
            <div class="cut-off">₹${searchResult[item].price}</div>
            <div class="discount-percent"><span>${Math.ceil(searchResult[item].discountPercentage)}% off</span></div>
          </div>
        </a>
      </div>
    </div>`;
    }
    
    allcard.innerHTML = searchvaluehtml;
    if(searchResult==0){
      allcard.innerHTML = `<div class="text-center fs-3 m-5">Search Result Not Found</div>`;
    }
}

function singleiddescription(data){
  let myproductid = data;
  let myproductdetail = '';
  fetch(`https://dummyjson.com/products/${myproductid}`)
    .then(response => response.json())    
    .then(element=>  {   
      let percentagevalue= element.price/element.discountPercentage;
      percentagevalue = Number.parseInt(element.price-percentagevalue);
      console.log(element)
    
     myproductdetail+=`     
     <div class="product-card">
     <a class="aaa" target="_blank"">
       <div class="product-front-image">
         <div class="front-image">
           <img alt="" class="img-fluid" src="${element.thumbnail}" onclick="singleproductdetail()>
         </div>
         <div class="owl-slider">
           <div id="carousel3" class="owl-carousel product-slider">
             <div class="product-image">
               <img alt="" src="${element.images[0]}">
             </div>
             <div class="product-image">
               <img alt="" src="${element.images[1]}">
             </div>
           </div>
         </div>
        <div class="row">
         <div class=" col-12">
                   <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                       <div class="carousel-inner">
                         <div class="carousel-item active">
                           <img src="${element.images[2]}" class="d-block w-100 carosal_images" alt="No Api Images">
                         </div>
                         <div class="carousel-item">
                           <img src="${element.images[0]}" class="d-block w-100" alt="...">
                         </div>
                         <div class="carousel-item">
                           <img src="${element.images[1]}" class="d-block w-100" alt="...">
                         </div>   
                       </div>
                     </div>
               </div>
         </div>
         <div class="product-like">
           <svg xmlns="http://www.w3.org/2000/svg" class="_2oLiqr" width="28" height="28" viewBox="0 0 20 16">
             <path
               d="M8.695 16.682C4.06 12.382 1 9.536 1 6.065 1 3.219 3.178 1 5.95 1c1.566 0 3.069.746 4.05 1.915C10.981 1.745 12.484 1 14.05 1 16.822 1 19 3.22 19 6.065c0 3.471-3.06 6.316-7.695 10.617L10 17.897l-1.305-1.215z"
               class="_35Y7Yo" stroke="#FFF" fill-rule="evenodd" opacity=".9"></path>
           </svg>
         </div>
       </div>
     </a>
     <div class="product-details">
       <div class="brand-name">${element.brand}</div>
       <a class="brand-desc" title="">${element.title} </a>
       <div class="color-details">Grey</div>
       
       <a class="" target="_blank" href="#">
         <div class="price-info-sec">
           <div class="price">$${percentagevalue} </div>
           <div class="cut-off">$${element.price}</div>
           <div class="discount-percent"><span>${Math.ceil(element.discountPercentage)}% off</span></div>
         </div>
       </a>
     </div>
   </div>
   <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
       
      </div>
       
    `

    thisismydetail.innerHTML=myproductdetail
  
})
 
}

//user login data api
function userlogindata(){
  let username = document.getElementById("recipient-name").value;
let password = document.getElementById("recipient-password").value;


  fetch(`https://dummyjson.com/auth/login`,{
    method:'POST',
   headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      username:username,
      password:password,
    })
  })
  .then(response => response.json())    
  .then((res)=>  { 
    console.log(res)
    
   })
}
//new api code is closed




//dark mode button code is here
$("#sun_bright").click(function(){
    $("#sun_bright").html("<i class='bi bi-brightness-high-fill'></i>");
    $("#sun_bright").css('color','black');
})
//dark mode is closed
//nav bar heart code is here
function favourite() {
            const heartRed = document.querySelector(".icon_heart>i.red");
            if (heartRed) {
                heartRed.classList.remove("red");
            }
            else {
                const heart = document.querySelector(".icon_heart>i");
                heart.classList.add("red");
            }

        }
//heart code is closed

//Get the button back to top button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//back to to button css is closed

//dark mode is here 
function darkmode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    
     }

 //dark mode is here

 //google translate code is here 
 
function googleTranslateElementInit() {
  new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
}
  //date code is here

  let date_foot1 = new Date();
   let ftt = document.getElementById("date_foot").innerHTML = date_foot1.getFullYear();
//date code is closed here  

//jquery counter code is here
$('.count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 4000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});
//jquery counter code is closed here
//word counter code is here'
function countWords(self) {
  var spaces = self.value.match(/\S+/g);
  var words = spaces ? spaces.length : 0;

  document.getElementById("count-words").innerHTML = words + " words";
}
//word counter is closed here

//git api section is here

let userGit = ["kapilinania", "kalyanseervi", "iamharshvardhangehlot", "deepak-ganwani", "iamhimanshugulati"];
let gitUserData=[];
let ihtml = "";
for (let index = 0; index < userGit.length; index++) {
    
    fetch(`https://api.github.com/users/${userGit[index]}`)
    
    .then((response) => response.json())
    
    .then((gitData) => {
      console.log(gitData)
      ihtml += `

      <div class="col team_card m-5 pb-5">
      <div class="p-3">
          <div class="col-5 team-images">
          <img src="${gitData.avatar_url}" class="img-fluid">
          </div>
          <div class="col text-center pt-5  mt-5 "><h3 class="fw-bold">${gitData.name}</h3></div>
          <div class="col text-center"><h5>${gitData.bio}</h5></div>
          <div class="col pt-3"> <p class="text-justify fs-5 text-center">A typical web development team looks like this: requirements analyst; Project Manager; UI/UX designer; web developer; QA Engineer</p> </div>
          <div class="col  text-center "> <i class="bi bi-geo-alt-fill jodh-location"></i> <span class="fs-5 teamlo">Jodhpur(Rajasthan)</span></div>
          <div class="row text-center pt-4">
              <div class="col fw-bold fs-2 count">${gitData.followers}</div>
              <div class="col fw-bold fs-2 count">${gitData.public_repos}</div>
              <div class="col fw-bold fs-2 count">${gitData.following}</div>
          </div>
          <div class="row text-center pb-2">
              <div class="col fs-3">followers</div>
              <div class="col fs-3">work</div>
              <div class="col fs-3">following</div>
          </div>
          
          <div class="profile-card-buttons mb-5">
              <div class="profile-card-button">
                  <span>contact me</span>
                  <div class="social-icons">
                      <i class="fa-brands fa-facebook-f"></i>
                      <i class="fa-brands fa-twitter"></i>
                      <i class="fa-brands fa-instagram"></i>
                      
                      <a href="${gitData.repos_url}"><i class="fa-brands fa-github"></i></a>
                      <i class="fa-brands fa-linkedin"></i>
                  </div>
              </div>
          </div>
      </div>
  </div>
      `;
      allcardgit.innerHTML = ihtml; 
    })
   
    //gitUserData.push(gitData))
   
    

    
    // .catch((error) => {
    //     console.log(`Error: ${error}`);
    // })
    
}

console.log(gitUserData);

//git api section is closed