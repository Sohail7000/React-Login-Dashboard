import React, { useState } from "react";

const Dashboard = (props) => {
  const [url, setUrl] = useState("");
  const [codeRun, setCodeRun] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Code has been successfully run");
    setCodeRun(true);
  };
  return (
    <div className="auth-form-container">
      <h2>Amazon ASN Level Scraper</h2>
      <form className="register-form" onSubmit={handleSubmit}>
        <label htmlFor="url">Enter the URL of the Sheet</label>
        <input
          value={url}
          name="url"
          onChange={(e) => setUrl(e.target.value)}
        />
        <button type="submit">Run the Code!</button>

        {/* Display URL after code is run */}

        {codeRun && (
          <p>
            Please visit the{" "}
            <a href={url} target="_blank" rel="noopener noreferrer">
              URL
            </a>{" "}
            after the code is successfully run.
          </p>
        )}
      </form>
      <button className="link-btn" onClick={() => props.onFormSwitch("login")}>
        Go back to the Login Page!
      </button>
    </div>
  );
};
export default Dashboard;
