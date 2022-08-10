import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

// KEEP THIS FOR NEWSLETTER SUBSCRIPTION
// Configure FirebaseUI.
// export const uiConfig = {
//     callbacks: {
//         signInSuccessWithAuthResult: function(authResult, redirectResult) {
//             return true;
//         },
//     },
//     signInFlow: 'popup',
//     signInSuccessUrl: '/signedIn',
//     signInOptions: [
//       firebase.auth.EmailAuthProvider.PROVIDER_ID,
//     ],
//   };

// export default function LoginPage()
// {
//     return(
//         <div>
//             <h1>My App</h1>
//             <p>Please sign-in:</p>
//             <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
//         </div>
//     );
// }