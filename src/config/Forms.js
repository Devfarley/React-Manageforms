import React from 'react'

export function CreateAccountForm(){
    return(
        <section>
            <form>
                <label htmlFor="fname">First Name</label>
                <input type="text" name="fname" id="fname" required/>
                <br></br>
                <label htmlFor="lname">Last Name</label>
                <input type="text" name="lname" id="lname" required/>
                <br></br>
                <label hemlFor="email-address">Email Address</label>
                <input type="email" name="email-address" id="email-address" required/>
                <br></br>
                <label htmlFor="phone">Password</label>
                <input type="password" name="phone" id="phone" required/>
                <br></br>
                <input type="submit" value="submit" />
            </form>
        </section>
    );
}

export function LoginForm(){
    return(
        <section>
            <form>
                <label hemlFor="email-address">Email Address</label>
                <input type="email" name="email-address" id="email-address" required/>
                <br></br>
                <label htmlFor="phone">Password</label>
                <input type="password" name="phone" id="phone" required/>
                <br></br>
                <input type="submit" value="submit" />
            </form>
        </section>
    );
}

export function ForgotPassForm(){
    return(
        <section>
            <form>
                <h3>Change password link will be sent to your email.</h3>
                <label hemlFor="email-address">Email Address</label>
                <input type="email" name="email-address" id="email-address" required/>
                <br></br>
                <input type="submit" value="submit" />
            </form>
        </section>
    );
}

