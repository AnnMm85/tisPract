describe('Cypress Tests', () => {
    it('None-existent login test', () => {
        cy.fixture('cypressTests').then(data => {
            cy.log('Переход на страницу авторизации')
            cy.visit(data.main_url)

            cy.log('Ввод несуществующего логина')
            cy.get('input[id="passp-field-login"]')
                .type(data.none_existent_login)

            cy.log('Клик по кнопке "Войти"')
            cy.get('div[class="passp-button passp-sign-in-button"] button[type="submit"]')
                .click()

            cy.log('Проверка что появился элемент сигнализирующий об ошибке')
            cy.get('div[class="passp-form-field_error"]')
                .should('exist')
        })
    })

    it('None-existent password test', () => {
        cy.fixture('cypressTests').then(data => {
            cy.log('Переход на страницу авторизации')
            cy.visit(data.main_url)

            cy.log('Ввод логина')
            cy.get('input[id="passp-field-login"]')
                .type(data.login)

            cy.log('Клик по кнопке "Войти"')
            cy.get('div[class="passp-button passp-sign-in-button"] button[type="submit"]')
                .click()
            cy.wait(2000);

            cy.log('Ввод несуществующего пароля')
            cy.get('input[id="passp-field-passwd"]')
                .type(data.none_existent_password)

            cy.log('Клик по кнопке "Войти"')
            cy.get('div[class="passp-button passp-sign-in-button"] button[type="submit"]')
                .click()

            cy.log('Проверка что появился элемент сигнализирующий об ошибке')
            cy.get('div[class="passp-form-field_error"]')
                .should('exist')
        })
    })
});