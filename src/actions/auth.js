import { firebase, googleAuthProvider } from '../firebase/firebase';

export const login = (uid) => {
  return {
    type: 'LOGIN',
    uid,
  };
};

export const startLogin = () => {
  return () => {
    return firebase.auth().signInWithPopup(googleAuthProvider);
  };
};

// real thunk
// export const loginRequest = (uid) => {
//   return {
//     type: "LOGIN_REQUEST",
//     payload: {
//       uid,
//     },
//   };
// }

// export const loginSuccess = (user) => {
//   return {
//     type: "LOGIN_SUCCESS",
//     payload: {
//       user,
//     },
//   };
// }

// export const loginError = (error) => {
//   return {
//     type: "LOGIN_ERROR",
//     payload: {
//       error,
//     },
//   };
// }

// export const login = (uid) => (dispatch, getState) => {
//   dispatch(loginRequest(uid));

//   firebase.auth.onAuth((user) => {
//     if (user) {
//       dispatch(loginSuccess(user));
//     } else {
//       dispatch(loginError(uid));
//     }

//     firebase.auth.onAuth.unsubscribe();
//   });
// }

export const logout = () => {
  return {
    type: 'LOGOUT',
  };
};

export const startLogout = () => {
  return () => {
    return firebase.auth().signOut();
  };
};
