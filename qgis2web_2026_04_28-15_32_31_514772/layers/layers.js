ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:2154").setExtent([877706.859715, 6654829.996430, 980561.088635, 6724380.047038]);
var wms_layers = [];


        var lyr_Positron_0 = new ol.layer.Tile({
            'title': 'Positron',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 4.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
            })
        });
var format_Populationmoinsde15minpieddurseaustructurant_1 = new ol.format.GeoJSON();
var features_Populationmoinsde15minpieddurseaustructurant_1 = format_Populationmoinsde15minpieddurseaustructurant_1.readFeatures(json_Populationmoinsde15minpieddurseaustructurant_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_Populationmoinsde15minpieddurseaustructurant_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Populationmoinsde15minpieddurseaustructurant_1.addFeatures(features_Populationmoinsde15minpieddurseaustructurant_1);
var lyr_Populationmoinsde15minpieddurseaustructurant_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Populationmoinsde15minpieddurseaustructurant_1, 
                style: style_Populationmoinsde15minpieddurseaustructurant_1,
                popuplayertitle: 'Population à moins de 15 min à pied du réseau structurant (%)',
                interactive: true,
    title: 'Population à moins de 15 min à pied du réseau structurant (%)<br />\
    <img src="styles/legend/Populationmoinsde15minpieddurseaustructurant_1_0.png" /> 0-20<br />\
    <img src="styles/legend/Populationmoinsde15minpieddurseaustructurant_1_1.png" /> 20-40<br />\
    <img src="styles/legend/Populationmoinsde15minpieddurseaustructurant_1_2.png" /> 40-60<br />\
    <img src="styles/legend/Populationmoinsde15minpieddurseaustructurant_1_3.png" /> 60-80<br />\
    <img src="styles/legend/Populationmoinsde15minpieddurseaustructurant_1_4.png" /> 80-100<br />' });

lyr_Positron_0.setVisible(true);lyr_Populationmoinsde15minpieddurseaustructurant_1.setVisible(true);
var layersList = [lyr_Positron_0,lyr_Populationmoinsde15minpieddurseaustructurant_1];
lyr_Populationmoinsde15minpieddurseaustructurant_1.set('fieldAliases', {'codgeo': 'codgeo', 'libgeo': 'libgeo', 'aav2020': 'aav2020', 'libaav2020': 'libaav2020', 'cateaav': 'cateaav', 'dep': 'dep', 'reg': 'reg', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'OBJECTID_1': 'OBJECTID_1', 'codgeo_1': 'codgeo_1', 'FREQUENCY': 'FREQUENCY', 'SUM_Ind': 'SUM_Ind', 'OBJECTID_2': 'OBJECTID_2', 'codgeo_12': 'codgeo_12', 'FREQUENC_1': 'FREQUENC_1', 'SUM_pop_co': 'SUM_pop_co', 'pop_access': 'pop_access', 'pct_access': 'pct_access', });
lyr_Populationmoinsde15minpieddurseaustructurant_1.set('fieldImages', {'codgeo': 'TextEdit', 'libgeo': 'TextEdit', 'aav2020': 'TextEdit', 'libaav2020': 'TextEdit', 'cateaav': 'TextEdit', 'dep': 'TextEdit', 'reg': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'OBJECTID_1': 'Range', 'codgeo_1': 'TextEdit', 'FREQUENCY': 'TextEdit', 'SUM_Ind': 'TextEdit', 'OBJECTID_2': 'Range', 'codgeo_12': 'TextEdit', 'FREQUENC_1': 'TextEdit', 'SUM_pop_co': 'TextEdit', 'pop_access': 'TextEdit', 'pct_access': 'TextEdit', });
lyr_Populationmoinsde15minpieddurseaustructurant_1.set('fieldLabels', {'codgeo': 'hidden field', 'libgeo': 'hidden field', 'aav2020': 'hidden field', 'libaav2020': 'hidden field', 'cateaav': 'hidden field', 'dep': 'hidden field', 'reg': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', 'OBJECTID_1': 'hidden field', 'codgeo_1': 'hidden field', 'FREQUENCY': 'hidden field', 'SUM_Ind': 'hidden field', 'OBJECTID_2': 'hidden field', 'codgeo_12': 'hidden field', 'FREQUENC_1': 'hidden field', 'SUM_pop_co': 'hidden field', 'pop_access': 'hidden field', 'pct_access': 'inline label - always visible', });
lyr_Populationmoinsde15minpieddurseaustructurant_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});