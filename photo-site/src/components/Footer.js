
// styled components
import styled from 'styled-components';

// images
import FaceBook from '../images/facebook.svg';
import Instagram from '../images/instagram.svg';
import Linkedin from '../images/linkedin.svg';
import Twitter from '../images/twitter.svg';

const Footer = () => {

    function handleSubmit(e) {
        e.preventDefault()
    }

    function clearForm(){
        document.getElementById('name').value='';
        document.getElementById('email').value='';
        document.getElementById('phone').value='';
        document.getElementById('message').value='';
        }
    return (
        <StyledContact id="contact">
            <h2>Stay Connected</h2>
                <div className="iconContainer" >
                    <a href="https://Instagram.com" target="_blank"><img src={Instagram} alt="" /></a>
                    <a href="https://linkedin.com" target="_blank"><img src={Linkedin} alt="" /></a>
                    <a href="https://facebook.com" target="_blank"><img src={FaceBook} alt="" /></a>
                    <a href="https://twitter.com" target="_blank"><img src={Twitter} alt="" /></a>
                </div>
                <div className="formWrapper"  >
                 <form>
                  <h4>Contact Sal Today!</h4>
                   <label htmlFor="name">Name:
                     <input type="name" id="name" required/>
                   </label>
                   <label htmlFor="email">Email:
                     <input type="email" id="email" required/>
                   </label>
                   <label htmlFor="phone">Phone:
                     <input type="text" id="phone" required/>
                   </label>
                     <textarea type="text" cols="50" rows="10" placeholder="Message here!" id="message" required />
                    <button type="submit" onSubmit={()=>{handleSubmit(); clearForm();}}>Send</button>
                 </form>
                </div>
        </StyledContact>
    )
}

const StyledContact = styled.div`
    height: 40vh;
    display: flex;
    justify-content: space-around;
    background: #141414c1;
    margin-top: 5%;
    border-radius: 20px;
    position: relative;
    h2 {
        position: absolute;
        left: 8%;
        top: 25%;
        color: white;
        letter-spacing: 1px;
    }
    .iconContainer {
        display: flex;
        width: 40%;
        align-items: center;
        img {
            margin: 1.5em;
            cursor: pointer;
        }
    }
    .formWrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 50%;
        justify-content: center;
    }
    form {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    h4 {
        font-size: 1.5em;
        margin-bottom: 12px;
        color: #84577C;
        letter-spacing: 1px;
    }
    label {
        font-size: 1.2em;
        font-weight: 700;
        color: #84577C;
        letter-spacing: 1px;
    }
    input, textarea {
        border-radius: 12px;
        text-align: center;
        margin: 6px;
        background: darkgray;
    }
    input {
        height: 30px;
        letter-spacing: 1px;
    }
    textarea {
        height: 100px;
    }
    button {
        width: 100px;
        margin-top: 5px;
        height: 30px;
        background: #84577C;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        font-size: 1em;
        letter-spacing: 1px;
        font-weight: 700;
        &:hover, &:focus {
            color: black;
            background: white;
        }
    }
`;


export default Footer;