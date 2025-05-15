import React from 'react';

const UserGreeting = ({isLoggedIn=false, username="Guest"}) => {
   const welcomeMessage =  <h2 className='welcome-message'>
                              Welcome {username}
                           </h2>;
   const loginPrompt =  <h2 className='login-prompt'>
                           Please log in to continue
                        </h2>
                        
   return (isLoggedIn ? welcomeMessage : loginPrompt);
};

export default UserGreeting;