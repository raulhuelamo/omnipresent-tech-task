// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import NxWelcome from './nx-welcome';

export function App() {
  return (
    <>
      <NxWelcome title="onboarding-form" />
      <div />
      <form aria-label="Edit a Project" name="projectForm"></form>
    </>
  );
}

export default App;
