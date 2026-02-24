import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { ClerkProvider, useAuth } from '@clerk/clerk-react';
import { ConvexProviderWithClerk } from 'convex/react-clerk';
import { ConvexReactClient } from 'convex/react';
import { BrowserRouter } from 'react-router-dom';

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
const CONVEX_URL = import.meta.env.VITE_CONVEX_URL;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Vite Public Clerk Publishable Key");
}

if (!CONVEX_URL) {
  throw new Error("Missing Vite Public Convex URL");
}

const convex = new ConvexReactClient(CONVEX_URL);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
        <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
          <App />
        </ConvexProviderWithClerk>
      </ClerkProvider>
    </BrowserRouter>
  </StrictMode>,
);
