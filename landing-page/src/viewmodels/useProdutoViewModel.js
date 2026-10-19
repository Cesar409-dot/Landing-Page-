import { useState, useCallback, useMemo } from 'react';
import { produto, cenarios, precos } from '../models/produtoModel';
import { beneficios } from '../models/beneficiosModel';
import { avaliacoes } from '../models/avaliacoesModel';
import { faq } from '../models/faqModel';

export function useProdutoViewModel() {
  const [cenarioSelecionado, setCenarioSelecionado] = useState(cenarios[0].id);

  const selecionarCenario = useCallback((id) => {
    setCenarioSelecionado(id);
  }, []);

  const cenarioAtual = useMemo(() => 
    cenarios.find(c => c.id === cenarioSelecionado) || cenarios[0], 
    [cenarioSelecionado]
  );

  return {
    produto,
    cenarios,
    precos,
    beneficios,
    avaliacoes,
    faq,
    cenarioSelecionado,
    selecionarCenario,
    cenarioAtual
  };
}