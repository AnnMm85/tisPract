describe('ProfTeam', () => {
    it('Сheck_for_mandatory', () => {
        cy.fixture('cypressTest').then(data => {
            cy.log('Переход на страницу регистрации')
            cy.visit(data.main_url)

            cy.log('Проверка на обязательность')

            cy.log('Пустое поле логина')
            cy.get('div[class="form__labels"] input:first')
                .type(data.login)
            cy.get('div[class="form__labels"] input:first').clear();
            cy.get('div[class="form__labels"] div:first div:nth-child(2) input')
                .type(data.email)
            cy.get('div[class="form__labels"] div:first div:nth-child(3) input')
                .type(data.password)
            cy.get('div[class="form__labels"] div:first div:nth-child(4) input')
                .type(data.return_password)
            cy.get('.button__background-color-green').should('be.disabled');

            cy.log('Пустое поле почты')
            cy.get('div[class="form__labels"] input:first')
                .type(data.login)
            cy.get('div[class="form__labels"] div:first div:nth-child(2) input').clear();
            cy.get('.button__background-color-green').should('be.disabled');

            cy.log('Пустое поле пароля')
            cy.get('div[class="form__labels"] div:first div:nth-child(2) input')
                .type(data.email)
            cy.get('div[class="form__labels"] div:first div:nth-child(3) input').clear();
            cy.get('.button__background-color-green').should('be.disabled');


            cy.log('Пустое поле подтверждения пароля')
            cy.get('div[class="form__labels"] div:first div:nth-child(3) input')
                .type(data.password)
            cy.get('div[class="form__labels"] div:first div:nth-child(4) input').clear();
            cy.get('.button__background-color-green').should('be.disabled');
            cy.get('div[class="form__labels"] div:first div:nth-child(4) input')
                .type(data.return_password)

            cy.get('div[class="form__buttons"] div:last button[type="submit"]')
                .click()

            cy.log('Пустое поле фамилии')
            cy.get('div[class="form__labels"] div:nth-child(2) div:nth-child(1) div input')
                .type(data.surname)
            cy.get('div[class="form__labels"] div:nth-child(2) div:nth-child(1) div input').clear();

            cy.get('div[class="form__labels"] div:nth-child(2) div:nth-child(2) input')
                .type(data.name)
            cy.get('div[class="form__labels"] div:nth-child(2) div:nth-child(3) input')
                .type(data.patronymic)
            cy.get('.button__background-color-green').should('be.disabled');

            cy.log('Пустое поле имени')
            cy.get('div[class="form__labels"] div:nth-child(2) div:nth-child(1) div input')
                .type(data.surname)
            cy.get('div[class="form__labels"] div:nth-child(2) div:nth-child(2) input').clear();
            cy.get('.button__background-color-green').should('be.disabled');
        });
    });

    it('Invalid_characters', () => {
        cy.fixture('cypressTest').then(data => {
            cy.log('Переход на страницу регистрации')
            cy.visit(data.main_url)

            cy.log('Негативный сценарий c недопустимыми символами')

            cy.log('Логин c недопустимыми символами')
            cy.get('div[class="form__labels"] input:first')
                .type(data.login_fail_number)
            cy.get('[data-v-a144256a]').should("exist");
            cy.get('div[class="form__labels"] input:first').clear().type(data.login_fail_symbol);
            cy.get('[data-v-a144256a]').should("exist");
            cy.get('div[class="form__labels"] input:first').clear().type(data.login_fail_whitespace);
            cy.get('[data-v-a144256a]').should("exist");
            cy.get('div[class="form__labels"] input:first').clear().type(data.login);

            cy.log('Почта c недопустимыми символами')
            cy.get('div[class="form__labels"] div:first div:nth-child(2) input')
                .type(data.email_fail_NoDogSymbol)
            cy.get('[data-v-a144256a]').should("exist");
            cy.get('div[class="form__labels"] div:first div:nth-child(2) input').clear().type(data.email_fail_pointStart);
            cy.get('[data-v-a144256a]').should("exist");
            cy.get('div[class="form__labels"] div:first div:nth-child(2) input').clear().type(data.email_fail_pointFinish);
            cy.get('[data-v-a144256a]').should("exist");
            cy.get('div[class="form__labels"] div:first div:nth-child(2) input').clear().type(data.email_fail_withoutName);
            cy.get('[data-v-a144256a]').should("exist");
            cy.get('div[class="form__labels"] div:first div:nth-child(2) input').clear().type(data.email_fail_morePoint);
            cy.get('[data-v-a144256a]').should("exist");
            cy.get('div[class="form__labels"] div:first div:nth-child(2) input').clear().type(data.email_fail_moreDogSymbol);
            cy.get('[data-v-a144256a]').should("exist");
            cy.get('div[class="form__labels"] div:first div:nth-child(2) input').clear().type(data.email_fail_symbol);
            cy.get('[data-v-a144256a]').should("exist");
            cy.get('div[class="form__labels"] div:first div:nth-child(2) input').clear().type(data.email);

            cy.log('Пароль c недопустимыми символами')
            cy.get('div[class="form__labels"] div:first div:nth-child(3) input')
                .type(data.password_fail_lower)
            cy.get('[data-v-a144256a]').should("exist");
            cy.get('div[class="form__labels"] div:first div:nth-child(3) input').clear().type(data.password_fail_upper);
            cy.get('[data-v-a144256a]').should("exist");
            cy.get('div[class="form__labels"] div:first div:nth-child(3) input').clear().type(data.password_fail_symbol);
            cy.get('[data-v-a144256a]').should("exist");
            cy.get('div[class="form__labels"] div:first div:nth-child(3) input').clear().type(data.password);

            cy.log('Потдверждение пароля с значением отличным от пароля')
            cy.get('div[class="form__labels"] div:first div:nth-child(4) input')
                .type(data.return_password_fail_NoReturn)
            cy.get('[data-v-a144256a]').should("exist");
            cy.get('div[class="form__labels"] div:first div:nth-child(4) input').clear().type(data.return_password);

            cy.get('div[class="form__buttons"] div:last button[type="submit"]')
                .click()

            cy.log('ФИО с недопустимыми символами')
            cy.get('div[class="form__labels"] div:nth-child(2) div:nth-child(1) div input')
                .type(data.surname_fail_symbol)
            cy.get('[data-v-a144256a]').should("exist");
            cy.get('div[class="form__labels"] div:nth-child(2) div:nth-child(1) div input').clear().type(data.surname);

            cy.get('div[class="form__labels"] div:nth-child(2) div:nth-child(2) input')
                .type(data.name_fail_symbol)
            cy.get('[data-v-a144256a]').should("exist");
            cy.get('div[class="form__labels"] div:nth-child(2) div:nth-child(2) input').clear().type(data.name);

            cy.get('div[class="form__labels"] div:nth-child(2) div:nth-child(3) input')
                .type(data.patronymic_fail_symbol)
            cy.get('[data-v-a144256a]').should("exist");
            cy.get('div[class="form__labels"] div:nth-child(2) div:nth-child(3) input').clear().type(data.patronymic);
        });
    });
    it('Invalid_emoji', () => {
        cy.fixture('cypressTest').then(data => {
            cy.log('Переход на страницу регистрации')
            cy.visit(data.main_url)

            cy.log('Негативный сценарий c недопустимыми эмоджи')

            cy.log('Логин c недопустимыми эмоджи')
            cy.get('div[class="form__labels"] input:first')
                .type(data.login_fail_emoji)
            cy.get('[data-v-a144256a]').should("exist");
            cy.get('div[class="form__labels"] input:first').clear().type(data.login);

            cy.log('Почта c недопустимыми эмоджи')
            cy.get('div[class="form__labels"] div:first div:nth-child(2) input')
                .type(data.email_fail_emoji)
            cy.get('[data-v-a144256a]').should("exist");
            cy.get('div[class="form__labels"] div:first div:nth-child(2) input').clear().type(data.email);

            cy.get('div[class="form__labels"] div:first div:nth-child(3) input')
                .type(data.password)
            cy.get('div[class="form__labels"] div:first div:nth-child(4) input')
                .type(data.return_password)
            cy.get('div[class="form__buttons"] div:last button[type="submit"]')
                .click()

            cy.log('ФИО с недопустимыми эмоджи')
            cy.get('div[class="form__labels"] div:nth-child(2) div:nth-child(1) div input')
                .type(data.surname_fail_emoji)
            cy.get('[data-v-a144256a]').should("exist");
            cy.get('div[class="form__labels"] div:nth-child(2) div:nth-child(1) div input').clear().type(data.surname);

            cy.get('div[class="form__labels"] div:nth-child(2) div:nth-child(2) input')
                .type(data.name_fail_emoji)
            cy.get('[data-v-a144256a]').should("exist");
            cy.get('div[class="form__labels"] div:nth-child(2) div:nth-child(2) input').clear().type(data.name);

            cy.get('div[class="form__labels"] div:nth-child(2) div:nth-child(3) input')
                .type(data.patronymic_fail_emoji)
            cy.get('[data-v-a144256a]').should("exist");
            cy.get('div[class="form__labels"] div:nth-child(2) div:nth-child(3) input').clear().type(data.patronymic);
        });
    });
    it('Invalid_language', () => {
        cy.fixture('cypressTest').then(data => {
            cy.log('Переход на страницу регистрации')
            cy.visit(data.main_url)

            cy.log('Негативный сценарий c недопустимым языком')

            cy.log('Логин c недопустимым языком')
            cy.get('div[class="form__labels"] input:first')
                .type(data.login_fail_language)
            cy.get('[data-v-a144256a]').should("exist");
            cy.get('div[class="form__labels"] input:first').clear().type(data.login);

            cy.log('Почта c недопустимым языком')
            cy.get('div[class="form__labels"] div:first div:nth-child(2) input')
                .type(data.email_fail_language)
            cy.get('[data-v-a144256a]').should("exist");
            cy.get('div[class="form__labels"] div:first div:nth-child(2) input').clear().type(data.email);

            cy.log('Пароль c недопустимым языком//не проходит')
            cy.get('div[class="form__labels"] div:first div:nth-child(3) input')
                .type(data.password)
            cy.get('div[class="form__labels"] div:first div:nth-child(4) input')
                .type(data.return_password)

            cy.get('div[class="form__buttons"] div:last button[type="submit"]')
                .click()

            cy.log('ФИО с недопустимым языком')
            cy.get('div[class="form__labels"] div:nth-child(2) div:nth-child(1) div input')
                .type(data.surname_fail_language)
            cy.get('[data-v-a144256a]').should("exist");
            cy.get('div[class="form__labels"] div:nth-child(2) div:nth-child(1) div input').clear().type(data.surname);

            cy.get('div[class="form__labels"] div:nth-child(2) div:nth-child(2) input')
                .type(data.name_fail_symbol)
            cy.get('[data-v-a144256a]').should("exist");
            cy.get('div[class="form__labels"] div:nth-child(2) div:nth-child(2) input').clear().type(data.name);

            cy.get('div[class="form__labels"] div:nth-child(2) div:nth-child(3) input')
                .type(data.patronymic_fail_language)
            cy.get('[data-v-a144256a]').should("exist");
            cy.get('div[class="form__labels"] div:nth-child(2) div:nth-child(3) input').clear().type(data.patronymic);
        });
    });

    it('Invalid_duplicate', () => {
        cy.fixture('cypressTest').then(data => {
            cy.log('Переход на страницу регистрации')
            cy.visit(data.main_url)

            cy.log('Негативный сценарий c недопустимым дупликатом')

            cy.log('Логин c недопустимым дупликатом')
            cy.get('div[class="form__labels"] input:first')
                .type(data.login_fail_duplicate)
            cy.get('div[class="form__labels"] div:first div:nth-child(2) input')
                .type(data.email);
            cy.get('div[class="form__labels"] div:first div:nth-child(3) input')
                .type(data.password)
            cy.get('div[class="form__labels"] div:first div:nth-child(4) input')
                .type(data.return_password)
            cy.get('div[class="form__buttons"] div:last button[type="submit"]')
                .click()
            cy.get('[data-v-a144256a]').should("exist");
            cy.get('div[class="form__labels"] input:first').clear().type(data.login);

            cy.log('Почта c недопустимым дупликатом')
            cy.get('div[class="form__labels"] input:first').clear().type(data.login);
            cy.get('div[class="form__labels"] div:first div:nth-child(2) input').clear().type(data.email_fail_dublicate)
            cy.get('div[class="form__labels"] div:first div:nth-child(3) input')
                .type(data.password)
            cy.get('div[class="form__labels"] div:first div:nth-child(4) input')
                .type(data.return_password)
            cy.get('div[class="form__buttons"] div:last button[type="submit"]')
                .click()
            cy.get('[data-v-a144256a]').should("exist");
            cy.get('div[class="form__labels"] div:first div:nth-child(2) input').clear().type(data.email);
            cy.get('div[class="form__buttons"] div:last button[type="submit"]')
                .click()

            cy.get('div[class="form__labels"] div:nth-child(2) div:nth-child(1) div input')
                .type(data.surname)
            cy.get('div[class="form__labels"] div:nth-child(2) div:nth-child(2) input')
                .type(data.name)
            cy.get('div[class="form__labels"] div:nth-child(2) div:nth-child(3) input')
                .type(data.patronymic)


        });
    });
});