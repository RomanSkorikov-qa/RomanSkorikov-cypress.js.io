describe('Проверка покупки нового аватара', function () {
    it('e2e тест на покупку нового аватара для тренера', function () {
        cy.visit('https://pokemonbattle.ru/');  // переходим на сайт https://pokemonbattle.ru/
        cy.get('input[id="k_email"]').type('USER_LOGIN@gmail.com'); // вводим логин (на скрине был мой логин, поэтому прогон работал)
        cy.get('input[id="k_password"]').type('USER_PASSWORD');// вводим пароль
        cy.get('button[type="submit"]').click();// нажимаем кнопку Подтвердить
        cy.wait(2000); // ждем 2000мс
        cy.get('.header_card_trainer').click();            // Клик в шапке на аву тренера
        cy.wait(2000);// ждем 2000мс
        cy.get('.k_mobile > :nth-child(5) > #dropdown > img').click(); // нажимаем кнопку Смена аватара
        cy.get('.available > button').first().click();   // кликаем Купить у первого доступного аватара
        cy.get('.card_number').type('2201382000000013'); // вводим номер карты
        cy.get('.card_csv').type('125');// вводим CVV карты
        cy.get('.card_date').type('10/26');// вводим срок действия карты
        cy.get('.card_name').type('roman skorikov');// вводим имя владельца действия карты
        cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click();// нажимаем кнопку Оплатить
        cy.wait(2000);// ждем 2000мс
        cy.get('.threeds_number').type('56456');// вводим код подтверждения СМС
        cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click();// нажимаем кнопку Оплатить
        cy.contains('Покупка прошла успешно').should('be.visible');// проверяем наличие и видимость сообщения об успешной покупке
    });
});