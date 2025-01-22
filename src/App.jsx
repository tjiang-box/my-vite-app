import ContentSidebar from 'box-ui-elements/es/elements/content-sidebar'
import ContentPreview from 'box-ui-elements/es/elements/content-preview'

import { TOKEN, FILE_ID, FEATURE_FLAGS } from "./constants";

import './App.scss';

function App() {
  return (
    <>
      <div>V5 React Router DOM</div>
      <div className='elementSection'>
        <ContentSidebar
            token={TOKEN}
            fileId={FILE_ID}
            detailsSidebarProps={{
              hasProperties: true,
              hasNotices: true,
              hasAccessStats: true,
              hasClassification: true,
              hasRetentionPolicy: true,
            }}
            features={FEATURE_FLAGS}
            hasNav
            hasActivityFeed
            hasMetadata
            hasSkills
            hasVersions
          />
      </div>
      <hr />
      <div className='elementSection'>
        <ContentPreview
          features={null}
          token={TOKEN}
          fileId={FILE_ID}
          hasHeader
          contentAnswersProps={{
            show: true,
          }}
          contentSidebarProps={{
            detailsSidebarProps: {
                hasAccessStats: true,
                hasClassification: true,
                hasNotices: true,
                hasProperties: true,
                hasRetentionPolicy: true,
                hasVersions: true,
            },
            features: null,
            hasActivityFeed: true,
            hasMetadata: true,
            hasSkills: true,
            hasVersions: true,
          }}
        />
      </div>
    </>
  )
}

export default App
