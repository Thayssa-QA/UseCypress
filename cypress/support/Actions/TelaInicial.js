import { ElementosTelaInicial } from '../Elementos/ElementosTelaInicial';

export default {
acessarTelaInicial() {
    cy.visit('https://www.detran.pe.gov.br/#');
    cy.title().should('eq', 'DETRAN-PE | Departamento Estadual de Trânsito de Pernambuco - DETRAN-PE')
},

validarAcessoATelaInicial() {
    cy.get(ElementosTelaInicial.logoDetran).should('be.visible');
    cy.get(ElementosTelaInicial.logoPE).should('be.visible');
    this.aceitarCookies();
    cy.get(ElementosTelaInicial.carrosel).should('have.length.greaterThan', 0);
    cy.get(ElementosTelaInicial.menubar).should('be.visible');
    cy.get(ElementosTelaInicial.menubar).each((li) => {
    cy.wrap(li).should('not.be.empty');
  });
    cy.get(ElementosTelaInicial.areaAcessibilidade).should('be.visible');
    cy.screenshot('Tela Inicial');
},

aceitarCookies() {
  cy.get('body').then(($body) => {
    if ($body.find(ElementosTelaInicial.btnCookies).is(':visible')) {
      cy.get(ElementosTelaInicial.btnCookies).click();
    }
  });
},

validarCardIpva() {
    cy.get(ElementosTelaInicial.cardIpva).should('be.visible');
    cy.get(ElementosTelaInicial.cardIpva).should('contain.text', 'Prazo pagamento IPVA 2025');
    cy.get(ElementosTelaInicial.cardIpvaTable).should('have.length', 5);
    cy.get(ElementosTelaInicial.linkCalendarioIpva).should('be.visible');
    cy.get(ElementosTelaInicial.linkCalendarioIpva).should('have.attr', 'href', 'https://www.detran.pe.gov.br/licenciamento-ipva');
    cy.get(ElementosTelaInicial.linkCalendarioIpva).should('contain.text', 'Confira aqui o calendário completo.');
},

acessarLicenEIpvaPeloCard(){
    cy.contains(ElementosTelaInicial.linkCalendarioIpva, 'Confira aqui o calendário completo.').click();
    cy.url().should('include', 'licenciamento-ipva');
    cy.title().should('eq', 'Licenciamento IPVA - DETRAN-PE');
    cy.screenshot('Licenciamento e IPVA');
},

acessarAreadeAcessibilidade(){
    cy.get(ElementosTelaInicial.areaAcessibilidade).click();
    cy.url().should('include', 'acessibilidade');
    cy.title().should('eq', 'Acessibilidade - DETRAN-PE');
    cy.screenshot('Acessibilidade');
},
}