/* eslint-disable @typescript-eslint/no-unused-vars */
import { Theme } from '@radix-ui/themes';
import './styles/globals.css'
import {
  createHashRouter,
  RouterProvider
} from 'react-router-dom';
import * as pages from './components/Pages'
import { PageWrapper, IndexWrapper } from './components/Templates/wrappers';
import { TooltipProvider } from '@radix-ui/react-tooltip';
import { SidebarWrapper } from './components/Templates/wrappers/SidebarWrapper';

/**
 * Router documentation https://reactrouter.com/en/main/routers/create-hash-router
 */
const router = createHashRouter(Object.entries(pages).map(([path, Element]) => {
  return ({
    ...Element,
    element: path == 'IndexPage' ? <SidebarWrapper><Element /></SidebarWrapper> : <SidebarWrapper><Element /></SidebarWrapper>
  })
}), {
});


function App() {
  return (
    <TooltipProvider>
      <Theme className='flex justify-center' accentColor="crimson" grayColor="sand" radius="large" scaling="100%" style={{width: '100%', overflow: 'hidden'}}>
          <RouterProvider router={router} />
      </Theme>
    </TooltipProvider>
  )
}

export default App