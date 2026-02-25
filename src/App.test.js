import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('App Component', () => {
  test('renders without crashing', () => {
    render(<App />);
  });

  test('renders the main heading', () => {
    render(<App />);
    const heading = screen.getByRole('heading', { name: /^React Hook useState$/i, level: 1 });
    expect(heading).toBeInTheDocument();
  });

  test('renders all user names from the users array', () => {
    render(<App />);
    
    expect(screen.getAllByText(/Xavier Palacín/i).length).toBeGreaterThan(0);
    expect(screen.getByText(/María García/i)).toBeInTheDocument();
    expect(screen.getByText(/Carlos López/i)).toBeInTheDocument();
  });

  test('renders user ages correctly', () => {
    render(<App />);
    
    expect(screen.getByText(/tienes 30 años/i)).toBeInTheDocument();
    expect(screen.getByText(/tienes 25 años/i)).toBeInTheDocument();
    expect(screen.getByText(/tienes 35 años/i)).toBeInTheDocument();
  });

  test('renders user favorite colors', () => {
    render(<App />);
    
    expect(screen.getByText(/tu color favorito es el blue/i)).toBeInTheDocument();
    expect(screen.getByText(/tu color favorito es el red/i)).toBeInTheDocument();
    expect(screen.getByText(/tu color favorito es el green/i)).toBeInTheDocument();
  });

  test('renders three Saludar components for three users', () => {
    render(<App />);
    
    const saludarButtons = screen.getAllByRole('button', { name: /Saludar/i });
    expect(saludarButtons).toHaveLength(3);
  });

  test('renders Correct and Error buttons for each user', () => {
    render(<App />);
    
    const correctButtons = screen.getAllByRole('button', { name: /Correct/i });
    const errorButtons = screen.getAllByRole('button', { name: /Error/i });
    
    expect(correctButtons).toHaveLength(3);
    expect(errorButtons).toHaveLength(3);
  });

  test('renders credits text', () => {
    render(<App />);
    
    const creditsElements = screen.getAllByText(/Créditos: Xavier Palacín/i);
    expect(creditsElements.length).toBeGreaterThan(0);
  });

  test('Saludar button triggers console.log', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    render(<App />);
    
    const saludarButtons = screen.getAllByRole('button', { name: /Saludar/i });
    userEvent.click(saludarButtons[0]);
    
    expect(consoleSpy).toHaveBeenCalledWith(
      expect.stringContaining('¡Hola Xavier Palacín! tienes 30 años')
    );
    
    consoleSpy.mockRestore();
  });
});
