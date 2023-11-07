import { sequelize } from "../config/db.js";
import { DataTypes } from "sequelize";
const LocalidadesModel = sequelize.define("Localidades", {
  id_localidad: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  CP: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

const localidades = [
  { nombre: "AIBAL EL SILENCIO", CP: "P3634" },
  { nombre: "BAJO HONDO", CP: "P3630" },
  { nombre: "EL BREAL", CP: "P3636" },
  { nombre: "EL CAJON", CP: "P3630" },
  { nombre: "EL CAÑON", CP: "P3634" },
  { nombre: "EL CHURCAL", CP: "P3636" },
  { nombre: "EL COLETO", CP: "P3630" },
  { nombre: "EL QUEMADO", CP: "P3634" },
  { nombre: "EL REMANSO", CP: "P3630" },
  { nombre: "EL SIMBOLAR", CP: "P3634" },
  { nombre: "EL SOLITARIO", CP: "P3636" },
  { nombre: "FORTIN LA MADRID", CP: "P3630" },
  { nombre: "FORTIN PILCOMAYO NUEVO", CP: "P3630" },
  { nombre: "FORTIN SOLEDAD", CP: "P3630" },
  { nombre: "GUADALCAZAR", CP: "P3630" },
  { nombre: "LA ESPERANZA", CP: "P3630" },
  { nombre: "LA LAGUNA", CP: "P3634" },
  { nombre: "LA LIBERTAD", CP: "P3630" },
  { nombre: "LA REPRESA", CP: "P3632" },
  { nombre: "LA RINCONADA", CP: "P3630" },
  { nombre: "LAGUNA YEMA", CP: "P3634" },
  { nombre: "LAGUNITA", CP: "P3634" },
  { nombre: "LAS BANDERITAS", CP: "P3630" },
  { nombre: "LAS BOLIVIANAS", CP: "P3634" },
  { nombre: "LOS CHIRIGUANOS", CP: "P3632" },
  { nombre: "LOS POCITOS", CP: "P3636" },
  { nombre: "MATIAS GULACSI", CP: "P3634" },
  { nombre: "MEDIA LUNA", CP: "P3630" },
  { nombre: "PESCADO NEGRO", CP: "P3636" },
  { nombre: "POZO DE MAZA", CP: "P3636" },
  { nombre: "POZO DE MOLINA", CP: "P3630" },
  { nombre: "POZO DEL MORTERO", CP: "P3632" },
  { nombre: "PUERTO CABO IRIGOYEN", CP: "P3636" },
  { nombre: "RIO MUERTO", CP: "P3634" },
  { nombre: "SANTA ISABEL", CP: "P3634" },
  { nombre: "SOMBRERO NEGRO", CP: "P3636" },
  { nombre: "SUMAYEN", CP: "P3634" },
  { nombre: "VACA PERDIDA", CP: "P3636" },
  { nombre: "EL BAJO", CP: "P3634" },
  { nombre: "EL CHAÑARAL", CP: "P3636" },
  { nombre: "EL CHURCALITO", CP: "P3634" },
  { nombre: "EL LINDERO", CP: "P3636" },
  { nombre: "EL QUIMIL", CP: "P3636" },
  { nombre: "LAGUNA TRES PACES", CP: "P3636" },
  { nombre: "LAGUNA YACARE", CP: "P3634" },
  { nombre: "LOS CIENEGUITOS", CP: "P3636" },
  { nombre: "LA PALIZADA", CP: "P3634" },
  { nombre: "POZO RAMON", CP: "P3636" },
  { nombre: "SAN CAYETANO", CP: "P3630" },
  { nombre: "ALTO ALEGRE", CP: "P3620" },
  { nombre: "LA ZANJA", CP: "P3630" },
  { nombre: "POZO SARGENTO", CP: "P3636" },
  { nombre: "LA MOCHA", CP: "P3636" },
  { nombre: "TRES YUCHAN", CP: "P3636" },
  { nombre: "LA MADRUGADA", CP: "P3636" },
  { nombre: "BOCA DE PILAGAS", CP: "P3601" },
  { nombre: "COLONIA ITUZAINGO", CP: "P3605" },
  { nombre: "COLONIA PASTORIL", CP: "P3601" },
  { nombre: "COLONIA PRESIDENTE YRIGOYEN", CP: "P3605" },
  { nombre: "FORMOSA", CP: "P3600" },
  { nombre: "GRAN GUARDIA", CP: "P3604" },
  { nombre: "GUAYCOLEC", CP: "P3600" },
  { nombre: "ISLA 25 DE MAYO", CP: "P3600" },
  { nombre: "MOJON DE FIERRO", CP: "P3601" },
  { nombre: "SAN HILARIO", CP: "P3604" },
  { nombre: "BANCO LA EMILIA", CP: "P3600" },
  { nombre: "COLONIA DALMACIA", CP: "P3601" },
  { nombre: "MARIANO BOEDO", CP: "P3604" },
  { nombre: "PUENTE SAN HILARIO", CP: "P3600" },
  { nombre: "VILLA TRINIDAD", CP: "P3600" },
  { nombre: "BANCO PAYAGUA", CP: "P3601" },
  { nombre: "CABO ADRIANO AYALA", CP: "P3526" },
  { nombre: "COLONIA EL DORADO", CP: "P3605" },
  { nombre: "COLONIA EL NARANJITO", CP: "P3605" },
  { nombre: "COLONIA LAGUNA GOBERNADOR", CP: "P3605" },
  { nombre: "COLONIA SAN ANTONIO", CP: "P3605" },
  { nombre: "COLONIA SAN ISIDRO", CP: "P3526" },
  { nombre: "COLONIA YATAY", CP: "P3601" },
  { nombre: "EL ANGELITO", CP: "P3605" },
  { nombre: "EL MBIGUA", CP: "P3526" },
  { nombre: "ESTERITO", CP: "P3605" },
  { nombre: "GENERAL LUCIO V. MANSILLA", CP: "P3526" },
  { nombre: "HERRADURA", CP: "P3601" },
  { nombre: "LA PLAYA", CP: "P3601" },
  { nombre: "PASO POLENTA", CP: "P3605" },
  { nombre: "POSTA DEL SALADO", CP: "P3605" },
  { nombre: "POTRERO DE LOS CABALLOS", CP: "P3626" },
  { nombre: "RIACHO LINDO", CP: "P3601" },
  { nombre: "SAN FRANCISCO DE LAISHI", CP: "P3605" },
  { nombre: "TATANE", CP: "P3601" },
  { nombre: "TRES MOJONES", CP: "P3601" },
  { nombre: "VILLA ESCOLAR", CP: "P3526" },
  { nombre: "KILOMETRO 117", CP: "P3526" },
  { nombre: "BOLSA DEL PALOMO", CP: "P3636" },
  { nombre: "CAMPO BANDERA", CP: "P3636" },
  { nombre: "CAMPO GRANDE", CP: "P3636" },
  { nombre: "CAMPO LA CRUZ", CP: "P3636" },
  { nombre: "EL MISTOLAR", CP: "P3636" },
  { nombre: "EL TOTORAL", CP: "P3636" },
  { nombre: "INGENIERO GUILLERMO N. JUAREZ", CP: "P3636" },
  { nombre: "LA JUNTA", CP: "P3636" },
  { nombre: "POZO EL YACARE", CP: "P3636" },
  { nombre: "TENIENTE GENERAL ROSENDO M. FRAGA", CP: "P3636" },
  { nombre: "EL POTRERITO", CP: "P3636" },
  { nombre: "EL ROSILLO", CP: "P3636" },
  { nombre: "POZO DE LOS PATOS", CP: "P3636" },
  { nombre: "EL TREBOL", CP: "P3636" },
  { nombre: "TRES PALMITAS", CP: "P3636" },
  { nombre: "EL MILAGRO", CP: "P3636" },
  { nombre: "COMUNIDAD ABORIGEN WICHI FWINAFWAS", CP: "P3636" },
  { nombre: "A. FLORES", CP: "P3624" },
  { nombre: "CACIQUE COQUERO", CP: "P3628" },
  { nombre: "CAMPO ALEGRE", CP: "P3626" },
  { nombre: "CAMPO AZCURRA", CP: "P3624" },
  { nombre: "CAMPO DEL CIELO", CP: "P3630" },
  { nombre: "CHICO DOWAGAN", CP: "P3621" },
  { nombre: "COLONIA 14 DE MAYO", CP: "P3626" },
  { nombre: "COLONIA 20 DE JUNIO", CP: "P3615" },
  { nombre: "COLONIA ALTO ALEGRE", CP: "P3620" },
  { nombre: "COLONIA CEFERINO NAMUNCURA", CP: "P3621" },
  { nombre: "COLONIA EL ENSANCHE", CP: "P3624" },
  { nombre: "COLONIA EL PAVAO", CP: "P3621" },
  { nombre: "COLONIA EL SILENCIO", CP: "P3624" },
  { nombre: "COLONIA ISLA SOLA", CP: "P3624" },
  { nombre: "COLONIA JUAN BAUTISTA ALBERDI", CP: "P3625" },
  { nombre: "COLONIA JAVIER MUÑIZ", CP: "P3630" },
  { nombre: "COLONIA JUANITA", CP: "P3624" },
  { nombre: "COLONIA LA PREFERIDA", CP: "P3626" },
  { nombre: "COLONIA LAS CHOYAS", CP: "P3626" },
  { nombre: "COLONIA NAPENAY", CP: "P3620" },
  { nombre: "COLONIA SAN ANTONIO", CP: "P3624" },
  { nombre: "COLONIA SAN ISIDRO", CP: "P3621" },
  { nombre: "COLONIA SAN PABLO", CP: "P3621" },
  { nombre: "COLONIA SAN PEDRO", CP: "P3624" },
  { nombre: "COLONIA SAN ROQUE", CP: "P3624" },
  { nombre: "COLONIA SANTA ROSA", CP: "P3621" },
  { nombre: "COLONIA SARMIENTO", CP: "P3621" },
  { nombre: "COLONIA SIETE QUEBRACHOS", CP: "P3624" },
  { nombre: "COLONIA TATANE", CP: "P3620" },
  { nombre: "COLONIA UNION ESCUELA", CP: "P3621" },
  { nombre: "COMANDANTE FONTANA", CP: "P3620" },
  { nombre: "EL CACUY", CP: "P3621" },
  { nombre: "EL CEIBAL", CP: "P3621" },
  { nombre: "EL COGOIK", CP: "P3615" },
  { nombre: "EL CRUCE", CP: "P3626" },
  { nombre: "EL DESCANSO", CP: "P3630" },
  { nombre: "EL DIVISADERO", CP: "P3624" },
  { nombre: "EL MATADERO", CP: "P3620" },
  { nombre: "EL OCULTO", CP: "P3624" },
  { nombre: "EL PERDIDO", CP: "P3630" },
  { nombre: "EL RECREO", CP: "P3626" },
  { nombre: "EL SIMBOLAR", CP: "P3630" },
  { nombre: "EL TIMBO", CP: "P3621" },
  { nombre: "ESTANISLAO DEL CAMPO", CP: "P3626" },
  { nombre: "FORTIN CABO 1° LUGONES", CP: "P3621" },
  { nombre: "FORTIN SARGENTO 1° LEYES", CP: "P3621" },
  { nombre: "IBARRETA", CP: "P3624" },
  { nombre: "JUAN G. BAZAN", CP: "P3632" },
  { nombre: "KILOMETRO 15", CP: "P3621" },
  { nombre: "KILOMETRO 503", CP: "P3626" },
  { nombre: "LA CIERVA", CP: "P3624" },
  { nombre: "LA ESTRELLA", CP: "P3621" },
  { nombre: "LA INVERNADA", CP: "P3628" },
  { nombre: "LA LINEA", CP: "P3630" },
  { nombre: "LA MEDIA LUNA", CP: "P3624" },
  { nombre: "LA PAMPA", CP: "P3630" },
  { nombre: "LAGO VERDE", CP: "P3624" },
  { nombre: "LAS LOLAS", CP: "P3621" },
  { nombre: "LAS LOMITAS", CP: "P3630" },
  { nombre: "LAS MOCHAS", CP: "P3626" },
  { nombre: "LOMA SAN PABLO", CP: "P3615" },
  { nombre: "LOS TRES REYES", CP: "P3621" },
  { nombre: "LOTE 20 RURAL", CP: "P3620" },
  { nombre: "LOTE 27", CP: "P3630" },
  { nombre: "MAESTRA BLANCA GOMEZ", CP: "P3624" },
  { nombre: "PASO NAITE", CP: "P3628" },
  { nombre: "POSTA CAMBIO ZALAZAR", CP: "P3632" },
  { nombre: "POZO DEL TIGRE", CP: "P3628" },
  { nombre: "POZO HONDO", CP: "P3626" },
  { nombre: "POZO LARGO", CP: "P3626" },
  { nombre: "POZO NAVAGAN", CP: "P3626" },
  { nombre: "PUERTO LAVALLE", CP: "P3624" },
  { nombre: "PUNTA DE AGUA", CP: "P3630" },
  { nombre: "COLONIA OSVALDO QUIROGA", CP: "P3621" },
  { nombre: "RANERO CUE", CP: "P3626" },
  { nombre: "RIACHO DE ORO", CP: "P3624" },
  { nombre: "RINCON FLORIDO", CP: "P3620" },
  { nombre: "SAN CARLOS", CP: "P3620" },
  { nombre: "SAN CARLOS", CP: "P3626" },
  { nombre: "SAN MARTIN I", CP: "P3621" },
  { nombre: "SAN MARTIN II", CP: "P3621" },
  { nombre: "SAN SIMON", CP: "P3603" },
  { nombre: "SOLDADO D. SALVATIERRA", CP: "P3626" },
  { nombre: "SOLDADO I. SANCHEZ", CP: "P3624" },
  { nombre: "SUBTENIENTE PERIN", CP: "P3624" },
  { nombre: "TENIENTE BROWN", CP: "P3622" },
  { nombre: "TRES POZOS", CP: "P3626" },
  { nombre: "URBANA VIEJA", CP: "P3621" },
  { nombre: "VILLA GENERAL GÜEMES", CP: "P3621" },
  { nombre: "VILLA GENERAL MANUEL BELGRANO", CP: "P3615" },
  { nombre: "VILLA GENERAL URQUIZA", CP: "P3628" },
  { nombre: "BARTOLOME DE LAS CASAS", CP: "P3622" },
  { nombre: "CAMPO DE AVIACION", CP: "P3626" },
  { nombre: "COLONIA BARTOLOME DE LAS CASAS", CP: "P3622" },
  { nombre: "COLONIA DANTE SANDRELLI", CP: "P3621" },
  { nombre: "COLONIA EL CATORCE", CP: "P3624" },
  { nombre: "COLONIA ENSANCHE NORTE", CP: "P3624" },
  { nombre: "EL BELLACO", CP: "P3603" },
  { nombre: "LAQTASATANYIE {  ombre:4)", CP: "P3630" },
  { nombre: "LOS TRES REYES", CP: "P3621" },
  { nombre: "LOS JUBILADOS", CP: "P3620" },
  { nombre: "VILLA MARIN", CP: "P3628" },
  { nombre: "LA PANTALLA", CP: "P3630" },
  { nombre: "CAMPO TRES POZOS", CP: "P3632" },
  { nombre: "COLONIA LAKA-WICHI", CP: "P3628" },
  { nombre: "COLONIA ABORIGEN LA BOMBA", CP: "P3630" },
  { nombre: "LAGUNA ACEVAL", CP: "P3626" },
  { nombre: "LOTE 42", CP: "P3630" },
  { nombre: "LOTE 47", CP: "P3630" },
  { nombre: "COMUNIDAD LOTE 21", CP: "P3628" },
  { nombre: "APAYEREY", CP: "P3615" },
  { nombre: "BUENA VISTA", CP: "P3615" },
  { nombre: "COLONIA 25 DE MAYO", CP: "P3615" },
  { nombre: "COLONIA EL CEIBO", CP: "P3615" },
  { nombre: "COLONIA NUEVA", CP: "P3611" },
  { nombre: "COLONIA SANTA ROSA", CP: "P3615" },
  { nombre: "EL ESPINILLO", CP: "P3615" },
  { nombre: "EL POMBERO", CP: "P3611" },
  { nombre: "ISLA AZUL", CP: "P3615" },
  { nombre: "JULIO CUE", CP: "P3615" },
  { nombre: "LAGUNA GALLO", CP: "P3611" },
  { nombre: "LOMA ZAPATU", CP: "P3611" },
  { nombre: "LORO CUE", CP: "P3615" },
  { nombre: "MISION TACAAGLE", CP: "P3615" },
  { nombre: "PORTON NEGRO", CP: "P3615" },
  { nombre: "SALVACION", CP: "P3611" },
  { nombre: "SAN BLAS", CP: "P3615" },
  { nombre: "SAN CARLOS", CP: "P3615" },
  { nombre: "TRES LAGUNAS", CP: "P3611" },
  { nombre: "VILLA HERMOSA", CP: "P3611" },
  { nombre: "VILLA REAL", CP: "P3615" },
  { nombre: "VILLA RURAL", CP: "P3615" },
  { nombre: "VISTA ALEGRE", CP: "P3615" },
  { nombre: "PUESTO RAMONA", CP: "P3615" },
  { nombre: "COLONIA ABORIGEN", CP: "P3615" },
  { nombre: "LAGUNA TORO", CP: "P3611" },
  { nombre: "BUEY MUERTO", CP: "P3611" },
  { nombre: "CEIBO TRECE", CP: "P3613" },
  { nombre: "CLORINDA", CP: "P3610" },
  { nombre: "COLONIA LA PRIMAVERA", CP: "P3611" },
  { nombre: "COLONIA LOS SANTAFESINOS", CP: "P3611" },
  { nombre: "COLONIA SAN JUAN", CP: "P3611" },
  { nombre: "COLONIA SARMIENTO", CP: "P3611" },
  { nombre: "COLONIA SUDAMERICANA", CP: "P3613" },
  { nombre: "COSTA ALEGRE", CP: "P3613" },
  { nombre: "EL PARAISO", CP: "P3611" },
  { nombre: "EL RECODO", CP: "P3611" },
  { nombre: "ESPERANZA", CP: "P3611" },
  { nombre: "GARCETE CUE", CP: "P3610" },
  { nombre: "ISLA APANDO", CP: "P3611" },
  { nombre: "ISLA PUEN", CP: "P3611" },
  { nombre: "ISLA YOBAI GUAZU", CP: "P3613" },
  { nombre: "LA FRONTERA", CP: "P3611" },
  { nombre: "LAGUNA BLANCA", CP: "P3613" },
  { nombre: "LAGUNA NAICK-NECK", CP: "P3611" },
  { nombre: "LOMA HERMOSA", CP: "P3611" },
  { nombre: "LOMA TUYUTU", CP: "P3613" },
  { nombre: "LUCERO CUE", CP: "P3611" },
  { nombre: "MARCA M", CP: "P3613" },
  { nombre: "MARTIN FIERRO", CP: "P3611" },
  { nombre: "PALMA SOLA", CP: "P3611" },
  { nombre: "PRESIDENTE AVELLANEDA", CP: "P3611" },
  { nombre: "PUERTO PILCOMAYO", CP: "P3611" },
  { nombre: "PUNTA GUIA", CP: "P3611" },
  { nombre: "RIACHO HE-HE", CP: "P3611" },
  { nombre: "SIETE PALMAS", CP: "P3613" },
  { nombre: "SOL DE MAYO", CP: "P3611" },
  { nombre: "SOL DE MAYO", CP: "P3613" },
  { nombre: "TORO PASO", CP: "P3611" },
  { nombre: "JOSE MARIA PAZ", CP: "P3611" },
  { nombre: "PASO ANGELITO", CP: "P3611" },
  { nombre: "RODEO TAPITI", CP: "P3613" },
  { nombre: "RIACHO NEGRO", CP: "P3610" },
  { nombre: "9 DE JULIO", CP: "P3606" },
  { nombre: "BAÑADERO", CP: "P3603" },
  { nombre: "CABO 1° NOROÑA", CP: "P3603" },
  { nombre: "CAMPO HARDY", CP: "P3603" },
  { nombre: "CAMPO SAN RAFAEL", CP: "P3609" },
  { nombre: "PIRANE", CP: "P3606" },
  { nombre: "COLONIA 5 DE OCTUBRE", CP: "P3606" },
  { nombre: "COLONIA CAMPO VILLAFAÑE", CP: "P3601" },
  { nombre: "COLONIA CAMPO VILLAFAÑE", CP: "P3601" },
  { nombre: "COLONIA EL ALBA", CP: "P3603" },
  { nombre: "COLONIA EL CHAJA", CP: "P3609" },
  { nombre: "COLONIA EL COMIENZO", CP: "P3608" },
  { nombre: "COLONIA EL DESAGUADERO", CP: "P3603" },
  { nombre: "COLONIA EL OLVIDO", CP: "P3609" },
  { nombre: "COLONIA EL PALMAR", CP: "P3603" },
  { nombre: "COLONIA EL PROGRESO", CP: "P3608" },
  { nombre: "COLONIA EL RINCON", CP: "P3601" },
  { nombre: "COLONIA EL ZAPALLITO", CP: "P3603" },
  { nombre: "COLONIA ESPERANZA", CP: "P3609" },
  { nombre: "COLONIA ITATI", CP: "P3601" },
  { nombre: "COLONIA LA DISCIPLINA", CP: "P3606" },
  { nombre: "COLONIA LA UNION", CP: "P3603" },
  { nombre: "COLONIA LOMA SENES", CP: "P3606" },
  { nombre: "COLONIA PAMPA VILLANUEVA", CP: "P3603" },
  { nombre: "COLONIA RIGONATO", CP: "P3606" },
  { nombre: "COLONIA RODA", CP: "P3603" },
  { nombre: "COLONIA SANTA CRUZ", CP: "P3606" },
  { nombre: "COLONIA WEITZEL", CP: "P3603" },
  { nombre: "COPO BLANCO", CP: "P3608" },
  { nombre: "COSTA RIACHO ALAZAN", CP: "P3609" },
  { nombre: "EL ALBA", CP: "P3603" },
  { nombre: "EL BOSQUECILLO", CP: "P3606" },
  { nombre: "EL COATI", CP: "P3606" },
  { nombre: "EL COLORADO", CP: "P3603" },
  { nombre: "EL CORRALITO", CP: "P3606" },
  { nombre: "EL GATO", CP: "P3609" },
  { nombre: "EL GUAJO", CP: "P3606" },
  { nombre: "EL IBAGAY", CP: "P3606" },
  { nombre: "EL PIQUETE", CP: "P3600" },
  { nombre: "EL POI", CP: "P3602" },
  { nombre: "EL RESGUARDO", CP: "P3608" },
  { nombre: "EL SALADILLO", CP: "P3609" },
  { nombre: "EL SALADO", CP: "P3606" },
  { nombre: "ESTERO PATIÑO", CP: "P3608" },
  { nombre: "KILOMETRO 142", CP: "P3609" },
  { nombre: "KILOMETRO 210", CP: "P3602" },
  { nombre: "KILOMETRO 224", CP: "P3603" },
  { nombre: "LA ESPERANZA", CP: "P3606" },
  { nombre: "LA FLORESTA", CP: "P3606" },
  { nombre: "LA LOMA", CP: "P3606" },
  { nombre: "LA PICADITA", CP: "P3609" },
  { nombre: "LA SIRENA", CP: "P3602" },
  { nombre: "LAS CAÑITAS", CP: "P3601" },
  { nombre: "LOMA DEL QUEBRANTO", CP: "P3606" },
  { nombre: "LOS MATACOS", CP: "P3608" },
  { nombre: "LOTE 108 LADRILLERIA", CP: "P3603" },
  { nombre: "LOTE 11", CP: "P3608" },
  { nombre: "LOTE 17-LEGUA A", CP: "P3602" },
  { nombre: "MERCEDES CUE", CP: "P3609" },
  { nombre: "MONTE LINDO", CP: "P3606" },
  { nombre: "MONTE QUEMADO", CP: "P3606" },
  { nombre: "MURUA", CP: "P3606" },
  { nombre: "PALO SANTO", CP: "P3608" },
  { nombre: "PARATODOS", CP: "P3606" },
  { nombre: "PILAGAS III", CP: "P3606" },
  { nombre: "PIRANE", CP: "P3606" },
  { nombre: "POTRERO NORTE", CP: "P3608" },
  { nombre: "POTRERO ÑANDU", CP: "P3608" },
  { nombre: "RACEDO ESCOBAR", CP: "P3602" },
  { nombre: "RODAS", CP: "P3603" },
  { nombre: "VILLA KILOMETRO 213", CP: "P3603" },
  { nombre: "LOMA SENES", CP: "P3606" },
  { nombre: "SOLDADO EDMUNDO SOSA", CP: "P3601" },
  { nombre: "LOTE 219", CP: "P3602" },
  { nombre: "CENTRO FORESTAL PIRANE", CP: "P3606" },
  { nombre: "LA LOMITA", CP: "P3606" },
  { nombre: "LOMA SENES SUR", CP: "P3606" },
  { nombre: "LOTE 31 MAYOR VILLAFAÑE", CP: "P3601" },
  { nombre: "LOMA ALBERDI", CP: "P3606" },
  { nombre: "CAMPO DEL ACHA", CP: "P3636" },
  { nombre: "EL ALAMBRADO", CP: "P3636" },
  { nombre: "EL ALGARROBO", CP: "P3636" },
  { nombre: "EL CHIVIL", CP: "P3636" },
  { nombre: "EL DIVISADERO", CP: "P3636" },
  { nombre: "EL PALMARCITO", CP: "P3636" },
  { nombre: "EL POTRILLO", CP: "P3636" },
  { nombre: "EL ROSARIO", CP: "P3636" },
  { nombre: "EL SILENCIO", CP: "P3636" },
  { nombre: "EL TABIQUE", CP: "P3636" },
  { nombre: "EL TUCUMANCITO", CP: "P3636" },
  { nombre: "LA BREA", CP: "P3636" },
  { nombre: "LA MOCHA", CP: "P3636" },
  { nombre: "LOTE 1", CP: "P3636" },
  { nombre: "LOTE 8", CP: "P3636" },
  { nombre: "MARIA CRISTINA", CP: "P3636" },
  { nombre: "MISION SAN ANDRES", CP: "P3636" },
  { nombre: "PALMAR LARGO", CP: "P3636" },
  { nombre: "PALO SECO", CP: "P3636" },
  { nombre: "POZO CERCADO", CP: "P3636" },
  { nombre: "SAN MARTIN", CP: "P3636" },
  { nombre: "SANTA ROSA", CP: "P3615" },
  { nombre: "SANTA TERESA", CP: "P3636" },
  { nombre: "TRES PALMAS", CP: "P3636" },
  { nombre: "TRES POZOS", CP: "P3636" },
  { nombre: "BARRIO EL FAVORITO", CP: "P3636" },
  { nombre: "EL BREAL", CP: "P3636" },
  { nombre: "EL CHORRO", CP: "P3636" },
  { nombre: "EL CRUCE", CP: "P3636" },
  { nombre: "EL ESTANQUE", CP: "P3636" },
  { nombre: "EL QUEBRACHO", CP: "P3636" },
  { nombre: "EL TRONQUITO", CP: "P3636" },
  { nombre: "LA PAMPA", CP: "P3636" },
  { nombre: "LAS CAÑITAS", CP: "P3636" },
  { nombre: "POZO LA CHIVA", CP: "P3636" },
  { nombre: "SAN MIGUEL", CP: "P3636" },
  { nombre: "COMUNIDAD 7 DE JUNIO", CP: "P3636" },
  { nombre: "VILLA DEVOTO", CP: "P3636" },
  { nombre: "POZO DEL OSO", CP: "P3636" },
  { nombre: "EL SOL", CP: "P3636" },
  { nombre: "POZO CHARATA", CP: "P3636" },
  { nombre: "POZO CABALLO", CP: "P3636" },
  { nombre: "LA BATERIA", CP: "P3636" },
  { nombre: "COMUNIDAD ABORIGEN WICHI", CP: "P3636" },
  { nombre: "LAS PALMITAS", CP: "P3636" },
  { nombre: "COMUNIDAD WICHI OBLITAJ", CP: "P3636" },
  { nombre: "PUERTO IRIGOYEN", CP: "P3636" },
  { nombre: "COMUNIDAD WICHI BARRIO EL COLORADO", CP: "P3636" },
  { nombre: "EL SAUZALITO", CP: "P3636" },
  { nombre: "POSTA ZALAZAR ", CP: "P3636" },
  { nombre: "LAS CAÑITAS", CP: "P3636" },
  { nombre: "COL. SAN JOSE", CP: "P3636" },
];

LocalidadesModel.bulkCreate(localidades)
  .then(() => {
    console.log("Las localidades se han cargado correctamente");
  })
  .catch((error) => {
    console.error("Error al cargar los niveles: ", error);
  });

export default LocalidadesModel;
