# Lesson 7: Dialogs, Alerts, Confirms & Events

Web browsers have native modal dialogs (`window.alert`, `window.confirm`, `window.prompt`). Unlike HTML popups, these freeze the entire JavaScript execution thread until dismissed!

---

## 1. JavaScript Concept: Events & Callbacks

In JavaScript, code can listen for events that occur at unknown times:
```javascript
// Listener: "When X happens, run this function"
page.on('dialog', dialog => {
  console.log('Dialog opened with message:', dialog.message());
  dialog.accept();
});
```
The arrow function passed to `page.on(...)` is called a **callback function**.

---

## 2. Playwright Dialog Handling

By default, Playwright automatically dismisses (cancels) any dialog so tests don't hang indefinitely.

If you need to accept an alert or provide text to a prompt:
1. Register the dialog listener **BEFORE** triggering the action that causes the dialog:
```javascript
page.once('dialog', async dialog => {
  expect(dialog.message()).toBe('Are you sure?');
  await dialog.accept(); // or dialog.dismiss();
});

// Now click the button that triggers the dialog
await page.getByRole('button', { name: 'Delete' }).click();
```
*(Notice `page.once`: It listens for the event exactly one time!)*
