import { useState, useCallback } from 'react';
import { cenarios } from '../models/produtoModel';

export function useLandingPageViewModel() {
  const [menuAberto, setMenuAberto] = useState(false);
  const [cenarioSelecionado, setCenarioSelecionado] = useState(cenarios[0].id);
  const [modalAberto, setModalAberto] = useState(false);
  const [interesseConfirmado, setInteresseConfirmado] = useState(false);

  const toggleMenu = useCallback(() => {
    setMenuAberto(prev => !prev);
  }, []);

  const fecharMenu = useCallback(() => {
    setMenuAberto(false);
  }, []);

  const selecionarCenario = useCallback((id) => {
    setCenarioSelecionado(id);
  }, []);

  const abrirModal = useCallback(() => {
    setModalAberto(true);
    setInteresseConfirmado(false);
  }, []);

  const fecharModal = useCallback(() => {
    setModalAberto(false);
    setInteresseConfirmado(false);
  }, []);

  const confirmarInteresse = useCallback(() => {
    setInteresseConfirmado(true);
  }, []);

  const cenarioAtual = cenarios.find(c => c.id === cenarioSelecionado) || cenarios[0];

  return {
    menuAberto,
    toggleMenu,
    fecharMenu,
    cenarioSelecionado,
    selecionarCenario,
    cenarioAtual,
    modalAberto,
    abrirModal,
    fecharModal,
    interesseConfirmado,
    confirmarInteresse
  };
}