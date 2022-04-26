var highlightLayer;
function highlightFeature(e) {
	highlightLayer = e.target;

	if (e.target.feature.geometry.type === 'LineString') {
	  highlightLayer.setStyle({
		color: '#12E0DA',
	  });
	} else {
	  highlightLayer.setStyle({
		//cambio de propiedades de sombreado
		weigth : 2,
		color : 'black', 
		fillColor : '#F2FE03',
		fillOpacity : 0.5
	  });
	}
	//highlightLayer.openPopup();
}
function addCommas(nStr) {
    nStr += '';
    var x = nStr.split('.');
    var x1 = x[0];
    var x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }
    return x1 + x2;
}
function pop_Rios_0(feature, layer) {
    layer.on({
		mouseout: function(e) {
			for (i in e.target._eventParents) {
				e.target._eventParents[i].resetStyle(e.target);
			}
		},
		mouseover: highlightFeature,
	});
    var popupContent = '<table>\
            <tr>\
                <td colspan="2"><b><strong>Río '+ (feature.properties['nom_rio'] !== null ? Autolinker.link(String(feature.properties['nom_rio']))+'</strong>' : '') + '</b></td>\
            </tr>\
            <tr>\
                <td colspan="2"><br /><strong><u>Vertiente:</u></strong>' +' '+ (feature.properties['vertiente'] !== null ? Autolinker.link(String(feature.properties['vertiente'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2"><strong><u>Escurrimiento medio natural:</u></strong>' +' '+ addCommas((feature.properties['escur_natm'] !== null ? Autolinker.link(String(feature.properties['escur_natm']))+ ' hm<sup>3</sup>' : '')) + '</td>\
            </tr>\
            <tr>\
                <td colspan="2"><strong><u>Región Hidrológica:</u></strong>' +' '+ (feature.properties['nom_rh'] !== null ? Autolinker.link(String(feature.properties['nom_rh'])) : '') + '</td>\
            </tr>\
        </table>';
    layer.bindPopup(popupContent, {maxHeight: 400});
}
function pop_Distritos_1(feature, layer) {
    layer.on({
		mouseout: function(e) {
			for (i in e.target._eventParents) {
				e.target._eventParents[i].resetStyle(e.target);
			}
		},
		mouseover: highlightFeature,
	});
    var popupContent = '<table>\
            <tr>\
                <td colspan="2"><b>' + (feature.properties['id_dr'] !== null ? Autolinker.link(String(feature.properties['id_dr']+ ' ' + Autolinker.link(String(feature.properties['nom_dr'])))) : '') + '</b></td>\
            </tr>\
            <tr>\
                <td colspan="2"><br /><strong><u>Estado:</u></strong>' +' '+ (feature.properties['nom_edo'] !== null ? Autolinker.link(String(feature.properties['nom_edo'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2"><strong><u>Región Hidrológica:</u></strong>'  +' '+  (feature.properties['nom_rh'] !== null ? Autolinker.link(String(feature.properties['nom_rh'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2"><strong><u>Región Hidrológico-Administrativa:</u></strong><br />'+ (feature.properties['nom_rha'] !== null ? Autolinker.link(String(feature.properties['nom_rha'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2"><strong><u>Número de Usuarios:</u></strong>'  +' '+ addCommas((feature.properties['num_usu'] !== null ? Autolinker.link(String(feature.properties['num_usu'])) : '')) + '</td>\
            </tr>\
            <tr>\
                <td colspan="2"><strong><u>Superficie Total:</u></strong>'  +' '+  addCommas((feature.properties['sup_tot'] !== null ? Autolinker.link(String(feature.properties['sup_tot']))+ ' Ha.' : '')) + '</td>\
            </tr>\
            <tr>\
            <td colspan="2"><strong><u>Superficie Regada Total:</u></strong>'  +' '+ addCommas((feature.properties['sup_rtot'] !== null ? Autolinker.link(String(feature.properties['sup_rtot']))+ ' Ha.'  : '')) + '</td>\
            </tr>\
            <tr>\
                <td colspan="2"><ul>\
                <li><strong><u>Con agua superficial:</u></strong>'  +' '+addCommas((feature.properties['sup_rasup'] !== null ? Autolinker.link(String(feature.properties['sup_rasup']))+ ' Ha.' : '')) + '</li>\
                <li><strong><u>Con agua Subterránea:</u></strong>'  +' '+ addCommas((feature.properties['sup_rasub'] !== null ? Autolinker.link(String(feature.properties['sup_rasub']))+ ' Ha.' : '')) + '</li>\
                </ul></td>\
            </tr>\
            <tr>\
                <td colspan="2"><strong><u>Volúmen Total disponible:</u></strong>'  +' '+ addCommas((feature.properties['vol_atot'] !== null ? Autolinker.link(String(feature.properties['vol_atot'])) +' m<sup>3</sup>': '')) + '</td>\
            </tr>\
            <tr>\
                <td colspan="2"><ul>\
                <li><strong><u>Con agua superficial:</u></strong>'  +' '+addCommas((feature.properties['vol_asup'] !== null ? Autolinker.link(String(feature.properties['vol_asup']))+ ' m<sup>3</sup>' : '')) + '</li>\
                <li><strong><u>Con agua Subterránea:</u></strong>'  +' '+ addCommas((feature.properties['vol_asub'] !== null ? Autolinker.link(String(feature.properties['vol_asub']))+ ' m<sup>3</sup>' : '')) + '</li>\
                </ul></td>\
            </tr>\
            <tr>\
                <td colspan="2"><strong><u>Año Agrícola:</u></strong>'  +' '+ (feature.properties['año_agr'] !== null ? Autolinker.link(String(feature.properties['año_agr'])) : '') + '</td>\
            </tr>\
        </table>';
    layer.bindPopup(popupContent, {maxHeight: 400});
}
function pop_Presas_2017_2(feature, layer) {
    var popupContent = '<table>\
            <tr>\
                <td colspan="2"><b>' + (feature.properties['id_presa'] !== null ? Autolinker.link(String(feature.properties['id_presa'])) +' ' +  Autolinker.link(String(feature.properties['nom_oficia'])) : '') + '</b></td>\
            </tr>\
            <tr>\
                <td colspan="2"><strong><u>Nombre Oficial:</u></strong>'  +' '+ (feature.properties['nom_oficia'] !== null ? Autolinker.link(String(feature.properties['nom_oficia'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2"><strong><u>Nombre Común:</u></strong>'  +' '+ (feature.properties['nom_comun'] !== null ? Autolinker.link(String(feature.properties['nom_comun'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2"><strong><u>Estado:</u></strong>'  +' '+ (feature.properties['nom_edo'] !== null ? Autolinker.link(String(feature.properties['nom_edo'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2"><strong><u>Región Hidrológica:</u></strong>'  +' '+ (feature.properties['nom_rha'] !== null ? Autolinker.link(String(feature.properties['nom_rha'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2"><strong><u>Corriente:</u></strong>'  +' '+ (feature.properties['corriente'] !== null ? Autolinker.link(String(feature.properties['corriente'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2"><strong><u>Altura de la Cortina:</u></strong>'  +' '+ (feature.properties['alt_cort'] !== null ? Autolinker.link(String(feature.properties['alt_cort'])) + ' m' : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2"><strong><u>Capacidad NAME:</u></strong>'  +' '+ (feature.properties['cap_name'] !== null ? Autolinker.link(String(feature.properties['cap_name']))+ ' hm<sup>3</sup>' : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2"><strong><u>Capacidad NAMO:</u></strong>'  +' '+ (feature.properties['cap_namo'] !== null ? Autolinker.link(String(feature.properties['cap_namo']))+ ' hm<sup>3</sup>' : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2"><strong><u>Vol. Almacenado:</u></strong>'  +' '+ (feature.properties['vol_alma'] !== null ? Autolinker.link(String(feature.properties['vol_alma']))+ ' hm<sup>3</sup>' : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2"><strong><u>Año de Inauguración:</u></strong>'  +' '+ (feature.properties['año_term'] !== null ? Autolinker.link(String(feature.properties['año_term'])) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2"><strong><u>Año de registro de Vol. Alm.:</u></strong>'  +' '+ (feature.properties['año'] !== null ? Autolinker.link(String(feature.properties['año'])) : '') + '</td>\
            </tr>\
        </table>';
    layer.bindPopup(popupContent, {maxHeight: 400});
}
