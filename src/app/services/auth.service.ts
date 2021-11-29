import { Injectable } from '@angular/core';
import { User } from '../shared/user.interface';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire//compat/firestore';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user$: Observable<User>;

  constructor(private afAuth:AngularFireAuth, private afs: AngularFirestore) { 
    this.user$ = this.afAuth.authState.pipe(
      switchMap((user) =>{
        if (user){
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        }
        return of(null);
      })
    );
    
  }



  async register(nombre: string, password: string): Promise<User> {
    try{
      const {user} = await this.afAuth.createUserWithEmailAndPassword(nombre, password);
      await this.sendVerificationEmail();
      return user;
    }
    catch(error){console.log('Error: ', error)}
  }

  async login(nombre: string, password: string): Promise<User> {
    try {
    const { user } = await this.afAuth.signInWithEmailAndPassword(nombre, password);
    this.updateUserData(user);
    return user;
  } catch (error){
    console.log('Error: ', error);
  }
  


  }
  
  
  
  async sendVerificationEmail(): Promise<void>{
    try {
      return (await this.afAuth.currentUser).sendEmailVerification();
    }catch (error) {
      console.log('Error: ',error);
    }
  }

  isEmailVerified(user: User): boolean{
    return user.emailVerified === true ? true : false;
  }



  async logout(): Promise<void> {
    try {
      await this.afAuth.signOut();
    } catch (error) {
      console.log('Error: ', error);
    }
    

  }

  private updateUserData(user:User){
    const userRef:AngularFirestoreDocument<User> =this.afs.doc(`users/${user.uid}`)
    const data:User = {
      uid: user.uid,
      email: user.email,
      emailVerified: user.emailVerified,
      displayName: user.displayName,
    };

    return userRef.set(data, {merge: true});
  }
  

  

}
