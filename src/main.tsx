import { createTheme, ThemeProvider } from '@mui/material'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import { HashRouter } from 'react-router-dom'
import App from './App.tsx'
import { store } from './Stores/store.ts'

const theme = createTheme({
	palette: {
		primary: {
			main: '#8bc34a' // Основной цвет
		},
		secondary: {
			main: '#ff5722' // Вторичный цвет
		}
	}
})


createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Provider store={store}>
			<HashRouter>
				<ThemeProvider theme={theme}>
					<App />
				</ThemeProvider>
			</HashRouter>
		</Provider>
	</StrictMode>
)
