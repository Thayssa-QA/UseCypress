import TelaInicial from '../../support/Actions/TelaInicial';

describe('CN0003 - validar acesso a tela de acessibilidade', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })

  it('Validar acesso a tela de acessibilidade', () => {
    TelaInicial.acessarTelaInicial();
    TelaInicial.validarAcessoATelaInicial();
    TelaInicial.acessarAreadeAcessibilidade();
  });

});