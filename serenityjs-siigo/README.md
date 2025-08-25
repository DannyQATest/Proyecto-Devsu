# Serenity/JS + Playwright (Screenplay) - Siigo (QA Staging)

Automatización **E2E**: Login y **creación de cliente (tercero)** en https://qastaging.siigo.com/#/login  
Stack: **Serenity/JS + Playwright + Mocha + Screenplay**

## 🚀 Pasos para ejecutar (macOS/Windows/Linux)

1) Ingresar al proyecto.
2) Abrir una terminal en la carpeta del proyecto y ejecutar:
```bash
npm install
```
> Esto instalará Playwright automáticamente.

3) Ejecutar las pruebas:
```bash
npm test
```

4) (Opcional) Generar reporte Serenity BDD:
```bash
npm run report
# Reporte HTML en: target/site/serenity/index.html
```


```
src/
  config/
    env.js                 # URL y credenciales
  screenplay/
    support/Actors.js      # Elenco (Cast) con Playwright
    ui/                    # Page Objects (Screenplay UI)
      LoginPage.js
      TopBar.js
      ClientFormPage.js
    tasks/                 # Tareas Screenplay
      OpenTheApp.js
      Login.js
      OpenCreateClient.js
      CreateClient.js
  tests/
    create_client.spec.js  # Escenario E2E
features/
  create_client.feature    # (Opcional) Esqueleto Gherkin
```
