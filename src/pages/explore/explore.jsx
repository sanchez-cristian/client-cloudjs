import React from 'react'
import { FileExplorer } from '../../components/explore/fileExplorer/fileExplorer.jsx'
import { Details } from '../../components/explore/details/details.jsx'

//styled components
import {
    Parent,
    Separator
} from './style.js'

import { DownloadProvider } from '../../context/downloadContext.js'
import { WorkspaceProvider } from '../../context/workspaceContext.js'
import { LoadingPage } from '../../components/loadingPage/loadingPage.jsx'

export const Explore = () => {
  return (
    <WorkspaceProvider>
      <DownloadProvider>
        <Parent>
          <LoadingPage/>
          <FileExplorer/>
          <Separator></Separator>
          <Details/>
        </Parent>
      </DownloadProvider>
    </WorkspaceProvider>
  )
}
