Feature: Crear cliente en Siigo
  Scenario: Login y creación de un cliente
    Given el usuario navega a la página de login
    When inicia sesión con usuario y contraseña válidos
    And crea un nuevo cliente con datos
    Then debería ver un mensaje de confirmación
