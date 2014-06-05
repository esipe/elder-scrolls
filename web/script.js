var map;
/********************
ADRESSE A MODIFIER 
var addMap = "http://192.168.43.203/?map=/map/the_elders_scrolls_IV_V/map/map.map";
**
*********************/

/**var addMap ="http://mapserver.esipe.geonef.fr/elder-scrolls/map";*/
var addMap ="http://esipe.geonef.fr/mapserver/elder-scrolls/map";
var extent = new OpenLayers.Bounds(14.16115139201748008,-59.57403329718370344,103.09565081315773227,4.75702975715008591);
var options = {
controls: [
                        new OpenLayers.Control.Navigation(),
                        new OpenLayers.Control.PanZoomBar(),
                        new OpenLayers.Control.LayerSwitcher({'ascending':false}),
                        new OpenLayers.Control.Permalink(),
                        new OpenLayers.Control.ScaleLine(),
                        new OpenLayers.Control.Permalink('GeneralView'),
                        new OpenLayers.Control.MousePosition(),
                        new OpenLayers.Control.OverviewMap(),
                        new OpenLayers.Control.KeyboardDefaults()
                    ],
                restrictedExtent: extent,
                minResolution: "auto",
                minExtent: new OpenLayers.Bounds(-1, -1, 1, 1),
                maxResolution: "auto",
                maxExtent: new OpenLayers.Bounds(14.16115139201748008,-59.57403329718370344,103.09565081315773227,4.75702975715008591)
            };


function init() {

map = new OpenLayers.Map('map',options);

var all = new OpenLayers.Layer.WMS(
"the Elder Scrolls 4 & 5",
addMap,
{layers: 'carte_tamriel,carte_totale,carte_cyrodille,carte_skyrim,lacs,cityimperial'}
);


var kingdoms = new OpenLayers.Layer.WMS(
"royaumes",
addMap,
{layers: 'carte_tamriel,royaumes,lacs'}
);

var roads = new OpenLayers.Layer.WMS(
"routes",
addMap,
{layers: 'routes',transparent: "true"},
{visibility: true}
);


var mountains = new OpenLayers.Layer.WMS(
"montagnes",
addMap,
{layers: 'montagnes',transparent: "true"},
{visibility: false}
);

var cities = new OpenLayers.Layer.WMS(
"villes",
addMap,
{layers: 'villes',transparent: "true"},
{visibility: true,singleTile: true}
);

var villages = new OpenLayers.Layer.WMS(
"villages",
addMap,
{layers: 'villages',transparent: "true"},
{visibility: false}
);

var forets = new OpenLayers.Layer.WMS(
"forets",
addMap,
{layers: 'forets',transparent: "true"},
{visibility: false}
);


var phares = new OpenLayers.Layer.WMS(
"phares",
addMap,
{layers: 'phares',transparent: "true"},
{visibility: false}
);

var pierresdesigne = new OpenLayers.Layer.WMS(
"pierres de signe",
addMap,
{layers: 'pierresdesignes',transparent: "true"},
{visibility: false}
);

var guildes = new OpenLayers.Layer.WMS(
"guildes",
addMap,
{layers: 'reperesdeguilde',transparent: "true"},
{visibility: false}
);

var lieuxdaedriques = new OpenLayers.Layer.WMS(
"autels de daedra",
addMap,
{layers: 'lieuxdaedriques',transparent: "true"},
{visibility: false}
);

var antresdedragon = new OpenLayers.Layer.WMS(
"repaires de dragon",
addMap,
{layers: 'antresdedragon',transparent: "true"},
{visibility: false}
);

var ecuries = new OpenLayers.Layer.WMS(
"ecuries",
addMap,
{layers: 'ecuries',transparent: "true"},
{visibility: false}
);

var quartiersdevilles = new OpenLayers.Layer.WMS(
"quartiers de la cite imperiale",
addMap,
{layers: 'quartiersdevilles', transparent: "true"},
{visibility: true,singleTile: true}
);

 info = new OpenLayers.Control.WMSGetFeatureInfo({
            url: addMap, 
            title: 'Identify features by clicking',
            queryVisible: true,
            layers: [villages,cities,lieuxdaedriques,guildes,pierresdesigne],
            eventListeners: {
                getfeatureinfo: function(event) {
                    map.addPopup(new OpenLayers.Popup.FramedCloud(
                        "chicken", 
                        map.getLonLatFromPixel(event.xy),
                        null,
                        event.text,
                        null,
                        true
                    ));
                }
            }
        });
    map.addControl(info);
    info.activate();

map.addLayers([all,kingdoms,mountains,roads,ecuries,forets,phares,pierresdesigne,lieuxdaedriques,antresdedragon,guildes,villages,cities,quartiersdevilles]);
map.zoomToMaxExtent(extent,false);

}


