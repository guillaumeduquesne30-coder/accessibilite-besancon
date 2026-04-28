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
var format_Populationmoinsde30minutesenvoituredesples_1 = new ol.format.GeoJSON();
var features_Populationmoinsde30minutesenvoituredesples_1 = format_Populationmoinsde30minutesenvoituredesples_1.readFeatures(json_Populationmoinsde30minutesenvoituredesples_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_Populationmoinsde30minutesenvoituredesples_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Populationmoinsde30minutesenvoituredesples_1.addFeatures(features_Populationmoinsde30minutesenvoituredesples_1);
var lyr_Populationmoinsde30minutesenvoituredesples_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Populationmoinsde30minutesenvoituredesples_1, 
                style: style_Populationmoinsde30minutesenvoituredesples_1,
                popuplayertitle: 'Population à moins de 30 minutes en voiture des pôles (%)',
                interactive: true,
    title: 'Population à moins de 30 minutes en voiture des pôles (%)<br />\
    <img src="styles/legend/Populationmoinsde30minutesenvoituredesples_1_0.png" /> 0 - 20<br />\
    <img src="styles/legend/Populationmoinsde30minutesenvoituredesples_1_1.png" /> 20 - 40<br />\
    <img src="styles/legend/Populationmoinsde30minutesenvoituredesples_1_2.png" /> 40 - 60<br />\
    <img src="styles/legend/Populationmoinsde30minutesenvoituredesples_1_3.png" /> 60 - 80<br />\
    <img src="styles/legend/Populationmoinsde30minutesenvoituredesples_1_4.png" /> 80 - 100<br />' });

lyr_Positron_0.setVisible(true);lyr_Populationmoinsde30minutesenvoituredesples_1.setVisible(true);
var layersList = [lyr_Positron_0,lyr_Populationmoinsde30minutesenvoituredesples_1];
lyr_Populationmoinsde30minutesenvoituredesples_1.set('fieldAliases', {'codgeo': 'codgeo', 'libgeo': 'libgeo', 'aav2020': 'aav2020', 'libaav2020': 'libaav2020', 'cateaav': 'cateaav', 'dep': 'dep', 'reg': 'reg', 'OBJECTID_1': 'OBJECTID_1', 'carroyage_': 'carroyage_', 'FREQUENCY': 'FREQUENCY', 'SUM_carroy': 'SUM_carroy', 'pop_access': 'pop_access', 'pop_tot_co': 'pop_tot_co', 'pct_access': 'pct_access', 'OBJECTID_2': 'OBJECTID_2', 'codgeo_1': 'codgeo_1', 'FREQUENCY_': 'FREQUENCY_', 'SUM_pop_co': 'SUM_pop_co', 'code_geo_t': 'code_geo_t', 'code_geo_1': 'code_geo_1', 'SUM_pop__1': 'SUM_pop__1', 'SUM_Ind': 'SUM_Ind', 'pop_acce_1': 'pop_acce_1', 'pop_tot__1': 'pop_tot__1', 'pct_acce_1': 'pct_acce_1', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'pct_bus15': 'pct_bus15', 'pct_tc15': 'pct_tc15', 'pct_poles_': 'pct_poles_', });
lyr_Populationmoinsde30minutesenvoituredesples_1.set('fieldImages', {'codgeo': 'TextEdit', 'libgeo': 'TextEdit', 'aav2020': 'TextEdit', 'libaav2020': 'TextEdit', 'cateaav': 'TextEdit', 'dep': 'TextEdit', 'reg': 'TextEdit', 'OBJECTID_1': 'TextEdit', 'carroyage_': 'TextEdit', 'FREQUENCY': 'TextEdit', 'SUM_carroy': 'TextEdit', 'pop_access': 'TextEdit', 'pop_tot_co': 'TextEdit', 'pct_access': 'TextEdit', 'OBJECTID_2': 'TextEdit', 'codgeo_1': 'TextEdit', 'FREQUENCY_': 'TextEdit', 'SUM_pop_co': 'TextEdit', 'code_geo_t': 'TextEdit', 'code_geo_1': 'TextEdit', 'SUM_pop__1': 'TextEdit', 'SUM_Ind': 'TextEdit', 'pop_acce_1': 'TextEdit', 'pop_tot__1': 'TextEdit', 'pct_acce_1': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'pct_bus15': 'TextEdit', 'pct_tc15': 'TextEdit', 'pct_poles_': 'TextEdit', });
lyr_Populationmoinsde30minutesenvoituredesples_1.set('fieldLabels', {'codgeo': 'hidden field', 'libgeo': 'hidden field', 'aav2020': 'hidden field', 'libaav2020': 'hidden field', 'cateaav': 'hidden field', 'dep': 'hidden field', 'reg': 'hidden field', 'OBJECTID_1': 'hidden field', 'carroyage_': 'hidden field', 'FREQUENCY': 'hidden field', 'SUM_carroy': 'hidden field', 'pop_access': 'hidden field', 'pop_tot_co': 'hidden field', 'pct_access': 'hidden field', 'OBJECTID_2': 'hidden field', 'codgeo_1': 'hidden field', 'FREQUENCY_': 'hidden field', 'SUM_pop_co': 'hidden field', 'code_geo_t': 'hidden field', 'code_geo_1': 'hidden field', 'SUM_pop__1': 'hidden field', 'SUM_Ind': 'hidden field', 'pop_acce_1': 'hidden field', 'pop_tot__1': 'hidden field', 'pct_acce_1': 'inline label - always visible', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', 'pct_bus15': 'hidden field', 'pct_tc15': 'hidden field', 'pct_poles_': 'hidden field', });
lyr_Populationmoinsde30minutesenvoituredesples_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});