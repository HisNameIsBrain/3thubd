# 3THUB-D Component Map

This document outlines the component architecture for the 3THUB-D dashboard, based on the "Cyber-Industrial" visual style.

## 1. Top-Level Layout

### `App.tsx`

The main application component.

- **State:**
  - Manages the overall layout of the application.
- **Children:**
  - `Header`
  - `Main`

## 2. Header Components

### `Header.tsx`

The main header component.

- **Props:**
  - None
- **Children:**
  - `Logo`
  - `WorkspaceTabs`
  - `UserAuthentication`

### `Logo.tsx`

Displays the 3THUB-D logo.

- **Props:**
  - None

### `WorkspaceTabs.tsx`

Displays the workspace tabs (e.g., "Modeling", "Sculpt", "UV", "Shading").

- **Props:**
  - `tabs`: `string[]` - An array of tab names.
  - `activeTab`: `string` - The currently active tab.
  - `onTabChange`: `(tab: string) => void` - A function to handle tab changes.

### `UserAuthentication.tsx`

Handles user authentication and displays the appropriate controls.

- **Props:**
  - None
- **Children:**
  - `SignedIn` (from `@clerk/clerk-react`)
  - `SignedOut` (from `@clerk/clerk-react`)
  - `UserButton` (from `@clerk/clerk-react`)
  - `SignInButton` (from `@clerk/clerk-react`)
  - `SignUpButton` (from `@clerk/clerk-react`)

## 3. Main Workspace Components

### `Main.tsx`

The main workspace component.

- **Props:**
  - None
- **Children:**
  - `Outliner`
  - `Viewport`
  - `Toolbar`
  - `ConvexSyncStatus`

### `Outliner.tsx`

Displays a list of objects in the scene.

- **Props:**
  - `objects`: `{ id: string; name: string; }[]` - An array of objects in the scene.
  - `selectedObject`: `string | null` - The ID of the currently selected object.
  - `onSelectObject`: `(id: string) => void` - A function to handle object selection.

### `Viewport.tsx`

The main 3D viewport.

- **Props:**
  - None
- **Children:**
  - `Canvas` (from `@react-three/fiber`)
  - `OrbitControls` (from `@react-three/drei`)
  - 3D objects

### `Toolbar.tsx`

Displays a toolbar with tools for interacting with the scene.

- **Props:**
  - `onAddObject`: `(type: string) => void` - A function to handle adding new objects to the scene.

### `ConvexSyncStatus.tsx`

Displays the current status of the Convex sync.

- **Props:**
  - `status`: `'syncing' | 'synced' | 'error'` - The current sync status.

This Component Map will guide the development of the 3THUB-D dashboard. Each component will be created as a separate file in the `src/components` directory.
