export default function Contact() {
  return (
    <>
      <header class="container header pt-4">
        <h1 class="title text-center">Contact us</h1>
        <div class="container">
          <p>
            Thank you for visiting our website! If you have any questions or
            would like to get in touch with us, please don't hesitate to contact
            us using the form below.
          </p>
          <br />
          <p>
            We are always happy to hear from our customers and value your
            feedback. If you have any comments, suggestions, or concerns, we
            would love to hear from you.
          </p>
          <br />
          <p>
            You can also reach us by phone or email using the contact
            information provided on this page. We look forward to speaking with
            you!
          </p>
          <br />
          <p>
            Thank you for choosing{" "}
            <a
              href="https://norbertbm.com"
              target="_blank"
              className="text-primary"
            >
              Menyhart Media
            </a>
            . We look forward to serving you.
          </p>
          <br />
        </div>
      </header>

      <div className="container mb-2 ">
        <div className="card p-2">
          <div className="card-body">
            <h5 className="card-title">Get in touch</h5>
            <form>
              <div className="form-group">
                <label for="firstName">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  className="form-control"
                  placeholder="Enter your first name"
                />
              </div>
              <div className="form-group">
                <label for="lastName">Last Name</label>
                <input
                  type="lastName"
                  name="lastName"
                  id="lastName"
                  className="form-control"
                  placeholder="Enter your last name"
                />
              </div>
              <div className="form-group">
                <label for="country">Country</label>
                <select id="country" name="country">
                  <option value="australia">Australia</option>
                  <option value="canada">Canada</option>
                  <option value="usa">USA</option>
                </select>
              </div>

              <div className="form-group">
                <label for="subject">Subject</label>
                <textarea
                  id="subject"
                  name="subject"
                  placeholder="Write something.."
                  style={{ width: "100%", height: " 300px", padding: "1rem" }}
                ></textarea>
              </div>
              <div className="form-group">
                <button className="btn btn-primary" type="submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
