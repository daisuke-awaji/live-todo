import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { createClient } from '@liveblocks/client';
import { LiveblocksProvider, RoomProvider } from '@liveblocks/react';

const client = createClient({
  publicApiKey: 'pk_live_bQIw3c6uwLWhV8bkXctQ6973',
});

ReactDOM.render(
  <React.StrictMode>
    <LiveblocksProvider client={client}>
      <RoomProvider id="my-room-id">
        <App />
      </RoomProvider>
    </LiveblocksProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
