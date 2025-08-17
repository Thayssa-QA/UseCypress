import TelaInicial from '../../support/Actions/TelaInicial';

describe('CN0001 - validar presença do card de calendario IPVA', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })

  it('Validar acesso inicial e Card de Ipva', () => {
    TelaInicial.acessarTelaInicial();
    TelaInicial.validarAcessoATelaInicial()
    TelaInicial.validarCardIpva();
  });
});