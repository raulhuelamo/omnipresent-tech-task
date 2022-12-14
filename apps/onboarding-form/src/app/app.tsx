// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';

export function App() {
  return (
    <form aria-label="Employee Onboarding">
      <select name="country">
        <option>Spain</option>
        <option>Ghana</option>
        <option>Brazil</option>
      </select>

      <label htmlFor="firstName">First Name</label>
      <input aria-label="First name" type="text" name="firstName" />
    </form>
  );
}

export default App;
