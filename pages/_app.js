import '../styles/globals.css'
import Navbar from '../components/Navbar'
import {DataProvider} from '../context/DataContext'

function MyApp({ Component, pageProps }) {
  return (
    <DataProvider>
      <Navbar />
      <Component {...pageProps} />
    </DataProvider>
  )
}

export default MyApp
