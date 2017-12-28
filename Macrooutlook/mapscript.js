var series = [
["USA",2.3],["JPN",1.1],["DEU",2.0],["GBR",1.0],["FRA",1.7],["ITA",1.5],["CAN",2.3],["AUS",2.7],["KOR",2.8],["CHN",6.6],["IND",7.6],["BRA",2.5],["RUS",1.5],["MEX",2.5],["IDN",5.2],["TUR",3.2],["SAU",1.1],["ARG",3.5],["ZAF",1.2]
];

var dataset = {};

var onlyValues = series.map(function(obj){ return obj[1]; });
    var minValue = Math.min.apply(null, onlyValues),
        maxValue = Math.max.apply(null, onlyValues);
var paletteScale = d3.scale.linear()
            .domain([-1,0,1,2,3,4,5,6,7,8,9,10])
            .range(["#D9D9D8","#E15426","#FCDA21","#7FCBBA","#009775","#00795D","#273A93","#273A93","#273A93","#273A93"]);
            series.forEach(function(item){
var iso = item[0],
                value = item[1];
        dataset[iso] = { GDP: value, fillColor: paletteScale(value) };
    });

// d3.select(window).on('resize', resizemap )

// function resizemap(){
//     d3.select("#worldmapgdp")
//         .attr(
//             "style",
//             "padding-bottom: " + Math.ceil(height * 100 / width) + "%"
//         )
//         .append("svg")
//         .attr("viewBox", "0 0 " + width + " " + height);

// }


new Datamap({
    element: document.getElementById('worldmapgdp'),
    projection: 'mercator',
    height: 600,
    fills: { defaultFill: '#F5F5F5' },
    data: dataset,
    geographyConfig: {
    borderColor: '#DEDEDE',
    highlightBorderWidth: 2,
            // don't change color on mouse hover
    highlightFillColor: function(geo) {
        return geo['fillColor'] || '#F5F5F5';
        },
            // only change border
    highlightBorderColor: '#B7B7B7',
            // show desired information in tooltip
    popupTemplate: function(geo, data) {
                // don't show tooltip if country don't present in dataset
        // if (!data) { return ; }
                // tooltip content
        return ['<div class="hoverinfo">',
                '<strong>', geo.properties.name, '</strong>',
                '<br>GDP 2018: <strong>', data.GDP, '</strong>',
                '</div>'].join('');
            }
        }
    });

