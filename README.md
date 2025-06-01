# Multi-Step Form

This project is a modern multi-step form application built with **React** and **TypeScript**. It uses **Vite** as the build tool, and is styled with **Tailwind CSS** and **daisyUI**.

## Features

- **Multi-step form:** The form is divided into three steps – personal data, address, and confirmation.
- **Form validation:** Client-side validation for fields (e.g., email, postal code, minimum character length).
- **User-friendly navigation:** Users can move forward and backward between steps and edit individual fields.
- **Accessibility:** Focus management and ARIA labels for improved accessibility.
- **Modern UI:** Styled with Tailwind CSS and daisyUI components.

## Getting Started

1. **Install dependencies**

    ```
    npm install
    ```

2. **Start development server**

    ```
    npm run dev
    ```

3. **Build for production**

    ```
    npm run build
    ```

4. **Run linter**
    ```
    npm run lint
    ```
5. **Run prettier format**
    ```
    npm run format
    ```

## Key Files

- [`src/App.tsx`](src/App.tsx): Controls the form steps and holds the state.
- [`src/components/MultipartForm/Step1.tsx`](src/components/MultipartForm/Step1.tsx), [`Step2.tsx`](src/components/MultipartForm/Step2.tsx), [`Step3.tsx`](src/components/MultipartForm/Step3.tsx): The individual form steps.
- [`src/utils/validation.ts`](src/utils/validation.ts): Field validation functions.
- [`src/components/types/Interface.types.ts`](src/components/types/Interface.types.ts): Type definitions for component props.

## Technologies

- **React 19**
- **TypeScript**
- **Vite**
- **Tailwind CSS**
- **daisyUI**
