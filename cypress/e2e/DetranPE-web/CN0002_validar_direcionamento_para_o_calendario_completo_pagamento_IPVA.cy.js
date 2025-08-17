import TelaInicial from '../../support/Actions/TelaInicial';

describe('CN0002 - validar direcionamento para o calendario completo - pagamento IPVA', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })

  it('Validar direcionamento para licenciamento e IPVA pelo card', () => {
    TelaInicial.acessarTelaInicial();
    TelaInicial.validarAcessoATelaInicial();
    TelaInicial.validarCardIpva();
    TelaInicial.acessarLicenEIpvaPeloCard();
  });

});