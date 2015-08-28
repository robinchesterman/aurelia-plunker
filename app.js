export class App {
  message = 'hello world';

  // ensure async/await works....
  async activate() {
    let result = await Promise.resolve(null);
  }
}
