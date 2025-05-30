import React from 'react';
import ProductItem from './ProductItem';
import CartContext from '../Cart/CartContext';
import { BrowserRouter } from 'react-router-dom';
import { describe, expect, it, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';

describe('Suite de tests : ProductItem', () => {
  const mockAddToCart = vi.fn();

  const baseProduct = {
    id: '1',
    name: 'Test Product',
    price: 29.99,
    image: 'image.jpg',
    quantity: 10,
    sold: 0,
    isOutOfStock: false,
  };

  const renderWithProviders = (product = baseProduct) =>
    render(
      <CartContext.Provider value={{ addToCart: mockAddToCart }}>
        <BrowserRouter>
          <ProductItem {...product} />
        </BrowserRouter>
      </CartContext.Provider>
    );

  it('affiche le nom, le prix et l’image', () => {
    renderWithProviders();

    expect(screen.getByText('Test Product')).toBeInTheDocument();
    expect(screen.getByText('29.99 €')).toBeInTheDocument();

    const img = screen.getByAltText('Test Product');
    expect(img.getAttribute('src')).toContain('image.jpg');
    expect(img).toHaveAttribute('alt', baseProduct.name);
  });

  it('affiche le bouton d\'ajout au panier', () => {
    renderWithProviders();
    expect(screen.getByRole('button', { name: /add/i })).toBeInTheDocument();
  });

  it('appelle addToCart quand on clique sur le bouton', () => {
    renderWithProviders();
    const button = screen.getByRole('button', { name: /add/i });
    fireEvent.click(button);
    expect(mockAddToCart).toHaveBeenCalled();
  });

  it('désactive le bouton si le produit est en rupture de stock', () => {
    const outOfStockProduct = { ...baseProduct, isOutOfStock: true };
    renderWithProviders(outOfStockProduct);
    const button = screen.getByRole('button', { name: /add/i });
    expect(button).toBeDisabled();
  });
});