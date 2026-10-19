import { useState, useCallback } from 'react';

export function useFaqViewModel() {
  const [perguntaAberta, setPerguntaAberta] = useState(null);

  const togglePergunta = useCallback((id) => {
    setPerguntaAberta(prev => prev === id ? null : id);
  }, []);

  const fecharPergunta = useCallback(() => {
    setPerguntaAberta(null);
  }, []);

  const estaAberta = useCallback((id) => {
    return perguntaAberta === id;
  }, [perguntaAberta]);

  return {
    perguntaAberta,
    togglePergunta,
    fecharPergunta,
    estaAberta
  };
}