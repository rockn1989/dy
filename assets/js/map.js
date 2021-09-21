$(function () {
  /*______ Яндекс карта ______*/

  if ($("div").is("#map")) {
    ymaps.ready(init);
  }

  function init() {
    var myMap = new ymaps.Map("map", {
      center: [55.747368, 37.707107],
      controls: ["zoomControl"],
      zoom: 10,
    });

    var ballonContent = `<div class="ballon-content"><div class="ballon-title">ООО ТФК «ФЕНИКС»</div>
    <div class="ballon-body">
        <span> 423800, Россия, Республика Татарстан, г. Набережные Челны, Промкомзона, Индустриальный проезд, д. 37. <br>
          Телефон: <a href="tel:88002509848">8 800 250 98 48</a> по России бесплатный<br>
          +7 (917) 295 77 00<br>
          Email: <a href="mailto:call-center@mroteh.ru">call-center@mroteh.ru</a><br>
        </span>
      </div>
      <a href="" class="link-arrow-right"><span>Посетить сайт</span></a></div>
    `;

    var placeMark = new ymaps.Placemark(myMap.getCenter(), {
        balloonContentBody: ballonContent
      },
      {
        iconLayout: "default#image",
        iconImageHref: "../img/icon-svg/pin-blue.svg",
        iconImageSize: [64, 70],
        iconImageOffset: [0, 0],
      }
    );
    

    placeMark.events
        .add('mouseenter', function (e) {
            e.get('target').options.set('iconImageHref', '../img/icon-svg/pin.svg');
        })
        .add('mouseleave', function (e) {
            e.get('target').options.set('iconImageHref', '../img/icon-svg/pin-blue.svg');
        })

    myMap.geoObjects.add(placeMark);

  }
});
