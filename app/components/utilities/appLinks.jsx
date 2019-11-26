import FrontPageComponent from '../frontPage/frontPageMain'
import CvComponent from '../curriculumVitae/cvComponentMain'
import SampleAppComponent from '../sampleReactApp01/sampleApp'
import TutorialComponent from '../tutorial/tutorialComponent'

export default function AppLinks() {
  return (
    [
      {
        key: 1,
        path: '/',
        component: FrontPageComponent,
        name: 'Home',
        default: true
      }, {
        key: 2,
        path: '/CV',
        component: CvComponent,
        name: 'My CV'
      }, {
        key: 3,
        path: '/SampleApp',
        component: SampleAppComponent,
        name: 'Sample React App'
      }, {
        key: 4,
        path: '/Tutorial',
        component: TutorialComponent,
        name: 'Tutorial'
      }
    ]
  )
}
