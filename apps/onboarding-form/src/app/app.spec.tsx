import { render } from '@testing-library/react';

import App from './app';

describe('App', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App />);

    expect(baseElement).toBeTruthy();
  });

  it('should have a greeting as the title', () => {
    const { queryByText } = render(<App />);

    expect(queryByText(/Welcome onboarding-form/i)).toBeNull();
  });

  it('should render the onboarding form', () => {
    const { queryByRole } = render(<App />);

    const form = queryByRole('form');

    expect(form).toBeTruthy();
  });
});
