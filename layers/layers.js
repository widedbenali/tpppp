var wms_layers = [];

var format_cartshp_0 = new ol.format.GeoJSON();
var features_cartshp_0 = format_cartshp_0.readFeatures(json_cartshp_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_cartshp_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_cartshp_0.addFeatures(features_cartshp_0);
var lyr_cartshp_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_cartshp_0, 
                style: style_cartshp_0,
                interactive: true,
    title: 'cart shp<br />\
    <img src="styles/legend/cartshp_0_0.png" /> mer [Red] 1445 points<br />\
    <img src="styles/legend/cartshp_0_1.png" /> oasis [Blue] 622 points<br />\
    <img src="styles/legend/cartshp_0_2.png" /> sable [Yellow] 91 points<br />\
    <img src="styles/legend/cartshp_0_3.png" /> tn [Cyan] 566 points<br />\
    <img src="styles/legend/cartshp_0_4.png" /> zc [Green] 126 points<br />\
    <img src="styles/legend/cartshp_0_5.png" /> zu [Magenta] 922 points<br />\
    <img src="styles/legend/cartshp_0_6.png" /> <br />'
        });

lyr_cartshp_0.setVisible(true);
var layersList = [lyr_cartshp_0];
lyr_cartshp_0.set('fieldAliases', {'Class_Name': 'Class_Name', 'Class_Id': 'Class_Id', 'Parts': 'Parts', 'Length': 'Length', 'Area': 'Area', });
lyr_cartshp_0.set('fieldImages', {'Class_Name': 'TextEdit', 'Class_Id': 'Range', 'Parts': 'Range', 'Length': 'TextEdit', 'Area': 'TextEdit', });
lyr_cartshp_0.set('fieldLabels', {'Class_Name': 'no label', 'Class_Id': 'no label', 'Parts': 'no label', 'Length': 'no label', 'Area': 'no label', });
lyr_cartshp_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});