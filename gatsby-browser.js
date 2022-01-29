/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it
/*
  Import Tailwind's base styles into the browser.
*/
import './src/styles/tailwind.css';

import React from 'react';
import { ThemeProvider } from './src/context/ThemeContext';

export const wrapRootElement = ({ element }) => <ThemeProvider>{element}</ThemeProvider>;