import {useRef, useState} from 'react';

import { Operadores } from '../enums';

export const useCalculadora = () => {
  const [numero, setNumero] = useState('0');
  const [numeroAnterior, setNumeroAnterior] = useState('0');

  const ultimaOperacion = useRef<Operadores>();

  const limpiar = (): void => {
    setNumero('0');
    setNumeroAnterior('0');
  };

  const armarNumero = (numeroTexto: string): void => {
    if (numero.includes('.') && numeroTexto === '.') return;

    if (numero.startsWith('0') || numero.startsWith('-0')) {
      if (numeroTexto === '.') {
        setNumero(numero + numeroTexto);
      } else if (numeroTexto === '0' && numero.includes('.')) {
        setNumero(numero + numeroTexto);
      } else if (numeroTexto !== '0' && !numero.includes('.')) {
        setNumero(numeroTexto);
      } else if (numeroTexto === '0' && !numero.includes('.')) {
        setNumero(numero);
      } else {
        setNumero(numero + numeroTexto);
      }
    } else {
      setNumero(numero + numeroTexto);
    }
  };

  const positivoNegativo = (): void => {
    if (numero.includes('-')) {
      setNumero(numero.replace('-', ''));
    } else {
      setNumero('-' + numero);
    }
  };

  const eliminar = (): void => {
    let negativo: string = '';
    let numeroTemp: string = numero;

    if (numero.includes('-')) {
      negativo = '-';
      numeroTemp = numero.substr(1);
    }

    if (numeroTemp.length > 1) {
      setNumero(negativo + numeroTemp.slice(0, -1));
    } else {
      setNumero('0');
    }
  };

  const cambiarNumPorAnterior = (): void => {
    if (numero.endsWith('.')) {
      setNumeroAnterior(numero.slice(0, -1));
    } else {
      setNumeroAnterior(numero);
    }

    setNumero('0');
  };

  const btnDividir = (): void => {
    cambiarNumPorAnterior();
    ultimaOperacion.current = Operadores.dividir;
  };

  const btnMultiplicar = (): void => {
    cambiarNumPorAnterior();
    ultimaOperacion.current = Operadores.multiplicar;
  };

  const btnRestar = (): void => {
    cambiarNumPorAnterior();
    ultimaOperacion.current = Operadores.resta;
  };

  const btnSumar = (): void => {
    cambiarNumPorAnterior();
    ultimaOperacion.current = Operadores.suma;
  };

  const calcular = (): void => {
    const numero1 = parseInt(numero);
    const numero2 = parseInt(numeroAnterior);

    if (numero1 === 0 && numero2 === 0) {
      limpiar();
      return;
    }

    switch (ultimaOperacion.current) {
      case Operadores.suma:
        setNumero(`${numero1 + numero2}`);
        break;
      case Operadores.resta:
        setNumero(`${numero2 - numero1}`);
        break;
      case Operadores.multiplicar:
        setNumero(`${numero1 * numero2}`);
        break;
      case Operadores.dividir:
        setNumero(`${numero2 / numero1}`);
        break;
    }

    setNumeroAnterior('0');
  };

  return {
    limpiar,
    armarNumero,
    positivoNegativo,
    eliminar,
    cambiarNumPorAnterior,
    btnDividir,
    btnSumar,
    btnRestar,
    btnMultiplicar,
    calcular,
    numero,
    numeroAnterior
  };
};
