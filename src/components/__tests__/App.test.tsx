import renderer from 'react-test-renderer';
import App from '../../App';
import { FirebaseAppProvider } from 'reactfire';
import { RecoilRoot } from 'recoil';
import { firebaseConfig } from '@config/firebaseConfig';

it('App renders correctly', () => {
  const tree = renderer.create(
    <RecoilRoot>
      <FirebaseAppProvider firebaseConfig={firebaseConfig}>
        <App />
      </FirebaseAppProvider>
    </RecoilRoot>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
