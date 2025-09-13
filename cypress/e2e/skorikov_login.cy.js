describe('Проверка авторизации', function () {

    it('1. Верный пароль и верный логин', function () {
        cy.visit('https://login.qa.studio/'); // зашли на сайт
        cy.get('#mail').type('german@dolnikov.ru'); // нашли инпут логин и ввели его
        cy.get('#pass').type('qa_one_love1'); // нашли инпут пароль и ввели его
        cy.get('#loginButton').click(); // нашли и нажали кнопку войти
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // вижу текст авторазация прошла успешна 
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // крестик присутствует и он виден пользователю 
    })
    it('2. Проверка логики восстановления пароля', function () {
        cy.visit('https://login.qa.studio/'); // зашли на сайт
        cy.get('#forgotEmailButton').click(); // нашли и нажали кнопку забыли пароль
        cy.get('#mailForgot').type('german@dolnikov.ru'); // нашли инпут для ввода почты, куда будет отправлена дальшнейшая инстркуция и ввели ее
        cy.get('#restoreEmailButton').click();// нажали кнопку отправить код
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');// вижу текст Успешно отправили пароль на e-mail
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');// крестик присутствует и он виден пользователю 
    })
    it('3. Неверный пароль и верный логин', function () {
        cy.visit('https://login.qa.studio/'); // зашли на сайт
        cy.get('#mail').type('german@dolnikov.ru'); // нашли инпут логин и ввели его
        cy.get('#pass').type('141414'); // нашли инпут пароль и ввели его (неверный)
        cy.get('#loginButton').click(); // нашли и нажали кнопку войти
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // вижу текст такого логина или пароля нет
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // крестик присутствует и он виден пользователю 
    })
    it('4. Неверный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio/'); // зашли на сайт
        cy.get('#mail').type('german@dolnikov5555.ru'); // нашли инпут логин и ввели его (с ошибкой)
        cy.get('#pass').type('qa_one_love1'); // нашли инпут пароль и ввели его (неверный)
        cy.get('#loginButton').click(); // нашли и нажали кнопку войти
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // вижу текст такого логина или пароля нет
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // крестик присутствует и он виден  пользователю 
    })
    it('5. Кейс валидации', function () {
        cy.visit('https://login.qa.studio'); // зашли на сайт
        cy.get('#mail').type('germandolnikov.ru'); // нашли инпут логин и ввели его (без @)
        cy.get('#pass').type('iLoveqastudio'); // нашли инпут пароль и ввели его
        cy.get('#loginButton').click(); // нашли и нажали кнопку войти
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // вижу текст Нужно исправить проблему валидации
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // крестик присутствует и он виден пользователю 
    })
    it('6. Приведение к строчным буквам', function () {
        cy.visit('https://login.qa.studio/'); // зашли на сайт
        cy.get('#mail').type('GerMan@Dolnikov.ru'); // нашли инпут логин и ввели его
        cy.get('#pass').type('qa_one_love1'); // нашли инпут пароль и ввели его
        cy.get('#loginButton').click(); // нашли и нажали кнопку войти
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // вижу текст авторазация прошла успешна 
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // крестик присутствует и он виден пользователю 
    })
})