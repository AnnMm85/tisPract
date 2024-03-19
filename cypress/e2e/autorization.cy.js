describe('ProfTeam', () => {
    it('checkAuthorizationForMandatory', () => {
        cy.fixture('cypressTest').then(data => {
            cy.log('Переход на страницу входа')
            cy.visit('https://dev.profteam.su/login')

            cy.log('Проверка на обязательность')

            cy.log('Пустое поле логина')
            cy.get('.form-input--text')
                .type(data.login)
            cy.get('.form-input--text').clear();
            cy.get('.form-input--password')
                .type(data.password)
            cy.get('.button__background-color-green').should('be.disabled');

            cy.log('Пустое поле пароля')
            cy.get('.form-input--text')
                .type(data.login)
            cy.get('.form-input--password').clear();
            cy.get('.button__background-color-green').should('be.disabled');
            cy.get('.form-input--password')
                .type(data.password)
            cy.get('.button__background-color-green').click();
        });
    });
    it('invalidBdHave', () => {
        cy.fixture('cypressTest').then(data => {
            cy.visit('https://dev.profteam.su/login')

            cy.log('Негативный сценарий с логином и паролем, которых нет в БД')

            cy.log('Логин, которого нет в БД')
            cy.get('.form-input--text').type(data.login_fail)
            cy.get('.form-input--password').type(data.password)
            cy.get('.button__background-color-green').click();
            cy.get('[data-v-a144256a]').should("exist");

            cy.log('Пароль, которого нет в БД')
            cy.get('.form-input--text').clear().type(data.login)
            cy.get('.form-input--password').clear().type(data.password_fail)
            cy.get('.button__background-color-green').click();
            cy.get('[data-v-a144256a]').should("exist");
            cy.get('.form-input--password').clear().type(data.password)
            cy.get('.button__background-color-green').click();
        });
    });

    it('invalidEmoji', () => {
        cy.fixture('cypressTest').then(data => {
            cy.visit('https://dev.profteam.su/login')
            cy.log('Негативный сценарий c недопустимыми эмоджи')

            cy.log('Логин c недопустимыми эмоджи')
            cy.get('.form-input--text')
                .type(data.login_fail_emoji)
            cy.get('.form-input--password').type(data.password)
            cy.get('.button__background-color-green').click();
            cy.get('[data-v-a144256a]').should("exist");

            cy.log('Пароль c недопустимыми эмоджи')
            cy.get('.form-input--text').clear().type(data.login)
            cy.get('.form-input--password').clear().type(data.password_fail_emoji)
            cy.get('.button__background-color-green').click();
            cy.get('[data-v-a144256a]').should("exist");
            cy.log('Вход позитив')
            cy.get('.form-input--password').clear().type(data.password)
            cy.get('.button__background-color-green').click();
        });
    });
})