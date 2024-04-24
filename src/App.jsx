import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Layout } from 'antd'
import { QueryClient, QueryClientProvider } from 'react-query'
import MovieDetails from './components/MovieDetails'
import Home from './components/Home'
import HeaderTop from './components/HeaderTop'
import Footer from './components/Footer'

const { Content } = Layout

const queryClient = new QueryClient()

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Layout className="layout">
          <HeaderTop />
          <Content className="content">
            <div className="site-layout-content">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/movie/:id" element={<MovieDetails />} />
              </Routes>
            </div>
          </Content>
          <Footer />
        </Layout>
      </Router>
    </QueryClientProvider>
  )
}

export default App
