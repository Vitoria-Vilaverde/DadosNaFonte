import { Outlet, useLocation } from 'react-router';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export function RootLayout() {
  const location = useLocation();
  const isBlog = location.pathname.startsWith('/blog');

  return (
    <div className="min-h-screen bg-white">
      <Header isBlog={isBlog} />
      <Outlet />
      <Footer />
    </div>
  );
}
