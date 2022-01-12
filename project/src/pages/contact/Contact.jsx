import "./contact.css"

export default function Contact() {
    return (
        <>
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleLg">Contact Me!</span>
            </div>
            <img
                className="headerImg"
                src="https://s27389.pcdn.co/wp-content/uploads/2017/04/AdobeStock_100000042-2.jpeg.optimal.jpeg"
                alt=""
            />
        </div>
        <div className="contactUs">
            <span className="span">Want to get in touch? Fill out the form below to send me a message and I will get back to you as soon as possible!</span>
            <form className="contactUsForm" >
                <label>Name</label>
                <input className="contactUsInput" type="username" placeholder="Name" />
                <label >Email</label>
                <input className="contactUsInput" type="email" placeholder="Email" />
                <label >Phone</label>
                <input className="contactUsInput" type="phonenumber" placeholder="Phone Number" />
                <label >Message</label>
                <input className="contactUsInput" type="message" placeholder="Message" />
                <button className="contactUsButton" type = "submit" >Send</button>
            </form>
        </div>
        </>
    )
}


