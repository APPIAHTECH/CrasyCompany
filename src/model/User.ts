/*
  This file contains user definition and implementations
  Author : Stephen Appiah
  Date   : 02/10/2018
*/

export class User{

  protected name : string;
  protected password : string;
  public avatarIcon : string;
  private const empty : any = UNDEFINED
  public const defaultAvatarIcon = "Unicorns.png"

  public User(){
    this.setName(empty);
    this.setPassword(empty);
    this.setAvatarIcon(defaultAvatarIcon)
  }

/* ---------------- Setters And Getters Implementation s------------------------- */

  public setName(){}
  public setPassword(){}
  public setAvatarIcon(){}

  public getName(){}
  public getPassword(){}
  public getAvatarIcon(){}


  /* ----------------Methods Implementations------------------------- */

  /**

    Given a username and a password , it return if user can get access to they account
    Input  : Username : String , Password : String
    Output : Boolean

  */

  public static Login(username:string , password:string){ false }



  /**

    Given a username , email and a password , it return if user can register a new account
    Input  : Username : String , Password : String , Email : String
    Output : Boolean

  */

  public static register(username:string , password:string , email:string){ false }


  /**

    Creates a new empty user model.
    Input  : void
    Output : User object

  */
  private static model(){ return new User() }
}
