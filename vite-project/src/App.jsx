import { useState } from 'react';
import { Button } from "@/components/ui/button";
import './index.css';
import './fonts.css';


function App() {
  return (
    <>

      <div className='flex flex-col p-8' style={{ fontFamily: 'Afacad Flux, sans-serif' }}>
        <h3>Buttons</h3>
        <div className='flex gap-4'>
          <Button variant="default" size="lg">Primary</Button>
          <Button variant="secondary" size="lg">Secondary</Button>
          <Button variant="outline" size="lg">Outline</Button>
          <Button variant="text" size="lg">Text</Button>
        </div>
        
      </div>

    </>
  );
}

export default App;
