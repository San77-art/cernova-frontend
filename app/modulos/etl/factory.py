# app/modulos/etl/factory.py

from app.modulos.etl.interfaces import ProcessadorNota
from app.modulos.etl.processadores import (
    ProcessadorNFe,
    ProcessadorNFCe,
    ProcessadorCTe
)


class ProcessadorFactory:
    """
    FACTORY METHOD!
    
    Esta classe decide qual processador criar baseado no tipo.
    O cliente NÃO precisa saber qual é.
    """
    
    # Registry (registro) de tipos disponíveis
    _processadores = {
        "NF-e": ProcessadorNFe,
        "NFC-e": ProcessadorNFCe,
        "CT-e": ProcessadorCTe,
    }
    
    @staticmethod
    def criar(tipo: str) -> ProcessadorNota:
        """
        FACTORY METHOD - O Método Factory!
        
        Recebe: tipo de documento (string)
        Retorna: Processador apropriado (interface ProcessadorNota)
        
        Exemplo:
        >>> processador = ProcessadorFactory.criar("NF-e")
        >>> print(processador.tipo_documento)
        "NF-e"
        """
        
        # Verificar se tipo é válido
        if tipo not in ProcessadorFactory._processadores:
            tipos_disponiveis = list(ProcessadorFactory._processadores.keys())
            raise ValueError(
                f"Tipo '{tipo}' não suportado! "
                f"Use: {tipos_disponiveis}"
            )
        
        # Pegar a classe apropriada do registry
        classe_processador = ProcessadorFactory._processadores[tipo]
        
        # Criar e retornar instância
        return classe_processador()
    
    @staticmethod
    def registrar(tipo: str, classe):
        """
        Registrar novo tipo de processador DINAMICAMENTE
        
        Exemplo:
        >>> class ProcessadorMDFe(ProcessadorNota):
        ...     # implementação
        ...     pass
        >>> ProcessadorFactory.registrar("MDF-e", ProcessadorMDFe)
        """
        
        # Validar que é subclasse de ProcessadorNota
        if not issubclass(classe, ProcessadorNota):
            raise TypeError(
                f"Classe {classe} deve herdar de ProcessadorNota"
            )
        
        ProcessadorFactory._processadores[tipo] = classe
    
    @staticmethod
    def obter_tipos_suportados():
        """
        Retorna lista de tipos suportados
        
        Exemplo:
        >>> tipos = ProcessadorFactory.obter_tipos_suportados()
        >>> print(tipos)
        ['NF-e', 'NFC-e', 'CT-e']
        """
        return list(ProcessadorFactory._processadores.keys())