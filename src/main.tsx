import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { MantineProvider } from '@mantine/core';
import {DevSupport} from "@react-buddy/ide-toolbox";
import {ComponentPreviews} from "./dev";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <MantineProvider withGlobalStyles withNormalizeCSS>
            <DevSupport ComponentPreviews={ComponentPreviews}>
                <App/>
            </DevSupport>
        </MantineProvider>
    </React.StrictMode>
)
