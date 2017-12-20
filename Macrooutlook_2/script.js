var map = new Datamap({
        scope: 'world',
        element: document.getElementById('worldmapgdp'),
        projection: 'mercator',
        height: 600,
	fills: {
          defaultFill: 'gray',
          high: 'blue',
          medium: 'yellow',
          low: 'red',
          unknown: 'rgb(0,0,0)'     
       },
         data: {
          USA: {fillKey: 'high',
      			numberOfThings: 300},
          RUS: {fillKey: 'low' },
          CAN: {fillKey: 'medium' },
          BRA: {fillKey: 'high' },
          ARG: {fillKey: 'low'},
          COL: {fillKey: 'medium' },
          AUS: {fillKey: 'low' },
          ZAF: {fillKey: 'medium' },
          MAD: {fillKey: 'high' }       
        },
      });
	map.legend();

    map.bubbles([
       // {name: 'Hot', latitude: 21.32, longitude: 5.32, radius: 10, fillKey: 'gt50'},
       // {name: 'Chilly', latitude: -25.32, longitude: 120.32, radius: 18, fillKey: 'lt50'},
       // {name: 'Hot again', latitude: 21.32, longitude: -84.32, radius: 8, fillKey: 'gt50'},
     ], 
     {
       popupTemplate: function(geo, data) {
         return "<div class='hoverinfo'>It is " + data.name + "</div>";
       }
     });    
