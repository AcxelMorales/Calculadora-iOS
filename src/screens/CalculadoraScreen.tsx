import {Text, View} from 'react-native';

import {Boton} from '../components/Boton';

import {styles} from '../theme/AppTheme';

import {useCalculadora} from '../hooks/useCalculadora';

const CalculadoraScreen = () => {
  const {
    limpiar,
    positivoNegativo,
    eliminar,
    btnDividir,
    armarNumero,
    btnMultiplicar,
    btnRestar,
    btnSumar,
    calcular,
    numero,
    numeroAnterior,
  } = useCalculadora();

  return (
    <View style={styles.resultadoContainer}>
      {numeroAnterior !== '0' && (
        <Text style={styles.resultadoPequeno}>{numeroAnterior}</Text>
      )}
      <Text style={styles.resultado} numberOfLines={1} adjustsFontSizeToFit>
        {numero}
      </Text>

      <View style={styles.fila}>
        <Boton texto="C" color="#9B9B9B" accion={limpiar} />
        <Boton texto="+/-" color="#9B9B9B" accion={positivoNegativo} />
        <Boton texto="del" color="#9B9B9B" accion={eliminar} />
        <Boton texto="/" color="#FF9427" accion={btnDividir} />
      </View>
      <View style={styles.fila}>
        <Boton texto="7" accion={armarNumero} />
        <Boton texto="8" accion={armarNumero} />
        <Boton texto="9" accion={armarNumero} />
        <Boton texto="x" color="#FF9427" accion={btnMultiplicar} />
      </View>
      <View style={styles.fila}>
        <Boton texto="4" accion={armarNumero} />
        <Boton texto="5" accion={armarNumero} />
        <Boton texto="6" accion={armarNumero} />
        <Boton texto="-" color="#FF9427" accion={btnRestar} />
      </View>
      <View style={styles.fila}>
        <Boton texto="1" accion={armarNumero} />
        <Boton texto="2" accion={armarNumero} />
        <Boton texto="3" accion={armarNumero} />
        <Boton texto="+" color="#FF9427" accion={btnSumar} />
      </View>
      <View style={styles.fila}>
        <Boton texto="0" ancho accion={armarNumero} />
        <Boton texto="." accion={armarNumero} />
        <Boton texto="=" color="#FF9427" accion={calcular} />
      </View>
    </View>
  );
};

export default CalculadoraScreen;
