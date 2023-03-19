import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { USER_STATE_CHANGE } from "../constants";
import { doc, getDoc } from "firebase/firestore";

const db = firebase.firestore();

export function fetchUser() {
  return async (dispatch, getState) => {
    try {
      const { currentUser } = getState().user;

      if (!currentUser) {
        // If the user is not authenticated, return early
        return;
      }

      const docRef = doc(db, "users", currentUser.uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        dispatch({ type: USER_STATE_CHANGE, currentUser: docSnap.data() });
      } else {
        console.log("No such document!");
      }
    } catch (error) {
      console.log("Error getting document:", error);
    }
  };
}
