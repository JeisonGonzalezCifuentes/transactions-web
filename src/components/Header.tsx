import TenpoLogo from '../assets/tenpo-logo.svg';

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-4">
      <h1 className="text-3xl font-bold text-white">Panel de Cuentas</h1>
      <img
        src={TenpoLogo}
        alt="Tenpo Logo"
        className="w-32 h-auto"
      />
    </div>
  );
};

export default Header;
