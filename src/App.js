import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='text-center'>
          <p className='text-3xl font-bold mb-10'>Technical Test</p>
          <p className='text-2xl'>Hi, i'm Jonathan Eka Ratmoko</p>
          <p>as Frontend Developer</p>
          <div className='flex-button-content'>
            <button class="before:ease relative h-12 w-40 overflow-hidden border border-blue-500 text-blue-500 shadow-2xl transition-all before:absolute before:top-1/2 before:h-0 before:w-64 before:origin-center before:-translate-x-20 before:rotate-45 before:bg-blue-500 before:duration-300 hover:text-white hover:shadow-blue-500 hover:before:h-64 hover:before:-translate-y-32">
              <span class="relative z-10">Soal 1</span>
            </button>
            <button class="before:ease relative h-12 w-40 overflow-hidden border border-blue-500 text-blue-500 shadow-2xl transition-all before:absolute before:top-1/2 before:h-0 before:w-64 before:origin-center before:-translate-x-20 before:rotate-45 before:bg-blue-500 before:duration-300 hover:text-white hover:shadow-blue-500 hover:before:h-64 hover:before:-translate-y-32">
              <span class="relative z-10">Soal 2</span>
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
